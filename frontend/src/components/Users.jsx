import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const Users = () => {
  const [users, setUsers] = useState([]);

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
          window.location.href = "/profile";
        } else {
          console.log(error);
        }
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        {users.map((user, index) => (
          <div
            key={index++}
            className="w-full max-w-md mt-10 p-6 bg-white rounded-lg shadow-md"
          >
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Profile</h1>
            <div className="space-y-4">
              <p className="text-lg">
                <span className="font-semibold">Name: </span>
                {user.name}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Email: </span>
                {user.email}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Role: </span>
                {user.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
