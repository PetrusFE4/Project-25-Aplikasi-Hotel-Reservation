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

const createHotel = async () => {
  const hotel = await prismaClient.hotel.create({
    name: "The Residences of The Ritz-Carlton Jakarta Pacific Place",
    place: "Jakarta",
    distance: 6.7,
    address: "Jalan Jendral Sudirman Kav. 52-53, 12190 Jakarta, Indonesia",
    offer: "Breakfast Included",
    roomDetails: "Luxury Room with Bath Tub",
    bedDetails: "1 king size single bed",
    roomLeft: 5,
    rating: 5,
    reviews: 312,
    night: 1,
    adult: 2,
    children: 1,
    price: 3150000,
  });

  const hotelImages = await prismaClient.image.createMany({});

  const location = await prismaClient.location.create({});
};

export default {
  getAllHotels,
  getHotelById,
  createHotel,
};
