"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePlaylistId = void 0;
function parsePlaylistId(spotifyURI) {
    const regexPattern = /spotify:playlist:(\w+)/;
    const match = regexPattern.exec(spotifyURI);
    if (match && match[1]) {
        const playlistId = match[1];
        return playlistId;
    }
    else {
        return undefined || null;
    }
}
exports.parsePlaylistId = parsePlaylistId;
