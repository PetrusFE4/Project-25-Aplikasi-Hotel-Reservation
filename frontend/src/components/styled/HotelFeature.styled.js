import styled from "styled-components";

const Container = styled.div`
  /* border: 1px solid red; */
  margin-top: 15px;
`;

const FeatureBoxContainer = styled.div``;

const TopFeatureBoxes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 675px) {
    flex-wrap: wrap;
    gap: 5px;
  }

  div {
    border: 1px solid #e0dede;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    flex: 1;
    height: 58px;
    margin-right: 10px;
    color: #262626;
    font-size: 15px;

    @media screen and (max-width: 675px) {
      height: 40px;
      font-size: 13px;
      margin: 0px;
    }

    &:last-of-type {
      margin-right: 0px;
    }

    .feature-icon {
      margin-right: 5px;
      font-size: 25px;
      color: #4c71c2;

      @media screen and (max-width: 675px) {
        font-size: 22px;
      }
    }
  }
`;

const BottomFeatureBoxes = styled(TopFeatureBoxes)`
  margin-top: 10px;
  @media screen and (max-width: 675px) {
    margin-top: 5px;
  }
`;

const SidebarDescContainer = styled.div`
  margin-top: 30px;
  display: flex;

  @media screen and (max-width: 675px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const DescTextContainer = styled.div`
  flex: 3;
  color: #262626;

  @media screen and (max-width: 675px) {
    flex: 1;
  }

  h2 {
    margin-bottom: 15px;
  }

  p {
    margin-bottom: 15px;
    font-size: 15px;
  }
`;

const Aside = styled.aside`
  /* border: 1px solid #e0dede; */
  background-color: #ebf3ff;
  border-radius: 3px;
  flex: 1;
  min-width: 300px;
  height: fit-content;
  margin-left: 20px;
  padding: 15px 20px;
  color: #262626;

  @media screen and (max-width: 675px) {
    margin: 0px;
    width: 100%;
    min-width: 250px;
    text-align: center;
  }

  h3 {
    color: #3c71c2;
    font-size: 21px;
  }
`;

const Details = styled.div`
  /* border: 1px solid black; */
  margin-top: 15px;

  h4 {
    margin-bottom: 10px;
    color: #393838;
    font-size: 15px;
  }

  span {
    display: flex;
    align-items: center;
    font-size: 14px;

    @media screen and (max-width: 675px) {
      flex-direction: column;
    }

    .aside-icon {
      margin-right: 4px;
    }
  }
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px 0px 15px 0px;

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

export {
  Container,
  FeatureBoxContainer,
  TopFeatureBoxes,
  BottomFeatureBoxes,
  SidebarDescContainer,
  DescTextContainer,
  Aside,
  Details,
  BtnContainer,
};
