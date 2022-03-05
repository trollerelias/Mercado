import express from "express";
import bodyParser from "body-parser";
import Routers from "./routers/routers";
import dotenv from "dotenv";

const server = express();
dotenv.config();

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// middlewares
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json({ type: "application/json" }));

// Routes
server.use("/", Routers);

export default server;
