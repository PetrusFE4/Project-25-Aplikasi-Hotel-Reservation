import express from "express";
import { publicRouter } from "../route/public-api.js";
import { userRouter } from "../route/api.js";
import { errorMiddleware } from "../middleware/error-middleware.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

export const web = express();
web.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
web.use(cookieParser());
web.use(express.json());
web.use(
  "/hotel-booking-app",
  express.static(path.join(path.resolve(), "public"))
);

web.use(publicRouter);
web.use(userRouter);
web.use(errorMiddleware);
