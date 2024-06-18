import bookingService from "../service/booking-service.js";

const getAllBookings = async (req, res, next) => {
  try {
    const result = await bookingService.getAllBookings();
    res.status(200).json({
      message: "Bookings successfully fetched",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const getBookingByUser = async (req, res, next) => {
  try {
    const result = await bookingService.getBookingByUser(req.params.userId);
    res.status(200).json({
      message: "Booking History By User successfully fetched",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

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

const checkIn = async (req, res, next) => {
  try {
    const { bookingId } = req.params;
    const result = await bookingService.checkIn(bookingId);
    res.status(200).json({
      message: "Check In successfully",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const checkOut = async (req, res, next) => {
  try {
    const { bookingId } = req.params;
    const result = await bookingService.checkOut(bookingId);
    res.status(200).json({
      message: "Check Out successfully",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

export default {
  createBooking,
  getAllBookings,
  getBookingByUser,
  checkIn,
  checkOut,
};
