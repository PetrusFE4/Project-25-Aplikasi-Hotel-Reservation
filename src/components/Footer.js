import {
  AssignmentInd,
  EmailOutlined,
  GitHub,
  LinkedIn,
  LocationOnOutlined,
  Call,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.footer`
  background-color: #00224f;
  color: #f2f2f2;
  padding: 15px;
`;

const TopContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  @media screen and (max-width: 1025px) {
    font-size: 14px;
  }

  @media screen and (max-width: 525px) {
    flex-direction: column;
  }
`;

const AboutMe = styled.div`
  /* border: 1px solid yellow; */
  flex: 1;
`;

const PersonalInfo = styled.div`
  /* border: 1px solid red; */

  h2 {
    @media screen and (max-width: 1025px) {
      font-size: 21px;
    }
  }
`;

const ContactInfo = styled.div`
  margin: 15px 0px;

  @media screen and (max-width: 1025px) {
    margin: 8px 0px;
  }
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0px;

  span {
    margin-left: 4px;
  }
`;

const SocialMediaInfo = styled.div`
  /* border: 1px solid red; */

  @media screen and (max-width: 525px) {
    text-align: center;
    margin-bottom: 15px;
  }

  .social-media-icon {
    margin-right: 10px;
    color: #f4bd02;
    font-size: 32px;
  }
`;

const ImportantLinks = styled.div`
  /* border: 1px solid white; */
  display: flex;
  justify-content: space-evenly;
  flex: 1;

  @media screen and (max-width: 525px) {
    justify-content: space-between;
    margin-bottom: 10px;
  }

  &#hide-footer-links {
    @media screen and (max-width: 950px) {
      display: none;
    }
  }

  ul {
    /* border: 1px solid yellow; */
    list-style: none;
    padding: 0px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    @media screen and (max-width: 1025px) {
      padding: 0px 5px;
    }

    li {
      @media screen and (max-width: 525px) {
        margin: 4px 0px;
      }
    }

    .link {
      /* color: #f4bd02; */
      color: #f2f2f2;
      text-decoration: none;

      &:hover {
        text-decoration: underline 1px;
        text-underline-offset: 3px;
        /* text-decoration-thickness: 1px; */

        @media screen and (max-width: 525px) {
          text-decoration: none;
        }
      }
    }
  }
`;

const BottomContainer = styled.div`
  /* border: 1px solid red; */
`;

const CompanyLogoList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding: 5px;
    margin: 5px;
  }
`;

const Copyright = styled.div`
  text-align: center;
  font-size: 12px;
  color: #f2f2f2;
  margin-top: 10px;
`;

