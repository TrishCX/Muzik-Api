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
exports.RequestExtender = void 0;
const helpers_1 = require("../helpers");
class RequestExtender {
    authorization() {
        return __awaiter(this, void 0, void 0, function* () {
            const { accessToken } = yield (0, helpers_1.getAccessToken)();
            return {
                Authorization: `Bearer ${accessToken}`,
            };
        });
    }
    fetch(props) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = yield fetch(props.url, {
                method: props.method || "GET",
                headers: Object.assign({}, props.auth),
            });
            const response = yield request.json();
            return response;
        });
    }
}
exports.RequestExtender = RequestExtender;
