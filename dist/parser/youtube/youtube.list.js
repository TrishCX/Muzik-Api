"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePlaylistVideo = void 0;
function parsePlaylistVideo(body) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    const playlistArray = [];
    const { contents } = body;
    const { singleColumnBrowseResultsRenderer } = contents;
    const { tabs } = singleColumnBrowseResultsRenderer;
    const tabList = (_a = tabs[0].tabRenderer.content.sectionListRenderer) === null || _a === void 0 ? void 0 : _a.contents[0];
    const playlistContent = tabList.musicPlaylistShelfRenderer.contents;
    for (const playlist of playlistContent) {
        const list = playlist === null || playlist === void 0 ? void 0 : playlist.musicResponsiveListItemRenderer;
        const flexColumns = (_b = list.flexColumns[0]) === null || _b === void 0 ? void 0 : _b.musicResponsiveListItemFlexColumnRenderer;
        const title = (_d = (_c = flexColumns === null || flexColumns === void 0 ? void 0 : flexColumns.text) === null || _c === void 0 ? void 0 : _c.runs[0]) === null || _d === void 0 ? void 0 : _d.text;
        const videoId = (_f = (_e = flexColumns === null || flexColumns === void 0 ? void 0 : flexColumns.text.runs[0].navigationEndpoint) === null || _e === void 0 ? void 0 : _e.watchEndpoint) === null || _f === void 0 ? void 0 : _f.videoId;
        const thumbnailURL = (_k = (_j = (_h = (_g = list.thumbnail) === null || _g === void 0 ? void 0 : _g.musicThumbnailRenderer.thumbnail) === null || _h === void 0 ? void 0 : _h.thumbnails) === null || _j === void 0 ? void 0 : _j.at(-1)) === null || _k === void 0 ? void 0 : _k.url;
        const artists = listArtists((_m = (_l = list === null || list === void 0 ? void 0 : list.flexColumns[1]) === null || _l === void 0 ? void 0 : _l.musicResponsiveListItemFlexColumnRenderer.text) === null || _m === void 0 ? void 0 : _m.runs);
        const durationLabel = list.fixedColumns[0].musicResponsiveListItemFixedColumnRenderer.text
            .runs[0].text;
        const durationMilliSeconds = parseDuration(durationLabel) * 1000;
        playlistArray.push({
            title,
            videoId,
            thumbnailURL,
            artists,
            durationLabel,
            durationMilliSeconds,
        });
    }
    return playlistArray;
}
exports.parsePlaylistVideo = parsePlaylistVideo;
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
function parseDuration(durationLabel) {
    const durationList = durationLabel.split(":");
    return durationList.length === 3
        ? parseInt(durationList[0], 10) * 3600 +
            parseInt(durationList[1], 10) * 60 +
            parseInt(durationList[2], 10)
        : parseInt(durationList[0], 10) * 60 + parseInt(durationList[1], 10);
}
