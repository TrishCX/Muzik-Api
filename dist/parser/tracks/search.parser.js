"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchTracksParser = void 0;
const index_1 = require("../../helpers/index");
function searchTracksParser(body) {
    var _a, _b;
    const item = (_a = body.data) === null || _a === void 0 ? void 0 : _a.searchV2.tracksV2;
    const nextOffSet = item === null || item === void 0 ? void 0 : item.pagingInfo.nextOffset;
    const array = [];
    for (var song of item.items) {
        const selectedSong = song.item.data;
        const coverArt = (_b = selectedSong.albumOfTrack.coverArt.sources.at(-1)) === null || _b === void 0 ? void 0 : _b.url;
        const title = selectedSong.name;
        const id = selectedSong.id;
        const durationInMS = selectedSong.duration.totalMilliseconds;
        const artists = selectedSong.artists.items.map((artist) => {
            var _a;
            return ({
                name: (_a = artist.profile) === null || _a === void 0 ? void 0 : _a.name,
                id: (0, index_1.parseArtistId)(artist.uri),
            });
        });
        const album = selectedSong.albumOfTrack;
        array.push({
            coverArt,
            title,
            id,
            durationInMS,
            album,
            nextOffSet,
            artists: artists,
        });
    }
    return array;
}
exports.searchTracksParser = searchTracksParser;
