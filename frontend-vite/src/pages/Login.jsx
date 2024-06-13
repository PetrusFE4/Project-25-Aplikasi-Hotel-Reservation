import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { OtherContainer, Wrapper, Form } from "./styled/Login.styled";
import Navbar from "../components/Navbar";
import axios from "axios";
import { endpoint } from "../api.js";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        endpoint.loginUser,
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      alert(response.data.message);
      navigate("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

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

            <button type="submit">Login</button>
          </Form>
        </Wrapper>
      </OtherContainer>
    </>
  );
};

export default Login;
