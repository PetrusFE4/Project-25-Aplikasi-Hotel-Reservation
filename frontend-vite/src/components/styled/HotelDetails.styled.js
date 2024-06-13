import styled from "styled-components";

const Container = styled.div`
  /* border: 1px solid red; */
  margin: 15px 0px 15px 8px;

  @media screen and (max-width: 865px) {
    margin: 20px 0px;
  }
`;

const DetailsContainer = styled.div`
  /* border: 1px solid blue; */
`;

const BoxBtnContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 426px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const BoxesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Box1 = styled.div`
  background-color: #7f7f7f;
  text-align: center;
  width: 90px;
  color: white;
  padding: 5px 8px;
  margin: 0px 5px 5px 0px;
  font-size: 12px;
  border-radius: 2px;
`;

const Box2 = styled(Box1)`
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 128px;
  padding: 2.5px;

  .star-icon {
    font-size: 20px;
    color: #fdbd0c;
  }
`;

const Box3 = styled(Box1)`
  background-color: #f2f2f2;
  color: #262626;
  width: 145px;
`;

const Box4 = styled(Box3)`
  width: 100px;
`;

const Box5 = styled(Box1)`
  background-color: #e7fde9;
  color: #509b62;
  width: 182px;
  display: flex;
  align-items: center;
  justify-content: center;

  .leaf-icon {
    font-size: 16px;
    margin-right: 3px;
  }
`;

const BtnContainer = styled.div`
  /* border: 1px solid red; */

  button {
    background-color: #003580;
    color: white;
    font-size: 15px;
    font-weight: 600;
    width: 130px;
    padding: 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background-color: #1b5bb9;
    }
  }
`;

const AddressContainer = styled.div`
  /* border: 1px solid red; */
  margin: 15px 0px;

  @media screen and (max-width: 426px) {
    text-align: center;
  }

  h2 {
    color: #333;
    margin-left: 5px;

    @media screen and (max-width: 426px) {
      margin: 0px;
    }
  }

  p {
    display: flex;
    align-items: center;
    font-size: 15px;
    color: #262626;
    margin: 3px 0px;

    @media screen and (max-width: 426px) {
      align-items: flex-start;
      justify-content: center;
    }

    .location-icon {
      color: #0368c1;
    }
  }
`;

const ImagesContainer = styled.div`
  /* border: 1px solid blue; */
`;

const BigMedImgContainer = styled.div`
  display: flex;
`;

const MedImgContainer = styled.div`
  /* border: 1px solid black; */
  flex: 1;

  div {
    height: 175px;
    width: 100%;
    margin-bottom: 10px;
    overflow: hidden;

    @media screen and (max-width: 426px) {
      height: 132px;
      margin-bottom: 5px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.3s ease;
      cursor: pointer;

      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;

const BigImgContainer = styled.div`
  height: 360px;
  flex: 2;
  margin: 0px 0px 10px 10px;
  overflow: hidden;

  @media screen and (max-width: 426px) {
    height: 270px;
    margin: 0px 0px 5px 5px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const SamllImgContainer = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    flex: 1;
    height: 110px;
    margin-right: 10px;
    overflow: hidden;

    @media screen and (max-width: 426px) {
      height: 70px;
      margin-right: 5px;
    }

    &:last-of-type {
      margin-right: 0px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.3s ease;
      cursor: pointer;

      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;

// CSS For Slider

const Slider = styled.div`
  /* border: 1px solid red; */
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 9999; // Don't delete it.
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Slides = styled.div`
  /* border: 1px solid yellow; */
  box-shadow: 0px 0px 15px 12px rgb(0 0 0 / 45%);
  width: 82%;
  height: 85vh;
  position: relative;

  @media screen and (max-width: 770px) {
    width: 99vw;
    height: 99vh;
  }

  @media screen and (max-width: 426px) {
    width: 98vw;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .arrow-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    font-size: 40px;
    cursor: pointer;

    &:hover {
      color: #2874f0;
    }
  }

  .left {
    left: -60px;

    @media screen and (max-width: 770px) {
      left: 20px;
    }
  }

  .right {
    right: -60px;

    @media screen and (max-width: 770px) {
      right: 20px;
    }
  }

  .close-icon {
    box-shadow: 0px 0px 5px 4px rgb(0 0 0 / 25%);
    background-color: white;
    border-radius: 50%;
    position: absolute;
    top: -25px;
    right: -25px;
    font-size: 44px;
    padding: 5px;
    cursor: pointer;

    @media screen and (max-width: 770px) {
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
    }

    &:hover {
      background-color: #2874f0;
      color: white;
    }
  }
`;

export {
  Container,
  DetailsContainer,
  BoxBtnContainer,
  BoxesContainer,
  Box1,
  Box2,
  Box3,
  Box4,
  Box5,
  BtnContainer,
  AddressContainer,
  ImagesContainer,
  BigMedImgContainer,
  MedImgContainer,
  BigImgContainer,
  SamllImgContainer,
  Slider,
  Slides,
};