const Footer = () => {
  return (
    <Container>
      <TopContainer>
        <AboutMe>
          <PersonalInfo>
            {/* <h2>SP SINGH</h2>
            <span>
              Hi there ! I'm a MERN Stack Developer. I love to create Websites
              and learning new Web Technologies. I have earned a B.Tech (CS) and
              MBA (Marketing & HR) degrees.
            </span> */}
          </PersonalInfo>

          {/* <ContactInfo>
            <Details>
              <Call />
              <span>+91 798246070X</span>
            </Details>
            <Details>
              <EmailOutlined />
              <span> engineersatyaa@gmail.com</span>
            </Details>
            <Details>
              <LocationOnOutlined />
              <span>1/1164 A Main Road, New Delhi - India</span>
            </Details>
          </ContactInfo> */}

          {/* <SocialMediaInfo>
            <a
              href="https://www.linkedin.com/in/satya-pal-singh-a51309250/"
              title="LinkedIn Profile"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn className="social-media-icon" />
            </a>
            <a
              href="https://github.com/engineersatyaa"
              title="GitHub Profile"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub className="social-media-icon" />
            </a>
            <a
              href="https://www.naukri.com/mnjuser/profile?id=&orgn=homepage"
              title="Naukari.com Profile"
              target="_blank"
              rel="noreferrer"
            >
              <AssignmentInd className="social-media-icon" />
            </a>
          </SocialMediaInfo> */}
        </AboutMe>

        <ImportantLinks>
          <ul>
            <li>
              <Link to="/hotels" className="link">
                Hotels
              </Link>
            </li>
            <li>
              <Link to="/hotels" className="link">
                Resorts
              </Link>
            </li>
            <li>
              <Link to="/hotels" className="link">
                Apartments
              </Link>
            </li>
            <li>
              <Link to="/hotels" className="link">
                Cities
              </Link>
            </li>
            <li>
              <Link to="/hotels" className="link">
                Countries
              </Link>
            </li>
            <li>
              <Link to="/hotels" className="link">
                Airports
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/hotels" className="link">
                Hotels
              </Link>
            </li>
            <li>
              <Link to="/hotels" className="link">
                Resorts
              </Link>
            </li>
            <li>
              <Link to="/hotels" className="link">
                Apartments
              </Link>
            </li>
            <li>
              <Link to="/hotels" className="link">
                Cities
              </Link>
            </li>
            <li>
              <Link to="/hotels" className="link">
                Countries
              </Link>
            </li>
            <li>
              <Link to="/hotels" className="link">
                Airports
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/hotels" className="link">
                Hotels
              </Link>
            </li>
            <li>
              <Link to="/hotels" className="link">
                Resorts
              </Link>
            </li>
            <li>
              <Link to="/hotels" className="link">
                Apartments
              </Link>
            </li>
            <li>
              <Link to="/hotels" className="link">
                Cities
              </Link>
            </li>
            <li>
              <Link to="/hotels" className="link">
                Countries
              </Link>
            </li>
            <li>
              <Link to="/hotels" className="link">
                Airports
              </Link>
            </li>
          </ul>
        </ImportantLinks>
        <ImportantLinks id="hide-footer-links">
          <ul>
            <li>
              <Link to="/hotels" className="link">
                Hotels
              </Link>
            </li>
            <li>
              <Link to="/hotels" className="link">
                Resorts
              </Link>
            </li>
            <li>
              <Link to="/hotels" className="link">
                Apartments
              </Link>
            </li>
            <li>
              <Link to="/hotels" className="link">
                Cities
              </Link>
            </li>
            <li>
              <Link to="/hotels" className="link">
                Countries
              </Link>
            </li>
            <li>
              <Link to="/hotels" className="link">
                Airports
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/hotels" className="link">
                Hotels
              </Link>
            </li>
            <li>
              <Link to="/hotels" className="link">
                Resorts
              </Link>
            </li>
            <li>
              <Link to="/hotels" className="link">
                Apartments
              </Link>
            </li>
            <li>
              <Link to="/hotels" className="link">
                Cities
              </Link>
            </li>
            <li>
              <Link to="/hotels" className="link">
                Countries
              </Link>
            </li>
            <li>
              <Link to="/hotels" className="link">
                Airports
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/hotels" className="link">
                Hotels
              </Link>
            </li>
            <li>
              <Link to="/hotels" className="link">
                Resorts
              </Link>
            </li>
            <li>
              <Link to="/hotels" className="link">
                Apartments
              </Link>
            </li>
            <li>
              <Link to="/hotels" className="link">
                Cities
              </Link>
            </li>
            <li>
              <Link to="/hotels" className="link">
                Countries
              </Link>
            </li>
            <li>
              <Link to="/hotels" className="link">
                Airports
              </Link>
            </li>
          </ul>
        </ImportantLinks>
      </TopContainer>

      <BottomContainer>
        <CompanyLogoList>
          <li>
            <img src="/hotel-booking-app/images/companies/booking.png" alt="" />
          </li>
          <li>
            <img src="/hotel-booking-app/images/companies/priceline.png" alt="" />
          </li>
          <li>
            <img src="/hotel-booking-app/images/companies/kayak.png" alt="" />
          </li>
          <li>
            <img src="/hotel-booking-app/images/companies/agoda.png" alt="" />
          </li>
          <li>
            <img src="/hotel-booking-app/images/companies/rentalcars.png" alt="" />
          </li>
          <li>
            <img src="/hotel-booking-app/images/companies/opentable.png" alt="" />
          </li>
        </CompanyLogoList>
        <Copyright>
          Copyright &#169; 2020 - {new Date().getFullYear()} My Booking&#8482;.
          All rights reserved.
        </Copyright>
      </BottomContainer>
    </Container>
  );
};

export default Footer;
