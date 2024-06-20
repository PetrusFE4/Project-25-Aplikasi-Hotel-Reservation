import joi from "joi";

const addReviewValidation = joi.object({
  review: joi.string().required(),
  rating: joi.number().min(1).max(5).required(),
});

export { addReviewValidation };
