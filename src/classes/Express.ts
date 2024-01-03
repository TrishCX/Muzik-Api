import { Express as _Express } from "express";
import { Session } from "../config/Session/index";
import {
  AlbumRouter,
  ArtistRouter,
  ContentRouter,
  HomeRouter,
  PlaylistRouter,
  TrackRouter,
} from "../routers/index";

export default class Express {
  private app?: _Express;
  constructor(app: _Express) {
    this.app = app;
    this.listen();
  }

  public register() {
    this.registerRoutes();
  }

  private async registerRoutes() {
    this.app?.get("/", async (request, response) => {
      return response.status(200).send({
        message: `There is no implementation for the initial home page. Consider looking for other (API) routes.`,
        status: response.statusCode,
      });
    });
    this.app?.use("/api/v1", ArtistRouter);
    this.app?.use("/api/v1", TrackRouter);
    this.app?.use("/api/v1", HomeRouter);
    this.app?.use("/api/v1", ContentRouter);
    this.app?.use("/api/v1", AlbumRouter);
    this.app?.use("/api/v1", PlaylistRouter);
  }

  private listen() {
    this.app?.listen(Session.PORT, () =>
      console.log("The server is now up and running.")
    );
  }
}
