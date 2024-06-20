import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import { endpoint } from "../api.js";
import {
  ProfileContainer,
  ProfileContainerTitle,
  EditButton,
  PopupContainer,
  PopupContent,
  CloseButton,
  Form,
  Input,
  BookingHistoryContainer,
  BookingHistoryTitle,
  BookingHistoryItem,
  BookingHistoryItemTitle,
  StyledTable,
  StyledThead,
  StyledTh,
  StyledTbody,
  StyledTd,
} from "./styled/Profile.styled.js";
import { CloseOutlined } from "@mui/icons-material";
import { formatDate, formatDateWithTime, formatPrice } from "../utils.js";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [bookingHistory, setBookingHistory] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isReviewing, setIsReviewing] = useState(false);
  const [currentBookingId, setCurrentBookingId] = useState(null);
  const [updatedUser, setUpdatedUser] = useState({ name: "", email: "" });
  const [review, setReview] = useState({ rating: 1, comment: "" });

  const getCurrentUser = async () => {
    try {
      const response = await axios.get(endpoint.getCurrentUser, {
        withCredentials: true,
      });
      return response.data.data;
    } catch (error) {
      navigate("/login");
      throw error;
    }
  };

  const getBookingHistory = async (userId) => {
    try {
      const response = await axios.get(endpoint.getBookingByUser(userId), {
        withCredentials: true,
      });
      setBookingHistory(response.data.data);
    } catch (error) {
      console.error("Failed to fetch booking history", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
        await getBookingHistory(currentUser.id);
      } catch (error) {
        console.error("Failed to fetch user or booking history", error);
      }
    };

    fetchData();
  }, []);

  const handleEditProfileClick = () => {
    setUpdatedUser({ name: user.name, email: user.email });
    setIsEditing(true);
  };

  const handleClosePopup = () => {
    setIsEditing(false);
    setIsReviewing(false);
  };

  const handleInputChangeProfile = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const handleFormSubmitUpdateUser = async (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure?")) {
      try {
        const id = user.id;
        const name = updatedUser.name;
        const email = updatedUser.email;
        const response = await axios.put(
          endpoint.updateUser,
          { id, name, email },
          { withCredentials: true }
        );
        alert(response.data.message);
        setUser(updatedUser);
        setIsEditing(false);
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };

  const handleCheckIn = async (bookingId) => {
    if (window.confirm("Are you sure?")) {
      try {
        const response = await axios.put(
          `${endpoint.bookingHotel}/${bookingId}/check-in`,
          {},
          { withCredentials: true }
        );
        alert(response.data.message);
        await getBookingHistory(user.id);
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };

  const handleCheckOut = async (bookingId) => {
    if (window.confirm("Are you sure?")) {
      try {
        const response = await axios.put(
          `${endpoint.bookingHotel}/${bookingId}/check-out`,
          {},
          { withCredentials: true }
        );
        alert(response.data.message);
        await getBookingHistory(user.id);
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };

  const handleAddReviewClick = (bookingId) => {
    setCurrentBookingId(bookingId);
    setIsReviewing(true);
  };

  const handleInputChangeReview = (e) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const handleFormSubmitReview = async (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to submit this review?")) {
      try {
        const response = await axios.post(
          `${endpoint.bookingHotel}/${currentBookingId}/review`,
          {
            rating: review.rating,
            userId: user.id,
            comment: review.comment,
          },
          { withCredentials: true }
        );
        alert(response.data.message);
        setIsReviewing(false);
        setReview({ rating: 1, comment: "" });
        await getBookingHistory(user.id);
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <ProfileContainer>
          <ProfileContainerTitle>Profile</ProfileContainerTitle>
          <p style={{ marginTop: "10px" }}>Name: {user.name}</p>
          <p style={{ marginTop: "5px" }}>Email: {user.email}</p>
          <EditButton onClick={handleEditProfileClick}>Edit Profile</EditButton>
        </ProfileContainer>

        <BookingHistoryContainer>
          <BookingHistoryTitle>Booking History</BookingHistoryTitle>
          {bookingHistory.map((booking, index) => (
            <BookingHistoryItem key={index}>
              <BookingHistoryItemTitle>
                {booking.hotel.name}
              </BookingHistoryItemTitle>
              <p style={{ fontSize: "14px", marginTop: "5px" }}>
                Booking Id: <strong>{booking.id}</strong>
              </p>
              <StyledTable>
                <StyledThead>
                  <tr>
                    <StyledTh>Name</StyledTh>
                    <StyledTh>Booking Date</StyledTh>
                    <StyledTh>Start Date</StyledTh>
                    <StyledTh>End Date</StyledTh>
                    <StyledTh>Guests</StyledTh>
                    <StyledTh>Price</StyledTh>
                    <StyledTh>Payment</StyledTh>
                    <StyledTh>Check-in At</StyledTh>
                    <StyledTh>Check-out At</StyledTh>
                    <StyledTh>Review</StyledTh>
                  </tr>
                </StyledThead>
                <StyledTbody>
                  <tr>
                    <StyledTd>{booking.name}</StyledTd>
                    <StyledTd>
                      {formatDateWithTime(booking.creation_time)}
                    </StyledTd>
                    <StyledTd>{formatDate(booking.startDate)}</StyledTd>
                    <StyledTd>{formatDate(booking.endDate)}</StyledTd>
                    <StyledTd>{booking.guests}</StyledTd>
                    <StyledTd>{formatPrice(booking.totalPrice)}</StyledTd>
                    <StyledTd>
                      {booking.isPaid ? (
                        "Success"
                      ) : (
                        <a
                          href={booking.paymentLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Pay Now
                        </a>
                      )}
                    </StyledTd>
                    <StyledTd>
                      {booking.checkInAt ? (
                        formatDateWithTime(booking.checkInAt)
                      ) : (
                        <button onClick={() => handleCheckIn(booking.id)}>
                          Check in now
                        </button>
                      )}
                    </StyledTd>
                    <StyledTd>
                      {booking.checkOutAt ? (
                        formatDateWithTime(booking.checkOutAt)
                      ) : (
                        <button onClick={() => handleCheckOut(booking.id)}>
                          Check out now
                        </button>
                      )}
                    </StyledTd>
                    <StyledTd>
                      {booking.reviews[0] ? (
                        <div>
                          <p>Rating: {booking.reviews[0]?.rating}</p>

                          <p>Comment: {booking.reviews[0]?.comment}</p>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleAddReviewClick(booking.id)}
                        >
                          Add review
                        </button>
                      )}
                    </StyledTd>
                  </tr>
                </StyledTbody>
              </StyledTable>
            </BookingHistoryItem>
          ))}
        </BookingHistoryContainer>

        {isEditing && (
          <PopupContainer>
            <PopupContent>
              <CloseButton onClick={handleClosePopup}>
                <CloseOutlined />
              </CloseButton>
              <h2>Edit Profile</h2>
              <Form onSubmit={handleFormSubmitUpdateUser}>
                <Input
                  type="text"
                  name="name"
                  value={updatedUser.name}
                  onChange={handleInputChangeProfile}
                  placeholder="Name"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  value={updatedUser.email}
                  onChange={handleInputChangeProfile}
                  placeholder="Email"
                  required
                />
                <EditButton type="submit">Update</EditButton>
              </Form>
            </PopupContent>
          </PopupContainer>
        )}

        {isReviewing && (
          <PopupContainer>
            <PopupContent>
              <CloseButton onClick={handleClosePopup}>
                <CloseOutlined />
              </CloseButton>
              <h2>Add Review</h2>
              <Form onSubmit={handleFormSubmitReview}>
                <Input
                  type="number"
                  name="rating"
                  value={review.rating}
                  onChange={handleInputChangeReview}
                  placeholder="Rating (1-5)"
                  min="1"
                  max="5"
                  required
                />
                <Input
                  type="text"
                  name="comment"
                  value={review.comment}
                  onChange={handleInputChangeReview}
                  placeholder="Comment"
                  required
                />
                <EditButton type="submit">Submit Review</EditButton>
              </Form>
            </PopupContent>
          </PopupContainer>
        )}
      </div>
    </>
  );
};

export default Profile;
