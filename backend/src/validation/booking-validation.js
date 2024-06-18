import joi from "joi";

const createBookingValidation = joi.object({
  name: joi.string().required(),
  userId: joi.required(),
  hotelId: joi.required(),
  startDate: joi.required(),
  endDate: joi.required(),
  guests: joi.required(),
});

export { createBookingValidation };
