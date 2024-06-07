import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children, redirectTo, isAuthCheck }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(null);

  React.useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/verify-token",
          {},
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(response.data.valid);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Atau spinner loading
  }

  if (isAuthCheck ? isAuthenticated : !isAuthenticated) {
    return <Navigate to={redirectTo} />;
  }

  return children;
};

export default ProtectedRoute;
