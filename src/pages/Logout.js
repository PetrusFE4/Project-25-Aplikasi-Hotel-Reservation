import { HelpOutline } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.nav`
  background-image: linear-gradient(270deg, #2874f0, #1958b2);
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavWrapper = styled.div`
  margin: 0px 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 770px) {
    margin: 0px 20px;
  }
`;

const LeftContainer = styled.div`
  font-size: 24px;
  font-weight: 500;

  .homepage-link {
    display: block;
    text-decoration: none;
    color: white;
    cursor: pointer;
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .help-icon {
    font-size: 33px;
    margin-right: 15px;
  }

  img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
  }

  button {
    background: none;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
    margin-left: 20px;
  }
`;

const Navigation = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/logout");
  };

  return (
    <NavContainer>
      <NavWrapper>
        <LeftContainer>
          <Link to="/" className="homepage-link">
            My Booking
          </Link>
        </LeftContainer>
        <RightContainer>
          <HelpOutline className="help-icon" />
          <img src="/hotel-booking-app/images/flag.png" alt="Languages" />
          <button onClick={handleLogout}>Logout</button>
        </RightContainer>
      </NavWrapper>
    </NavContainer>
  );
};

export default Navigation;
