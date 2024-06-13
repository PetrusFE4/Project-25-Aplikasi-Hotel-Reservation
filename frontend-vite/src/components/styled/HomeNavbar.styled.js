import styled from "styled-components";

const Container = styled.div`
  /* border: 3px solid green; */
  margin-bottom: 80px;

  @media screen and (max-width: 1200px) {
    margin-bottom: 75px;
  }

  @media screen and (max-width: 675px) {
    margin-bottom: 35px;
  }
`;

const TopContainer = styled.div`
  /* border: 1px solid red; */
  position: relative;
`;

const VideoContainer = styled.video`
  width: 100%;
  z-index: -1;
`;

const Wrapper = styled.header`
  /* border: 1px solid blue; */
  /* background-image: linear-gradient(90deg, #1958b2, #003580); */
  color: white;
  padding: 0px 150px;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  top: 0px;
  z-index: 11;

  @media screen and (max-width: 1200px) {
    padding: 0px 30px;
  }

  @media screen and (max-width: 950px) {
    padding: 0px 15px;
  }
`;

const NavContainer = styled.nav`
  /* border: 1px solid yellow; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`;

const LogoContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  flex: 1;

  span {
    /* border: 1px solid black; */
    width: 175px;
    font-size: 30px;
    font-weight: 600;

    @media screen and (max-width: 950px) {
      width: 145px;
      font-size: 25px;
    }
  }
`;

const BtnContainer = styled.div`
  /* border: 1px solid black; */
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 675px) {
    display: none;
  }

  span {
    font-size: 17px;
    margin: 0px 20px;
    cursor: pointer;
  }

  img {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    margin-right: 20px;
    cursor: pointer;
  }

  .help-icon {
    font-size: 28px;
    margin-right: 20px;
    cursor: pointer;
  }
`;

const Button = styled.button`
  border: 1px solid white;
  background-color: white;
  width: 80px;
  padding: 9px 10px;
  margin-right: 10px;
  color: #1675de;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;

  @media screen and (max-width: 950px) {
    padding: 7px;
    margin-right: 7px;
    font-size: 13px;
    width: 70px;
  }

  &:hover {
    color: white;
    background-color: transparent;
  }

  &.bigBtn {
    background-color: transparent;
    color: white;
    width: 150px;

    @media screen and (max-width: 950px) {
      width: 125px;
    }

    &:hover {
      background-color: #00000061;
    }
  }
`;

// ----------------Mobile Hamburger Icon Style--------------------

const ImgAndHamburgerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (min-width: 675px) {
    display: none;
  }

  img {
    background-color: whitesmoke;
    border-radius: 50%;
    width: 38px;
    height: 38px;
    object-fit: cover;
  }

  .hamburger {
    /* border: 1px solid red; */
    width: 32px;
    height: 27px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-left: 20px;
    cursor: pointer;

    span {
      background-color: white;
      width: 100%;
      height: 4px;
      transform-origin: left;
      transition: all 0.2s ease;
    }
  }

  .close-hamburger {
    span {
      &:first-of-type {
        transform: rotate(45deg);
      }

      &:nth-of-type(2) {
        opacity: 0;
      }

      &:last-of-type {
        transform: rotate(-45deg);
      }
    }
  }
`;

// ----------------End of Hamburger Style---------------------

