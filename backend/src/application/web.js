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
    origin: [
      "https://fe-msib-6-hotel-reservation-02.educalab.id/hotel-booking-app",
      "https://hotel-booking-app-sepia.vercel.app",
    ],
    credentials: true,
  })
);
web.use(cookieParser());
web.use(express.json());
web.use(express.static(path.join(path.resolve(), "public")));

web.use(publicRouter);
web.use(userRouter);
web.use(errorMiddleware);
