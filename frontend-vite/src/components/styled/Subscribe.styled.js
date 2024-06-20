import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 320px;
  position: relative;
  overflow: hidden;
  padding: 0px 20px 0px 120px;

  @media screen and (max-width: 1025px) {
    height: 285px;
  }

  @media screen and (max-width: 950px) {
    height: 230px;
  }
`;
const BlueCircle = styled.div`
  width: 80px;
  height: 80px;
  background-color: #1675de;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: 20px;
  animation: changeBlueCircle 3s infinite;

  @keyframes changeBlueCircle {
    50% {
      background-color: #feba02;
    }
    100% {
      background-color: #1675de;
    }
  }
`;
const YellowCircle = styled.div`
  width: 115px;
  height: 115px;
  background-color: #feba02;
  border-radius: 50%;
  position: absolute;
  bottom: 50px;
  left: -40px;
  animation: changeYellowCircle 3s infinite;

  @keyframes changeYellowCircle {
    50% {
      background-color: #1675de;
    }
    100% {
      background-color: #feba02;
    }
  }
`;
const BigBlueCircle = styled.div`
  background-color: #1675de;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 520px;
  height: 520px;

  @media screen and (max-width: 950px) {
    width: 225px;
    height: 225px;
  }

  @media screen and (max-width: 426px) {
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

const TextContainer = styled.div`
  /* border: 1px solid red; */
  color: white;
  text-align: center;
  margin-bottom: 15px;

  h1 {
    @media screen and (max-width: 950px) {
      font-size: 20px;
    }
  }

  span {
    @media screen and (max-width: 950px) {
      font-size: 13px;
      font-weight: 500;
    }
  }
`;

const BtnContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;

  .link:first-of-type {
    margin-right: 15px;
  }

  button {
    border: 1px solid white;
    background-color: white;
    width: 105px;
    padding: 9px 10px;
    color: #1675de;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;

    @media screen and (max-width: 950px) {
      border: 1px solid #1675de;
      padding: 7px;
      font-size: 13px;
    }

    &:hover {
      color: white;
      background-color: transparent;

      @media screen and (max-width: 950px) {
        color: #1675de;
        background-color: white;
      }
    }
  }
`;

const ImgContainer = styled.div`
  /* border: 1px solid black; */
  width: 440px;
  margin-left: 50px;

  @media screen and (max-width: 950px) {
    margin-left: 25px;
  }

  @media screen and (max-width: 426px) {
    display: none;
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export {
  Container,
  BlueCircle,
  YellowCircle,
  BigBlueCircle,
  TextContainer,
  BtnContainer,
  ImgContainer,
};
