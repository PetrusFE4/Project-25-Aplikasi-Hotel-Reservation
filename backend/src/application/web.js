import express from "express";
import { publicRouter } from "../route/public-api.js";
import { userRouter } from "../route/api.js";
import { errorMiddleware } from "../middleware/error-middleware.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import "../service/scheduler-service.js";

export const web = express();

const allowedOrigins = [
  "https://fe-msib-6-hotel-reservation-02.educalab.id",
  "https://hotel-booking-app-sepia.vercel.app",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

web.use(cors(corsOptions));
web.use(cookieParser());
web.use(express.json());
// web.use("/images", express.static(path.join(path.resolve(), "public")));
web.use("/images", express.static("public"));

web.use(publicRouter);
web.use(userRouter);
web.use(errorMiddleware);
