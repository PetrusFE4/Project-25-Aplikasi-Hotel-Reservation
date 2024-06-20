const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const endpoint = {
  registerUser: `${API_BASE_URL}/api/users/register`,
  loginUser: `${API_BASE_URL}/api/users/login`,
  getHotels: `${API_BASE_URL}/api/hotels`,
  getHotelById: (id) => `${API_BASE_URL}/api/hotel/${id}`,
  getHotel: `${API_BASE_URL}/api/hotels`,
  getCurrentUser: `${API_BASE_URL}/api/users/current`,
  logoutUser: `${API_BASE_URL}/api/users/logout`,
  updateUser: `${API_BASE_URL}/api/users/update`,
  bookingHotel: `${API_BASE_URL}/api/booking`,
  getBookingByUser: (userId) => `${API_BASE_URL}/api/booking/${userId}`,
  getBooking: `${API_BASE_URL}/api/booking`,
  getAllUsers: `${API_BASE_URL}/api/users`,
  getHotelsByCity: (city) => `${API_BASE_URL}/api/hotels/${city}`,
  getFeaturedCities: `${API_BASE_URL}/api/featured-cities`,
};

export { endpoint };
