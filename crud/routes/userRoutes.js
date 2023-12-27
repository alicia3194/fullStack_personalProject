const express = require("express");
const userController = require("../controllers/userController");
const userRouter = express.Router();

const middlAuth = require("../../middlewares/middlAuth");

userRouter.post("/login", userController.loginUser);
userRouter.post("/create", userController.createUser);
userRouter.get(
  "/getByEmail",
  middlAuth.authenticateUser,
  userController.getUserByEmail
);

module.exports = userRouter;
