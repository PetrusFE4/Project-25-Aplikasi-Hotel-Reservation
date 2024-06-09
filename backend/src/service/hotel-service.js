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

export default {
  getAllHotels,
};
