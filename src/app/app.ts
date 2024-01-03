import express from "express";

const expressApp = express();
expressApp.use(express.urlencoded({ extended: true }));
expressApp.use(express.json());

export default expressApp;
