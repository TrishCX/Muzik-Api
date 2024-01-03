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
exports.YoutubeClient = void 0;
const YoutubeRequest_1 = require("../YoutubeRequest");
const constants_1 = require("../constants");
class YoutubeClient {
    searchSuggestions(query) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, YoutubeRequest_1.makeRequest)(constants_1.END_POINTS.YOUTUBE_SEARCH_SUGGESTIONS, {
                input: query,
            });
            const queries = [];
            (_c = (_b = (_a = response.contents[0]) === null || _a === void 0 ? void 0 : _a.searchSuggestionsSectionRenderer) === null || _b === void 0 ? void 0 : _b.contents) === null || _c === void 0 ? void 0 : _c.map((response) => {
                var _a, _b;
                const parsedQuery = response.searchSuggestionRenderer;
                const searchEndPoint = (_b = (_a = parsedQuery.navigationEndpoint) === null || _a === void 0 ? void 0 : _a.searchEndpoint) === null || _b === void 0 ? void 0 : _b.query;
                queries.push(searchEndPoint);
            });
            return queries;
        });
    }
}
exports.YoutubeClient = YoutubeClient;
