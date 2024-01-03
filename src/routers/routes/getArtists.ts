import { Router } from "express";
import { getArtist, searchArtist } from "../../api";

const ArtistRouter = Router();

ArtistRouter.get("/search/artists", async (request, response) => {
  const term = request.query?.term?.toString() as string;
  const res = await searchArtist(term);
  return response.status(200).send({
    res,
  });
});

ArtistRouter.get("/get/artist/:id", async (request, response) => {
  const id = request?.params?.id;
  const res = await getArtist(id);
  return response.status(200).send({
    data: res,
  });
});

export default ArtistRouter;
