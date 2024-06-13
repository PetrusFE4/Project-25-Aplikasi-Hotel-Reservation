import { HelpOutline } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavContainer,
  NavWrapper,
  LeftContainer,
  RightContainer,
  OtherContainer,
  Wrapper,
  Form,
  MethodContainer,
  TermConditioContainer,
  Copyright,
} from "./styled/Register.styled";
import { endpoint } from "../api.js";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(endpoint.registerUser, {
        name,
        email,
        password,
      });

      if (response.status === 409) {
        throw new Error(alert("Email Sudah Ada"));
      }

      if (!response.ok) {
        throw new Error(alert("Pastikan data anda benar"));
      }

      const data = await response.json();
      console.log(data);
      setSuccess(true);
      setError("");
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <>
      <NavContainer>
        <NavWrapper>
          <LeftContainer>
            <Link to="/" className="homepage-link">
              My Booking
            </Link>
          </LeftContainer>
          <RightContainer>
            <HelpOutline className="help-icon" />
            <img src="/images/flag.png" alt="Languages" />
          </RightContainer>
        </NavWrapper>
      </NavContainer>

      <OtherContainer>
        <Wrapper>
          <h2>Register to create account</h2>
          <Form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="off"
            />

            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="off"
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <button type="submit">Register</button>
          </Form>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p>Registration successful!</p>}
        </Wrapper>
      </OtherContainer>
    </>
  );
};

export default Register;
