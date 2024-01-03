"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseId = void 0;
const spotify_uri_1 = require("spotify-uri");
function parseId(uri) {
    return (0, spotify_uri_1.parse)(uri).id;
}
exports.parseId = parseId;
