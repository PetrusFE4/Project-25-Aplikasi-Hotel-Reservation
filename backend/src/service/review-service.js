import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";

const createReview = async (bookingId, reviewData) => {
  const booking = await prismaClient.booking.findUnique({
    where: {
      id: bookingId,
    },
  });

  if (!booking) {
    throw new ResponseError(404, "Booking not found");
  }

  await prismaClient.hotel.update({
    where: {
      id: booking.hotelId,
    },
    data: {
      reviewsCount: {
        increment: 1,
      },
    },
  });

  return await prismaClient.review.create({
    data: {
      userId: reviewData.userId,
      hotelId: booking.hotelId,
      bookingId: bookingId,
      name: booking.name,
      rating: parseInt(reviewData.rating),
      comment: reviewData.comment,
    },
  });
};

export default { createReview };
