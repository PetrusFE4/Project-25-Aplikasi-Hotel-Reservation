import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";

const calculateDaysDifference = (checkIn, checkOut) => {
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);

  const timeDifference = checkOutDate.getTime() - checkInDate.getTime();
  const daysDifference = timeDifference / (1000 * 3600 * 24);

  return daysDifference;
};

const createBooking = async (bookingData) => {
  const user = await prismaClient.user.findUnique({
    where: {
      email: bookingData.email,
    },
  });

  if (!user) {
    throw new ResponseError(404, "Email not valid");
  }

  const hotel = await prismaClient.hotel.findUnique({
    where: {
      id: bookingData.hotelId,
    },
  });

  if (!hotel) {
    throw new ResponseError(404, "Hotel not found");
  }

  const daysDifference = calculateDaysDifference(
    bookingData.checkInDate,
    bookingData.checkOutDate
  );

  const totalPrice = daysDifference * hotel.price;

  const checkInDate = new Date(bookingData.checkInDate);
  const checkOutDate = new Date(bookingData.checkOutDate);

  return await prismaClient.booking.create({
    data: {
      name: bookingData.name,
      hotelId: bookingData.hotelId,
      userId: user.id,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      guests: bookingData.guests,
      totalPrice: totalPrice,
    },
    select: {
      id: true,
      name: true,
      hotelId: true,
      userId: true,
      checkInDate: true,
      checkOutDate: true,
      guests: true,
      totalPrice: true,
    },
  });
};

export default { createBooking };
