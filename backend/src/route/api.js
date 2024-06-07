import express from "express";
import userController from "../controller/user-controller.js";
import {
  authMiddleware,
  adminMiddleware,
} from "../middleware/auth-middleware.js";

const userRouter = new express.Router();
userRouter.use(authMiddleware);

// User API
userRouter.get("/api/users/current", userController.get);
userRouter.get("/api/users", adminMiddleware, userController.getUsers);
userRouter.delete("/api/users/logout", userController.logout);

export { userRouter };
