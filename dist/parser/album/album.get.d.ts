import { GetAlbum } from "../../@types";
interface Artists {
    name: string;
    id: string;
    image: string;
}
interface TrackArtists {
    name: string;
    id: string;
}
interface CopyRights {
    type: string;
    text?: string;
}
interface Tracks {
    name?: string;
    id?: string;
    durationMilliSeconds?: number;
    artists?: TrackArtists[];
    trackNumber?: number;
}
export interface IAlbum {
    name: string;
    artists: Artists[];
    date: string;
    image: string;
    copyrights: CopyRights[];
    tracks: Tracks[];
    type: string;
}
export declare function parseAlbum(body: GetAlbum): IAlbum;
export {};
//# sourceMappingURL=album.get.d.ts.map