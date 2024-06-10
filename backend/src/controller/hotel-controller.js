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

const createHotel = async (req, res, next) => {
  try {
    const hotelData = await hotelService.createHotel(req.body);
    res.json(hotelData);
  } catch (e) {
    next(e);
  }
};

export default {
  getAllHotels,
  getHotelById,
  createHotel,
};
