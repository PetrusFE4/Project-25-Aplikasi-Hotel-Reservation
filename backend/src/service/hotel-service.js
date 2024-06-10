import { prismaClient } from "../application/database.js";

const getAllHotels = async () => {
  const hotelData = await prismaClient.hotel.findMany({
    include: {
      images: true,
      location: true,
    },
  });

  return hotelData.map((hotel) => ({
    id: hotel.id,
    img: hotel.images.map((image) => image.imgUrl),
    name: hotel.name,
    place: hotel.place,
    location: {
      lat: hotel.location?.lat,
      lng: hotel.location?.lng,
    },
    distance: hotel.distance,
    address: hotel.address,
    offer: hotel.offer,
    roomDetails: hotel.roomDetails,
    bedDetails: hotel.bedDetails,
    roomLeft: hotel.roomLeft,
    rating: hotel.rating,
    reviews: hotel.reviews,
    night: hotel.night,
    adult: hotel.adult,
    children: hotel.children,
    price: hotel.price,
  }));
};

const getHotelById = async (id) => {
  const hotel = await prismaClient.hotel.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      images: true,
      location: true,
    },
  });

  return {
    id: hotel.id,
    img: hotel.images.map((image) => image.imgUrl),
    name: hotel.name,
    place: hotel.place,
    location: {
      lat: hotel.location?.lat,
      lng: hotel.location?.lng,
    },
    distance: hotel.distance,
    address: hotel.address,
    offer: hotel.offer,
    roomDetails: hotel.roomDetails,
    bedDetails: hotel.bedDetails,
    roomLeft: hotel.roomLeft,
    rating: hotel.rating,
    reviews: hotel.reviews,
    night: hotel.night,
    adult: hotel.adult,
    children: hotel.children,
    price: hotel.price,
  };
};

const createHotel = async (hotelData) => {
  const hotel = await prismaClient.hotel.create({
    data: hotelData,
  });

  return hotel;
};

export default {
  getAllHotels,
  getHotelById,
};
