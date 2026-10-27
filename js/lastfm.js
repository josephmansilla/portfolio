import { attachCover, pickWeekTrack } from "./lastfm-track.js?v=2";

var TEMPLATE = {
  name: "3D Country",
  artist: "Geese",
  url: "https://www.last.fm/music/Geese/_/3D+Country",
};

function paint(root, track) {
  var link = root.querySelector("[data-lastfm-link]");
  var trackEl = root.querySelector("[data-lastfm-track]");
  var artistEl = root.querySelector("[data-lastfm-artist]");
  var cover = root.querySelector("[data-lastfm-cover]");
  var art = root.querySelector(".week-track-art");
  if (!link || !trackEl || !artistEl || !track) return;
  trackEl.textContent = track.name;
  artistEl.textContent = track.artist;
  link.href = track.url;
  if (cover) {
    if (track.image) {
      cover.hidden = false;
      if (art) art.hidden = false;
      cover.onerror = function () {
        cover.hidden = true;
        if (art) art.hidden = true;
      };
      cover.src = track.image;
    } else {
      cover.removeAttribute("src");
      cover.hidden = true;
      if (art) art.hidden = true;
    }
  }
  root.hidden = false;
}

async function liveTrack() {
  var config;
  try {
    config = await import("./lastfm.config.js");
  } catch (e) {
    return null;
  }
  if (!config.LASTFM_USER || !config.LASTFM_API_KEY) return null;

  var endpoint =
    "https://ws.audioscrobbler.com/2.0/?method=user.getTopTracks" +
    "&user=" + encodeURIComponent(config.LASTFM_USER) +
    "&api_key=" + encodeURIComponent(config.LASTFM_API_KEY) +
    "&period=7day&limit=1&format=json";

  var response = await fetch(endpoint);
  if (!response.ok) return null;
  var track = pickWeekTrack(await response.json());
  if (!track) return null;
  return attachCover(track, config.LASTFM_API_KEY);
}

function start() {
  var root = document.querySelector("[data-lastfm]");
  if (!root) return;
  paint(root, TEMPLATE);
  liveTrack()
    .then(function (track) {
      if (track) paint(root, track);
    })
    .catch(function () {});
}

if (typeof document !== "undefined") start();
