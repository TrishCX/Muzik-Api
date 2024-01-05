import { quickVideo } from "./api";

(async () => {
  const query: string = `Daft Punk Music Videos`;

  const response = await quickVideo(query);
  console.log(response);
})();

// import Express from "./classes/Express";
// import app from "./app/app";

// const server = new Express(app);

// server.register();
