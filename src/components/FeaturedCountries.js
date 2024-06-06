import { Link } from "react-router-dom";
import styled from "styled-components";
import { featuredCountryData } from "../dummyData";

const Container = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 426px) {
    margin-bottom: 10px;
  }

  h1 {
    font-size: 30px;
    margin-left: 2px;

    @media screen and (max-width: 1025px) {
      font-size: 25px;
    }
  }

  p {
    color: gray;
    font-size: 16px;
    margin: 2px 0px 12px 3px;

    @media screen and (max-width: 950px) {
      font-size: 15px;
    }
  }
`;

const Wrapper = styled.div`
  /* border: 3px solid black; */
  display: flex;
  flex-direction: column;
`;

const BigImgContainer = styled.div`
  /* border: 3px solid red; */
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 426px) {
    flex-direction: column;
  }
`;

const BigImg = styled.div`
  position: relative;
  width: 50%;
  height: 320px;
  overflow: hidden;

  @media screen and (max-width: 1025px) {
    height: 275px;
  }

  @media screen and (max-width: 426px) {
    width: 100%;
  }

  &:first-of-type {
    margin-right: 12px;
    @media screen and (max-width: 426px) {
      margin-right: 0px;
      margin-bottom: 12px;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease-in;

  &:hover {
    transform: scale(1.02);
  }
`;

const SmallImgContainer = styled(BigImgContainer)`
  /* border: 3px solid blue; */
  margin-top: 12px;
`;

const SmallImg = styled.div`
  position: relative;
  width: 34%;
  height: 320px;
  margin-right: 12px;
  overflow: hidden;

  @media screen and (max-width: 1025px) {
    height: 275px;
  }

  @media screen and (max-width: 950px) {
    height: 230px;
  }

  @media screen and (max-width: 426px) {
    width: 100%;
    margin: 0px 0px 12px;
  }

  &:last-of-type {
    margin-right: 0px;
  }
`;

const Text = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0px;
  padding: 3px 10px;
  color: white;
  background-color: #00000091;
  text-shadow: 0px 0px 8px rgba(0, 0, 0, 1);

  h4 {
    @media screen and (max-width: 950px) {
      font-size: 14px;
    }
  }

  span {
    font-size: 15px;
    color: #efeded;
    font-weight: 500;

    @media screen and (max-width: 950px) {
      font-size: 13px;
    }
  }
`;

const FeaturedCountries = () => {
  return (
    <Container>
      <h1>Explore World</h1>
      <p>Get inspiration for your next trip.</p>
      <Wrapper>
        <BigImgContainer>
          {featuredCountryData.slice(0, 2).map((country) => (
            <BigImg key={country.id}>
              <Link to="/hotels">
                <Image src={country.img} alt="" />
                <Text>
                  <h4>{country.country} :</h4>
                  <span>{country.desc.slice(0, 125)}...</span>
                </Text>
              </Link>
            </BigImg>
          ))}
        </BigImgContainer>

        <SmallImgContainer>
          {featuredCountryData.slice(2, 5).map((country) => (
            <SmallImg key={country.id}>
              <Link to="/hotels">
                <Image src={country.img} alt="" />
                <Text>
                  <h4>{country.country} :</h4>
                  <span>{country.desc.slice(0, 90)}...</span>
                </Text>
              </Link>
            </SmallImg>
          ))}
        </SmallImgContainer>
      </Wrapper>
    </Container>
  );
};

export default FeaturedCountries;
