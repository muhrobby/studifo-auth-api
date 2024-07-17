import { app } from "./app.js";
import { logger } from "./config/logger.js";

const port = process.env.PORT || 4000;
app.listen(port, () => {
  logger.info(`listen on port ${port}`);
});
