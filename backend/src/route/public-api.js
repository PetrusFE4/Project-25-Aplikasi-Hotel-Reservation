import express from "express";
import userController from "../controller/user-controller.js";
import healthController from "../controller/health-controller.js";
import hotelController from "../controller/hotel-controller.js";
import bookingController from "../controller/booking-controller.js";

const publicRouter = new express.Router();

// User routes
publicRouter.post("/api/users/register", userController.register);
publicRouter.post("/api/users/login", userController.login);

// Health check route
publicRouter.get("/ping", healthController.ping);

// Hotel routes
publicRouter.get("/api/hotels", hotelController.getAllHotels);
publicRouter.get("/api/hotel/:id", hotelController.getHotelById);

// Booking routes
publicRouter.post("/api/booking/:id", bookingController.createBooking);

export { publicRouter };
