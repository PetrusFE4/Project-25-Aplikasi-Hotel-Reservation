import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import HotelDetails from "../components/HotelDetails";
import HotelFeature from "../components/HotelFeature";
import {
  Container,
  MainContainer,
  Wrapper,
  SideContainer,
  HotelContainer,
} from "./styled/Hotel.styled";

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
