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

export {
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
};
