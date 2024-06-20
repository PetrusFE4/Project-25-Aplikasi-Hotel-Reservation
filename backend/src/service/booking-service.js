import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import midtransClient from "midtrans-client";

const calculateDaysDifference = (checkIn, checkOut) => {
  const startDate = new Date(checkIn);
  const endDate = new Date(checkOut);

  const timeDifference = endDate.getTime() - startDate.getTime();
  const daysDifference = timeDifference / (1000 * 3600 * 24);

  return daysDifference;
};

const getAllBookings = async () => {
  return await prismaClient.booking.findMany({
    select: {
      id: true,
      name: true,
      hotel: {
        select: {
          name: true,
        },
      },
      userId: true,
      creation_time: true,
      startDate: true,
      endDate: true,
      guests: true,
      totalPrice: true,
      isPaid: true,
      checkInAt: true,
      checkOutAt: true,
    },
  });
};

const getBookingByUser = async (userId) => {
  return await prismaClient.booking.findMany({
    where: {
      userId: userId,
    },
    select: {
      id: true,
      name: true,
      hotel: {
        select: {
          name: true,
        },
      },
      creation_time: true,
      startDate: true,
      endDate: true,
      guests: true,
      totalPrice: true,
      checkInAt: true,
      checkOutAt: true,
      isPaid: true,
      paymentLink: true,
      reviews: {
        select: {
          rating: true,
          comment: true,
        },
      },
    },
  });
};

const createBooking = async (email, bookingData) => {
  const hotel = await prismaClient.hotel.findUnique({
    where: {
      id: bookingData.hotelId,
    },
  });

  const daysDifference = calculateDaysDifference(
    bookingData.startDate,
    bookingData.endDate
  );
  const totalPrice = daysDifference * hotel.price;

  const startDate = new Date(bookingData.startDate);
  const endDate = new Date(bookingData.endDate);

  await prismaClient.hotel.update({
    where: {
      id: bookingData.hotelId,
    },
    data: {
      roomLeft: {
        decrement: 1,
      },
    },
  });

  const booking = await prismaClient.booking.create({
    data: {
      name: bookingData.name,
      hotelId: bookingData.hotelId,
      userId: bookingData.userId,
      startDate: startDate,
      endDate: endDate,
      guests: parseInt(bookingData.guests),
      totalPrice: totalPrice,
    },
  });

  const snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY,
    clientKey: process.env.MIDTRANS_CLIENT_KEY,
  });

  const transactionParams = {
    transaction_details: {
      order_id: booking.id,
      gross_amount: totalPrice,
    },
    customer_details: {
      first_name: bookingData.name,
      email: email,
    },
  };

  const transaction = await snap.createTransaction(transactionParams);

  await prismaClient.booking.update({
    where: { id: booking.id },
    data: { paymentLink: transaction.redirect_url },
  });

  return transaction.token;
};

const checkIn = async (bookingId) => {
  return await prismaClient.booking.update({
    where: {
      id: bookingId,
    },
    data: {
      checkInAt: new Date(),
    },
  });
};

const checkOut = async (bookingId) => {
  const booking = await prismaClient.booking.findUnique({
    where: {
      id: bookingId,
    },
    select: {
      hotelId: true,
    },
  });

  await prismaClient.hotel.update({
    where: {
      id: booking.hotelId,
    },
    data: {
      roomLeft: {
        increment: 1,
      },
    },
  });

  return await prismaClient.booking.update({
    where: {
      id: bookingId,
    },
    data: {
      checkOutAt: new Date(),
    },
  });
};

export default {
  createBooking,
  getAllBookings,
  getBookingByUser,
  checkIn,
  checkOut,
};
