import { END_POINTS } from "../constants/index";
import { request } from "../request";
import type { TrackSuggestion } from "../@types/index";
// @parser
import { parseTrackSuggestion, ISuggestions } from "../parser/index";

export async function getSongSuggestion(id: string) {
  const response = await request.get(END_POINTS.TRACK_SUGGESTION(id));
  const parsedQuery = response as TrackSuggestion;
  const parsedData: ISuggestions[] = parseTrackSuggestion(parsedQuery);
  return parsedData;
}
