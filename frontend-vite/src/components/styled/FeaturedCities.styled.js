import styled from "styled-components";

const Container = styled.div`
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  margin: 30px 0px 25px;

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
    margin: 2px 0px 8px 3px;

    @media screen and (max-width: 950px) {
      font-size: 15px;
    }
  }
`;

const CardContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const Card = styled.div`
  /* border: 1px solid black; */
  box-shadow: 0px 0px 5px 2px rgb(0 0 0 / 10%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 32%;
  margin: 12px 0px;
  overflow: hidden;
  transition: all 0.2s ease;

  @media screen and (max-width: 620px) {
    width: 48%;
  }

  @media screen and (max-width: 426px) {
    width: 100%;
  }

  .link {
    text-decoration: none;
    color: black;
  }
  &:hover {
    transform: scale(1.02);
  }
`;

const ImgContainer = styled.div`
  /* border: 1px solid yellow; */
  width: 100%;
  height: 230px;

  @media screen and (max-width: 1025px) {
    height: 185px;
  }

  @media screen and (max-width: 950px) {
    height: 135px;
  }

  @media screen and (max-width: 426px) {
    height: 220px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const InfoContainer = styled.div`
  /* border: 1px solid red; */
  padding: 5px 13px 12px;
`;

const Country = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 20px;
    color: #54575d;

    @media screen and (max-width: 950px) {
      font-size: 17px;
    }
  }

  .flag-img {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    margin-left: 10px;
    object-fit: cover;
  }
`;

const Desc = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  height: 75px;
  overflow: hidden;
  margin-top: 5px;
  font-size: 14px;
  text-align: center;
  color: gray;

  @media screen and (max-width: 950px) {
    font-size: 13px;
    margin: 0px;
    padding: 5px;
  }
`;

const OtherInfo = styled.div`
  /* border: 1px solid black; */
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  color: #6f7278;

  @media screen and (max-width: 950px) {
    font-size: 13px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;

  .star-icon {
    color: #2061ca;
    font-size: 20px;

    @media screen and (max-width: 950px) {
      font-size: 12px;
    }
  }
`;

const ListedProperty = styled(Rating)`
  span {
    margin-left: 5px;
    font-weight: 500;
  }
`;

export {
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
};
