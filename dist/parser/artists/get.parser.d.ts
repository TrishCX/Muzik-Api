import type { GetArtist } from "../../@types/index";
export interface Tracks {
    title?: string;
    artists?: {
        uri?: string;
        profile?: {
            name?: string;
        };
    }[];
    duration?: string;
    durationInMS?: number;
    id?: string;
    playCount?: string;
}
export interface Albums {
    id: string;
    title: string;
    songsCount: number;
    copyright: string[];
    coverArt?: string;
    date: any;
    label: string;
    uri: string;
}
export interface TopCities {
    city?: string | undefined;
    country?: string | undefined;
    region?: string | undefined;
    totalListeners?: number | undefined;
}
export interface Appears {
    title: string;
    year: number;
    coverArt?: string;
    id: string;
    artists: {
        uri?: string;
        profile?: {
            name?: string;
        };
    }[];
}
export declare function artistGetParser(body: GetArtist): {
    name: string;
    biography: string;
    header: string | undefined;
    verified: boolean;
    gallery: (string | undefined)[];
    image: string | undefined;
    topTracks: Tracks[];
    albums: Albums[];
    popularAlbums: Albums[];
    singlesTotalCount: number;
    singles: Albums[];
    albumCount: number;
    listeners: number;
    appearsOnCount: number;
    topCities: TopCities[];
    appearsOn: Appears[];
    worldRank: number;
    compilations: Albums[];
    compilationsCount: number;
    latest: import("../../@types/Artists/GetArtist").Latest;
    relatedArtists: any[];
    relatedArtistsCount: number;
};
//# sourceMappingURL=get.parser.d.ts.map