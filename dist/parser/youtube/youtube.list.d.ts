import type { Playlist } from "../../@types";
export interface IPlaylist {
    title: string;
    videoId: string;
    thumbnailURL: string;
    artists: {
        name: string;
        id?: string;
    }[];
    durationLabel: string;
    durationMilliSeconds: number;
}
export declare function parsePlaylistVideo(body: Playlist): IPlaylist[];
//# sourceMappingURL=youtube.list.d.ts.map