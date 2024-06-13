import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const endpoint = {
  registerUser: `${API_BASE_URL}/api/users/register`,
  loginUser: `${API_BASE_URL}/api/users/login`,
  getHotels: `${API_BASE_URL}/api/hotels`,
  getHotelById: (id) => `${API_BASE_URL}/api/hotels/${id}`,
};

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export {
  endpoint,
  // axiosInstance,
};
