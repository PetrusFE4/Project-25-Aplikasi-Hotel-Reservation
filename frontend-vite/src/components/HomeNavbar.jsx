import {
  CalendarMonthOutlined,
  HotelOutlined,
  HomeOutlined,
  HowToRegOutlined,
  LocationOnOutlined,
  LoginOutlined,
  LogoutOutlined,
  PersonOutlineOutlined,
  VerifiedUserOutlined,
  DashboardOutlined,
} from "@mui/icons-material";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Container,
  TopContainer,
  VideoContainer,
  Wrapper,
  NavContainer,
  LogoContainer,
  BtnContainer,
  Button,
  ImgAndHamburgerContainer,
  SecondNavContainer,
  OfferContainer,
  OfferButton,
  SearchContainer,
  LocationContainer,
  DateContainer,
  PersonContainer,
  PersonQuantityContainer,
  QuantityItem,
  QuantityBtnContainer,
  CounterBtn,
  Quantity,
  SearchBtnContainer,
} from "./styled/HomeNavbar.styled";
import axios from "axios";
import { endpoint } from "../api.js";
import { useNavigate } from "react-router-dom";

const HomeNavbar = () => {
  const location = useLocation();
  const [openmenu, setopenmenu] = useState("false");
  const [openDate, setOpenDate] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState({});
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 2,
    children: 1,
    room: 1,
  });

  const handleCount = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "inc" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const [isLogin, setIsLogin] = useState(false);

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
      <TopContainer>
        <VideoContainer
          poster="images/vidposter.png"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="videos/sunsetsm.mp4" type="video/mp4" />
        </VideoContainer>
        <Wrapper>
          <NavContainer>
            <LogoContainer>
              <span style={{ cursor: "pointer" }}>My Booking</span>
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

            <h3>Hello, {user.name}</h3>

            <ul className="hidden-ul">
              {isLogin ? (
                <>
                  <Link to="/profile" className="link">
                    <li
                      className={
                        location.pathname === "/profile" ? "active" : ""
                      }
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

          <OfferContainer>
            <h2> Berlaku sampai akhir 2024</h2>
            <h1>Hemat 15% sekarang juga </h1>
            <Link to="/hotels">
              <OfferButton>Explore Offers</OfferButton>
            </Link>
          </OfferContainer>
        </Wrapper>

        <SearchContainer>
          <LocationContainer>
            <LocationOnOutlined className="search-icon" />
            <input
              type="text"
              name="place"
              placeholder="Mau Menginap dimana?"
            />
          </LocationContainer>
          <DateContainer onClick={() => setOpenOptions(false)}>
            <CalendarMonthOutlined className="search-icon" />
            <span
              className="calendar-span"
              onClick={() => setOpenDate(!openDate)}
            >
              {`${format(date[0].startDate, "dd/MM/yyyy")}   to   ${format(
                date[0].endDate,
                "dd/MM/yyyy"
              )}`}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date-range"
              />
            )}
          </DateContainer>
          <PersonContainer onClick={() => setOpenDate(false)}>
            <PersonOutlineOutlined className="search-icon" />

            <span
              className="person-span"
              onClick={() => setOpenOptions(!openOptions)}
            >
              {`${options.adult} ${options.adult <= 1 ? "Adult" : "Dewasa"} - ${
                options.children
              } ${options.children <= 1 ? "Anak" : "Anak"} - ${options.room} ${
                options.room <= 1 ? "Kamar" : "Kamar"
              }`}
            </span>
            {openOptions && (
              <PersonQuantityContainer>
                <QuantityItem>
                  <span>Dewasa</span>
                  <QuantityBtnContainer>
                    <CounterBtn
                      type="button"
                      disabled={options.adult <= 1}
                      onClick={() => handleCount("adult", "dec")}
                    >
                      -
                    </CounterBtn>
                    <Quantity>{options.adult}</Quantity>
                    <CounterBtn
                      type="button"
                      onClick={() => handleCount("adult", "inc")}
                    >
                      +
                    </CounterBtn>
                  </QuantityBtnContainer>
                </QuantityItem>

                <QuantityItem>
                  <span>Anak</span>
                  <QuantityBtnContainer>
                    <CounterBtn
                      type="button"
                      disabled={options.children <= 0}
                      onClick={() => handleCount("children", "dec")}
                    >
                      -
                    </CounterBtn>
                    <Quantity>{options.children}</Quantity>
                    <CounterBtn
                      type="button"
                      onClick={() => handleCount("children", "inc")}
                    >
                      +
                    </CounterBtn>
                  </QuantityBtnContainer>
                </QuantityItem>

                <QuantityItem>
                  <span>Kamar</span>
                  <QuantityBtnContainer>
                    <CounterBtn
                      type="button"
                      disabled={options.room <= 1}
                      onClick={() => handleCount("room", "dec")}
                    >
                      -
                    </CounterBtn>
                    <Quantity>{options.room}</Quantity>
                    <CounterBtn
                      type="button"
                      onClick={() => handleCount("room", "inc")}
                    >
                      +
                    </CounterBtn>
                  </QuantityBtnContainer>
                </QuantityItem>
              </PersonQuantityContainer>
            )}
          </PersonContainer>

          <SearchBtnContainer>
            <Link to="/hotels" className="search-btn-link">
              <button type="button">Search</button>
            </Link>
          </SearchBtnContainer>
        </SearchContainer>
      </TopContainer>
    </Container>
  );
};

export default HomeNavbar;
