const featuredCityData = [
  {
    id: 1,
    img: "/hotel-booking-app/images/cities/jakarta.jpg",
    name: "Jakarta",
    countryImg: "/hotel-booking-app/images/flag.png",
    desc: "Jakarta, Indonesia's capital, is a bustling metropolis on Java's northwest coast, known for its diverse culture, vibrant nightlife, historical landmarks, and as an economic and political hub.",
    rating: 4,
    hotels: 1745,
  },
  {
    id: 2,
    img: "/hotel-booking-app/images/cities/bandung.jpg",
    name: "Bandung",
    countryImg: "/hotel-booking-app/images/flag.png",
    desc: "Bandung, Indonesia, is known for its cool climate, colonial architecture, and vibrant arts scene. Located in West Java, it’s a hub for education, technology, and culinary delights.",
    rating: 3,
    hotels: 1275,
  },
  {
    id: 3,
    img: "/hotel-booking-app/images/cities/bali.jpg",
    name: "Bali",
    countryImg: "/hotel-booking-app/images/flag.png",
    desc: "Bali, Indonesia, is a renowned island paradise famous for its stunning beaches, vibrant culture, lush landscapes, and rich arts scene, making it a top global tourist destination.",
    rating: 5,
    hotels: 1653,
  },
  {
    id: 4,
    img: "/hotel-booking-app/images/cities/yogyakarta.jpg",
    name: "Yogyakarta",
    countryImg: "/hotel-booking-app/images/flag.png",
    desc: "Yogyakarta, Indonesia, is a cultural and historical hub known for its traditional arts, Javanese heritage, and iconic landmarks like Borobudur and Prambanan temples. It’s a center of education and tourism.",
    rating: 3,
    hotels: 945,
  },
  {
    id: 5,
    img: "/hotel-booking-app/images/cities/lombok.jpg",
    name: "Lombok",
    countryImg: "/hotel-booking-app/images/flag.png",
    desc: "Lombok, Indonesia, is a picturesque island known for its pristine beaches, vibrant marine life, and the majestic Mount Rinjani. It's a quieter alternative to Bali, offering serene landscapes and rich culture.",
    rating: 5,
    hotels: 2454,
  },
  {
    id: 6,
    img: "/hotel-booking-app/images/cities/surabaya.jpg",
    name: "Surabaya",
    countryImg: "/hotel-booking-app/images/flag.png",
    desc: "Surabaya, Indonesia's second-largest city, is a bustling port city known for its economic significance, historical landmarks, and vibrant cultural scene. It’s a major business hub with a mix of modern and colonial architecture.",
    rating: 2,
    hotels: 245,
  },
];

const citySliderData = [
  {
    id: 1,
    img: "/hotel-booking-app/images/cities/jakarta.jpg",
    name: "Jakarta",
    property: 1745,
  },
  {
    id: 2,
    img: "/hotel-booking-app/images/cities/bandung.jpg",
    name: "Bandung",
    property: 1420,
  },
  {
    id: 3,
    img: "/hotel-booking-app/images/cities/bali.jpg",
    name: "Bali",
    property: 1745,
  },
  {
    id: 4,
    img: "/hotel-booking-app/images/cities/yogyakarta.jpg",
    name: "Yogyakarta",
    property: 1845,
  },
  {
    id: 5,
    img: "/hotel-booking-app/images/cities/lombok.jpg",
    name: "Lombok",
    property: 3745,
  },
  {
    id: 6,
    img: "/hotel-booking-app/images/cities/surabaya.jpg",
    name: "Surabaya",
    property: 845,
  },
  {
    id: 7,
    img: "/hotel-booking-app/images/cities/yogyakarta.jpg",
    name: "Yogyakarta",
    property: 1845,
  },
  {
    id: 8,
    img: "/hotel-booking-app/images/cities/lombok.jpg",
    name: "Lombok",
    property: 3745,
  },
  {
    id: 9,
    img: "/hotel-booking-app/images/cities/surabaya.jpg",
    name: "Surabaya",
    property: 845,
  },
];

