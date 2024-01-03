"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseVideo = void 0;
function parseVideo(body) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    const searchTracks = [];
    const { contents } = body;
    const items = (_h = (_g = (_f = (_e = (_d = (_c = (_b = (_a = contents === null || contents === void 0 ? void 0 : contents.tabbedSearchResultsRenderer) === null || _a === void 0 ? void 0 : _a.tabs[0]) === null || _b === void 0 ? void 0 : _b.tabRenderer) === null || _c === void 0 ? void 0 : _c.content) === null || _d === void 0 ? void 0 : _d.sectionListRenderer) === null || _e === void 0 ? void 0 : _e.contents) === null || _f === void 0 ? void 0 : _f.pop()) === null || _g === void 0 ? void 0 : _g.musicShelfRenderer) === null || _h === void 0 ? void 0 : _h.contents;
    for (const result of items) {
        const flexColumns = result.musicResponsiveListItemRenderer.flexColumns[0];
        const artistsColumns = result.musicResponsiveListItemRenderer.flexColumns[1];
        const title = flexColumns.musicResponsiveListItemFlexColumnRenderer.text.runs[0].text;
        const videoId = (_l = (_k = (_j = flexColumns === null || flexColumns === void 0 ? void 0 : flexColumns.musicResponsiveListItemFlexColumnRenderer.text.runs[0]) === null || _j === void 0 ? void 0 : _j.navigationEndpoint) === null || _k === void 0 ? void 0 : _k.watchEndpoint) === null || _l === void 0 ? void 0 : _l.videoId.toString();
        const thumbnailURL = (_o = (_m = result.musicResponsiveListItemRenderer.thumbnail) === null || _m === void 0 ? void 0 : _m.musicThumbnailRenderer.thumbnail.thumbnails.pop()) === null || _o === void 0 ? void 0 : _o.url;
        const artists = listArtists(artistsColumns.musicResponsiveListItemFlexColumnRenderer.text.runs);
        searchTracks.push({ title, thumbnailURL, artists, videoId });
    }
    return searchTracks;
}
exports.parseVideo = parseVideo;
function listArtists(data) {
    const artists = [];
    data.forEach((item) => {
        if (item.navigationEndpoint &&
            item.navigationEndpoint.browseEndpoint
                .browseEndpointContextSupportedConfigs.browseEndpointContextMusicConfig
                .pageType === "MUSIC_PAGE_TYPE_ARTIST") {
            artists.push({
                name: item.text,
                id: item.navigationEndpoint.browseEndpoint.browseId,
            });
        }
    });
    if (artists.length === 0) {
        const delimiterIndex = data.findIndex((item) => item.text === " • ");
        if (delimiterIndex !== -1) {
            data
                .filter((item, index) => index < delimiterIndex && item.name !== " & ")
                .forEach((item) => artists.push({ name: item.text }));
        }
    }
    return artists;
}
