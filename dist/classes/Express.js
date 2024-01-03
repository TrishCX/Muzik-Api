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
const index_1 = require("../config/Session/index");
const index_2 = require("../routers/index");
class Express {
    constructor(app) {
        this.app = app;
        this.listen();
    }
    register() {
        this.registerRoutes();
    }
    registerRoutes() {
        var _a, _b, _c, _d, _e, _f, _g;
        return __awaiter(this, void 0, void 0, function* () {
            (_a = this.app) === null || _a === void 0 ? void 0 : _a.get("/", (request, response) => __awaiter(this, void 0, void 0, function* () {
                return response.status(200).send({
                    message: `There is no implementation for the initial home page. Consider looking for other (API) routes.`,
                    status: response.statusCode,
                });
            }));
            (_b = this.app) === null || _b === void 0 ? void 0 : _b.use("/api/v1", index_2.ArtistRouter);
            (_c = this.app) === null || _c === void 0 ? void 0 : _c.use("/api/v1", index_2.TrackRouter);
            (_d = this.app) === null || _d === void 0 ? void 0 : _d.use("/api/v1", index_2.HomeRouter);
            (_e = this.app) === null || _e === void 0 ? void 0 : _e.use("/api/v1", index_2.ContentRouter);
            (_f = this.app) === null || _f === void 0 ? void 0 : _f.use("/api/v1", index_2.AlbumRouter);
            (_g = this.app) === null || _g === void 0 ? void 0 : _g.use("/api/v1", index_2.PlaylistRouter);
        });
    }
    listen() {
        var _a;
        (_a = this.app) === null || _a === void 0 ? void 0 : _a.listen(index_1.Session.PORT, () => console.log("The server is now up and running."));
    }
}
exports.default = Express;
