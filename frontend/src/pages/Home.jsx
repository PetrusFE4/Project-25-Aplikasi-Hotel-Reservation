import HomeNavbar from "../components/HomeNavbar";
import FeaturedCities from "../components/FeaturedCities";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import { Container } from "./styled/Home.styled";

const Home = () => {
  return (
    <>
      <HomeNavbar />
      <Container>
        <FeaturedCities />

        <Subscribe />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
