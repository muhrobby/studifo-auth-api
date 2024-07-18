const express = require("express");
const dotenv = require("dotenv");
const publicApi = require("./routes/publicApi");
const { errorMiddleware } = require("./middleware/errorMiddleware");
const logger = require("./config/logger");
const { db, User } = require("./config/database");

dotenv.config();

const app = express();

(async () => {
  try {
    await db.authenticate();
    await User.sync();
    logger.info("Connection has been established successfully.");
  } catch (error) {
    logger.error("Unable to connect to the database:", error);
  }
})();

app.use(express.json());
app.use(publicApi);

app.use(errorMiddleware);

module.exports = app;
