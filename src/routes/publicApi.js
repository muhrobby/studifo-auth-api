const { Router } = require("express");
const hello = require("../controllers/helloController");

const publicApi = Router();

publicApi.get("/", hello);

module.exports = publicApi;
