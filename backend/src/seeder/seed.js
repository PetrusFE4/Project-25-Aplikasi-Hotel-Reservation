import { prismaClient } from "../application/database.js";
import { dataHotel, dataHotelImage, dataHotelLocation } from "./data.js";

const seed = async () => {
  await prismaClient.hotel.createMany({
    data: dataHotel,
    skipDuplicates: true,
  });
  await prismaClient.hotelImage.createMany({
    data: dataHotelImage,
    skipDuplicates: false,
  });
  await prismaClient.hotelLocation.createMany({
    data: dataHotelLocation,
  });
};

seed()
  .catch((e) => {
    console.error(e);
    prismaClient.$disconnect();
  })
  .finally(() => {
    prismaClient.$disconnect();
  });
