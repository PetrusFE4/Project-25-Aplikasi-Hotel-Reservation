import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { OtherContainer, Wrapper, Form } from "./styled/Login.styled";
import Navbar from "../components/Navbar";
import axios from "axios";
import { endpoint } from "../api.js";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(endpoint.loginUser, formData, {
        withCredentials: true,
      });

      alert(response.data.message);
      navigate("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  useEffect(() => {
    const verifyLogin = async () => {
      try {
        await axios.get(endpoint.getCurrentUser, {
          withCredentials: true,
        });
        navigate("/");
      } catch (error) {
        return;
      }
    };
    verifyLogin();
  }, []);

  return (
    <>
      <Navbar />

      <OtherContainer>
        <Wrapper>
          <h2>Login to your account</h2>
          <Form onSubmit={handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              autoComplete="off"
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />

            <button type="submit">Login</button>
          </Form>
        </Wrapper>
      </OtherContainer>
    </>
  );
};

export default Login;
