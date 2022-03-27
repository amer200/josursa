const express = require("express");
const route = express.Router();
const authController = require("../controllers/auth");

route.get("/login", authController.getLogIn);
route.post("/login", authController.logIn);

module.exports = route;
