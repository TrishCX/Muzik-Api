import { END_POINTS } from "../constants";
import { request } from "../request";
import { artistSearchParser } from "../parser/index";

// @ts-check
import type { ArtistSearch } from "../@types/index";

export async function searchArtistFetcher(query: string) {
  const auth = await request.get(END_POINTS.ARTIST_SEARCH(query));
  const body = auth as ArtistSearch;
  return artistSearchParser(body);
}
