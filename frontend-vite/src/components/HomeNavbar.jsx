import {
  AirportShuttleOutlined,
  AttractionsOutlined,
  BedOutlined,
  CalendarMonthOutlined,
  ConnectingAirportsOutlined,
  CurrencyExchangeOutlined,
  DirectionsCarOutlined,
  HelpOutlineOutlined,
  HotelOutlined,
  HowToRegOutlined,
  LocationOnOutlined,
  LoginOutlined,
  LogoutOutlined,
  NightShelterOutlined,
  PersonOutlineOutlined,
  SearchOutlined,
  TranslateOutlined,
} from "@mui/icons-material";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState } from "react";
import { Link } from "react-router-dom";
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

const HomeNavbar = () => {
  const [openmenu, setopenmenu] = useState("false");
  const [openDate, setOpenDate] = useState(false);
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
    // console.log(options["room"], name, options[name]); // Accessing room key's value by Square Bracket method from "options" Object. We are using options[name] because here name variable is String that is "room". We can't use it like options.name bcoz it means options."room" which is undefined.

    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "inc" ? options[name] + 1 : options[name] - 1,
      };
    });
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
              <span>My Booking</span>
            </LogoContainer>

            <BtnContainer>
              <span>INA</span>
              <img src="images/flag.png" alt="Countries" />
              <HelpOutlineOutlined className="help-icon" />
              <Link to="/register">
                <Button className="bigBtn">List Your Property</Button>
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
              <img src="images/bodyp.jpg" alt="" />
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
              <Link to="/hotels" className="link">
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

            <h3>Hello, User</h3>

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
              <Link to="/hotels" className="link">
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
