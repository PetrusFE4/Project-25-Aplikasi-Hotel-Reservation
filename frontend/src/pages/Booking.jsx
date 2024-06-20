import { useState, useEffect } from "react";
import { OtherContainer, Wrapper, Form } from "./styled/Booking.styled";
import { endpoint } from "../api.js";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useNavigate, useParams } from "react-router-dom";

const Booking = () => {
  const [userId, setUserId] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    startDate: "",
    endDate: "",
    guests: 2,
  });
  const { hotelId } = useParams();
  const [hotel, setHotel] = useState({});
  const navigate = useNavigate();

  const getHotel = async () => {
    try {
      const response = await axios.get(endpoint.getHotelById(hotelId));
      const hotelData = response.data;
      setHotel(hotelData);
      if (hotelData.roomLeft <= 0) {
        navigate("/hotels");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.startDate === formData.endDate) {
      alert("Start date and end date cannot be the same");
      return;
    }

    try {
      const confirmed = window.confirm(
        "Are you sure you want to book this hotel?"
      );
      if (!confirmed) {
        return;
      }

      const response = await axios.post(
        endpoint.bookingHotel,
        {
          name: formData.name,
          hotelId: hotelId,
          userId: userId,
          startDate: formData.startDate,
          endDate: formData.endDate,
          guests: formData.guests,
        },
        {
          withCredentials: true,
        }
      );

      setFormData({
        name: "",
        startDate: "",
        endDate: "",
        guests: 2,
      });

      const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";
      const clientKey = import.meta.env.VITE_MIDTRANS_CLIENT_KEY;
      const script = document.createElement("script");
      script.src = snapScript;
      document.head.appendChild(script);
      script.setAttribute("data-client-key", clientKey);
      script.onload = () => {
        window.snap.pay(response.data.token);
      };
    } catch (error) {
      console.error("Failed to book hotel", error);
    }
  };

  useEffect(() => {
    const verifyLogin = async () => {
      try {
        const response = await axios.get(endpoint.getCurrentUser, {
          withCredentials: true,
        });
        setUserId(response.data.data.id);
      } catch (error) {
        navigate("/login");
      }
    };
    verifyLogin();
    getHotel();
  }, [navigate]);

  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");

    return `${yyyy}-${mm}-${dd}`;
  };

  const todayDate = getTodayDate();

  return (
    <>
      <Navbar />

      <OtherContainer>
        <Wrapper>
          <h2>Booking Form</h2>
          <Form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              autoComplete="off"
            />

            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              id="startDate"
              value={formData.startDate}
              onChange={(e) =>
                setFormData({ ...formData, startDate: e.target.value })
              }
              required
              autoComplete="off"
              min={todayDate}
            />

            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              id="endDate"
              value={formData.endDate}
              onChange={(e) =>
                setFormData({ ...formData, endDate: e.target.value })
              }
              required
              autoComplete="off"
              min={todayDate}
            />

            <label htmlFor="guests">Guests</label>
            <input
              type="number"
              id="guests"
              value={formData.guests}
              onChange={(e) =>
                setFormData({ ...formData, guests: e.target.value })
              }
              required
              autoComplete="off"
              min="1"
            />

            <button type="submit">Booking</button>
          </Form>
        </Wrapper>
      </OtherContainer>
    </>
  );
};

export default Booking;
