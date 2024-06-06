import express from "express";
import { publicRouter } from "../route/public-api.js";
import { errorMiddleware } from "../middleware/error-middleware.js";
import cors from "cors";

export const web = express();
web.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
web.use(express.json());
web.use(publicRouter);
web.use(errorMiddleware);
