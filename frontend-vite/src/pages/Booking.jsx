import React, { useState } from "react";
import styles from "./styled/Booking.styled";
import axios from "axios";
import { useParams } from "react-router-dom";

const BookingForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState("");

  const { id } = useParams();
  const hotelId = parseInt(id);
  const guestCount = parseInt(guests);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:5000/api/booking/${id}`,
        {
          name,
          email,
          checkInDate,
          checkOutDate,
          guests: guestCount,
          hotelId,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data.errors);
    }
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <label style={styles.label} htmlFor="name">
        Nama
      </label>
      <input
        style={styles.input}
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label style={styles.label} htmlFor="email">
        Email
      </label>
      <input
        style={styles.input}
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label style={styles.label} htmlFor="checkInDate">
        Tanggal Check-in
      </label>
      <input
        style={styles.input}
        type="date"
        id="checkInDate"
        name="checkInDate"
        value={checkInDate}
        onChange={(e) => setCheckInDate(e.target.value)}
        required
      />

      <label style={styles.label} htmlFor="checkOutDate">
        Tanggal Check-out
      </label>
      <input
        style={styles.input}
        type="date"
        id="checkOutDate"
        name="checkOutDate"
        value={checkOutDate}
        onChange={(e) => setCheckOutDate(e.target.value)}
        required
      />

      <label style={styles.label} htmlFor="guests">
        Jumlah Tamu
      </label>
      <input
        style={styles.input}
        type="number"
        id="guests"
        name="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />

      <button type="submit">Pesan Sekarang</button>
    </form>
  );
};

export default BookingForm;
