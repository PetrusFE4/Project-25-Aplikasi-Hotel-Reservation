import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { Close } from "@mui/icons-material";
import styled from "styled-components";
import { useState } from "react";
import { hotelListData } from "../dummyData";

const Container = styled.div`
  border: 1px solid #bababa;
  border-radius: 3px;
  min-width: 300px;
  height: 140px;

  @media screen and (max-width: 340px) {
    min-width: 270px;
  }
`;

const ShowOnMapBtnContainer = styled.div`
  background: url("/hotel-booking-app/images/mapBtn.jpg") no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    border: 1px solid #003580;
    background-color: #003580;
    border-radius: 3px;
    width: 150px;
    padding: 10px;
    color: white;
    font-size: 17px;
    cursor: pointer;

    &:hover {
      background-color: #f4f8fe85;
      border: 1px solid black;
      font-weight: 700;
      color: black;
    }
  }
`;

const MapContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  /* border: 3px solid red; */
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  @media screen and (max-width: 426px) {
    align-items: flex-end;
  }
`;

const MapWrapper = styled.div`
  border: 1px solid #bababa;
  background-color: white;
  border-radius: 3px;
  width: 85%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 426px) {
    width: 95%;
    height: 88vh;
    margin-bottom: 8px;
  }

  .map {
    width: 100%;
    height: 100%;
    border-radius: 3px;

    // for map info window close button
    .gm-ui-hover-effect {
      display: none !important;
    }
  }

  span {
    color: #2874f0;
    font-size: 30px;
    text-align: center;
  }
`;

const MapCloseBtn = styled.button`
  box-shadow: 0px 0px 5px 4px rgb(0 0 0 / 25%);
  background-color: white;
  position: absolute;
  top: -27px;
  right: -27px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media screen and (max-width: 426px) {
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 40px;
  }

  &:hover {
    background-color: #2874f0;
  }

  &:hover .close-icon {
    color: white;
  }

  .close-icon {
    font-size: 28px;
  }
`;

// For info window in google map.

const InfoContainer = styled.div`
  background-color: #ebf3ff;
  border-radius: 8px;
  overflow: hidden;
  width: 250px;

  @media screen and (max-width: 480px) {
    width: auto;
  }
`;

const ImgContainer = styled.div`
  /* border: 1px solid blue; */
  width: 100%;
  height: 150px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DetailsContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 5px;

  h2 {
    font-size: 17px;
    font-weight: 500;
    color: #4579c3;

    @media screen and (max-width: 426px) {
      font-size: 15px;
    }
  }

  span {
    font-size: 13.5px;
    color: black;
  }

  h3 {
    font-size: 14px;
    font-weight: 400;
    margin-top: 4px;
  }
`;

const Map = () => {
  const [openMap, setOpenMap] = useState(false);
  const [infoInMap, setInfoInMap] = useState(null);

  // console.log(infoInMap);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  });

  // console.log(isLoaded);

  return (
    <Container>
      <ShowOnMapBtnContainer>
        <button type="button" onClick={() => setOpenMap(true)}>
          Show on map
        </button>
      </ShowOnMapBtnContainer>

      {openMap && (
        <MapContainer>
          <MapWrapper>
            {isLoaded ? (
              <GoogleMap
                zoom={11}
                center={{ lat: 28.6139, lng: 77.209 }}
                mapContainerClassName="map"
                options={{
                  // mapTypeControl: true,
                  // mapTypeId: "setellite",
                  // fullscreenControl:false,
                  // streetViewControl:false,
                  zoomControl: false,
                  // panControl:false,
                  // disableDefaultUI: false,
                }}
              >
                {hotelListData.map((hotel) => (
                  <Marker
                    key={hotel.id}
                    position={hotel.location}
                    onMouseOver={() => setInfoInMap(hotel)}
                    onMouseOut={() => setInfoInMap(null)}
                    options={
                      {
                        // icon:"/hotel-booking-app/images/flag.png",
                      }
                    }
                  />
                ))}

                {infoInMap && (
                  <InfoWindow
                    position={infoInMap.location}
                    options={{
                      pixelOffset: new window.google.maps.Size(0, -40),
                      disableAutoPan: true,
                    }}
                  >
                    <InfoContainer>
                      <ImgContainer>
                        <img src={infoInMap.img[0]} alt="hotel" />
                      </ImgContainer>
                      <DetailsContainer>
                        <h2>{infoInMap.name}</h2>
                        <span>{infoInMap.roomDetails}</span>
                        <span>{infoInMap.bedDetails}</span>
                        <h3>&#8377; {infoInMap.price}</h3>
                      </DetailsContainer>
                    </InfoContainer>
                  </InfoWindow>
                )}
              </GoogleMap>
            ) : (
              <span>Oops! Something went wrong.</span>
            )}

            <MapCloseBtn type="button" onClick={() => setOpenMap(false)}>
              <Close className="close-icon" />
            </MapCloseBtn>
          </MapWrapper>
        </MapContainer>
      )}
    </Container>
  );
};

export default Map;
