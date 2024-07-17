const express = require("express");
const dotenv = require("dotenv");
const publicApi = require("./routes/publicApi");
const { errorMiddleware } = require("./middleware/errorMiddleware");

dotenv.config();

const app = express();

app.use(express.json());
app.use(publicApi);

app.use(errorMiddleware);

module.exports = app;
