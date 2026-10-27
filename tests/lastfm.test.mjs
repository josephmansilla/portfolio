import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { attachCover, pickWeekTrack } from "../js/lastfm-track.js";

function loadEnv(file) {
  var env = {};
  readFileSync(file, "utf8")
    .split(/\r?\n/)
    .forEach(function (line) {
      var match = line.match(/^\s*([A-Za-z0-9_]+)\s*=\s*(.*)\s*$/);
      if (!match) return;
      var value = match[2].trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      env[match[1]] = value;
    });
  return env;
}

test("pickWeekTrack keeps the largest cover and ignores an empty chart", function () {
  assert.equal(pickWeekTrack(null), null);
  assert.equal(pickWeekTrack({ error: 6, message: "Invalid parameters" }), null);
  assert.equal(pickWeekTrack({ toptracks: { track: [] } }), null);
  assert.deepEqual(
    pickWeekTrack({
      toptracks: {
        track: {
          name: "Curtis",
          url: "https://www.last.fm/music/Babasonicos/_/Curtis",
          artist: { name: "Babasonicos" },
          image: [
            { "#text": "https://example.com/small.jpg", size: "small" },
            { "#text": "", size: "large" },
            { "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png", size: "extralarge" },
          ],
        },
      },
    }),
    {
      name: "Curtis",
      artist: "Babasonicos",
      url: "https://www.last.fm/music/Babasonicos/_/Curtis",
      image: "https://example.com/small.jpg",
    }
  );
});

test("Last.fm api key returns the top track of the last 7 days", async function () {
  var env = loadEnv(new URL("../.env", import.meta.url));
  assert.ok(env.LASTFM_USER, "LASTFM_USER is missing from .env");
  assert.ok(env.LASTFM_API_KEY, "LASTFM_API_KEY is missing from .env");

  var endpoint =
    "https://ws.audioscrobbler.com/2.0/?method=user.getTopTracks" +
    "&user=" + encodeURIComponent(env.LASTFM_USER) +
    "&api_key=" + encodeURIComponent(env.LASTFM_API_KEY) +
    "&period=7day&limit=1&format=json";

  var response = await fetch(endpoint);
  assert.equal(response.ok, true, "Last.fm responded " + response.status);
  var data = await response.json();
  assert.equal(data.error, undefined, data.message || "Last.fm error");

  var track = pickWeekTrack(data);
  assert.ok(track, "response did not include a track");
  assert.equal(typeof track.name, "string");
  assert.ok(track.name.length > 0);
  assert.equal(typeof track.artist, "string");
  assert.ok(track.artist.length > 0);
  assert.equal(typeof track.url, "string");
  assert.ok(track.url.startsWith("https://www.last.fm/"));
  await attachCover(track, env.LASTFM_API_KEY);
  assert.equal(typeof track.image, "string");
  assert.ok(track.image.startsWith("https://"));
  assert.equal(track.image.indexOf("2a96cbd8b46e442fc41c2b86b821562f"), -1);
});
