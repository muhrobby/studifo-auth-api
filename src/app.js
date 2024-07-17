const express = require("express");
const dotenv = require("dotenv");
const publicApi = require("./routes/publicApi");
const { errorMiddleware } = require("./middleware/errorMiddleware");
const { sequelize } = require("./config/database");
const logger = require("./config/logger");

dotenv.config();

const app = express();
try {
  sequelize.authenticate();
  logger.info("Connection has been established successfully.");
} catch (error) {
  logger.info("Unable to connect to the database:", error);
}

app.use(express.json());
app.use(publicApi);

app.use(errorMiddleware);

module.exports = app;
