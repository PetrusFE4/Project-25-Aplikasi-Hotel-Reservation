import { Send } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #003580;
  padding: 40px 0px;
  margin: 30px 0px;

  @media screen and (max-width: 426px) {
    margin: 20px 0px;
  }
`;

const TextContainer = styled.div`
  /* border: 1px solid red; */
  text-align: center;
  color: white;
  margin-bottom: 20px;

  h1 {
    @media screen and (max-width: 426px) {
      font-size: 20px;
    }
  }

  span {
    @media screen and (max-width: 426px) {
      font-size: 13px;
    }
  }
`;

const Form = styled.form`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;

  input {
    padding: 8px;
    font-size: 18px;
    width: 55%;

    @media screen and (max-width: 426px) {
      padding: 5px;
      font-size: 13px;
      width: 65%;
    }
  }

  button {
    margin-left: 5px;
    width: 80px;
    background-color: white;
    border: 1px solid white;

    &:hover {
      background-color: transparent;
      color: white;
    }

    @media screen and (max-width: 426px) {
      width: 65px;
    }

    .send-icon {
      font-size: 27px;

      @media screen and (max-width: 426px) {
        font-size: 25px;
      }
    }
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <TextContainer>
        <h1>Simpan waktu | Simpan Uang</h1>
        <span>Sign up dan temukan harga yang pas sesuai kantong.</span>
      </TextContainer>
      <Form>
        <input type="email" placeholder="Your email" required />
        <button>
          <Send className="send-icon" />
        </button>
      </Form>
    </Container>
  );
};

export default Newsletter;
