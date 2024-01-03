export declare function getArtistFetcher(id: string): Promise<{
    name: string;
    biography: string;
    header: string | undefined;
    verified: boolean;
    gallery: (string | undefined)[];
    image: string | undefined;
    topTracks: import("../parser/index").Tracks[];
    albums: import("../parser/index").Albums[];
    popularAlbums: import("../parser/index").Albums[];
    singlesTotalCount: number;
    singles: import("../parser/index").Albums[];
    albumCount: number;
    listeners: number;
    appearsOnCount: number;
    topCities: import("../parser/index").TopCities[];
    appearsOn: import("../parser/index").Appears[];
    worldRank: number;
    compilations: import("../parser/index").Albums[];
    compilationsCount: number;
    latest: import("../@types/Artists/GetArtist").Latest;
    relatedArtists: any[];
    relatedArtistsCount: number;
}>;
//# sourceMappingURL=get.artist.d.ts.map