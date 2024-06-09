import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import HotelDetails from "../components/HotelDetails";
import HotelFeature from "../components/HotelFeature";

const Container = styled.div`
  /* border: 3px solid red; */
`;

const MainContainer = styled.div`
  margin: 0px 150px;

  @media screen and (max-width: 1250px) {
    margin: 0px 30px;
  }

  @media screen and (max-width: 890px) {
    margin: 0px 20px;
  }
`;

const Wrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;

  @media screen and (max-width: 865px) {
    flex-direction: column;
  }
`;

const SideContainer = styled.aside`
  /* border: 1px solid blue; */
  margin: 0px 8px 15px 0px;
  flex: 1;

  @media screen and (max-width: 865px) {
    margin: 5px 0px 10px;
    order: 2;
  }

  #sticky-container {
    position: sticky;
    top: 17px;
    z-index: 999; // Don't delete it.

    @media screen and (max-width: 865px) {
      position: static;
      z-index: auto;
    }

    #hide-search-box {
      @media screen and (max-width: 865px) {
        display: none;
      }
    }
  }
`;

const HotelContainer = styled.main`
  /* border: 1px solid black; */
  flex: 3;
  @media screen and (max-width: 865px) {
    flex: 1;
  }
`;

const Hotel = () => {
  return (
    <Container>
      <Navbar />
      <MainContainer>
        <Wrapper>
          <SideContainer>
            <div id="sticky-container">
              <div id="hide-search-box">
                <Sidebar />
              </div>
              <Map />
            </div>
          </SideContainer>
          <HotelContainer>
            <HotelDetails />
          </HotelContainer>
        </Wrapper>
        <HotelFeature />
        <Newsletter />
      </MainContainer>
      <Footer />
    </Container>
  );
};

export default Hotel;
