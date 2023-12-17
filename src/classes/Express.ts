import { Response, Express as _Express } from "express";
import { Session } from "../config/Session/index";
import { ArtistRouter } from "../routers/index";

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
    this.app?.use("/api/v1", ArtistRouter);
  }

  private listen() {
    this.app?.listen(Session.PORT, () =>
      console.log("The server is now up and running.")
    );
  }
}
