import { Container, BottomContainer, Copyright } from "./styled/Footer.styled";

const Footer = () => {
  return (
    <Container>
      <BottomContainer>
        <Copyright>
          Copyright &#169; 2020 - {new Date().getFullYear()} My Booking&#8482;.
          All rights reserved.
        </Copyright>
      </BottomContainer>
    </Container>
  );
};

export default Footer;
