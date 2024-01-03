"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaylistRouter = exports.AlbumRouter = exports.ContentRouter = exports.HomeRouter = exports.TrackRouter = exports.ArtistRouter = void 0;
var getArtists_1 = require("./routes/getArtists");
Object.defineProperty(exports, "ArtistRouter", { enumerable: true, get: function () { return __importDefault(getArtists_1).default; } });
var TrackRouter_1 = require("./routes/TrackRouter");
Object.defineProperty(exports, "TrackRouter", { enumerable: true, get: function () { return __importDefault(TrackRouter_1).default; } });
var HomeRouter_1 = require("./routes/HomeRouter");
Object.defineProperty(exports, "HomeRouter", { enumerable: true, get: function () { return __importDefault(HomeRouter_1).default; } });
var ContentRouter_1 = require("./routes/ContentRouter");
Object.defineProperty(exports, "ContentRouter", { enumerable: true, get: function () { return __importDefault(ContentRouter_1).default; } });
var AlbumRouter_1 = require("./routes/AlbumRouter");
Object.defineProperty(exports, "AlbumRouter", { enumerable: true, get: function () { return __importDefault(AlbumRouter_1).default; } });
var PlaylistRouter_1 = require("./routes/PlaylistRouter");
Object.defineProperty(exports, "PlaylistRouter", { enumerable: true, get: function () { return __importDefault(PlaylistRouter_1).default; } });
