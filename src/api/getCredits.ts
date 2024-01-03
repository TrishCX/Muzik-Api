import { request } from "../request";
import { END_POINTS } from "../constants";
// @ts-check
import type { Credits } from "../@types";
// @parser
import { parseTrackCredits } from "../parser";

export async function getCredits(id: string) {
  const response = (await request.get(END_POINTS.CREDITS(id))) as Credits;
  const parsedCredits = parseTrackCredits(response);
  return parsedCredits;
}
