import winston from "winston";

const logger = new winston.createLogger({
  level: "info",
  transports: [new winston.transports.Console({})],
});

export { logger };
