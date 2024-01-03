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
const HomeRouter = (0, express_1.Router)({
    strict: true,
    caseSensitive: true,
});
HomeRouter.get("/home-content/:genreId", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const offSet = Number((_b = (_a = request === null || request === void 0 ? void 0 : request.query) === null || _a === void 0 ? void 0 : _a.offSet) === null || _b === void 0 ? void 0 : _b.toString());
    const data = offSet
        ? yield (0, index_1.home)({ genreId: request.params.genreId, nextOffSet: offSet })
        : yield (0, index_1.home)({ genreId: request.params.genreId, nextOffSet: 0 });
    return response.status(200).send({
        content: data,
        message: "success",
    });
}));
HomeRouter.get("/home/platform/youtube", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, index_1.YouTubeHome)();
    return response.status(200).send({
        content: res,
        message: "success",
    });
}));
exports.default = HomeRouter;
