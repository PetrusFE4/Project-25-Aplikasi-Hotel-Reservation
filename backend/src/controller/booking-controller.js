import bookingService from "../service/booking-service.js";

const createBooking = async (req, res, next) => {
  try {
    const result = await bookingService.createBooking(req.body);
    res.status(201).json({
      message: "Booking successfully",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

export default { createBooking };
