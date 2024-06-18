import { useState, useEffect } from "react";
import { OtherContainer, Wrapper, Form } from "./styled/Register.styled";
import { endpoint } from "../api.js";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(endpoint.registerUser, formData, {
        withCredentials: true,
      });

      alert(response.data.message);
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      navigate("/login");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const navigate = useNavigate();

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
          <h2>Register to create account</h2>
          <Form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="name"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              autoComplete="off"
            />

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

            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              required
            />

            <button type="submit">Register</button>
          </Form>
        </Wrapper>
      </OtherContainer>
    </>
  );
};

export default Register;