const propertySliderData = [
  {
    id: 1,
    img: "/hotel-booking-app/images/properties/hotelroom.jpeg",
    name: "Hotels",
    property: 3545,
  },
  {
    id: 2,
    img: "/hotel-booking-app/images/properties/apartment.jpeg",
    name: "Apartments",
    property: 3420,
  },
  {
    id: 3,
    img: "/hotel-booking-app/images/properties/resort.jpeg",
    name: "Resorts",
    property: 2745,
  },
  {
    id: 4,
    img: "/hotel-booking-app/images/properties/motel.jpeg",
    name: "Motels",
    property: 1745,
  },
  {
    id: 5,
    img: "/hotel-booking-app/images/properties/villa.jpg",
    name: "Villas",
    property: 2845,
  },
  {
    id: 6,
    img: "/hotel-booking-app/images/properties/farmhouse.jpeg",
    name: "Farm Houses",
    property: 1245,
  },
  {
    id: 7,
    img: "/hotel-booking-app/images/properties/hotelroom.jpeg",
    name: "Hotels",
    property: 3545,
  },
  {
    id: 8,
    img: "/hotel-booking-app/images/properties/apartment.jpeg",
    name: "Apartments",
    property: 3420,
  },
  {
    id: 9,
    img: "/hotel-booking-app/images/properties/resort.jpeg",
    name: "Resorts",
    property: 2745,
  },
  {
    id: 10,
    img: "/hotel-booking-app/images/properties/villa.jpg",
    name: "Villas",
    property: 2845,
  },
  {
    id: 11,
    img: "/hotel-booking-app/images/properties/motel.jpeg",
    name: "Motels",
    property: 1745,
  },
  {
    id: 12,
    img: "/hotel-booking-app/images/properties/farmhouse.jpeg",
    name: "Farm Houses",
    property: 1245,
  },
];


