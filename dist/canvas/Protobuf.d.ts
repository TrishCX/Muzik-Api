import { Root, Type } from "protobufjs";
declare class Protobuf {
    static root: Root;
    static EntityCanvazRequest: Type;
    static EntityCanvazResponse: Type;
    static encodeRequest(track: string): Uint8Array;
    static decodeResponse(buffer: Uint8Array): import("protobufjs").Message<{}> | undefined;
}
export { Protobuf };
//# sourceMappingURL=Protobuf.d.ts.map