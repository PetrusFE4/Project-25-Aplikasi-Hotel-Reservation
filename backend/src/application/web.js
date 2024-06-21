import express from "express";
import { publicRouter } from "../route/public-api.js";
import { userRouter } from "../route/api.js";
import { errorMiddleware } from "../middleware/error-middleware.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import "../service/scheduler-service.js";

export const web = express();
web.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
web.use(cookieParser());
web.use(express.json());
// web.use("/images", express.static(path.join(path.resolve(), "public")));
web.use("/images", express.static("public"));

web.use(publicRouter);
web.use(userRouter);
web.use(errorMiddleware);
