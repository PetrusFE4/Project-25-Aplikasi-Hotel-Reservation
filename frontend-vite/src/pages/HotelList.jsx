import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import SearchedHotelsList from "../components/SearchedHotelsList";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import {
  Container,
  MainContainer,
  Wrapper,
  SideContainer,
  HotelListContainer,
} from "./styled/HotelList.styled";

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
