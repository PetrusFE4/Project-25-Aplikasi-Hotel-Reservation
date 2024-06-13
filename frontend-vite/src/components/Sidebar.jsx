import {
  CalendarMonthOutlined,
  HelpOutlineOutlined,
  LocationOnOutlined,
  PersonOutlineOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {
  Container,
  Form,
  LocationContainer,
  Wrapper,
  DateContainer,
  PersonContainer,
  PersonQuantityContainer,
  QuantityItem,
  QuantityBtnContainer,
  CounterBtn,
  Quantity,
  CheckboxContainer,
  FirstCheckbox,
  Checkbox,
  HelpIconContainer,
  SecondCheckbox,
  Button,
} from "./styled/Sidebar.styled";

const Sidebar = () => {
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

        <DateContainer onClick={() => setOpenOptions(false)}>
          <label>Check-in Date - Check-out Date:</label>
          <Wrapper>
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
          </Wrapper>
        </DateContainer>

        <PersonContainer onClick={() => setOpenDate(false)}>
          <label>Persons & Rooms:</label>

          <Wrapper>
            <PersonOutlineOutlined className="search-icon" />

            <span
              className="person-span"
              onClick={() => setOpenOptions(!openOptions)}
            >
              {`${options.adult} ${options.adult <= 1 ? "Adult" : "Adults"} - ${
                options.children
              } ${options.children <= 1 ? "Child" : "Children"} - ${
                options.room
              } ${options.room <= 1 ? "Room" : "Rooms"}`}
            </span>
            {openOptions && (
              <PersonQuantityContainer>
                <QuantityItem>
                  <span>Adult</span>
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
                  <span>Children</span>
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
                  <span>Room</span>
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
          </Wrapper>
        </PersonContainer>

        <CheckboxContainer>
          <FirstCheckbox>
            <Checkbox>
              <input type="checkbox" id="first-checkbox" />
              <label htmlFor="first-checkbox">Entire homes & apartments</label>
            </Checkbox>

            <HelpIconContainer>
              <HelpOutlineOutlined className="help-icon" />
              <span>
                We'll show you stays where you can have the entire place to
                yourself.
              </span>
            </HelpIconContainer>
          </FirstCheckbox>

          <SecondCheckbox>
            <Checkbox>
              <input type="checkbox" id="second-checkbox" />
              <label htmlFor="second-checkbox">I am travelling for work</label>
            </Checkbox>

            <HelpIconContainer>
              <HelpOutlineOutlined className="help-icon" />
              <span>
                If you select this option, we'll show you popular business
                travel features like breakfast, WiFi and free parking.
              </span>
            </HelpIconContainer>
          </SecondCheckbox>
        </CheckboxContainer>

        <Button type="button">Search</Button>
      </Form>
    </Container>
  );
};

export default Sidebar;
