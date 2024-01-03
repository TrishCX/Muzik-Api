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
exports.getVideoPlaylist = void 0;
const constants_1 = require("../constants");
const YoutubeRequest_1 = require("../YoutubeRequest");
// @parser
const index_1 = require("../parser/index");
function getVideoPlaylist(playlistId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = (yield (0, YoutubeRequest_1.makeRequest)(constants_1.END_POINTS.PLAYLIST_GET(playlistId), {
                browseId: `VL${playlistId}`,
            }, "0.1"));
            const parsedQuery = (0, index_1.parsePlaylistVideo)(response);
            return parsedQuery;
        }
        catch (error) {
            return [];
        }
    });
}
exports.getVideoPlaylist = getVideoPlaylist;
