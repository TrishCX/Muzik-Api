"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTrackSuggestion = void 0;
function parseTrackSuggestion(body) {
    var _a, _b, _c;
    const item = (_a = body.data.seoRecommended) === null || _a === void 0 ? void 0 : _a.items;
    const array = [];
    for (const response of item) {
        const { data } = response;
        const title = data === null || data === void 0 ? void 0 : data.name;
        const artists = data.artists.items.map((artist) => ({
            id: artist.id,
            name: artist === null || artist === void 0 ? void 0 : artist.profile.name,
        }));
        const id = data === null || data === void 0 ? void 0 : data.id;
        const durationMilliseconds = data === null || data === void 0 ? void 0 : data.duration.totalMilliseconds;
        const coverArt = (_c = (_b = data.albumOfTrack.coverArt) === null || _b === void 0 ? void 0 : _b.sources.at(-1)) === null || _c === void 0 ? void 0 : _c.url;
        const albumId = data === null || data === void 0 ? void 0 : data.albumOfTrack.id;
        const playCount = data === null || data === void 0 ? void 0 : data.playcount;
        array.push({
            title,
            artists,
            id,
            durationMilliseconds,
            coverArt,
            albumId,
            playCount,
        });
    }
    return array;
}
exports.parseTrackSuggestion = parseTrackSuggestion;
