import express from "express";
import userController from "../controller/user-controller.js";
import bookingController from "../controller/booking-controller.js";
import {
  authMiddleware,
  adminMiddleware,
} from "../middleware/auth-middleware.js";
import reviewController from "../controller/review-controller.js";

const userRouter = new express.Router();
userRouter.use(authMiddleware);

// User API
userRouter.get("/api/users/current", userController.get);
userRouter.delete("/api/users/logout", userController.logout);
userRouter.put("/api/users/update", userController.update);
userRouter.get("/api/users", adminMiddleware, userController.getAllUsers);

// Booking API
userRouter.post("/api/booking", bookingController.createBooking);
userRouter.get(
  "/api/booking",
  adminMiddleware,
  bookingController.getAllBookings
);
userRouter.get("/api/booking/:userId", bookingController.getBookingByUser);
userRouter.put("/api/booking/:bookingId/check-in", bookingController.checkIn);
userRouter.put("/api/booking/:bookingId/check-out", bookingController.checkOut);
userRouter.post(
  "/api/booking/:bookingId/review",
  reviewController.createReview
);

export { userRouter };
