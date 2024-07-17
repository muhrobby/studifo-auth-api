import { app } from "./src/app.js";
import { logger } from "./src/config/logger.js";

const port = process.env.PORT || 4000;
app.listen(port, () => {
  logger.info(`listen on port ${port}`);
});
