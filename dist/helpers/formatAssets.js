"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatAssets = void 0;
function formatAssets(item) {
    var _a, _b, _c;
    if (!(item === null || item === void 0 ? void 0 : item.coverArt)) {
        return (_b = (_a = item.images) === null || _a === void 0 ? void 0 : _a.items[0].sources.at(-1)) === null || _b === void 0 ? void 0 : _b.url;
    }
    else {
        return (_c = item.coverArt.sources.at(-1)) === null || _c === void 0 ? void 0 : _c.url;
    }
}
exports.formatAssets = formatAssets;
