const express = require("express");
const userController = require("../controllers/userController");
const userRouter = express.Router();

userRouter.post("/login", userController.loginUser);
userRouter.post("/create", userController.createUser);
userRouter.get("/getByEmail", userController.getUserByEmail);

module.exports = userRouter;
