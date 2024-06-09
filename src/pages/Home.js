import styled from "styled-components";
import HomeNavbar from "../components/HomeNavbar";

import FeaturedCities from "../components/FeaturedCities";
import CitySlider from "../components/CitySlider";
import PropertySlider from "../components/PropertySlider";

import Subscribe from "../components/Subscribe";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div`
  /* border: 1px solid blue; */
  margin: 20px 150px;

  @media screen and (max-width: 1200px) {
    margin: 20px 30px;
  }

  @media screen and (max-width: 675px) {
    margin: 20px;
  }
`;

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
