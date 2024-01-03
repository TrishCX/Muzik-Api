"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YouTubeHomeParser = void 0;
function YouTubeHomeParser(BodyContent) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const { contents, background } = BodyContent;
    const data = (_a = contents === null || contents === void 0 ? void 0 : contents.singleColumnBrowseResultsRenderer) === null || _a === void 0 ? void 0 : _a.tabs;
    const item = data[0];
    const { tabRenderer } = item;
    const content = tabRenderer;
    const sectionContent = content === null || content === void 0 ? void 0 : content.content.sectionListRenderer;
    const sectionList = sectionContent.contents;
    const arrayHome = [];
    for (let { musicCarouselShelfRenderer } of sectionList) {
        const shelf = musicCarouselShelfRenderer;
        const headerContent = shelf === null || shelf === void 0 ? void 0 : shelf.header;
        const headerRuns = headerContent === null || headerContent === void 0 ? void 0 : headerContent.musicCarouselShelfBasicHeaderRenderer;
        const headerTitle = (_b = headerRuns === null || headerRuns === void 0 ? void 0 : headerRuns.title) === null || _b === void 0 ? void 0 : _b.runs[0].text;
        const strapLine = (_d = (_c = headerRuns === null || headerRuns === void 0 ? void 0 : headerRuns.strapline) === null || _c === void 0 ? void 0 : _c.runs[0]) === null || _d === void 0 ? void 0 : _d.text;
        const scraper = shelf === null || shelf === void 0 ? void 0 : shelf.contents;
        arrayHome.push({
            headerTitle: headerTitle === null || headerTitle === void 0 ? void 0 : headerTitle.toString(),
            headerSubtitle: strapLine === null || strapLine === void 0 ? void 0 : strapLine.toString(),
            content: scraper,
        });
    }
    const filtered = arrayHome.filter((v) => v !== undefined);
    const combinedArray = [
        ...filtered[0].content,
        ...filtered[1].content,
    ];
    const homeContent = [];
    for (const response of combinedArray) {
        const data = response === null || response === void 0 ? void 0 : response.musicTwoRowItemRenderer;
        const item = response.musicResponsiveListItemRenderer;
        const title = data === null || data === void 0 ? void 0 : data.title.runs[0].text;
        const subtitle = data === null || data === void 0 ? void 0 : data.subtitle.runs[0].text;
        const id = data === null || data === void 0 ? void 0 : data.navigationEndpoint.browseEndpoint.browseId;
        const formattedID = id === null || id === void 0 ? void 0 : id.replace("VL", "");
        const thumbnailURL = (_j = (_h = (_g = (_f = (_e = data === null || data === void 0 ? void 0 : data.thumbnailRenderer) === null || _e === void 0 ? void 0 : _e.musicThumbnailRenderer) === null || _f === void 0 ? void 0 : _f.thumbnail) === null || _g === void 0 ? void 0 : _g.thumbnails) === null || _h === void 0 ? void 0 : _h.at(-1)) === null || _j === void 0 ? void 0 : _j.url;
        homeContent.push({
            title,
            subtitle,
            id: formattedID,
            thumbnailURL,
        });
    }
    const filteredArray = homeContent.filter((v) => v.title !== undefined);
    const filteredHome = arrayHome.filter((v) => v.headerTitle !== undefined);
    const formation = filteredHome;
}
exports.YouTubeHomeParser = YouTubeHomeParser;
