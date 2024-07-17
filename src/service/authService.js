// const { prisma } = require("../config/database");
// const bcrypt = require("bcryptjs");
// const responseError = require("../errors/responseError");
// const { registerValidation } = require("../validation/authValidation");
// const { validate } = require("../validation/validation");

const register = async (request) => {
  //   validate(registerValidation, request);

  //   const count = await prisma.user.count({
  //     where: {
  //       email: request.email,
  //     },
  //   });

  //   if (count == 1) {
  //     throw new responseError(400, "Email Already Exist");
  //   }

  //   if (request.password !== request.passwordConfirm) {
  //     throw new responseError(400, "Password do not match");
  //   }

  //   request.password = bcrypt.hashSync(request.password, 14);

  //   return prisma.user.create({
  //     data: {
  //       email: request.email,
  //       username: request.username,
  //       password: request.password,
  //     },
  //     select: {
  //       email: true,
  //       username: true,
  //     },
  //   });

  return request;
};

module.exports = { register };
