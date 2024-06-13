import {
  AssignmentInd,
  EmailOutlined,
  GitHub,
  LinkedIn,
  LocationOnOutlined,
  Call,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  Container,
  TopContainer,
  AboutMe,
  PersonalInfo,
  ContactInfo,
  Details,
  SocialMediaInfo,
  ImportantLinks,
  BottomContainer,
  CompanyLogoList,
  Copyright,
} from "./styled/Footer.styled";

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
            <img src="/images/companies/booking.png" alt="" />
          </li>
          <li>
            <img src="/images/companies/priceline.png" alt="" />
          </li>
          <li>
            <img src="/images/companies/kayak.png" alt="" />
          </li>
          <li>
            <img src="/images/companies/agoda.png" alt="" />
          </li>
          <li>
            <img src="/images/companies/rentalcars.png" alt="" />
          </li>
          <li>
            <img src="/images/companies/opentable.png" alt="" />
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
