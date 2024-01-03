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
exports.SPClient = void 0;
const Protobuf_1 = require("./Protobuf");
const LOGGING = false;
const log = LOGGING ? console.log : () => { };
class SPClient {
    constructor() {
        this.spLocations = fetch("https://apresolve.spotify.com/?type=spclient")
            .then((res) => res.json())
            .then((res) => res.spclient)
            .catch((err) => {
            log("[Canvas/SPClient] Error while fetching spotify client!");
            log(err);
        });
    }
    /*
     * Helper that auto-initializes
     */
    static create(token) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!token) {
                throw new Error("Must pass Spotify access token to .create(<token>)");
            }
            const spClient = new SPClient();
            spClient.setToken(token);
            return yield spClient.init();
        });
    }
    /*
     * Must be called before any fetch requests! Resolves the server URLs
     */
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.spLocationsResolved = yield this.spLocations;
            return this;
        });
    }
    /*
     * Retrieve a server URL from the list
     */
    getSpLocation() {
        const randArray = (array) => {
            return array[Math.floor(Math.random() * array.length)];
        };
        return randArray(this.spLocationsResolved);
    }
    setToken(token) {
        this.token = token;
    }
    getToken() {
        return this.token;
    }
    /*
     * Send the request as raw binary data so protobuf works properly
     */
    fetchProtobufAuthRaw(urlExt, method, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = yield fetch("https://" + this.getSpLocation() + urlExt, {
                method: method,
                headers: {
                    Authorization: `Bearer ${this.getToken()}`,
                    "Content-Type": "application/x-protobuf",
                },
                body: body,
            });
            const buffer = yield request.arrayBuffer();
            return buffer;
        });
    }
    /*
     * Pretty protobuf wrapper
     */
    postCanvasRequest(track) {
        return this.fetchProtobufAuthRaw("/canvaz-cache/v0/canvases", "POST", Protobuf_1.Protobuf.encodeRequest(track))
            .then((res) => {
            log("[Canvas/SPClient] Request response (raw):");
            log(res);
            return Protobuf_1.Protobuf.decodeResponse(new Uint8Array(res));
        })
            .then((res) => {
            var _a;
            if (res === undefined ||
                !(res === null || res === void 0 ? void 0 : res.canvases) ||
                ((_a = res.canvases) === null || _a === void 0 ? void 0 : _a.length) === undefined) {
                return { canvases: [] };
            }
            return res;
        });
    }
}
exports.SPClient = SPClient;