const hotelListData = [
  {
    id: 1,
    img: [
      "/hotel-booking-app/images/hotels/hotel1.jpg",
      "/hotel-booking-app/images/hotels/hotel2.jpg",
      "/hotel-booking-app/images/hotels/hotel3.jpg",
      "/hotel-booking-app/images/hotels/hotel4.jpg",
      "/hotel-booking-app/images/hotels/hotel5.jpg",
      "/hotel-booking-app/images/hotels/hotel6.jpg",
      "/hotel-booking-app/images/hotels/hotel7.jpg",
      "/hotel-booking-app/images/hotels/hotel8.jpg",
    ],
    name: "The Residences of The Ritz-Carlton Jakarta Pacific Place",
    place: "Jakarta",
    location: { lat: 28.6048, lng: 77.2234 },
    distance: 6.7,
    address: "Jalan Jendral Sudirman Kav. 52-53, 12190 Jakarta, Indonesia",
    offer: "Breakfast Included",
    roomDetails: "Luxury Room with Bath Tub",
    bedDetails: "1 king size single bed",
    roomLeft: 5,
    rating: 5,
    reviews: 312,
    night: 1,
    adult: 2,
    children: 1,
    price: "Rp. 3.150.000",
  },
  {
    id: 2,
    img: [
      "/hotel-booking-app/images/hotels/hotel9.jpg",
      "/hotel-booking-app/images/hotels/hotel10.jpg",
      "/hotel-booking-app/images/hotels/hotel11.jpg",
      "/hotel-booking-app/images/hotels/hotel12.jpg",
      "/hotel-booking-app/images/hotels/hotel13.jpg",
      "/hotel-booking-app/images/hotels/hotel14.jpg",
      "/hotel-booking-app/images/hotels/hotel15.jpg",
      "/hotel-booking-app/images/hotels/hotel16.jpg",
    ],
    name: "Raffles Jakarta",
    place: "Jakarta",
    location: { lat: 28.6289, lng: 77.0786 },
    distance: 12,
    address: " Jalan Prof. Dr. Satrio Kav. 3-5, 12940 Jakarta, Indonesia ",
    offer: "Free Airport Taxi",
    roomDetails: "King Room with Bath Tub",
    bedDetails: "1 extra-large double bed",
    roomLeft: 3,
    rating: 5,
    reviews: 275,
    night: 1,
    adult: 2,
    children: 0,
    price: "Rp. 3.334.000",
  },
  {
    id: 3,
    img: [
      "/hotel-booking-app/images/hotels/hotel17.jpg",
      "/hotel-booking-app/images/hotels/hotel18.jpg",
      "/hotel-booking-app/images/hotels/hotel19.jpg",
      "/hotel-booking-app/images/hotels/hotel20.jpg",
      "/hotel-booking-app/images/hotels/hotel21.jpg",
      "/hotel-booking-app/images/hotels/hotel22.jpg",
      "/hotel-booking-app/images/hotels/hotel23.jpg",
      "/hotel-booking-app/images/hotels/hotel24.jpg",
    ],
    name: "favehotel Tanah Abang - Cideng",
    place: "Jakarta",
    location: { lat: 28.5516, lng: 77.1207 },
    distance: 13.6,
    address: " Jl. Cideng Timur No. 58 Petojo Selatan, 10160 Jakarta, Indonesia",
    offer: " Free Laundry",
    roomDetails: "Superior Queen Room",
    bedDetails: "1 double bed",
    roomLeft: 2,
    rating: 3,
    reviews: 543,
    night: 2,
    adult: 2,
    children: 1,
    price: "Rp. 428.000",
  },
  {
    id: 4,
    img: [
      "/hotel-booking-app/images/hotels/hotel25.jpg",
      "/hotel-booking-app/images/hotels/hotel26.jpg",
      "/hotel-booking-app/images/hotels/hotel27.jpg",
      "/hotel-booking-app/images/hotels/hotel28.jpg",
      "/hotel-booking-app/images/hotels/hotel29.jpg",
      "/hotel-booking-app/images/hotels/hotel30.jpg",
      "/hotel-booking-app/images/hotels/hotel31.jpg",
      "/hotel-booking-app/images/hotels/hotel32.jpg",
    ],
    name: "Sentral Cawang Hotel",
    place: "Jakarta",
    location: { lat: 28.6448, lng: 77.2151 },
    distance: 1.3,
    address: " Jl M.T. Haryono No 9, Cawang, 13630 Jakarta, Indonesia",
    offer: "Breakfast Included",
    roomDetails: "Deluxe Double Room",
    bedDetails: "1 large double bed",
    roomLeft: 3,
    rating: 3,
    reviews: 265,
    night: 1,
    adult: 2,
    children: 0,
    price: "Rp. 408.000",
  },
  {
    id: 5,
    img: [
      "/hotel-booking-app/images/hotels/hotel33.jpg",
      "/hotel-booking-app/images/hotels/hotel34.jpg",
      "/hotel-booking-app/images/hotels/hotel35.jpg",
      "/hotel-booking-app/images/hotels/hotel36.jpg",
      "/hotel-booking-app/images/hotels/hotel37.jpg",
      "/hotel-booking-app/images/hotels/hotel38.jpg",
      "/hotel-booking-app/images/hotels/hotel39.jpg",
      "/hotel-booking-app/images/hotels/hotel40.jpg",
    ],
    name: "Maia Hotel Jakarta",
    place: "Jakarta",
    location: { lat: 28.6338, lng: 77.2172 },
    distance: 0.5,
    address: " 79 Jalan Kebon Kacang 9, 10240 Jakarta, Indonesia",
    offer: "Breakfast Included",
    roomDetails: "Superior Double Room",
    bedDetails: "1 large double bed",
    roomLeft: 5,
    rating: 4,
    reviews: 712,
    night: 1,
    adult: 2,
    children: 0,
    price: "Rp. 2.750.000",
  },
  {
    id: 6,
    img: [
      "/hotel-booking-app/images/hotels/hotel41.jpg",
      "/hotel-booking-app/images/hotels/hotel42.jpg",
      "/hotel-booking-app/images/hotels/hotel43.jpg",
      "/hotel-booking-app/images/hotels/hotel44.jpg",
      "/hotel-booking-app/images/hotels/hotel45.jpg",
      "/hotel-booking-app/images/hotels/hotel46.jpg",
      "/hotel-booking-app/images/hotels/hotel47.jpg",
      "/hotel-booking-app/images/hotels/hotel48.jpg",
    ],
    name: "Novotel Jakarta Cikini",
    place: "Jakarta",
    location: { lat: 28.6613, lng: 77.1944 },
    distance: 4,
    address: " Jalan Cikini Raya No 107 109 Cikini Menteng Jakarta Pusat, 10330 Jakarta, Indonesia",
    offer: "Breakfast Included",
    roomDetails: "Deluxe Double Room",
    bedDetails: "1 large double bed",
    roomLeft: 3,
    rating: 4,
    reviews: 43,
    night: 2,
    adult: 2,
    children: 1,
    price: "Rp. 3.000.000",
  },
  {
    id: 7,
    img: [
      "/hotel-booking-app/images/hotels/hotel41.jpg",
      "/hotel-booking-app/images/hotels/hotel42.jpg",
      "/hotel-booking-app/images/hotels/hotel43.jpg",
      "/hotel-booking-app/images/hotels/hotel44.jpg",
      "/hotel-booking-app/images/hotels/hotel45.jpg",
      "/hotel-booking-app/images/hotels/hotel46.jpg",
      "/hotel-booking-app/images/hotels/hotel47.jpg",
      "/hotel-booking-app/images/hotels/hotel48.jpg",
    ],
    name: "Bali ubud",
    place: "Bali",
    location: { lat: 28.6613, lng: 77.1944 },
    distance: 4,
    address: " Jalan Cikini Raya No 107 109 Cikini Menteng Jakarta Pusat, 10330 Jakarta, Indonesia",
    offer: "Breakfast Included",
    roomDetails: "Deluxe Double Room",
    bedDetails: "1 large double bed",
    roomLeft: 3,
    rating: 4,
    reviews: 43,
    night: 2,
    adult: 2,
    children: 1,
    price: "Rp. 3.000.000",
  },
];

