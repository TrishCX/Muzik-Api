import { Router } from "express";
import { getVideoPlaylist } from "../../api";

const PlaylistRouter = Router();

PlaylistRouter.get("/playlist/fetch/:id", async (request, response) => {
  const { id } = request.params;
  const data = await getVideoPlaylist(id);
  const logic = !data.length
    ? {
        error: true,
        message: "Playlist not found",
        code: 404,
      }
    : {
        success: true,
        message: "Playlist found",
        data: data,
        code: response.statusCode,
      };
  return response.status(200).send({
    ...logic,
  });
});

export default PlaylistRouter;
