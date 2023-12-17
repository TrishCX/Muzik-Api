import { request } from "../request";
import { END_POINTS } from "../constants";
import { artistGetParser } from "../parser/index";
// @ts-check
import type { GetArtist } from "../@types";

export async function getArtistFetcher(id: string) {
  const auth = await request.get(END_POINTS.ARTIST_GET(id));
  const body = auth as GetArtist;
  return artistGetParser(body);
}
