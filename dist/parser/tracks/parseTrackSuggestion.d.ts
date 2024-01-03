import { TrackSuggestion } from "../../@types";
export interface ISuggestions {
    title?: string;
    id?: string;
    durationMilliseconds?: number;
    coverArt?: string;
    albumId?: string;
    playCount?: number | string;
    artists?: {
        id: string;
        name: string;
    }[];
}
export declare function parseTrackSuggestion(body: TrackSuggestion): ISuggestions[];
//# sourceMappingURL=parseTrackSuggestion.d.ts.map