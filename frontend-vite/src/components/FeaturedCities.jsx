import { Star } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { featuredCityData } from "../dummyData";
import {
  Container,
  CardContainer,
  Card,
  ImgContainer,
  InfoContainer,
  Country,
  Desc,
  OtherInfo,
  Rating,
  IconContainer,
  ListedProperty,
} from "./styled/FeaturedCities.styled";

const FeaturedCities = () => {
  return (
    <Container>
      <h1>Destinasi Populer di Indonesia</h1>
      <p>These popular destinations have a lot to offer</p>
      <CardContainer>
        {featuredCityData.map((city) => (
          <Card key={city.id}>
            <Link to="/hotels" className="link">
              <ImgContainer>
                <img src={city.img} alt="" />
              </ImgContainer>
              <InfoContainer>
                <Country>
                  <h1>{city.name}</h1>
                  <img src={city.countryImg} alt="" className="flag-img" />
                </Country>
                <Desc>{`${city.desc.slice(0, 150)} ...`}</Desc>
                <OtherInfo>
                  <Rating>
                    <h4>Rating:</h4>
                    <IconContainer>
                      {(city.rating === 1 && <Star className="star-icon" />) ||
                        (city.rating === 2 && (
                          <>
                            <Star className="star-icon" />
                            <Star className="star-icon" />
                          </>
                        )) ||
                        (city.rating === 3 && (
                          <>
                            <Star className="star-icon" />
                            <Star className="star-icon" />
                            <Star className="star-icon" />
                          </>
                        )) ||
                        (city.rating === 4 && (
                          <>
                            <Star className="star-icon" />
                            <Star className="star-icon" />
                            <Star className="star-icon" />
                            <Star className="star-icon" />
                          </>
                        )) ||
                        (city.rating === 5 && (
                          <>
                            <Star className="star-icon" />
                            <Star className="star-icon" />
                            <Star className="star-icon" />
                            <Star className="star-icon" />
                            <Star className="star-icon" />
                          </>
                        ))}
                    </IconContainer>
                  </Rating>
                  <ListedProperty>
                    <h4>Hotels:</h4>
                    <span>{city.hotels}</span>
                  </ListedProperty>
                </OtherInfo>
              </InfoContainer>
            </Link>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
};

export default FeaturedCities;
