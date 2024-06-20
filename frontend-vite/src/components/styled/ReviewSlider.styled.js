import styled from "styled-components";

const Container = styled.div`
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
  display: flex;
  margin-top: 5px;
  position: relative;
  overflow: hidden;
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
  transform: translateY(-50%);

  &.leftBtn {
    left: 10px;
  }

  &.rightBtn {
    right: 10px;
  }

  &:disabled {
    display: none;
  }

  &:hover {
    transform: scale(1.04) translateY(-50%);
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
  display: flex;
  transition: all 0.3s ease-out;
`;

const Slide = styled.div`
  display: flex;
  width: 300px;
  padding: 15px;
  height: 185px;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 0 10px;
  background-color: white;
`;

const Review = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Username = styled.h2`
  font-size: 16px;
  margin-bottom: 5px;
`;

const Stars = styled.div`
  display: flex;
  margin-bottom: 5px;

  .star {
    color: gold;
  }
`;

const Comment = styled.p`
  font-size: 12px;
  color: #333;
`;

export {
  Container,
  Wrapper,
  SliderButton,
  SlideContainer,
  Slide,
  Review,
  Username,
  Stars,
  Comment,
};
