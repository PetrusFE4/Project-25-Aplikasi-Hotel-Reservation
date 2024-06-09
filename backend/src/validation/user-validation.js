import joi from "joi";

const registerUserValidation = joi.object({
  name: joi.string().min(3).max(100).required().messages({
    "string.empty": "Name is required",
    "string.min": "Name should have a minimum length of 3",
    "string.max": "Name should have a maximum length of 100",
  }),
  email: joi.string().email().required().messages({
    "string.empty": "Email is required",
    "string.email": "Email should be a valid email",
  }),
  password: joi.string().min(6).required().messages({
    "string.empty": "Password is required",
    "string.min": "Password should have a minimum length of 6",
  }),
});

const loginUserValidation = joi.object({
  email: joi.string().email().required().messages({
    "string.empty": "Email is required",
    "string.email": "Email should be a valid email",
  }),
  password: joi.string().required().messages({
    "string.empty": "Password is required",
  }),
});

export { registerUserValidation, loginUserValidation };
