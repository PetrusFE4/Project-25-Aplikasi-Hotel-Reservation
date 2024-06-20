import styled from "styled-components";

const Container = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

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

const Wrapper = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  margin-top: 5px;
  position: relative;
`;

const SliderButton = styled.button`
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.42);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  z-index: 1;
  cursor: pointer;

  &.leftBtn {
    left: -18px;
  }

  &.rightBtn {
    right: -18px;
  }

  &:disabled {
    display: none;
  }

  &:hover {
    transform: scale(1.04);
    .arrow-icon {
      color: black;
    }
  }

  .arrow-icon {
    color: gray;
    font-size: 21px;
  }
`;

const SlideContainer = styled.div`
  /* border: 3px solid red; */
  display: flex;
  overflow: hidden;
`;

const Slide = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  transition: all 0.3s ease-out;

  /* Link renders in DOM as a Anchor (a) Tag but behaves like a div tag.So here I'm using it like a div tag to apply css style*/
  .link {
    /* border: 4px solid black; */
    color: white;
    display: flex;
    justify-content: center;
    min-width: 305px;
    height: 250px;
    padding: 0px 6px;
    position: relative;

    @media screen and (max-width: 1025px) {
      min-width: 324px;
    }

    @media screen and (max-width: 950px) {
      min-width: 352px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Text = styled.div`
  /* border: 1px solid red; */
  position: absolute;
  bottom: 15px;
  left: 15px;
  color: white;
  background-color: #00000091;
  padding: 3px 10px;
  border-radius: 5px;

  span {
    font-size: 14px;
    color: #f4f2f2;
  }
`;

const Button = styled.button`
  /* Add your button styles here */
`;

export {
  Container,
  Wrapper,
  SliderButton,
  SlideContainer,
  Slide,
  Text,
  Button,
};
