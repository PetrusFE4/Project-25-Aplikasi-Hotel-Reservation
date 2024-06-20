import { HelpOutline } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import {
  NavContainer,
  NavWrapper,
  LeftContainer,
  RightContainer,
} from "./styled/Logout.styled";

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
          <img src="images/flag.png" alt="Languages" />
          <button onClick={handleLogout}>Logout</button>
        </RightContainer>
      </NavWrapper>
    </NavContainer>
  );
};

export default Navigation;
