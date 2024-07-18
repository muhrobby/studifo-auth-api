const jwt = require("jsonwebtoken");
const responseError = require("../errors/responseError");
const { User } = require("../config/database");
const logger = require("../config/logger");

exports.authMiddleware = async (req, res, next) => {
  try {
    const header = req.header("Authorization");
    const token = header && header.split(" ")[1];

    if (!token) {
      throw new responseError(401, "Unautorized");
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    if (!decoded) {
      throw new responseError(401, "Unautorized");
    }

    const user = await User.findOne({
      where: {
        refreshToken: token,
      },
    });

    if (!user) {
      throw new responseError(401, "Unautorized");
    }

    const data = {
      email: user.email,
      username: user.username,
      id: user.id,
    };

    req.user = data;
    logger.info(req.user);
    next();
  } catch (error) {
    next(error);
  }
};
