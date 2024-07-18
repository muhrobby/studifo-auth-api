const { User } = require("../config/database");
const logger = require("../config/logger");
const responseError = require("../errors/responseError");
const { registerValidation } = require("../validation/authValidation");
const { validate } = require("../validation/validation");
const bcrypt = require("bcryptjs");

const register = async (request) => {
  const user = validate(registerValidation, request);

  const count = await User.count({ where: { email: request.email } });
  logger.info(count);

  if (count === 1) {
    throw new responseError(400, "Email already exist");
  }

  if (request.password !== request.passwordConfirm) {
    throw new responseError(400, "Password do not match");
  }

  user.password = bcrypt.hashSync(user.password, 14);

  const newUser = await User.create({
    email: user.email,
    username: user.username,
    password: user.password,
  });

  return {
    email: newUser.email,
    username: newUser.username,
  };
};

module.exports = { register };
