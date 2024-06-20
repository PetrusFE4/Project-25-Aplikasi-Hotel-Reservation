import styled from "styled-components";

const Container = styled.div`
  background-image: linear-gradient(120deg, #2874f0 20%, #1958b2);
  border: 1px solid #003580;
  border-radius: 3px;
  min-width: 300px;
  padding: 15px;
  color: white;
  margin: 15px 0px;

  @media screen and (max-width: 340px) {
    min-width: 270px;
  }

  h2 {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 10px;
  }
`;

const Form = styled.form`
  /* border: 3px solid red; */
  display: flex;
  flex-direction: column;

  .search-icon {
    margin-right: 3px;
    font-size: 25px;
    height: 100%;
  }
`;

const LocationContainer = styled.div`
  /* border: 1px solid black; */
  color: #424d5f;
  margin-bottom: 10px;

  label {
    font-size: 13px;
    color: white;
  }
`;

const Wrapper = styled.div`
  /* border: 1px solid black; */
  background-color: white;
  display: flex;
  align-items: center;
  height: 40px;
  padding: 5px 5px 5px 2px;
  border-radius: 3px;

  input {
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    font-size: 14px;
    cursor: pointer;
  }
`;

const DateContainer = styled(LocationContainer)`
  /* border: 1px solid red; */
  position: relative;

  .calendar-span {
    /* border: 1px solid black; */
    font-size: 14px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .date-range {
    box-shadow: 0px 0px 3px -2px black;
    border: 1px solid #cbcbcb;
    border-radius: 3px;
    position: absolute;
    top: 62px;
    left: 0px;
    z-index: 1;

    @media screen and (max-width: 426px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const PersonContainer = styled(LocationContainer)`
  /* border: 1px solid red; */
  position: relative;

  .person-span {
    /* border: 1px solid black; */
    font-size: 14px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

const PersonQuantityContainer = styled.div`
  box-shadow: 0px 0px 3px -2px black;
  border: 1px solid #cbcbcb;
  border-radius: 3px;
  position: absolute;
  top: 63px;
  left: 0px;
  z-index: 10;
  background-color: white;
  padding: 10px 5px;

  @media screen and (max-width: 426px) {
    left: 50%;
    transform: translateX(-50%);
    padding: 5px;
  }
`;

const QuantityItem = styled.div`
  width: 280px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 426px) {
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

  @media screen and (max-width: 426px) {
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

  @media screen and (max-width: 426px) {
    height: 35px;
    width: 35px;
    font-size: 18px;
  }
`;

const CheckboxContainer = styled.div`
  /* border: 1px solid black; */
`;

const FirstCheckbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Checkbox = styled.div`
  input {
    margin-right: 7px;
    transform: scale(1.38);
  }

  label {
    font-size: 13px;
    cursor: pointer;
  }
`;

const HelpIconContainer = styled.span`
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px 0px;
  position: relative;

  &:hover span {
    visibility: visible;
  }

  .help-icon {
    color: white;
    font-size: 20px;
    cursor: pointer;
  }

  span {
    position: absolute;
    top: 30px;
    background-color: #00224f;
    color: white;
    font-size: 13px;
    width: 300px;
    text-align: center;
    padding: 7px;
    border-radius: 2px;
    z-index: 5;
    visibility: hidden;

    @media screen and (max-width: 925px) {
      right: 30px;
      top: 50%;
      transform: translateY(-50%);
      width: 230px;
    }
  }

  span::before {
    content: "";
    position: absolute;
    top: -15px;
    left: 50%;
    margin-left: -7px;
    border: 8px solid;
    border-color: transparent transparent #00224f transparent;

    @media screen and (max-width: 925px) {
      border-color: transparent transparent transparent #00224f;
      left: 230px;
      top: 50%;
      transform: translateY(-50%);
      margin: 0px;
    }
  }
`;

const SecondCheckbox = styled(FirstCheckbox)``;

const Button = styled.button`
  background-color: #003580;
  margin: 25px auto 10px;
  border: 1px solid #003580;
  width: 145px;
  padding: 9.5px;
  border-radius: 3px;
  font-size: 17px;
  color: white;
  cursor: pointer;
  transition: all 0.1s ease-in;

  &:hover {
    background-color: transparent;
    border: 1px solid white;
  }
`;

export {
  Container,
  Form,
  LocationContainer,
  Wrapper,
  DateContainer,
  PersonContainer,
  PersonQuantityContainer,
  QuantityItem,
  QuantityBtnContainer,
  CounterBtn,
  Quantity,
  CheckboxContainer,
  FirstCheckbox,
  Checkbox,
  HelpIconContainer,
  SecondCheckbox,
  Button,
};
