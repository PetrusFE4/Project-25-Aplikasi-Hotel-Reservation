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
import {
  Container,
  FeatureBoxContainer,
  TopFeatureBoxes,
  BottomFeatureBoxes,
  SidebarDescContainer,
  DescTextContainer,
  Aside,
  Details,
  BtnContainer,
} from "./styled/HotelFeature.styled";
import { Link } from "react-router-dom";

const HotelFeature = ({ hotel }) => {
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
            Offering luxury in Jakarta's city centre, Radisson Connaught Place
            is a boutique hotel located in the heart of Connaught Circus having
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
            {hotel.roomLeft <= 0 ? (
              <button disabled style={{ backgroundColor: "#1b5bb9" }}>
                Booking Now
              </button>
            ) : (
              <Link to={`/booking/${hotel.id}`}>
                <button>Book</button>
              </Link>
            )}
          </BtnContainer>
        </Aside>
      </SidebarDescContainer>
    </Container>
  );
};

export default HotelFeature;
