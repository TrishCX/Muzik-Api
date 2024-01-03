"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.artistSearchParser = void 0;
const index_1 = require("../../helpers/index");
function artistSearchParser(body) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const { data } = body;
    const items = data.searchV2.artists.items;
    const array = [];
    for (const response of items) {
        const visuals = (_c = (_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.visuals.avatarImage) === null || _b === void 0 ? void 0 : _b.sources.at(-1)) === null || _c === void 0 ? void 0 : _c.url.toString();
        if (!visuals)
            continue;
        const name = response.data.profile.name.toString();
        const verified = response.data.profile.verified;
        const color = ((_h = (_g = (_f = (_e = (_d = response === null || response === void 0 ? void 0 : response.data) === null || _d === void 0 ? void 0 : _d.visuals) === null || _e === void 0 ? void 0 : _e.avatarImage) === null || _f === void 0 ? void 0 : _f.extractedColors) === null || _g === void 0 ? void 0 : _g.colorDark) === null || _h === void 0 ? void 0 : _h.hex) ||
            undefined;
        const id = (0, index_1.parseId)(response.data.uri);
        array.push({ id, name, avatar: visuals, color, verified });
    }
    return array;
}
exports.artistSearchParser = artistSearchParser;
