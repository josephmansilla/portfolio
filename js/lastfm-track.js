export function artistName(track) {
  var artist = track && track.artist;
  if (!artist) return "";
  if (typeof artist === "string") return artist;
  if (typeof artist.name === "string") return artist.name;
  if (typeof artist["#text"] === "string") return artist["#text"];
  return "";
}

var COVER_SIZES = ["extralarge", "large", "medium", "small"];
var LASTFM_PLACEHOLDER = "2a96cbd8b46e442fc41c2b86b821562f";

export function coverUrl(track) {
  var images = track && track.image;
  if (!Array.isArray(images)) return "";
  var size, i, image, url;
  for (size = 0; size < COVER_SIZES.length; size += 1) {
    for (i = 0; i < images.length; i += 1) {
      image = images[i];
      url = image && image["#text"];
      if (image && image.size === COVER_SIZES[size] && url && url.indexOf(LASTFM_PLACEHOLDER) === -1) {
        return url;
      }
    }
  }
  for (i = images.length - 1; i >= 0; i -= 1) {
    url = images[i] && images[i]["#text"];
    if (url && url.indexOf(LASTFM_PLACEHOLDER) === -1) return url;
  }
  return "";
}

export function pickWeekTrack(data) {
  if (!data || data.error) return null;
  var tracks = data.toptracks && data.toptracks.track;
  var track = Array.isArray(tracks) ? tracks[0] : tracks;
  if (!track || !track.name || !track.url) return null;
  return {
    name: track.name,
    artist: artistName(track),
    url: track.url,
    image: coverUrl(track),
  };
}

export function coverFromInfo(data) {
  var album = data && data.track && data.track.album;
  if (!album) return "";
  return coverUrl(album);
}

export async function attachCover(track, apiKey) {
  if (!track || track.image || !apiKey) return track;
  var endpoint =
    "https://ws.audioscrobbler.com/2.0/?method=track.getInfo" +
    "&artist=" + encodeURIComponent(track.artist) +
    "&track=" + encodeURIComponent(track.name) +
    "&api_key=" + encodeURIComponent(apiKey) +
    "&autocorrect=1&format=json";
  var response = await fetch(endpoint);
  if (!response.ok) return track;
  var image = coverFromInfo(await response.json());
  if (image) track.image = image;
  return track;
}
