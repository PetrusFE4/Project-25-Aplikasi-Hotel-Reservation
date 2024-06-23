import {
  ExpandLessOutlined,
  ExpandMoreOutlined,
  NavigateNextOutlined,
  Star,
} from "@mui/icons-material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  FilterContainer,
  FilterButton,
  IconContainer,
  OptionsListContainer,
  HotelList,
  LeftContainer,
  ImgContainer,
  InfoContainer,
  Details,
  OfferInfo,
  Facilities,
  RightContainer,
  RatingContainer,
  StarIconContainer,
  PriceContainer,
  Price,
  Button,
} from "./styled/SearchedHotelsList.styled";
import axios from "axios";
import { endpoint } from "../api";

const SearchedHotelsList = () => {
  const [openList, setOpenList] = useState(false);
  const [hotels, setHotels] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  const getHotels = async () => {
    try {
      const response = await axios.get(endpoint.getHotels);
      setHotels(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getHotelsByCity = async (city) => {
    try {
      const response = await axios.get(endpoint.getHotelsByCity(city), {
        withCredentials: true,
      });
      setHotels(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectedCity) {
      getHotelsByCity(selectedCity);
    } else {
      getHotels();
    }
  }, [selectedCity]);

  const handleCitySelection = (city) => {
    setSelectedCity(city);
    setOpenList(false);
  };

  const baseImageUrl = import.meta.env.VITE_API_BASE_URL;

  const formatPrice = (price) => {
    return `Rp. ${price.toLocaleString("id-ID")}`;
  };

  return (
    <Container>
      <FilterContainer>
        <FilterButton onClick={() => setOpenList(!openList)}>
          Kota
          <IconContainer>
            <ExpandLessOutlined className="expand-icon" />
            <ExpandMoreOutlined className="expand-icon" />
          </IconContainer>
        </FilterButton>
        {openList && (
          <OptionsListContainer>
            <ul>
              <li>
                <option onClick={() => handleCitySelection("")}>All</option>
                <option onClick={() => handleCitySelection("Jakarta")}>
                  Jakarta
                </option>
                <option onClick={() => handleCitySelection("Bandung")}>
                  Bandung
                </option>
                <option onClick={() => handleCitySelection("Bali")}>
                  Bali
                </option>
                <option onClick={() => handleCitySelection("Yogyakarta")}>
                  Yogyakarta
                </option>
                <option onClick={() => handleCitySelection("Lombok")}>
                  Lombok
                </option>
                <option onClick={() => handleCitySelection("Surabaya")}>
                  Surabaya
                </option>
              </li>
            </ul>
          </OptionsListContainer>
        )}
      </FilterContainer>
      {hotels.map((hotel) => (
        <HotelList key={hotel.id}>
          <LeftContainer>
            <ImgContainer>
              <Link to={`/hotel/${hotel.id}`}>
                <img
                  src={"images/" + hotel.img[0]}
                  alt="hotel"
                  style={{
                    transform: "scale(1)",
                    transition: "transform 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                />
              </Link>
            </ImgContainer>
            <InfoContainer>
              <Details>
                <Link
                  to={`/hotel/${hotel.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <h2>{hotel.name}</h2>
                </Link>
              </Details>
              <OfferInfo>{hotel.offer}</OfferInfo>
              <Facilities>
                <h5>{hotel.roomDetails}</h5>
                <span>{hotel.bedDetails}</span>
                <h5 className="green">Pilih Hotel yang kamu suka</h5>
                <span>
                  You can cancel later, so lock in this great price today.
                </span>
                <h5 className="red">
                  Only {hotel.roomLeft} rooms left at this price on our site.
                </h5>
              </Facilities>
            </InfoContainer>
          </LeftContainer>
          <RightContainer>
            <RatingContainer>
              <h3>Review Rating</h3>
              <StarIconContainer>
                {(hotel.rating === 1 && <Star className="star-icon" />) ||
                  (hotel.rating === 2 && (
                    <>
                      <Star className="star-icon" />
                      <Star className="star-icon" />
                    </>
                  )) ||
                  (hotel.rating === 3 && (
                    <>
                      <Star className="star-icon" />
                      <Star className="star-icon" />
                      <Star className="star-icon" />
                    </>
                  )) ||
                  (hotel.rating === 4 && (
                    <>
                      <Star className="star-icon" />
                      <Star className="star-icon" />
                      <Star className="star-icon" />
                      <Star className="star-icon" />
                    </>
                  )) ||
                  (hotel.rating === 5 && (
                    <>
                      <Star className="star-icon" />
                      <Star className="star-icon" />
                      <Star className="star-icon" />
                      <Star className="star-icon" />
                      <Star className="star-icon" />
                    </>
                  ))}
              </StarIconContainer>
              <span>{hotel.reviewsCount} reviews</span>
            </RatingContainer>
            <PriceContainer>
              <Price>
                <span>
                  {hotel.night} Night, {hotel.adult} Adult,
                  {hotel.children > 0 && ` ${hotel.children} Children`}
                </span>
                <h2>{formatPrice(hotel.price)}</h2>
                <span>{hotel.otherCharges}</span>
              </Price>
              <Button>
                <Link to={"/hotel/" + hotel.id} className="link">
                  See Availability
                  <NavigateNextOutlined />
                </Link>
              </Button>
            </PriceContainer>
          </RightContainer>
        </HotelList>
      ))}
    </Container>
  );
};

export default SearchedHotelsList;
