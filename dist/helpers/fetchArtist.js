"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseArtistId = void 0;
function parseArtistId(artistURI) {
    const regexPattern = /spotify:artist:(\w+)/;
    const match = regexPattern.exec(artistURI);
    if (match && match[1]) {
        const artistId = match[1];
        return artistId;
    }
    else {
        return undefined || null;
    }
}
exports.parseArtistId = parseArtistId;
