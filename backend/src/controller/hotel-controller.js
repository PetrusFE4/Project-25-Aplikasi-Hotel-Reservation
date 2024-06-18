import hotelService from "../service/hotel-service.js";

const getAllHotels = async (req, res, next) => {
  try {
    const hotelData = await hotelService.getAllHotels();
    res.json(hotelData);
  } catch (e) {
    next(e);
  }
};

const getHotelById = async (req, res, next) => {
  try {
    const hotelData = await hotelService.getHotelById(req.params.id);
    res.json(hotelData);
  } catch (e) {
    next(e);
  }
};

const getHotelByCity = async (req, res, next) => {
  try {
    const hotelData = await hotelService.getHotelByCity(req.params.city);
    res.json(hotelData);
  } catch (e) {
    next(e);
  }
};

const getFeaturedCities = async (req, res, next) => {
  try {
    const featuredCities = await hotelService.getFeaturedCities();
    res.json(featuredCities);
  } catch (e) {
    next(e);
  }
};

export default {
  getAllHotels,
  getHotelById,
  getHotelByCity,
  getFeaturedCities,
};
