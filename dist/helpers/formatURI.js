"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatURI = void 0;
const spotify_uri_1 = require("spotify-uri");
function formatURI(uri) {
    if (uri.includes("spotify:playliist") ||
        uri.includes("spotify:section") ||
        uri.includes("spotify:album")) {
        return undefined;
    }
    else {
        return (0, spotify_uri_1.parse)(uri).id;
    }
}
exports.formatURI = formatURI;
