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
exports.getSyncLyrics = void 0;
const index_1 = require("../constants/index");
function getSyncLyrics(trackId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const URL = `${index_1.END_POINTS.LYRICS_API}=${trackId}`;
            const response = yield fetch(URL).then((res) => res.json());
            const lyrics = [];
            response.lines.map((data) => {
                return lyrics.push({
                    text: data === null || data === void 0 ? void 0 : data.words,
                    startTimeMS: data.startTimeMs,
                    endTimeMS: data.endTimeMs,
                });
            });
            return lyrics;
        }
        catch (error) {
            return undefined;
        }
    });
}
exports.getSyncLyrics = getSyncLyrics;
