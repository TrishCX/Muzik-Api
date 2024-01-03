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
const ArtistRouter = (0, express_1.Router)();
ArtistRouter.get("/search/artists", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const term = (_a = request.query) === null || _a === void 0 ? void 0 : _a.term;
    const res = yield (0, index_1.searchArtist)(term);
    return response.status(200).send({
        res,
    });
}));
ArtistRouter.get("/get/artist/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.id;
    const res = yield (0, index_1.getArtist)(id);
    return response.status(200).send({
        data: res,
    });
}));
exports.default = ArtistRouter;
