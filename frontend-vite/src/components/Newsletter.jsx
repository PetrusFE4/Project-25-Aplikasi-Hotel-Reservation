import { Send } from "@mui/icons-material";
import { Container, TextContainer, Form } from "./styled/Newsletter.styled";

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
