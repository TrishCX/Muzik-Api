export declare function getArtist(id: string): Promise<{
    name: string;
    biography: string;
    header: string | undefined;
    verified: boolean;
    gallery: (string | undefined)[];
    image: string | undefined;
    topTracks: import("../parser").Tracks[];
    albums: import("../parser").Albums[];
    popularAlbums: import("../parser").Albums[];
    singlesTotalCount: number;
    singles: import("../parser").Albums[];
    albumCount: number;
    listeners: number;
    appearsOnCount: number;
    topCities: import("../parser").TopCities[];
    appearsOn: import("../parser").Appears[];
    worldRank: number;
    compilations: import("../parser").Albums[];
    compilationsCount: number;
    latest: import("../@types/Artists/GetArtist").Latest;
    relatedArtists: any[];
    relatedArtistsCount: number;
}>;
//# sourceMappingURL=getArtist.d.ts.map