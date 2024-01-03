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
exports.searchTracks = void 0;
const constants_1 = require("../constants");
const request_1 = require("../request");
const parser_1 = require("../parser");
function searchTracks(term, offset) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = (yield request_1.request.get(constants_1.END_POINTS.TRACK_SEARCH(term, offset)));
        const entries = (0, parser_1.searchTracksParser)(response);
        return entries;
    });
}
exports.searchTracks = searchTracks;
