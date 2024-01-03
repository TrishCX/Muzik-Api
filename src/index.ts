// import { getVideoPlaylist } from "./api/index";

// (async () => {})();

import Express from "./classes/Express";
import app from "./app/app";

const server = new Express(app);

server.register();
