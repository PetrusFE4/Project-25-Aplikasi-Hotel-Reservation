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
import axios from "axios";
import { endpoint } from "../api.js";
import { useState, useEffect } from "react";

const Subscribe = () => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const verifyLogin = async () => {
      try {
        await axios.get(endpoint.getCurrentUser, {
          withCredentials: true,
        });
        setIsLogin(true);
      } catch (error) {
        setIsLogin(false);
      }
    };
    verifyLogin();
  }, []);

  return (
    <>
      {isLogin ? null : (
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
            <img src="images/subscribe.png" alt="Subscribe" />
          </ImgContainer>
        </Container>
      )}
    </>
  );
};

export default Subscribe;
