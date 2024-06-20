import {
  HomeOutlined,
  HotelOutlined,
  HowToRegOutlined,
  LoginOutlined,
  LogoutOutlined,
  VerifiedUserOutlined,
  DashboardOutlined,
} from "@mui/icons-material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Container,
  NavContainer,
  LogoContainer,
  BtnContainer,
  Button,
  ImgAndHamburgerContainer,
  SecondNavContainer,
} from "./styled/Navbar.styled";
import axios from "axios";
import { endpoint } from "../api.js";

const Navbar = () => {
  const [openmenu, setopenmenu] = useState(false);
  const location = useLocation();

  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const verifyLogin = async () => {
      try {
        const response = await axios.get(endpoint.getCurrentUser, {
          withCredentials: true,
        });
        setIsLogin(true);
        setUser(response.data.data);
        setIsAdmin(response.data.data.role === "ADMIN");
      } catch (error) {
        setIsLogin(false);
      }
    };
    verifyLogin();
  }, []);

  const navigate = useNavigate();

  const logout = async () => {
    try {
      const response = await axios.delete(endpoint.logoutUser, {
        withCredentials: true,
      });
      alert(response.data.message);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <NavContainer>
        <LogoContainer>
          <span>
            <Link to="/" className="link">
              Hotel App
            </Link>
          </span>
        </LogoContainer>

        <BtnContainer>
          {isLogin ? (
            <>
              <Link to="/profile">
                <Button>Profile</Button>
              </Link>
              {isAdmin && (
                <Link to="/dashboard">
                  <Button>Dashboard</Button>
                </Link>
              )}
              <Button onClick={logout}>Logout</Button>
            </>
          ) : (
            <>
              <Link to="/register">
                <Button>Register</Button>
              </Link>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            </>
          )}
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
        <h3>Hello, {user.name ? user.name : "Guest"}</h3>

        <ul className="hidden-ul">
          {isLogin ? (
            <>
              <Link to="/profile" className="link">
                <li
                  className={location.pathname === "/profile" ? "active" : ""}
                >
                  <VerifiedUserOutlined className="li-icon" />
                  Profile
                </li>
              </Link>
              {isAdmin && (
                <Link to="/dashboard" className="link">
                  <li
                    className={
                      location.pathname === "/dashboard" ? "active" : ""
                    }
                  >
                    <DashboardOutlined className="li-icon" />
                    Dashboard
                  </li>
                </Link>
              )}
              <li onClick={logout}>
                <LogoutOutlined className="li-icon" />
                Logout
              </li>
            </>
          ) : (
            <>
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
            </>
          )}
        </ul>

        {/* For Mobile End */}
      </SecondNavContainer>
    </Container>
  );
};

export default Navbar;
