const winston = require("winston");

const logger = new winston.createLogger({
  level: "info",
  transports: [new winston.transports.Console({})],
});

module.exports = logger;