const hotelListDataBandung = [
  {
    id: 1,
    img: [
      "/hotel-booking-app/images/hotels/hotel1.jpg",
      "/hotel-booking-app/images/hotels/hotel2.jpg",
      "/hotel-booking-app/images/hotels/hotel3.jpg",
      "/hotel-booking-app/images/hotels/hotel4.jpg",
      "/hotel-booking-app/images/hotels/hotel5.jpg",
      "/hotel-booking-app/images/hotels/hotel6.jpg",
      "/hotel-booking-app/images/hotels/hotel7.jpg",
      "/hotel-booking-app/images/hotels/hotel8.jpg",
    ],
    name: "The Residences of The Ritz-Carlton Jakarta Pacific Place",
    place: "Jakarta",
    location: { lat: 28.6048, lng: 77.2234 },
    distance: 6.7,
    address: "Jalan Jendral Sudirman Kav. 52-53, 12190 Jakarta, Indonesia",
    offer: "Breakfast Included",
    roomDetails: "Luxury Room with Bath Tub",
    bedDetails: "1 king size single bed",
    roomLeft: 5,
    rating: 5,
    reviews: 312,
    night: 1,
    adult: 2,
    children: 1,
    price: "Rp. 3.150.000",
  },
  {
    id: 2,
    img: [
      "/hotel-booking-app/images/hotels/hotel9.jpg",
      "/hotel-booking-app/images/hotels/hotel10.jpg",
      "/hotel-booking-app/images/hotels/hotel11.jpg",
      "/hotel-booking-app/images/hotels/hotel12.jpg",
      "/hotel-booking-app/images/hotels/hotel13.jpg",
      "/hotel-booking-app/images/hotels/hotel14.jpg",
      "/hotel-booking-app/images/hotels/hotel15.jpg",
      "/hotel-booking-app/images/hotels/hotel16.jpg",
    ],
    name: "Raffles Jakarta",
    place: "Jakarta",
    location: { lat: 28.6289, lng: 77.0786 },
    distance: 12,
    address: " Jalan Prof. Dr. Satrio Kav. 3-5, 12940 Jakarta, Indonesia ",
    offer: "Free Airport Taxi",
    roomDetails: "King Room with Bath Tub",
    bedDetails: "1 extra-large double bed",
    roomLeft: 3,
    rating: 5,
    reviews: 275,
    night: 1,
    adult: 2,
    children: 0,
    price: "Rp. 3.334.000",
  },
  {
    id: 3,
    img: [
      "/hotel-booking-app/images/hotels/hotel17.jpg",
      "/hotel-booking-app/images/hotels/hotel18.jpg",
      "/hotel-booking-app/images/hotels/hotel19.jpg",
      "/hotel-booking-app/images/hotels/hotel20.jpg",
      "/hotel-booking-app/images/hotels/hotel21.jpg",
      "/hotel-booking-app/images/hotels/hotel22.jpg",
      "/hotel-booking-app/images/hotels/hotel23.jpg",
      "/hotel-booking-app/images/hotels/hotel24.jpg",
    ],
    name: "favehotel Tanah Abang - Cideng",
    place: "Jakarta",
    location: { lat: 28.5516, lng: 77.1207 },
    distance: 13.6,
    address: " Jl. Cideng Timur No. 58 Petojo Selatan, 10160 Jakarta, Indonesia",
    offer: " Free Laundry",
    roomDetails: "Superior Queen Room",
    bedDetails: "1 double bed",
    roomLeft: 2,
    rating: 3,
    reviews: 543,
    night: 2,
    adult: 2,
    children: 1,
    price: "Rp. 428.000",
  },
  {
    id: 4,
    img: [
      "/hotel-booking-app/images/hotels/hotel25.jpg",
      "/hotel-booking-app/images/hotels/hotel26.jpg",
      "/hotel-booking-app/images/hotels/hotel27.jpg",
      "/hotel-booking-app/images/hotels/hotel28.jpg",
      "/hotel-booking-app/images/hotels/hotel29.jpg",
      "/hotel-booking-app/images/hotels/hotel30.jpg",
      "/hotel-booking-app/images/hotels/hotel31.jpg",
      "/hotel-booking-app/images/hotels/hotel32.jpg",
    ],
    name: "Sentral Cawang Hotel",
    place: "Jakarta",
    location: { lat: 28.6448, lng: 77.2151 },
    distance: 1.3,
    address: " Jl M.T. Haryono No 9, Cawang, 13630 Jakarta, Indonesia",
    offer: "Breakfast Included",
    roomDetails: "Deluxe Double Room",
    bedDetails: "1 large double bed",
    roomLeft: 3,
    rating: 3,
    reviews: 265,
    night: 1,
    adult: 2,
    children: 0,
    price: "Rp. 408.000",
  },
  {
    id: 5,
    img: [
      "/hotel-booking-app/images/hotels/hotel33.jpg",
      "/hotel-booking-app/images/hotels/hotel34.jpg",
      "/hotel-booking-app/images/hotels/hotel35.jpg",
      "/hotel-booking-app/images/hotels/hotel36.jpg",
      "/hotel-booking-app/images/hotels/hotel37.jpg",
      "/hotel-booking-app/images/hotels/hotel38.jpg",
      "/hotel-booking-app/images/hotels/hotel39.jpg",
      "/hotel-booking-app/images/hotels/hotel40.jpg",
    ],
    name: "Maia Hotel Bandung",
    place: "Bandung",
    location: { lat: 28.6338, lng: 77.2172 },
    distance: 0.5,
    address: " 79 Jalan Kebon Kacang 9, 10240 Jakarta, Indonesia",
    offer: "Breakfast Included",
    roomDetails: "Superior Double Room",
    bedDetails: "1 large double bed",
    roomLeft: 5,
    rating: 4,
    reviews: 712,
    night: 1,
    adult: 2,
    children: 0,
    price: "Rp. 2.750.000",
  },
  {
    id: 6,
    img: [
      "/hotel-booking-app/images/hotels/hotel41.jpg",
      "/hotel-booking-app/images/hotels/hotel42.jpg",
      "/hotel-booking-app/images/hotels/hotel43.jpg",
      "/hotel-booking-app/images/hotels/hotel44.jpg",
      "/hotel-booking-app/images/hotels/hotel45.jpg",
      "/hotel-booking-app/images/hotels/hotel46.jpg",
      "/hotel-booking-app/images/hotels/hotel47.jpg",
      "/hotel-booking-app/images/hotels/hotel48.jpg",
    ],
    name: "Novotel Jakarta Cikini",
    place: "Jakarta",
    location: { lat: 28.6613, lng: 77.1944 },
    distance: 4,
    address: " Jalan Cikini Raya No 107 109 Cikini Menteng Jakarta Pusat, 10330 Jakarta, Indonesia",
    offer: "Breakfast Included",
    roomDetails: "Deluxe Double Room",
    bedDetails: "1 large double bed",
    roomLeft: 3,
    rating: 4,
    reviews: 43,
    night: 2,
    adult: 2,
    children: 1,
    price: "Rp. 3.000.000",
  },
  {
    id: 7,
    img: [
      "/hotel-booking-app/images/hotels/hotel41.jpg",
      "/hotel-booking-app/images/hotels/hotel42.jpg",
      "/hotel-booking-app/images/hotels/hotel43.jpg",
      "/hotel-booking-app/images/hotels/hotel44.jpg",
      "/hotel-booking-app/images/hotels/hotel45.jpg",
      "/hotel-booking-app/images/hotels/hotel46.jpg",
      "/hotel-booking-app/images/hotels/hotel47.jpg",
      "/hotel-booking-app/images/hotels/hotel48.jpg",
    ],
    name: "Bali ubud",
    place: "Bali",
    location: { lat: 28.6613, lng: 77.1944 },
    distance: 4,
    address: " Jalan Cikini Raya No 107 109 Cikini Menteng Jakarta Pusat, 10330 Jakarta, Indonesia",
    offer: "Breakfast Included",
    roomDetails: "Deluxe Double Room",
    bedDetails: "1 large double bed",
    roomLeft: 3,
    rating: 4,
    reviews: 43,
    night: 2,
    adult: 2,
    children: 1,
    price: "Rp. 3.000.000",
  },
];


export {
  featuredCityData,
  citySliderData,
  propertySliderData,
  hotelListData,
  hotelListDataBandung,
};