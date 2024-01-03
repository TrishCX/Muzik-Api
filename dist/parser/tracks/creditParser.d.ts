import { Credits, CreditArtist } from "../../@types";
interface Roles {
    title?: string;
    artists?: CreditArtist[];
}
export interface ICredits {
    title?: string;
    roles?: Roles[];
    sources?: string[];
}
export declare function parseTrackCredits(body: Credits): ICredits;
export {};
//# sourceMappingURL=creditParser.d.ts.map