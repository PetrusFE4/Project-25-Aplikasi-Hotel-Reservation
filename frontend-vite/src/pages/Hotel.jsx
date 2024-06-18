import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HotelDetails from "../components/HotelDetails";
import HotelFeature from "../components/HotelFeature";
import ReviewSlider from "../components/ReviewSlider";
import {
  Container,
  MainContainer,
  Wrapper,
  HotelContainer,
} from "./styled/Hotel.styled";
import { useState, useEffect } from "react";
import axios from "axios";
import { endpoint } from "../api";
import { useLocation } from "react-router-dom";

const Hotel = () => {
  const [hotel, setHotel] = useState({});
  const location = useLocation();

  const getHotel = async () => {
    try {
      const hotelId = location.pathname.split("/")[2];
      const response = await axios.get(endpoint.getHotelById(hotelId));
      setHotel(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHotel();
  }, []);

  return (
    <Container>
      <Navbar />
      <MainContainer>
        <Wrapper>
          <HotelContainer>
            <HotelDetails hotel={hotel} />
          </HotelContainer>
        </Wrapper>
        <HotelFeature hotel={hotel} />
        <ReviewSlider hotel={hotel} />
      </MainContainer>
      <Footer />
    </Container>
  );
};

export default Hotel;
