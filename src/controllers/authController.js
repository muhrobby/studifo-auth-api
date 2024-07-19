const {
  register,
  login,
  logout,
  getUserId,
} = require("../service/authService");

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

exports.login = async (req, res, next) => {
  try {
    const result = await login(req.body);
    res.status(200).json({
      status: "ok",
      message: "login success",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

exports.logout = async (req, res, next) => {
  try {
    await logout(req.user);
    res.status(200).json({
      status: "ok",
      message: "logout success",
    });
  } catch (error) {
    next(error);
  }
};

exports.getUserId = async (req, res, next) => {
  try {
    const result = await getUserId(req.user);
    res.status(200).json({
      status: "ok",
      message: "success get user",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
