import styled from "styled-components";

const Container = styled.div`
  /* border: 1px solid red; */
  margin: 10px;

  @media screen and (max-width: 925px) {
    margin: 0px;
  }
`;

const FilterContainer = styled.div`
  /* border: 1px solid red; */
  position: relative;
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid #0083cc;
  color: #0083cc;
  border-radius: 20px;
  padding: 5px 15px;
  font-size: 15px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;

  &:active {
    box-shadow: 0 2px #666;
    transform: translateY(1px);
  }
`;

const IconContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  margin: 10px 0px 0px 4px;

  .expand-icon {
    /* border: 1px solid black; */
    font-size: 16px;
    margin-top: -10px;
  }
`;

const OptionsListContainer = styled.div`
  box-shadow: 0px 0px 3px -2px black;
  border: 1px solid #cbcbcb;
  border-radius: 3px;
  background-color: white;
  padding: 10px 0px;
  position: absolute;
  top: 43px;
  left: 0px;
  z-index: 1;

  ul {
    /* border: 1px solid black; */
    list-style-type: none;

    li {
      /* border: 1px solid black; */

      option {
        /* border: 1px solid black; */
        font-size: 15px;
        color: #4c4747;
        padding: 10px 25px;
        cursor: pointer;

        &:hover {
          background-color: #efefef;
        }
      }
    }
  }
`;

const HotelList = styled.div`
  border: 1px solid #c3e5fd;
  background-color: #ebf3ff;
  display: flex;
  justify-content: space-between;
  padding: 13px;
  margin: 15px 0px;
  border-radius: 3px;

  @media screen and (max-width: 925px) {
    margin: 15px 0px 0px;
  }

  @media screen and (max-width: 675px) {
    flex-direction: column;
    position: relative;
  }
`;

const LeftContainer = styled.div`
  display: flex;

  @media screen and (max-width: 675px) {
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  /* border: 3px solid red; */
  width: 250px;
  height: 250px;
  border-radius: 3px;
  overflow: hidden;

  @media screen and (max-width: 675px) {
    width: 100%;
  }

  @media screen and (max-width: 426px) {
    height: 200px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const InfoContainer = styled.div`
  /* border: 1px solid black; */
  padding: 0px 13px;

  @media screen and (max-width: 675px) {
    padding: 5px 0px;
    text-align: center;
  }
`;

const Details = styled.div`
  h2 {
    font-size: 20px;
    color: #0e71c2;
  }
  span {
    font-size: 13px;
    color: #262626;
  }
`;

const OfferInfo = styled.div`
  border-radius: 10px 0px 10px 0px;
  background-color: #008009;
  color: white;
  font-size: 12.5px;
  padding: 6px;
  width: 125px;
  text-align: center;
  margin: 20px 0px;

  @media screen and (max-width: 675px) {
    margin: 5px auto;
  }
`;

const Facilities = styled.div`
  border-left: 1px solid #a19bae;
  padding-left: 7px;

  @media screen and (max-width: 675px) {
    border: none;
    padding: 0px;
  }

  h5 {
    font-size: 13px;
    margin: 7px 0px;

    @media screen and (max-width: 675px) {
      margin: 3px 0px;
    }

    &.green {
      color: green;
    }

    &.red {
      color: #d33b1f;
    }
  }

  span {
    font-size: 13px;
  }
`;

const RightContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 675px) {
    flex-direction: row;
    margin-bottom: 42px;
  }
`;

const RatingContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-weight: 400;
    @media screen and (max-width: 346px) {
      font-size: 14px;
      font-weight: 500;
    }
  }

  span {
    font-size: 13px;
  }
`;

const StarIconContainer = styled.div`
  .star-icon {
    font-size: 22px;
    color: #fdbd0c;
    @media screen and (max-width: 346px) {
      font-size: 16px;
    }
  }
`;

const PriceContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Price = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    @media screen and (max-width: 675px) {
      order: -1;
    }

    @media screen and (max-width: 346px) {
      font-size: 20px;
    }
  }

  span {
    font-size: 13px;
    text-align: center;
    margin: 3px 0px;
  }
`;

const Button = styled.button`
  margin-top: 8px;
  width: 130px;
  border: none;
  border-radius: 3px;
  background-color: #0071c2;

  @media screen and (max-width: 675px) {
    position: absolute;
    bottom: 13px;
    left: 50%;
    transform: translateX(-50%);
  }

  &:hover {
    background-color: #055f9f;
  }

  .link {
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: white;
    font-size: 14px;
    padding: 5px 0px 5px 8px;
  }
`;

export {
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
};
