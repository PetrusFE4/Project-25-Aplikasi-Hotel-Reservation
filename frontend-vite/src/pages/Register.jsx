import { useState } from "react";
import { OtherContainer, Wrapper, Form } from "./styled/Register.styled";
import { endpoint } from "../api.js";
import axios from "axios";
import Navbar from "../components/Navbar";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
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

      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

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
        </Wrapper>
      </OtherContainer>
    </>
  );
};

export default Register;
