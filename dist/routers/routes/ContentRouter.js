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
const express_1 = require("express");
const client_1 = require("../../client");
const api_1 = require("../../api");
const ContentRouter = (0, express_1.Router)({
    strict: true,
    caseSensitive: true,
});
ContentRouter.get("/implementation/search-suggestions", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const searchTerm = (_a = request.query.searchTerm) === null || _a === void 0 ? void 0 : _a.toString();
    const suggestions = yield client_1.YoutubeApi.searchSuggestions(searchTerm);
    return response.status(response.statusCode).send({
        status: response.statusCode,
        message: response.statusMessage,
        content: suggestions,
    });
}));
ContentRouter.get("/lyrics-synced/:trackId", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.trackId;
    const lyrics = yield (0, api_1.getSyncLyrics)(id);
    return response.status(200).send({
        lyrics,
        status: 200,
    });
}));
exports.default = ContentRouter;
