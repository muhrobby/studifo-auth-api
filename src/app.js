const express = require("express");
const dotenv = require("dotenv");
const publicApi = require("./routes/publicApi");
const { errorMiddleware } = require("./middleware/errorMiddleware");
const logger = require("./config/logger");
const { db, User } = require("./config/database");
const authApi = require("./routes/authApi");
const helmet = require("helmet");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: [/\.studifo\.com$/, "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains"
  );
  res.setHeader("Content-Security-Policy", "default-src 'self'");
  next();
});

app.use(express.json());
app.use(publicApi);
app.use(authApi);

app.use(errorMiddleware);

(async () => {
  try {
    await db.authenticate();
    await User.sync();
    logger.info("Connection has been established successfully.");
  } catch (error) {
    logger.error("Unable to connect to the database:", error);
  }
})();

module.exports = app;
