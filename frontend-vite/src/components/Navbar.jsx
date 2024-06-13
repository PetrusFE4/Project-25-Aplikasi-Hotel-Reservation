import {
  HomeOutlined,
  HotelOutlined,
  HowToRegOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  Container,
  NavContainer,
  LogoContainer,
  BtnContainer,
  Button,
  ImgAndHamburgerContainer,
  SecondNavContainer,
} from "./styled/Navbar.styled";

const Navbar = () => {
  const [openmenu, setopenmenu] = useState("false");
  const location = useLocation();

  return (
    <Container>
      <NavContainer>
        <LogoContainer>
          <span>
            <Link to="/" className="link">
              My Booking
            </Link>
          </span>
        </LogoContainer>

        <BtnContainer>
          <Link
            to="/register"
            style={{ display: location.pathname === "/register" ? "none" : "" }}
          >
            <Button>Register</Button>
          </Link>
          <Link
            to="/login"
            style={{ display: location.pathname === "/login" ? "none" : "" }}
          >
            <Button>Login</Button>
          </Link>

          {/* <Link
            to="/profile"
            style={{ display: location.pathname === "/profile" ? "none" : "" }}
          >
            <Button>Profile</Button>
          </Link>
          <Link to="/logout">
            <Button>Logout</Button>
          </Link> */}
        </BtnContainer>

        {/* For Mobile Start */}

        <ImgAndHamburgerContainer>
          <div
            className={`hamburger ${openmenu ? "close-hamburger" : ""}`}
            onClick={() => setopenmenu(!openmenu)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </ImgAndHamburgerContainer>

        {/* For Mobile End*/}
      </NavContainer>

      <SecondNavContainer openmenu={openmenu}>
        <ul>
          <Link to="/" className="link">
            <li className={location.pathname === "/" ? "active" : ""}>
              <HomeOutlined className="li-icon" />
              Home
            </li>
          </Link>

          <Link to="/hotels" className="link">
            <li className={location.pathname === "/hotels" ? "active" : ""}>
              <HotelOutlined className="li-icon" />
              Hotels
            </li>
          </Link>
        </ul>

        {/* For Mobile Start */}
        <h3>Hello, User</h3>

        <ul className="hidden-ul">
          <Link to="/register" className="link">
            <li>
              <HowToRegOutlined className="li-icon" />
              Register
            </li>
          </Link>
          <Link to="/login" className="link">
            <li>
              <LoginOutlined className="li-icon" />
              Login
            </li>
          </Link>
          <Link to="/hotel/4" className="link">
            <li>
              <LogoutOutlined className="li-icon" />
              Logout
            </li>
          </Link>
        </ul>

        {/* For Mobile End */}
      </SecondNavContainer>
    </Container>
  );
};

export default Navbar;
