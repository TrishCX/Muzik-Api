"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAlbum = void 0;
const _types_1 = require("../../@types");
const spotify_uri_1 = require("spotify-uri");
const index_1 = require("../../helpers/index");
function parseAlbum(body) {
    var _a, _b, _c, _d, _e;
    const tracksArray = [];
    const data = body.data;
    const album = data === null || data === void 0 ? void 0 : data.albumUnion;
    const name = album === null || album === void 0 ? void 0 : album.name;
    const artists = (_a = album === null || album === void 0 ? void 0 : album.artists) === null || _a === void 0 ? void 0 : _a.items.map((a) => {
        var _a, _b;
        return ({
            name: a === null || a === void 0 ? void 0 : a.profile.name,
            id: a.id,
            image: (_b = (_a = a.visuals.avatarImage.sources) === null || _a === void 0 ? void 0 : _a.at(-1)) === null || _b === void 0 ? void 0 : _b.url,
        });
    });
    const date = new Date((_b = album === null || album === void 0 ? void 0 : album.date) === null || _b === void 0 ? void 0 : _b.isoString).toLocaleDateString();
    const image = (_d = (_c = album === null || album === void 0 ? void 0 : album.coverArt) === null || _c === void 0 ? void 0 : _c.sources[0]) === null || _d === void 0 ? void 0 : _d.url;
    const tracks = album.tracks.items;
    const type = album.type;
    const copyrights = album.copyright.items.filter(({ type }) => type === _types_1.CopyRight.C);
    for (const { track } of tracks) {
        tracksArray.push({
            name: track.name,
            id: (0, spotify_uri_1.parse)(track.uri).id,
            durationMilliSeconds: (_e = track.duration) === null || _e === void 0 ? void 0 : _e.totalMilliseconds,
            artists: track.artists.items.map((s) => ({
                name: s.profile.name,
                id: (0, index_1.parseArtistId)(s.uri),
            })),
            trackNumber: track.trackNumber,
        });
    }
    return {
        name,
        artists: artists,
        copyrights,
        date,
        image,
        tracks: tracksArray,
        type,
    };
}
exports.parseAlbum = parseAlbum;
