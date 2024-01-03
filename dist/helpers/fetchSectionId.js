"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSectionId = void 0;
function parseSectionId(spotifyString) {
    const regexPattern = /spotify:section:(\w+)/;
    const match = regexPattern.exec(spotifyString);
    if (match && match[1]) {
        const sectionId = match[1];
        return sectionId;
    }
    else {
        return undefined || null;
    }
}
exports.parseSectionId = parseSectionId;
