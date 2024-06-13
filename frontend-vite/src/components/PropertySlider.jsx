import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { propertySliderData } from "../dummyData";
import {
  Container,
  Wrapper,
  SliderButton,
  SlideContainer,
  Slide,
  Text,
} from "./styled/PropertySlider.styled";

const PropertySlider = () => {
  const [slide, setSlide] = useState(4); //Set any number other than 0 and 8 for 12 Images Slider because if,it is 0 then left slider button will be disable and due to css property display:none; it will be invisible.Same thing will happen with right slider button if i set 8.

  // console.log(slide);

  const handleSlide = (direction) => {
    direction === "left"
      ? setSlide(slide > 0 ? slide - 1 : 8)
      : setSlide(slide < propertySliderData.length - 4 ? slide + 1 : 0);
  };
  return (
    <Container>
      <h1>Browse by property type</h1>
      <p>Find accommodations of your choice. </p>
      <Wrapper>
        <SliderButton
          className="leftBtn"
          onClick={() => handleSlide("left")}
          disabled={slide === 0}
        >
          <ArrowBack className="arrow-icon" />
        </SliderButton>

        <SliderButton
          className="rightBtn"
          onClick={() => handleSlide("right")}
          disabled={slide === 8}
        >
          <ArrowForward className="arrow-icon" />
        </SliderButton>

        <SlideContainer>
          {propertySliderData.map((city) => (
            <Slide
              key={city.id}
              style={{ transform: `translateX( -${slide * 100}% )` }}
            >
              <Link to="/hotels" className="link">
                <img src={city.img} alt="" />
                <Text>
                  <h3>{city.name}</h3>
                  <span>{city.property} Properties</span>
                </Text>
              </Link>
            </Slide>
          ))}
        </SlideContainer>
      </Wrapper>
    </Container>
  );
};

export default PropertySlider;
