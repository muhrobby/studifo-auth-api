const { Router } = require("express");
const hello = require("../controllers/helloController");
const { register, login } = require("../controllers/authController");

const publicApi = Router();

publicApi.get("/", hello);
publicApi.post("/api/user/register", register);
publicApi.post("/api/user/login", login);

module.exports = publicApi;
