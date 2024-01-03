export interface Lyrics {
    text?: string;
    startTimeMS?: string | number;
    endTimeMS?: string | number;
}
export declare function getSyncLyrics(trackId: string): Promise<Lyrics[] | undefined>;
//# sourceMappingURL=getSyncLyrics.d.ts.map