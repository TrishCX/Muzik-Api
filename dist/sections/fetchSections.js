"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchSections = void 0;
const request_1 = require("../request");
const constants_1 = require("../constants");
const spotify_uri_1 = require("spotify-uri");
const helpers_1 = require("../helpers");
function fetchSections(id, offSet) {
    var _a, _b, _c, _d, _e, _f, _g;
    return __awaiter(this, void 0, void 0, function* () {
        const array = [];
        const response = yield request_1.request.get(`${constants_1.END_POINTS.SECTIONS_GET(id, offSet)}`);
        const data = response;
        const parse = (_a = data.data) === null || _a === void 0 ? void 0 : _a.browseSection;
        const sectionList = (_b = parse === null || parse === void 0 ? void 0 : parse.sectionItems) === null || _b === void 0 ? void 0 : _b.items;
        const nextOffSet = parse.sectionItems.pagingInfo.nextOffset;
        let title;
        for (const item of sectionList) {
            const { content } = item;
            const initialData = content === null || content === void 0 ? void 0 : content.data;
            const __item = initialData;
            title = (_f = (_e = (_d = (_c = data.data) === null || _c === void 0 ? void 0 : _c.browseSection) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.title) === null || _f === void 0 ? void 0 : _f.transformedLabel;
            array.push({
                name: __item === null || __item === void 0 ? void 0 : __item.name,
                description: __item === null || __item === void 0 ? void 0 : __item.description,
                artists: ((_g = __item === null || __item === void 0 ? void 0 : __item.artists) === null || _g === void 0 ? void 0 : _g.items.map((artist) => {
                    var _a;
                    return ({
                        name: (_a = artist.profile) === null || _a === void 0 ? void 0 : _a.name,
                        id: (0, spotify_uri_1.parse)(artist.uri).id,
                    });
                })) || undefined,
                id: (0, helpers_1.formatURI)(__item === null || __item === void 0 ? void 0 : __item.uri),
                type: (0, helpers_1.fetchType)(__item === null || __item === void 0 ? void 0 : __item.uri),
                image: (0, helpers_1.formatAssets)(__item),
            });
        }
        return {
            title: title,
            content: array,
            nextOffSet,
        };
    });
}
exports.fetchSections = fetchSections;
