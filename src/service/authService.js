const { User } = require("../config/database");
const logger = require("../config/logger");
const responseError = require("../errors/responseError");
const {
  registerValidation,
  loginValidation,
  logoutValidation,
  userValidation,
} = require("../validation/authValidation");
const { validate } = require("../validation/validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

const login = async (request) => {
  const userLogin = validate(loginValidation, request);

  const user = await User.findOne({
    where: {
      email: userLogin.email,
    },
  });

  if (!user) {
    throw new responseError(401, "Email or password Invalid");
  }

  const password = bcrypt.compareSync(userLogin.password, user.password);

  if (!password) {
    throw new responseError(401, "Email or password Invalid");
  }

  const token = jwt.sign(
    {
      email: user.email,
      username: user.username,
      id: user.id,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "1d",
    }
  );
  await User.update(
    {
      refreshToken: token,
    },
    {
      where: {
        email: user.email,
      },
    }
  );

  return {
    token: token,
  };
};

const logout = async (request) => {
  const userLogout = validate(logoutValidation, request);

  await User.update(
    {
      refreshToken: null,
    },
    {
      where: {
        email: userLogout.email,
      },
    }
  );
};

const getUserId = async (request) => {
  const userId = validate(userValidation, request);

  const user = await User.findOne({
    where: {
      id: userId.id,
    },
  });

  if (!user) {
    throw new responseError(402, "User not found");
  }

  return {
    id: user.id,
    email: user.email,
    username: user.username,
  };
};

module.exports = { register, login, logout, getUserId };
