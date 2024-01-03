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
exports.searchVideos = void 0;
const index_1 = require("../YoutubeRequest/index");
const constants_1 = require("../constants");
// @parser
const index_2 = require("../parser/index");
function searchVideos(term) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = (yield (0, index_1.makeRequest)(constants_1.END_POINTS.VIDEO_SEARCH(term), {
            params: "EgWKAQIQAWoQEAMQBBAJEAoQBRAREBAQFQ%3D%3D",
            query: term,
        }, "0.1"));
        const parsedTerm = (0, index_2.parseVideo)(response);
        return parsedTerm;
    });
}
exports.searchVideos = searchVideos;
