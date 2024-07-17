const { Router } = require("express");
const hello = require("../controllers/helloController");
const { register } = require("../controllers/authController");

const publicApi = Router();

publicApi.get("/", hello);
publicApi.post("/api/user/register", register);

module.exports = publicApi;
