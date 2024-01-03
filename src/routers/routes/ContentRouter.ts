import { Request, Response, Router } from "express";
import { YoutubeApi } from "../../client";
import { getSyncLyrics } from "../../api";

const ContentRouter = Router({
  strict: true,
  caseSensitive: true,
});
ContentRouter.get(
  "/implementation/search-suggestions",
  async (request: Request, response: Response) => {
    const searchTerm = request.query.searchTerm?.toString() as string;
    const suggestions: string[] = await YoutubeApi.searchSuggestions(
      searchTerm
    );

    return response.status(response.statusCode).send({
      status: response.statusCode,
      message: response.statusMessage,
      content: suggestions,
    });
  }
);

ContentRouter.get("/lyrics-synced/:trackId", async (request, response) => {
  const id: string = request.params.trackId as string;
  const lyrics = await getSyncLyrics(id);
  return response.status(200).send({
    lyrics,
    status: 200,
  });
});

export default ContentRouter;
