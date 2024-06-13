import HomeNavbar from "../components/HomeNavbar";
import FeaturedCities from "../components/FeaturedCities";
import CitySlider from "../components/CitySlider";
import PropertySlider from "../components/PropertySlider";
import Subscribe from "../components/Subscribe";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Container } from "./styled/Home.styled";

const Home = () => {
  return (
    <>
      <HomeNavbar />
      <Container>
        <FeaturedCities />
        <CitySlider />
        <PropertySlider />

        <Subscribe />
        <Newsletter />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
