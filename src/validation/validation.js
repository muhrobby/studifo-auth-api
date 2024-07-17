const responseError = require("../errors/responseError");

const validate = (schema, request) => {
  const { value, error } = schema.validate(request);

  if (error) {
    throw new responseError(400, error.message);
  }
  return value;
};

module.exports = { validate };
