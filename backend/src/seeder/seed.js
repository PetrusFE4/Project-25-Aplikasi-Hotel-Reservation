import { prismaClient } from "../application/database.js";
import { dataHotel, dataHotelImage, featuredCityData } from "./data.js";

const seed = async () => {
  // await prismaClient.hotel.createMany({
  //   data: dataHotel,
  //   skipDuplicates: true,
  // });
  // await prismaClient.hotelImage.createMany({
  //   data: dataHotelImage,
  //   skipDuplicates: false,
  // });
  await prismaClient.featuredCities.createMany({
    data: featuredCityData,
    skipDuplicates: true,
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
