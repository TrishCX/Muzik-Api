import { Router } from "express";
import { canvas, getCredits, getSongSuggestion } from "../../api/index";
// @api
import { searchTracks, searchVideos } from "../../api/index";

const TrackRouter = Router({
  strict: true,
  caseSensitive: true,
});

TrackRouter.get("/canvas/:id", async (req, res) => {
  const { id } = req.params;
  const data = await canvas(id);
  return res.status(200).send({
    canvas: data,
  });
});

TrackRouter.get("/track/suggestion/:id", async (request, response) => {
  const { id } = request.params;
  const data = await getSongSuggestion(id);
  return response.status(200).send({
    data: data,
  });
});

TrackRouter.get("/track/credits/:id", async (request, response) => {
  const { id } = request.params;
  const data = await getCredits(id);
  return response.status(200).send({
    data: data,
  });
});

TrackRouter.get("/search/tracks", async (request, response) => {
  const query = request.query?.query as string;
  const offset = Number(request.query?.offset) || 0;
  const parseSearchResults = await searchTracks(query, offset);
  return response.status(200).send({
    tracks: parseSearchResults,
  });
});

TrackRouter.get("/search/tracks/videos", async (request, response) => {
  const platform = request.query?.platform as string;
  const query = request.query?.query as string;
  const data = await searchVideos(query);

  return response.status(200).send({
    data: data,
  });
});

export default TrackRouter;
