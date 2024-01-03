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
const index_1 = require("../../api/index");
// @api
const index_2 = require("../../api/index");
const TrackRouter = (0, express_1.Router)({
    strict: true,
    caseSensitive: true,
});
TrackRouter.get("/canvas/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = yield (0, index_1.canvas)(id);
    return res.status(200).send({
        canvas: data,
    });
}));
TrackRouter.get("/track/suggestion/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const data = yield (0, index_1.getSongSuggestion)(id);
    return response.status(200).send({
        data: data,
    });
}));
TrackRouter.get("/track/credits/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const data = yield (0, index_1.getCredits)(id);
    return response.status(200).send({
        data: data,
    });
}));
TrackRouter.get("/search/tracks", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const query = (_a = request.query) === null || _a === void 0 ? void 0 : _a.query;
    const offset = Number((_b = request.query) === null || _b === void 0 ? void 0 : _b.offset) || 0;
    const parseSearchResults = yield (0, index_2.searchTracks)(query, offset);
    return response.status(200).send({
        tracks: parseSearchResults,
    });
}));
TrackRouter.get("/search/tracks/videos", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d;
    const platform = (_c = request.query) === null || _c === void 0 ? void 0 : _c.platform;
    const query = (_d = request.query) === null || _d === void 0 ? void 0 : _d.query;
    const data = yield (0, index_2.searchVideos)(query);
    return response.status(200).send({
        data: data,
    });
}));
exports.default = TrackRouter;
