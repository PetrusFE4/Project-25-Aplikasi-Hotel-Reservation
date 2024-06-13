import {
  ExpandLessOutlined,
  ExpandMoreOutlined,
  NavigateNextOutlined,
  Star,
} from "@mui/icons-material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { featuredCityData, hotelListDataBandung } from "../dummyData";
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

const SearchedHotelsList = () => {
  const [openList, setOpenList] = useState(false);
  const [sortBy, setSortBy] = useState("Our top picks");
  const [hotels, setHotels] = useState([]);

  // console.log(sortBy);

  const getHotels = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/hotels");
      const data = await res.json();
      setHotels(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHotels();
  }, []);

  const handleSortByAndOpenList = (e) => {
    setSortBy(e.target.value);
    setOpenList(false);
  };

  return (
    <Container>
      <h2>
        {featuredCityData[0].place} {featuredCityData.length} Pilihan Kota
      </h2>
      <FilterContainer>
        <FilterButton onClick={() => setOpenList(!openList)}>
          Cari dari: {sortBy}
          <IconContainer>
            <ExpandLessOutlined className="expand-icon" />
            <ExpandMoreOutlined className="expand-icon" />
          </IconContainer>
        </FilterButton>
        {openList === true && (
          <OptionsListContainer>
            <ul>
              <li>
                <option onClick={handleSortByAndOpenList}>Top Hotel</option>
              </li>

              <li>
                <option onClick={handleSortByAndOpenList}>Harga Murah</option>
              </li>

              <li>
                <option onClick={handleSortByAndOpenList}>Top Review</option>
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
                <img src={hotel.img[0]} alt="hotel" />
              </Link>
            </ImgContainer>
            <InfoContainer>
              <Details>
                <h2>{hotel.name}</h2>
                <span>{hotel.distance} Hotel Di kota Jakarta</span>
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
              <span>{hotel.reviews} reviews</span>
            </RatingContainer>
            <PriceContainer>
              <Price>
                <span>
                  {hotel.night} Night, {hotel.adult} Adult,
                  {hotel.children > 0 && ` ${hotel.children} Children`}
                </span>
                <h2>{hotel.price}</h2>
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
