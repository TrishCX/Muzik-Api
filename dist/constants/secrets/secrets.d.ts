declare function ARTIST_SEARCH(term: string): string;
declare function ARTIST_GET(id: string): string;
declare function ALBUM_GET(id: string): string;
declare function TRACK_SEARCH(query: string, offset: number | 0): string;
declare function VIDEO_SEARCH(query: string): string;
declare function TRACK_SUGGESTION(browseId: string): string;
declare function GENRES_GET(browseId: string): string;
declare function PLAYLIST_GET(browseId?: string): string;
declare function SECTIONS_GET(sectionId: string, offSet?: number): string;
declare function CREDITS(id: string): string;
export declare const END_POINTS: {
    ARTIST_SEARCH: typeof ARTIST_SEARCH;
    ARTIST_GET: typeof ARTIST_GET;
    TRACK_SEARCH: typeof TRACK_SEARCH;
    TRACK_SUGGESTION: typeof TRACK_SUGGESTION;
    GENRES_GET: typeof GENRES_GET;
    ALBUM_GET: typeof ALBUM_GET;
    SECTIONS_GET: typeof SECTIONS_GET;
    CREDITS: typeof CREDITS;
    VIDEO_SEARCH: typeof VIDEO_SEARCH;
    HOME_CONTENT: string[];
    PLAYLIST_GET: typeof PLAYLIST_GET;
    LYRICS_API: string;
    YOUTUBE_SEARCH_SUGGESTIONS: string;
};
export {};
//# sourceMappingURL=secrets.d.ts.map