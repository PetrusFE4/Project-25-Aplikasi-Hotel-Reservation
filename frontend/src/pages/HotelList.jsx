import Navbar from "../components/Navbar";
import SearchedHotelsList from "../components/SearchedHotelsList";
import Footer from "../components/Footer";
import {
  Container,
  MainContainer,
  Wrapper,
  HotelListContainer,
} from "./styled/HotelList.styled";

const HotelList = () => {
  return (
    <Container>
      <Navbar />
      <MainContainer>
        <Wrapper>
          <HotelListContainer>
            <SearchedHotelsList />
          </HotelListContainer>
        </Wrapper>
      </MainContainer>
      <Footer />
    </Container>
  );
};

export default HotelList;
