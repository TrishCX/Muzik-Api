"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./searchArtist"), exports);
__exportStar(require("./getArtist"), exports);
__exportStar(require("./canvas"), exports);
__exportStar(require("./home"), exports);
__exportStar(require("./getSyncLyrics"), exports);
__exportStar(require("./searchTracks"), exports);
__exportStar(require("./home.youtube"), exports);
__exportStar(require("./getSongSuggestion"), exports);
__exportStar(require("./getAlbum"), exports);
__exportStar(require("./getCredits"), exports);
__exportStar(require("./searchVideos"), exports);
__exportStar(require("./getVideoPlaylist"), exports);