import { Star } from "@mui/icons-material";
import { Link } from "react-router-dom";
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
import axios from "axios";
import { useEffect, useState } from "react";
import { endpoint } from "../api";

const FeaturedCities = () => {
  const [featuredCities, setFeaturedCities] = useState([]);

  useEffect(() => {
    const fetchFeaturedCities = async () => {
      try {
        const response = await axios.get(endpoint.getFeaturedCities);
        setFeaturedCities(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFeaturedCities();
  }, []);

  const baseImageUrl = import.meta.env.VITE_API_BASE_URL;

  return (
    <Container>
      <h1>Destinasi Populer di Indonesia</h1>
      <p>These popular destinations have a lot to offer</p>
      <CardContainer>
        {featuredCities.map((city) => (
          <Card key={city.id}>
            <Link to="/hotels" className="link">
              <ImgContainer>
                <img src={baseImageUrl + "/images/" + city.img} alt="" />
              </ImgContainer>
              <InfoContainer>
                <Country>
                  <h1>{city.name}</h1>
                  <img
                    src={baseImageUrl + "/images/" + city.countryImg}
                    alt=""
                    className="flag-img"
                  />
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
