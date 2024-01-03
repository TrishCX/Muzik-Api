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
exports.fetchCanvas = void 0;
const client_1 = require("./client");
const helpers_1 = require("../helpers");
function fetchCanvas(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const { accessToken } = yield (0, helpers_1.getAccessToken)();
        const client = yield client_1.SPClient.create(accessToken);
        const result = yield client.postCanvasRequest(`spotify:track:${id}`);
        if (result.canvases && result.canvases.length > 0 && result.canvases[0].url) {
            return result.canvases[0].url;
        }
        else {
            return undefined;
        }
    });
}
exports.fetchCanvas = fetchCanvas;
