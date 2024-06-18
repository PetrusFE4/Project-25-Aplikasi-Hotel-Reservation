import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import { endpoint } from "../api.js";
import {
  DashboardContainer,
  DashboardTitle,
  DashboardItem,
  DashboardItemTitle,
  StyledTable,
  StyledThead,
  StyledTh,
  StyledTbody,
  StyledTd,
} from "./styled/Dashboard.styled.js";
import { formatDate, formatDateWithTime, formatPrice } from "../utils.js";

const Dashboard = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [hotels, setHotels] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get(endpoint.getAllUsers, {
        withCredentials: true,
      });
      setUsers(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getBookings = async () => {
    try {
      const response = await axios.get(endpoint.getBooking, {
        withCredentials: true,
      });
      setBookings(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getHotels = async () => {
    try {
      const response = await axios.get(endpoint.getHotel, {
        withCredentials: true,
      });
      setHotels(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCurrentUser = async () => {
    try {
      const response = await axios.get(endpoint.getCurrentUser, {
        withCredentials: true,
      });
      if (response.data.data.role !== "ADMIN") {
        navigate("/profile");
      }
    } catch (error) {
      navigate("/login");
    }
  };

  useEffect(() => {
    getCurrentUser();
    getUsers();
    getBookings();
    getHotels();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <DashboardContainer>
          <DashboardTitle>Admin Dashboard</DashboardTitle>
          <DashboardItem>
            <DashboardItemTitle>User List</DashboardItemTitle>
            <StyledTable>
              <StyledThead>
                <tr>
                  <StyledTh>Name</StyledTh>
                  <StyledTh>Email</StyledTh>
                  <StyledTh>Role</StyledTh>
                </tr>
              </StyledThead>
              <StyledTbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <StyledTd>{user.name}</StyledTd>
                    <StyledTd>{user.email}</StyledTd>
                    <StyledTd>{user.role}</StyledTd>
                  </tr>
                ))}
              </StyledTbody>
            </StyledTable>
          </DashboardItem>

          <DashboardItem>
            <DashboardItemTitle>Booking List</DashboardItemTitle>
            <StyledTable>
              <StyledThead>
                <tr>
                  <StyledTh>Hotel</StyledTh>
                  <StyledTh>Name</StyledTh>
                  <StyledTh>Booking Date</StyledTh>
                  <StyledTh>Start Date</StyledTh>
                  <StyledTh>End Date</StyledTh>
                  <StyledTh>Guests</StyledTh>
                  <StyledTh>Price</StyledTh>
                  <StyledTh>Check-in At</StyledTh>
                  <StyledTh>Check-out At</StyledTh>
                </tr>
              </StyledThead>
              <StyledTbody>
                {bookings.map((booking, index) => (
                  <tr key={index}>
                    <StyledTd>{booking.hotel.name}</StyledTd>
                    <StyledTd>{booking.name}</StyledTd>
                    <StyledTd>
                      {formatDateWithTime(booking.creation_time)}
                    </StyledTd>
                    <StyledTd>{formatDate(booking.startDate)}</StyledTd>
                    <StyledTd>{formatDate(booking.endDate)}</StyledTd>
                    <StyledTd>{booking.guests}</StyledTd>
                    <StyledTd>{formatPrice(booking.totalPrice)}</StyledTd>
                    <StyledTd>
                      {booking.checkInAt &&
                        formatDateWithTime(booking.checkInAt)}
                    </StyledTd>
                    <StyledTd>
                      {booking.checkOutAt &&
                        formatDateWithTime(booking.checkOutAt)}
                    </StyledTd>
                  </tr>
                ))}
              </StyledTbody>
            </StyledTable>
          </DashboardItem>

          <DashboardItem>
            <DashboardItemTitle>Hotel List</DashboardItemTitle>
            <StyledTable>
              <StyledThead>
                <tr>
                  <StyledTh>Name</StyledTh>
                  <StyledTh>City</StyledTh>
                  <StyledTh>Address</StyledTh>
                  <StyledTh>Room Left</StyledTh>
                  <StyledTh>Price/night</StyledTh>
                </tr>
              </StyledThead>
              <StyledTbody>
                {hotels.map((hotel, index) => (
                  <tr key={index}>
                    <StyledTd>{hotel.name}</StyledTd>
                    <StyledTd>{hotel.place}</StyledTd>
                    <StyledTd>{hotel.address}</StyledTd>
                    <StyledTd>{hotel.roomLeft}</StyledTd>
                    <StyledTd>{formatPrice(hotel.price)}</StyledTd>
                  </tr>
                ))}
              </StyledTbody>
            </StyledTable>
          </DashboardItem>
        </DashboardContainer>
      </div>
    </>
  );
};

export default Dashboard;
