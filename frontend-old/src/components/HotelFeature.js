import {
  AcUnit,
  Flatware,
  LocalFlorist,
  LocalParking,
  LoyaltyOutlined,
  Pool,
  RestaurantOutlined,
  Shower,
  UpdateOutlined,
  VerifiedOutlined,
  Visibility,
  WhereToVoteOutlined,
  Wifi,
} from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  /* border: 1px solid red; */
  margin-top: 15px;
`;

const FeatureBoxContainer = styled.div``;

const TopFeatureBoxes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 675px) {
    flex-wrap: wrap;
    gap: 5px;
  }

  div {
    border: 1px solid #e0dede;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    flex: 1;
    height: 58px;
    margin-right: 10px;
    color: #262626;
    font-size: 15px;

    @media screen and (max-width: 675px) {
      height: 40px;
      font-size: 13px;
      margin: 0px;
    }

    &:last-of-type {
      margin-right: 0px;
    }

    .feature-icon {
      margin-right: 5px;
      font-size: 25px;
      color: #4c71c2;

      @media screen and (max-width: 675px) {
        font-size: 22px;
      }
    }
  }
`;

const BottomFeatureBoxes = styled(TopFeatureBoxes)`
  margin-top: 10px;
  @media screen and (max-width: 675px) {
    margin-top: 5px;
  }
`;

const SidebarDescContainer = styled.div`
  margin-top: 30px;
  display: flex;

  @media screen and (max-width: 675px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const DescTextContainer = styled.div`
  flex: 3;
  color: #262626;

  @media screen and (max-width: 675px) {
    flex: 1;
  }

  h2 {
    margin-bottom: 15px;
  }

  p {
    margin-bottom: 15px;
    font-size: 15px;
  }
`;

const Aside = styled.aside`
  /* border: 1px solid #e0dede; */
  background-color: #ebf3ff;
  border-radius: 3px;
  flex: 1;
  min-width: 300px;
  height: fit-content;
  margin-left: 20px;
  padding: 15px 20px;
  color: #262626;

  @media screen and (max-width: 675px) {
    margin: 0px;
    width: 100%;
    min-width: 250px;
    text-align: center;
  }

  h3 {
    color: #3c71c2;
    font-size: 21px;
  }
`;

const Details = styled.div`
  /* border: 1px solid black; */
  margin-top: 15px;

  h4 {
    margin-bottom: 10px;
    color: #393838;
    font-size: 15px;
  }

  span {
    display: flex;
    align-items: center;
    font-size: 14px;

    @media screen and (max-width: 675px) {
      flex-direction: column;
    }

    .aside-icon {
      margin-right: 4px;
    }
  }
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px 0px 15px 0px;

  button {
    background-color: #003580;
    color: white;
    font-size: 15px;
    font-weight: 600;
    width: 130px;
    padding: 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background-color: #1b5bb9;
    }
  }
`;

const HotelFeature = () => {
  return (
    <Container>
      <FeatureBoxContainer>
        <TopFeatureBoxes>
          <div>
            <Visibility className="feature-icon" /> View
          </div>
          <div>
            <Wifi className="feature-icon" /> Wifi Gratis
          </div>
          <div>
            <LocalParking className="feature-icon" /> Parkir Gratis
          </div>
          <div>
            <LocalFlorist className="feature-icon" /> Taman
          </div>
          <div>
            <Pool className="feature-icon" /> Kolam Renang
          </div>
          <div>
            <Flatware className="feature-icon" /> Sarapan 2 pax
          </div>
        </TopFeatureBoxes>
        <BottomFeatureBoxes>
          <div>
            <AcUnit className="feature-icon" /> Air Condition
          </div>
          <div>
            <Shower className="feature-icon" /> Bathroom
          </div>
          <div>
            <LoyaltyOutlined className="feature-icon" /> Akses Kunci
          </div>
          <div>
            <UpdateOutlined className="feature-icon" /> Service 24 jam
          </div>
        </BottomFeatureBoxes>
      </FeatureBoxContainer>
      <SidebarDescContainer>
        <DescTextContainer>
          <h2>Stay in the heart of Jakarta</h2>
          <p>
            Offering luxury in Jakarta's city centre, Radisson Connaught Place is
            a boutique hotel located in the heart of Connaught Circus having
            5-star facilities. This heritage hotel features a full-service spa,
            fitness centre and three dining options.
          </p>
          <p>
            Well-furnished rooms at Radisson Blu Marina come in calming neutrals
            and feature flat-screen satellite TVs. In-room conveniences include
            ironing facilities and a safe.
          </p>
          <p>
            Sauna facilities and soothing massages at the spa await after a day
            of activity. Staff can assist guests with their business and travel
            needs.
          </p>
          <p>
            Guests can enjoy Indian specialties at The Great Kabab Factory while
            Fifty9 offers varied international menus. The Connaught Bar also
            features a menu of small plates.
          </p>
          <p>
            Just 2.8 km from Airport Express Line Metro Station, Radisson Marina
            Hotel Connaught Place is 1.3 km from Jakarta Railway Station.
            Seokarno Hatta International Airport is 14 km away
          </p>
          <p>
            This is our guests' favourite part of Jakarta, according to
            independent reviews.
          </p>
          <p>
            Couples particularly like the location — they rated it 8.7 for a
            two-person trip.
          </p>
        </DescTextContainer>
        <Aside>
          <h3>Property highlights</h3>
          <Details>
            <h4>Perfect for a 1-night stay!</h4>
            <span>
              <WhereToVoteOutlined className="aside-icon" /> Situated in real
              heart of Jakarta, hotel has an excellent location score of 8.6
            </span>
          </Details>
          <Details>
            <h4>Breakfast info</h4>
            <span>
              <RestaurantOutlined className="aside-icon" /> Continental,
              Vegetarian, Asian, American, Buffet.
            </span>
          </Details>
          <Details>
            <h4>Loyal customers</h4>
            <span>
              <VerifiedOutlined className="aside-icon" /> There are more repeat
              guests here than most other properties.
            </span>
          </Details>

          <BtnContainer>
            <button type="button">Pesan </button>
          </BtnContainer>
        </Aside>
      </SidebarDescContainer>
    </Container>
  );
};

export default HotelFeature;
