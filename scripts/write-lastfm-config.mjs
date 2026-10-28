import { existsSync, readFileSync, writeFileSync } from "node:fs";

function loadEnvFile(file) {
  if (!existsSync(file)) return;
  readFileSync(file, "utf8")
    .split(/\r?\n/)
    .forEach(function (line) {
      var match = line.match(/^\s*([A-Za-z0-9_]+)\s*=\s*(.*)\s*$/);
      if (!match || process.env[match[1]]) return;
      var value = match[2].trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      process.env[match[1]] = value;
    });
}

loadEnvFile(new URL("../.env", import.meta.url));

var user = process.env.LASTFM_USER || "";
var key = process.env.LASTFM_API_KEY || "";

if (!user || !key) {
  console.error("Faltan LASTFM_USER y LASTFM_API_KEY.");
  process.exit(1);
}

writeFileSync(
  new URL("../js/lastfm.config.js", import.meta.url),
  "export var LASTFM_USER = " + JSON.stringify(user) + ";\n" +
    "export var LASTFM_API_KEY = " + JSON.stringify(key) + ";\n"
);
