import hotelService from "../service/hotel-service.js";

const getAllHotels = async (req, res, next) => {
  try {
    const hotelData = await hotelService.getAllHotels();
    res.json(hotelData);
  } catch (e) {
    next(e);
  }
};

export default {
  getAllHotels,
};
