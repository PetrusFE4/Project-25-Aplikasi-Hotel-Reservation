import { ArrowBack, ArrowForward, Star } from "@mui/icons-material";
import { useState } from "react";
import {
  Container,
  Wrapper,
  SliderButton,
  SlideContainer,
  Slide,
  Review,
  Username,
  Stars,
  Comment,
} from "./styled/ReviewSlider.styled";
import { censorName } from "../utils";

const ReviewSlider = ({ hotel }) => {
  const [slide, setSlide] = useState(0);
  const reviews = hotel.reviews;

  const handleSlide = (direction) => {
    if (direction === "left") {
      setSlide((prev) => (prev > 0 ? prev - 1 : prev));
    } else {
      setSlide((prev) => (prev < reviews?.length - 1 ? prev + 1 : prev));
    }
  };

  return (
    <Container>
      <h1>Reviews</h1>
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
          disabled={slide === reviews?.length - 1}
        >
          <ArrowForward className="arrow-icon" />
        </SliderButton>

        <SlideContainer style={{ transform: `translateX(-${slide * 200}px)` }}>
          {reviews?.map((review, index) => (
            <Slide key={index} className="review">
              <Review>
                <Username>{censorName(review.name)}</Username>
                <Stars>
                  {Array(review.rating)
                    .fill()
                    .map((_, i) => (
                      <Star key={i} className="star" />
                    ))}
                </Stars>
                <Comment>{review.comment}</Comment>
              </Review>
            </Slide>
          ))}
        </SlideContainer>
      </Wrapper>
    </Container>
  );
};

export default ReviewSlider;