const SecondNavContainer = styled.nav`
  /* border: 1px solid yellow; */
  display: flex;
  align-items: center;
  height: 77px;

  @media screen and (max-width: 950px) {
    height: 50px;
  }

  /* For Mobile Phone etc */
  @media screen and (max-width: 675px) {
    background-color: #00224f;
    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    top: 60px;
    right: 0px;
    width: 100vw;
    height: calc(100vh - 60px);
    overflow-y: scroll;
    padding: 10px 30px;
    transform: translateX(${({ openmenu }) => (openmenu ? 0 : 100)}vw);
    transition: all 0.2s ease-out;
  }

  h3 {
    padding: 15px 5px;
    border-bottom: 1px solid #4f5874;
    width: 100%;
    display: none;
    @media screen and (max-width: 675px) {
      display: block;
    }
  }

  ul {
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    list-style: none;

    &.hidden-ul {
      display: none;
      @media screen and (max-width: 675px) {
        display: flex;
      }
    }

    /* For Mobile Phone etc*/
    @media screen and (max-width: 675px) {
      flex-direction: column;
      align-items: flex-start;
      order: 2;
      width: 100%;
      border-bottom: 1px solid #4f5874;
      padding: 5px 0px;

      &:last-child {
        border-bottom: none;
      }
    }

    .link {
      text-decoration: none;
      color: white;

      /* For Mobile Phone etc*/
      @media screen and (max-width: 675px) {
        margin: 5px 0px;
      }
    }

    li {
      border: 1px solid transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 15px;
      padding: 10px 14px;
      font-size: 18px;
      cursor: pointer;

      @media screen and (max-width: 1025px) {
        margin-right: 5px;
        padding: 6px 12px;
        font-size: 15px;
      }

      @media screen and (max-width: 950px) {
        margin-right: 3px;
        padding: 2px 7px;
        font-size: 14px;
      }

      /* For Mobile Phone etc*/
      @media screen and (max-width: 675px) {
        border: none;
        background-color: transparent;
      }

      &:hover {
        border: 1px solid white;
        border-radius: 30px;

        /* For Mobile Phone */
        @media screen and (max-width: 675px) {
          border: none;
          border-radius: 0px;
        }
      }

      &.active {
        border: 1px solid white;
        border-radius: 30px;

        /* For Mobile Phone */
        @media screen and (max-width: 675px) {
          border: none;
          border-radius: 0px;
        }
      }

      .li-icon {
        margin-right: 8px;

        /* For Mobile Phone */
        @media screen and (max-width: 675px) {
          margin-right: 12px;
          /* color: #2874f0; */
        }
      }
    }
  }
`;

const OfferContainer = styled.div`
  /* border: 1px solid yellow; */
  background-color: #00000021;
  border-radius: 15px;
  margin-top: 50px;
  padding: 20px 10px;
  text-align: center;

  @media screen and (max-width: 1200px) {
    margin-top: 5px;
    padding: 10px;
  }

  @media screen and (max-width: 525px) {
    margin: 0px;
    padding: 2px;
  }

  h2 {
    font-size: 30px;

    @media screen and (max-width: 950px) {
      font-size: 22px;
    }

    @media screen and (max-width: 525px) {
      font-size: 13px;
      font-weight: 500;
    }

    @media screen and (max-width: 355px) {
      display: none;
    }
  }

  h1 {
    margin: 0px 0px 20px;
    font-size: 66px;

    @media screen and (max-width: 1200px) {
      margin: 0px 0px 15px;
      font-size: 55px;
    }

    @media screen and (max-width: 950px) {
      font-size: 32px;
      margin: 0px 0px 5px;
    }

    @media screen and (max-width: 525px) {
      font-size: 15px;
    }

    @media screen and (max-width: 370px) {
      font-size: 13px;
      font-weight: 500;
    }
  }
`;

const OfferButton = styled(Button)`
  background-color: #00000061;
  color: white;
  width: 150px;
  padding: 10px;

  @media screen and (max-width: 950px) {
    padding: 7px;
    width: 125px;
  }

  @media screen and (max-width: 370px) {
    padding: 5px;
    width: 118px;
  }

  &:hover {
    background-color: transparent;
  }
`;

const SearchContainer = styled.div`
  /* border: 1px solid red; */
  padding: 0px 150px;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: -30px;

  @media screen and (max-width: 1200px) {
    padding: 0px 30px;
  }

  @media screen and (max-width: 950px) {
    height: 50px;
    bottom: -24px;
  }

  @media screen and (max-width: 675px) {
    display: none;
  }

  .search-icon {
    /* border: 1px solid black; */
    margin-right: 5px;
    font-size: 27px;
    height: 100%;

    @media screen and (max-width: 950px) {
      margin-right: 3px;
      font-size: 22px;
    }
  }
`;

