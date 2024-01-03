"use strict";
// import { getVideoPlaylist } from "./api/index";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// (async () => {})();
const Express_1 = __importDefault(require("./classes/Express"));
const app_1 = __importDefault(require("./app/app"));
const server = new Express_1.default(app_1.default);
server.register();
