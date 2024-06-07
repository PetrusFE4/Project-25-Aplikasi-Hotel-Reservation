import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [showUsersLink, setShowUsersLink] = useState(true);

  const handleLogout = async () => {
    try {
      await axios.delete("http://localhost:5000/api/users/logout", {
        withCredentials: true,
      });
      console.log("Logout success");
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users", {
        withCredentials: true,
      })
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 403) {
          setShowUsersLink(false);
        } else {
          console.log(error);
        }
      });
  }, []);

  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4">
      <div>
        <Link to="/" className="text-white font-bold text-xl">
          Vite
        </Link>
      </div>
      <div>
        <Link to="/profile" className="text-white mr-4">
          Profile
        </Link>
        {showUsersLink && (
          <Link to="/users" className="text-white mr-4">
            List User
          </Link>
        )}
        <button to="/logout" className="text-white" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
