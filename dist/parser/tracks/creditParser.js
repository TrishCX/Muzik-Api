"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTrackCredits = void 0;
function parseTrackCredits(body) {
    const array = [];
    const data = body;
    const sources = data.sourceNames;
    const title = data.trackTitle;
    for (const item of data.roleCredits) {
        array.push({
            title: item.roleTitle,
            artists: item.artists,
        });
    }
    return {
        title,
        sources,
        roles: array,
    };
}
exports.parseTrackCredits = parseTrackCredits;
