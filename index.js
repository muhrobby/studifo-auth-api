const app = require("./src/app.js");
const logger = require("./src/config/logger.js");

const port = process.env.PORT || 4000;
app.listen(port, () => {
  logger.info("starting");
});
