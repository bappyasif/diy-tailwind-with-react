const express = require("express");
const { getAllUsers, createNewUser, loginUser } = require("../controllers");
const routes = express();

routes.use(express.json())

routes.get("/users", getAllUsers)
routes.post("/users", createNewUser)

routes.get("/users/login", loginUser)

module.exports = routes