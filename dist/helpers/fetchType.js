"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchType = void 0;
function fetchType(uri) {
    if (uri.includes("spotify:playlist"))
        return "playlist";
    if (uri.includes("spotify:section"))
        return "section";
    if (uri.includes("spotify:album"))
        return "album";
    else
        return "track";
}
exports.fetchType = fetchType;
