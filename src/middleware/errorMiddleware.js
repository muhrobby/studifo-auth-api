const responseError = require("../errors/responseError");

const errorMiddleware = (error, req, res, next) => {
  if (error instanceof responseError) {
    res.status(error.status).json({
      status: "error",
      message: error.message,
    });
  } else {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = { errorMiddleware };
