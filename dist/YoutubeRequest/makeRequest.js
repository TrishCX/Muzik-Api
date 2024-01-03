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
exports.makeRequest = void 0;
const context_1 = require("../context");
function makeRequest(url, body, version) {
    return __awaiter(this, void 0, void 0, function* () {
        const context = (0, context_1.makeContext)({
            clientName: "WEB_REMIX",
            clientVersion: version === null || version === void 0 ? void 0 : version.toString(),
        });
        const req = yield fetch(url, {
            body: JSON.stringify(Object.assign(Object.assign({}, context), body)),
            method: "POST",
            headers: {
                "User-Agent": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
                origin: "https://music.youtube.com",
            },
        });
        const res = yield req.json();
        return res;
    });
}
exports.makeRequest = makeRequest;
