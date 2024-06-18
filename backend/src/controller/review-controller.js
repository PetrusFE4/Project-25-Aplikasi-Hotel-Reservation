import reviewService from "../service/review-service.js";

const createReview = async (req, res, next) => {
  try {
    const { bookingId } = req.params;
    const review = await reviewService.createReview(bookingId, req.body);
    res.status(201).json({
      message: "Review successfully",
      data: review,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  createReview,
};
