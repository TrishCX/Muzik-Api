import type { Videos } from "../../@types";
export interface IVideos {
    title: string;
    thumbnailURL: string;
    artists: {
        name: string;
        id?: string;
    }[];
    videoId: string;
}
export declare function parseVideo(body: Videos): IVideos[];
//# sourceMappingURL=youtube.videos.d.ts.map