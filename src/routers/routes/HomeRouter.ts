import { Request, Response, Router } from "express";
import { home, YouTubeHome } from "../../api/index";

const HomeRouter: Router = Router({
  strict: true,
  caseSensitive: true,
});

HomeRouter.get(
  "/home-content/:genreId",
  async (request: Request, response: Response) => {
    const offSet = Number(request?.query?.offSet?.toString());
    const data = offSet
      ? await home({ genreId: request.params.genreId, nextOffSet: offSet })
      : await home({ genreId: request.params.genreId, nextOffSet: 0 });

    return response.status(200).send({
      content: data,
      message: "success",
    });
  }
);

HomeRouter.get(
  "/home/platform/youtube",
  async (request: Request, response: Response) => {
    const res = await YouTubeHome();
    return response.status(200).send({
      content: res,
      message: "success",
    });
  }
);

export default HomeRouter;
