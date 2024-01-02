import { Router } from "express";
import { getAlbum } from "../../api";

const AlbumRouter = Router({ caseSensitive: true });

AlbumRouter.get("/album/get/:id", async (request, response) => {
  const { id } = request.params;
  const data = await getAlbum(id);
  return response.status(200).send({
    data: data,
  });
});

export default AlbumRouter;
