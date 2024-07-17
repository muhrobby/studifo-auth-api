const { prisma } = require("../config/database");
const { registerValidation } = require("../validation/authValidation");
const { validate } = require("../validation/validation");

const register = async (request) => {
  validate(registerValidation, request);

  const count = prisma.user.count({
    where: {
      email: request.email,
    },
  });
};
