import { makeRequest } from "../YoutubeRequest/index";
import { END_POINTS } from "../constants";
// @ts-check
import type { Videos } from "../@types";
// @parser
import { parseVideo } from "../parser/index";

export async function searchVideos(term: string) {
  const response = (await makeRequest(
    END_POINTS.VIDEO_SEARCH(term),
    {
      params: "EgWKAQIQAWoQEAMQBBAJEAoQBRAREBAQFQ%3D%3D",
      query: term,
    },
    "0.1"
  )) as Videos;
  const parsedTerm = parseVideo(response);
  return parsedTerm;
}
