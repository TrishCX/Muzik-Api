import { END_POINTS } from "../constants/index";
import { request } from "../request";
// @parser
import { parseAlbum } from "../parser/index";
// @types
import { GetAlbum } from "../@types/index";

export async function getAlbum(id: string) {
  const response = (await request.get(END_POINTS.ALBUM_GET(id))) as GetAlbum;
  const parsedQuery = parseAlbum(response);
  return parsedQuery;
}
