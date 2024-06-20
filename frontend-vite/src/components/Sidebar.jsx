import { LocationOnOutlined } from "@mui/icons-material";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {
  Container,
  Form,
  LocationContainer,
  Wrapper,
  Button,
} from "./styled/Sidebar.styled";

const Sidebar = () => {
  return (
    <Container>
      <h2>Search</h2>
      <Form>
        <LocationContainer>
          <label htmlFor="place">Destination Name:</label>
          <Wrapper>
            <LocationOnOutlined className="search-icon" />
            <input
              type="text"
              name="place"
              id="place"
              placeholder="Where are you going ?"
            />
          </Wrapper>
        </LocationContainer>
        <Button type="button">Search</Button>
      </Form>
    </Container>
  );
};

export default Sidebar;
