import express from "express";
import { publicRouter } from "../route/public-api.js";
import { userRouter } from "../route/api.js";
import { errorMiddleware } from "../middleware/error-middleware.js";
import cors from "cors";
import cookieParser from "cookie-parser";

export const web = express();
web.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
web.use(cookieParser());
web.use(express.json());
web.use(publicRouter);
web.use(userRouter);
web.use(errorMiddleware);
