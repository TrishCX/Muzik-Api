// import { searchVideos } from "./api/index";

// (async () => {
//   searchVideos("Me and my broken heart");
// })();

import Express from "./classes/Express";
import app from "./app/app";

const server = new Express(app);

server.register();
