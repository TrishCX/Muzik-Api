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
exports.home = void 0;
const index_1 = require("../content/index");
const sections_1 = require("../sections");
function home(props) {
    return __awaiter(this, void 0, void 0, function* () {
        const sectionsArray = [];
        const fetches = yield (0, index_1.fetchHomeContent)(props === null || props === void 0 ? void 0 : props.genreId);
        for (const sectionId of fetches.ids) {
            const sections = yield (0, sections_1.fetchSections)(sectionId, props === null || props === void 0 ? void 0 : props.nextOffSet);
            sectionsArray.push(sections);
        }
        return sectionsArray;
    });
}
exports.home = home;
