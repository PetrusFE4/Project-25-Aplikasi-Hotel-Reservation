import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { Close } from "@mui/icons-material";
import { useState } from "react";
import { hotelListData } from "../dummyData";
import {
  Container,
  ShowOnMapBtnContainer,
  MapContainer,
  MapWrapper,
  MapCloseBtn,
  InfoContainer,
  ImgContainer,
  DetailsContainer,
} from "./styled/Map.styled";

const Map = () => {
  const [openMap, setOpenMap] = useState(false);
  const [infoInMap, setInfoInMap] = useState(null);

  // console.log(infoInMap);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
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
