import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import SearchedHotelsList from "../components/SearchedHotelsList";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

const Container = styled.div`
  /* border: 3px solid red; */
`;

const MainContainer = styled.div`
  margin: 0px 150px;

  @media screen and (max-width: 1200px) {
    margin: 0px 30px;
  }

  @media screen and (max-width: 675px) {
    margin: 0px 20px;
  }
`;

const Wrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;

  @media screen and (max-width: 925px) {
    flex-direction: column;
  }
`;

const SideContainer = styled.aside`
  /* border: 1px solid blue; */
  margin: 0px 8px 15px 0px;
  flex: 1;

  @media screen and (max-width: 925px) {
    margin: 5px 0px 15px;
  }

  #sticky-container {
    position: sticky;
    top: 17px;
    z-index: 999; // Don't delete it.

    @media screen and (max-width: 925px) {
      position: static;
      z-index: auto;
    }
  }
`;

const HotelListContainer = styled.main`
  /* border: 1px solid black; */
  flex: 3;

  @media screen and (max-width: 925px) {
    flex: 1;
  }
`;

const HotelList = () => {
  return (
    <Container>
      <Navbar />
      <MainContainer>
        <Wrapper>
          <SideContainer>
            <div id="sticky-container">
              <Sidebar />
              <Map />
            </div>
          </SideContainer>
          <HotelListContainer>
            <SearchedHotelsList />
          </HotelListContainer>
        </Wrapper>
        <Newsletter />
      </MainContainer>
      <Footer />
    </Container>
  );
};

export default HotelList;
