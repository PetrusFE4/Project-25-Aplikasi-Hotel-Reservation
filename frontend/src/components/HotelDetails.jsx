import {
  ArrowBackIos,
  ArrowForwardIos,
  Close,
  EnergySavingsLeafOutlined,
  LocationOn,
  Star,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Container,
  DetailsContainer,
  BoxBtnContainer,
  BoxesContainer,
  Box1,
  Box2,
  Box3,
  Box4,
  Box5,
  BtnContainer,
  AddressContainer,
  ImagesContainer,
  BigMedImgContainer,
  MedImgContainer,
  BigImgContainer,
  SamllImgContainer,
  Slider,
  Slides,
} from "./styled/HotelDetails.styled";

const HotelDetails = ({ hotel }) => {
  const [openSlider, setOpenSlider] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const handleImgClickForSlider = (indexNumber) => {
    setSlideNumber(indexNumber);
    setOpenSlider(true);
  };

  const handleSlide = (direction) => {
    if (direction === "right") {
      setSlideNumber(slideNumber === 0 ? 7 : slideNumber - 1);
    } else {
      setSlideNumber(slideNumber === 7 ? 0 : slideNumber + 1);
    }
  };

  const baseImageUrl = import.meta.env.VITE_API_BASE_URL;

  return (
    <Container>
      <DetailsContainer>
        <BoxBtnContainer>
          <BoxesContainer>
            <Box1>Hotel</Box1>
            <Box2>
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
            </Box2>
            <Box3>Siapa saja</Box3>
            <Box4>Bus Bandara</Box4>
            <Box5>
              <EnergySavingsLeafOutlined className="leaf-icon" /> Travel
              Sustainable Property
            </Box5>
          </BoxesContainer>
          <BtnContainer>
            {hotel.roomLeft <= 0 ? (
              <button disabled style={{ backgroundColor: "#1b5bb9" }}>
                Booking Now
              </button>
            ) : (
              <Link to={`/booking/${hotel.id}`}>
                <button>Booking Now</button>
              </Link>
            )}
          </BtnContainer>
        </BoxBtnContainer>
        <AddressContainer>
          <h2>{hotel.name}</h2>
          <p>
            <LocationOn className="location-icon" />
            {hotel.address}
          </p>
        </AddressContainer>
      </DetailsContainer>

      <ImagesContainer>
        <BigMedImgContainer>
          <MedImgContainer>
            {hotel.img?.slice(1, 3).map((imgSrc, index) => (
              <div key={index}>
                <img
                  src={baseImageUrl + "/images/" + imgSrc}
                  alt="hotel"
                  title="Lihat gambar"
                  onClick={() => handleImgClickForSlider(index + 1)}
                />
              </div>
            ))}
          </MedImgContainer>

          <BigImgContainer>
            <img
              src={baseImageUrl + "/images/" + hotel.img?.slice(0, 1)}
              alt="hotel"
              title="Lihat gambar"
              onClick={() => handleImgClickForSlider(0)}
            />
          </BigImgContainer>
        </BigMedImgContainer>

        <SamllImgContainer>
          {hotel.img?.slice(3, 8).map((imgSrc, index) => (
            <div key={index}>
              <img
                src={baseImageUrl + "/images/" + imgSrc}
                alt="hotel"
                title="Lihat gambar"
                onClick={() => handleImgClickForSlider(index + 3)}
              />
            </div>
          ))}
        </SamllImgContainer>
      </ImagesContainer>

      {openSlider && (
        <Slider>
          <Slides>
            <ArrowBackIos
              className="arrow-icon left"
              onClick={() => handleSlide("left")}
            />
            <ArrowForwardIos
              className="arrow-icon right"
              onClick={() => handleSlide("right")}
            />
            <Close
              className="close-icon"
              onClick={() => setOpenSlider(false)}
            />

            <img
              src={baseImageUrl + "/images/" + hotel.img[slideNumber]}
              alt="hotel"
            />
          </Slides>
        </Slider>
      )}
    </Container>
  );
};

export default HotelDetails;
