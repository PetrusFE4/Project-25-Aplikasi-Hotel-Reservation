import {
  AirportShuttleOutlined,
  AttractionsOutlined,
  BedOutlined,
  ConnectingAirportsOutlined,
  CurrencyExchangeOutlined,
  DirectionsCarOutlined,
  HelpOutlineOutlined,
  HotelOutlined,
  HowToRegOutlined,
  LoginOutlined,
  LogoutOutlined,
  NightShelterOutlined,
  SearchOutlined,
  TranslateOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
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
          <span>INA</span>
          <img src="/images/flag.png" alt="Countries" />
          <HelpOutlineOutlined className="help-icon" />
          <Link to="/register">
            <Button className="bigBtn">List your Property</Button>
          </Link>
          <Link to="/register">
            <Button>Register</Button>
          </Link>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </BtnContainer>

        {/* For Mobile Start */}

        <ImgAndHamburgerContainer>
          <img src="images/boydp.jpg" alt="" />
          <div
            className={`hamburger ${openmenu && "close-hamburger"}`}
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
            <li className="active">
              <BedOutlined className="li-icon" />
              Stays
            </li>
          </Link>

          <Link to="/hotels" className="link">
            <li>
              <HotelOutlined className="li-icon" />
              Hotels
            </li>
          </Link>
        </ul>

        {/* For Mobile Start */}

        <h3>Hello, Satya Thakur</h3>

        <ul className="hidden-ul">
          <Link to="/hotels" className="link">
            <li>
              <SearchOutlined className="li-icon" />
              Search Hotels
            </li>
          </Link>
          <Link to="/register" className="link">
            <li className="active">
              <NightShelterOutlined className="li-icon" />
              List Your Property
            </li>
          </Link>
          <Link to="/hotel/3" className="link">
            <li>
              <CurrencyExchangeOutlined className="li-icon" />
              Currency Exchange
            </li>
          </Link>
          <Link to="/login" className="link">
            <li>
              <TranslateOutlined className="li-icon" />
              Language
            </li>
          </Link>

          <Link to="/hotel/5" className="link">
            <li>
              <HelpOutlineOutlined className="li-icon" />
              Help
            </li>
          </Link>
        </ul>

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
