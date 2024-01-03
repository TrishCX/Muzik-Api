export interface TrackSuggestion {
    data: Data;
    extensions: Extensions;
}
export interface Data {
    seoRecommended: SEORecommended;
}
export interface SEORecommended {
    items: SEORecommendedItem[];
}
export interface SEORecommendedItem {
    data: ItemData;
}
export interface ItemData {
    __typename: string;
    id: string;
    uri: string;
    name: string;
    artists: Artists;
    duration: Duration;
    contentRating: ContentRating;
    playability: Playability;
    playcount: string;
    albumOfTrack: AlbumOfTrack;
}
export interface AlbumOfTrack {
    uri: string;
    id: string;
    coverArt: CoverArt;
}
export interface CoverArt {
    sources: Source[];
}
export interface Source {
    width: number;
    height: number;
    url: string;
}
export interface Artists {
    items: ArtistsItem[];
}
export interface ArtistsItem {
    id: string;
    uri: string;
    profile: Profile;
}
export interface Profile {
    name: string;
}
export interface ContentRating {
    label: string;
}
export interface Duration {
    totalMilliseconds: number;
}
export interface Playability {
    playable: boolean;
}
export interface Extensions {
}
//# sourceMappingURL=Suggestion.d.ts.map