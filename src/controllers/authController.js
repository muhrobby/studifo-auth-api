const { register } = require("../service/authService");

exports.register = async (req, res, next) => {
  try {
    const result = await register(req.body);
    res.status(200).json({
      status: "ok",
      message: "register success",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
