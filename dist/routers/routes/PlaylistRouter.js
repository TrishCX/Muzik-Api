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
const api_1 = require("../../api");
const PlaylistRouter = (0, express_1.Router)();
PlaylistRouter.get("/playlist/fetch/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const data = yield (0, api_1.getVideoPlaylist)(id);
    const logic = !data.length
        ? {
            error: true,
            message: "Playlist not found",
            code: 404,
        }
        : {
            success: true,
            message: "Playlist found",
            data: data,
            code: response.statusCode,
        };
    return response.status(200).send(Object.assign({}, logic));
}));
exports.default = PlaylistRouter;
