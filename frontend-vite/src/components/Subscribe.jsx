import { Link } from "react-router-dom";
import {
  Container,
  BlueCircle,
  YellowCircle,
  BigBlueCircle,
  TextContainer,
  BtnContainer,
  ImgContainer,
} from "./styled/Subscribe.styled";

const Subscribe = () => {
  return (
    <Container>
      <BlueCircle></BlueCircle>

      <YellowCircle></YellowCircle>

      <BigBlueCircle>
        <TextContainer>
          <h1>Get instant discounts</h1>
          <span>Simply Sign in or Register to get instant discounts.</span>
        </TextContainer>
        <BtnContainer>
          <Link to="/login" className="link">
            <button type="button">Login</button>
          </Link>
          <Link to="/register" className="link">
            <button type="button">Register</button>
          </Link>
        </BtnContainer>
      </BigBlueCircle>

      <ImgContainer>
        <img
          src="
        images/subscribe.png"
          alt="Subscribe"
        />
      </ImgContainer>
    </Container>
  );
};

export default Subscribe;
