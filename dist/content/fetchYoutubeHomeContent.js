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
exports.fetchYoutubeHome = void 0;
const YoutubeRequest_1 = require("../YoutubeRequest");
// @parser
const parser_1 = require("../parser");
function fetchYoutubeHome() {
    return __awaiter(this, void 0, void 0, function* () {
        const responsiveBodyContent = (yield (0, YoutubeRequest_1.makeRequest)(`https://music.youtube.com/youtubei/v1/browse?key=AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30&prettyPrint=false`, {
            browseId: "FEmusic_home",
        }));
        const parsedQuery = (0, parser_1.YouTubeHomeParser)(responsiveBodyContent);
    });
}
exports.fetchYoutubeHome = fetchYoutubeHome;
