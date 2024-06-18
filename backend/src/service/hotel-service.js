import { prismaClient } from "../application/database.js";

const getAllHotels = async () => {
  const hotelData = await prismaClient.hotel.findMany({
    include: {
      images: true,
    },
  });

  return hotelData.map((hotel) => ({
    id: hotel.id,
    img: hotel.images.map((image) => image.imgUrl),
    name: hotel.name,
    place: hotel.place,
    address: hotel.address,
    offer: hotel.offer,
    roomDetails: hotel.roomDetails,
    bedDetails: hotel.bedDetails,
    roomLeft: hotel.roomLeft,
    rating: hotel.rating,
    reviewsCount: hotel.reviewsCount,
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
      id: id,
    },
    include: {
      images: true,
      reviews: true,
    },
  });

  return {
    id: hotel.id,
    img: hotel.images.map((image) => image.imgUrl),
    name: hotel.name,
    place: hotel.place,
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

const getHotelByCity = async (city) => {
  const hotelData = await prismaClient.hotel.findMany({
    where: {
      place: city,
    },
    include: {
      images: true,
    },
  });

  return hotelData.map((hotel) => ({
    id: hotel.id,
    img: hotel.images.map((image) => image.imgUrl),
    name: hotel.name,
    place: hotel.place,
    address: hotel.address,
    offer: hotel.offer,
    roomDetails: hotel.roomDetails,
    bedDetails: hotel.bedDetails,
    roomLeft: hotel.roomLeft,
    rating: hotel.rating,
    reviewsCount: hotel.reviewsCount,
    night: hotel.night,
    adult: hotel.adult,
    children: hotel.children,
    price: hotel.price,
  }));
};

const getFeaturedCities = async () => {
  return await prismaClient.featuredCities.findMany();
};

export default {
  getAllHotels,
  getHotelById,
  getHotelByCity,
  getFeaturedCities,
};
