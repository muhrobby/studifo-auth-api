const Joi = require("joi");

exports.registerValidation = Joi.object({
  email: Joi.string().email().required(),
  username: Joi.string().min(3).required(),
  password: Joi.string().required(),
  passwordConfirm: Joi.string().required(),
});

exports.loginValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

exports.logoutValidation = Joi.object({
  email: Joi.string().email().required(),
  username: Joi.string().min(3).required(),
  id: Joi.number().required(),
});

exports.userValidation = Joi.object({
  email: Joi.string().email().required(),
  username: Joi.string().min(3).required(),
  id: Joi.number().required(),
});