const LocationContainer = styled.div`
  background-color: white;
  border: 5px solid #3d91ff;
  border-radius: 5px 0px 0px 5px;
  display: flex;
  flex: 1;
  align-items: center;
  height: 60px;
  padding: 0px 5px;
  color: #424d5f;

  @media screen and (max-width: 950px) {
    border: 4px solid #3d91ff;
    height: 50px;
    padding: 0px 2px;
  }

  input {
    border: none;
    outline: none;
    width: 85%;
    padding: 5px 4px;
    font-size: 15px;
    cursor: pointer;

    @media screen and (max-width: 950px) {
      font-size: 13px;
      padding: 0px;
    }
  }
`;

const DateContainer = styled(LocationContainer)`
  position: relative;
  border-left: none;
  border-radius: 0px;

  .calendar-span {
    /* border: 1px solid black; */
    font-size: 14px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;

    @media screen and (max-width: 950px) {
      font-size: 12px;
    }
  }

  .date-range {
    box-shadow: 0px 0px 3px -2px black;
    border: 1px solid #cbcbcb;
    border-radius: 3px;
    position: absolute;
    top: 60px;
    left: -5px;
    z-index: 12;

    @media screen and (max-width: 950px) {
      top: 50px;
      left: -3px;
    }
  }
`;

const PersonContainer = styled(LocationContainer)`
  position: relative;
  border-left: none;
  border-radius: 0px;

  .person-span {
    /* border: 1px solid black; */
    font-size: 14px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;

    @media screen and (max-width: 950px) {
      font-size: 12px;
    }
  }
`;

const PersonQuantityContainer = styled.div`
  box-shadow: 0px 0px 3px -2px black;
  border: 1px solid #cbcbcb;
  border-radius: 3px;
  position: absolute;
  top: 60px;
  left: -2px;
  z-index: 13;
  background-color: white;
  padding: 10px 5px;

  @media screen and (max-width: 950px) {
    top: 50px;
    padding: 5px;
  }
`;

const QuantityItem = styled.div`
  width: 280px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 950px) {
    width: 215px;
    font-size: 13px;
  }
`;

const QuantityBtnContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CounterBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  width: 40px;
  font-size: 20px;
  border-radius: 20px;
  background-color: #3d91ff;
  color: white;
  border: 1px solid #347ede;
  cursor: pointer;

  @media screen and (max-width: 950px) {
    height: 21px;
    width: 35px;
    font-size: 17px;
  }

  &:disabled {
    cursor: default;

    &:hover {
      background-color: #3d91ff;
      color: white;
    }
  }

  &:hover {
    background-color: white;
    color: #3d91ff;
  }
`;

const Quantity = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 45px;
  font-size: 20px;
  font-weight: 600;
  border: 1px solid #3d91ff;
  border-radius: 50%;
  margin: 0px 10px;
  background-color: white;
  color: #3d91ff;
  cursor: default;

  @media screen and (max-width: 950px) {
    height: 35px;
    width: 35px;
    font-size: 18px;
  }
`;

const SearchBtnContainer = styled(LocationContainer)`
  border-left: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 5px 5px 0px;

  .search-btn-link {
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;
  }

  button {
    border: none;
    width: 100%;
    height: 100%;
    font-size: 20px;
    color: #347ede;
    font-weight: 600;
    background-color: white;
    cursor: pointer;

    @media screen and (max-width: 950px) {
      font-size: 18px;
    }

    &:hover {
      color: #424d5f;
    }
  }
`;

export {
  Container,
  TopContainer,
  VideoContainer,
  Wrapper,
  NavContainer,
  LogoContainer,
  BtnContainer,
  Button,
  ImgAndHamburgerContainer,
  SecondNavContainer,
  OfferContainer,
  OfferButton,
  SearchContainer,
  LocationContainer,
  DateContainer,
  PersonContainer,
  PersonQuantityContainer,
  QuantityItem,
  QuantityBtnContainer,
  CounterBtn,
  Quantity,
  SearchBtnContainer,
};
