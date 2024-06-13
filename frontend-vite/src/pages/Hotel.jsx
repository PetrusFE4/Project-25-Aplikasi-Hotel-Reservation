import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HotelDetails from "../components/HotelDetails";
import HotelFeature from "../components/HotelFeature";
import {
  Container,
  MainContainer,
  Wrapper,
  HotelContainer,
} from "./styled/Hotel.styled";

const Hotel = () => {
  return (
    <Container>
      <Navbar />
      <MainContainer>
        <Wrapper>
          <HotelContainer>
            <HotelDetails />
          </HotelContainer>
        </Wrapper>
        <HotelFeature />
      </MainContainer>
      <Footer />
    </Container>
  );
};

export default Hotel;
