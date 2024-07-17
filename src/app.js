const express = require("express");
const dotenv = require("dotenv");
const publicApi = require("./routes/publicApi");

dotenv.config();

const app = express();

app.use(express.json());
app.use(publicApi);

module.exports = app;
