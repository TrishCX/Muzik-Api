"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.artistGetParser = void 0;
const index_1 = require("../../helpers/index");
function artistGetParser(body) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
    // Tracks
    const tracks = [];
    // Albums
    const albumArray = [];
    const popularAlbumsArray = [];
    // Singles
    const singlesArray = [];
    const relatedArtistsArray = [];
    // Compilations
    const compilationsArray = [];
    const appearsOnArray = [];
    // Statistics
    const topCitiesArray = [];
    // Profile
    const data = body.data.artistUnion;
    const profile = data.profile;
    const visuals = data.visuals;
    const relatedContent = data.relatedContent;
    const name = profile === null || profile === void 0 ? void 0 : profile.name;
    const biography = (profile === null || profile === void 0 ? void 0 : profile.biography) || undefined;
    const header = ((_c = (_b = (_a = visuals === null || visuals === void 0 ? void 0 : visuals.headerImage) === null || _a === void 0 ? void 0 : _a.sources) === null || _b === void 0 ? void 0 : _b.at(-1)) === null || _c === void 0 ? void 0 : _c.url) || undefined;
    const image = (_d = visuals === null || visuals === void 0 ? void 0 : visuals.avatarImage.sources.at(-1)) === null || _d === void 0 ? void 0 : _d.url;
    const gallery = visuals.gallery.items.map((item) => { var _a; return (_a = item.sources.at(-1)) === null || _a === void 0 ? void 0 : _a.url; });
    const verified = profile.verified;
    const listeners = data === null || data === void 0 ? void 0 : data.stats.monthlyListeners;
    const worldRank = (_e = data === null || data === void 0 ? void 0 : data.stats) === null || _e === void 0 ? void 0 : _e.worldRank;
    const topTracks = (_f = data.discography.topTracks) === null || _f === void 0 ? void 0 : _f.items;
    const albumCount = (_g = data.discography.albums) === null || _g === void 0 ? void 0 : _g.totalCount;
    const albums = (_h = data.discography.albums) === null || _h === void 0 ? void 0 : _h.items;
    const popularAlbums = data.discography.popularReleasesAlbums.items;
    const singlesTotalCount = data.discography.singles.totalCount;
    const singles = data.discography.singles.items;
    const latest = data === null || data === void 0 ? void 0 : data.discography.latest;
    const relatedArtists = (_j = relatedContent.relatedArtists) === null || _j === void 0 ? void 0 : _j.items;
    const relatedArtistsCount = (_k = relatedContent.relatedArtists) === null || _k === void 0 ? void 0 : _k.totalCount;
    const appearsOn = data.relatedContent.appearsOn.items;
    const appearsOnCount = data.relatedContent.appearsOn.totalCount;
    const compilations = (_m = (_l = data.discography) === null || _l === void 0 ? void 0 : _l.compilations) === null || _m === void 0 ? void 0 : _m.items;
    const compilationsCount = (_p = (_o = data.discography) === null || _o === void 0 ? void 0 : _o.compilations) === null || _p === void 0 ? void 0 : _p.totalCount;
    const topCities = (_q = data.stats.topCities) === null || _q === void 0 ? void 0 : _q.items;
    for (const { releases } of appearsOn) {
        for (const item of releases === null || releases === void 0 ? void 0 : releases.items) {
            appearsOnArray.push({
                title: item === null || item === void 0 ? void 0 : item.name,
                year: item.date.year,
                coverArt: (_r = item.coverArt.sources.at(-1)) === null || _r === void 0 ? void 0 : _r.url,
                id: item.id,
                artists: (_s = item === null || item === void 0 ? void 0 : item.artists) === null || _s === void 0 ? void 0 : _s.items,
            });
        }
    }
    for (const cities of topCities) {
        topCitiesArray.push({
            city: cities.city,
            country: cities.country,
            region: cities.region,
            totalListeners: cities.numberOfListeners,
        });
    }
    for (const { releases } of compilations) {
        for (const album of releases.items) {
            compilationsArray.push({
                id: album.id,
                title: album.name,
                songsCount: album.tracks.totalCount,
                copyright: album.copyright.items.map((v) => v.text),
                coverArt: (_t = album.coverArt.sources.at(-1)) === null || _t === void 0 ? void 0 : _t.url,
                date: album.date,
                label: album.label,
                uri: album.uri,
            });
        }
    }
    for (const artist of relatedArtists) {
        relatedArtistsArray.push({
            id: artist.id,
            name: artist.profile.name,
            image: (_x = (_w = (_v = (_u = artist === null || artist === void 0 ? void 0 : artist.visuals) === null || _u === void 0 ? void 0 : _u.avatarImage) === null || _v === void 0 ? void 0 : _v.sources) === null || _w === void 0 ? void 0 : _w.at(-1)) === null || _x === void 0 ? void 0 : _x.url,
            uri: artist.uri,
        });
    }
    for (const { releases } of singles) {
        for (const album of releases === null || releases === void 0 ? void 0 : releases.items) {
            singlesArray.push({
                id: album.id,
                title: album.name,
                songsCount: album.tracks.totalCount,
                copyright: album.copyright.items.map((v) => v.text),
                coverArt: (_y = album.coverArt.sources.at(-1)) === null || _y === void 0 ? void 0 : _y.url,
                date: album.date,
                label: album.label,
                uri: album.uri,
            });
        }
    }
    for (const album of popularAlbums) {
        popularAlbumsArray.push({
            id: album.id,
            title: album.name,
            songsCount: album.tracks.totalCount,
            copyright: album.copyright.items.map((v) => v.text),
            coverArt: (_z = album.coverArt.sources.at(-1)) === null || _z === void 0 ? void 0 : _z.url,
            date: album.date,
            label: album.label,
            uri: album.uri,
        });
    }
    for (const { releases } of albums) {
        for (const album of releases.items) {
            albumArray.push({
                id: album.id,
                title: album.name,
                songsCount: album.tracks.totalCount,
                copyright: album.copyright.items.map((v) => v.text),
                coverArt: (_0 = album.coverArt.sources.at(-1)) === null || _0 === void 0 ? void 0 : _0.url,
                date: album.date,
                label: album.label,
                uri: album.uri,
            });
        }
    }
    for (const { track } of topTracks) {
        tracks.push({
            title: track.name,
            artists: track.artists.items,
            duration: (0, index_1.formatDuration)(track.duration.totalMilliseconds),
            durationInMS: track.duration.totalMilliseconds,
            id: track.id,
            playCount: track.playcount,
        });
    }
    return {
        name,
        biography: biography.text,
        header,
        verified,
        gallery,
        image,
        topTracks: tracks,
        albums: albumArray,
        popularAlbums: popularAlbumsArray,
        singlesTotalCount,
        singles: singlesArray,
        albumCount,
        listeners,
        appearsOnCount,
        topCities: topCitiesArray,
        appearsOn: appearsOnArray,
        worldRank,
        compilations: compilationsArray,
        compilationsCount,
        latest: latest,
        relatedArtists: relatedArtistsArray,
        relatedArtistsCount,
    };
}
exports.artistGetParser = artistGetParser;
