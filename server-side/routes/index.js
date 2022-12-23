const express = require("express");
const { getAllUsers, createNewUser, loginUser } = require("../controllers");
const { loginAndGenerateTokens, getAccessUsingRefreshToken, logoutUser } = require("../controllers/forJwt");
const routes = express();

routes.use(express.json())

routes.get("/users", getAllUsers)
routes.post("/users", createNewUser)

routes.get("/users/login", loginUser)

routes.post("/login", loginAndGenerateTokens)
routes.post("/rToken", getAccessUsingRefreshToken)

routes.delete("/logout", logoutUser)

module.exports = routes