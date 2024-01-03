import { type SearchTracks } from "../../@types";
export interface ISong {
    coverArt: string;
    title: string;
    id: string;
    durationInMS: number;
    artists: {
        name?: string;
        id?: string | null;
    }[];
    album: any;
    nextOffSet: number;
}
export declare function searchTracksParser(body: SearchTracks): ISong[];
//# sourceMappingURL=search.parser.d.ts.map