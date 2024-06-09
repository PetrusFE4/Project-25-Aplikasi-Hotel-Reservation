import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hotel from "./pages/Hotel";
import HotelList from "./pages/HotelList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import BookingForm from "./pages/Booking";
import { hotelListData } from "./dummyData";
import Logout from "./pages/Logout";




const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* Important:- You have to put "basename" attribute with "process.env.PUBLIC_URL" value when you have .env file in your project otherwise when you deploy your website on github it will show you blank pages in live website. */}

      {/* Another note to remember is that when you deploy ur website on github them make sure ur "images URL" must have newly created github repository name in images URL otherwise images will not be shown after deployment. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<HotelList />} />
        <Route path="/hotel/:id" element={<Hotel />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/logout" element={<Logout />} />
        


        
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
