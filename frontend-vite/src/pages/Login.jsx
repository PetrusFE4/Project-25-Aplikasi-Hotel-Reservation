import { HelpOutline } from "@mui/icons-material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
} from "./styled/Login.styled";

const Login = () => {
  const navigate = useNavigate(); // useNavigate untuk versi react-router-dom terbaru
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Pastikan data anda benar");
      }

      const data = await response.json();
      console.log(data);
      setSuccess(true);
      setError(""); // Mengosongkan error jika login berhasil
      navigate("/"); // Menggunakan navigate untuk pindah halaman
    } catch (error) {
      console.error(error);
      setError(error.message); // Menetapkan pesan error
      setSuccess(false); // Mengatur kembali ke false jika login gagal
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
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p>Login successful!</p>}
        </Wrapper>
      </OtherContainer>
    </>
  );
};

export default Login;
