import React from "react";
import styled from "styled-components";

const ThanksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ThanksMessage = styled.h1`
  font-size: 24px;
  text-align: center;
`;

const Thanks = () => {
  return (
    <ThanksContainer>
      <ThanksMessage>Thank you for your payment!</ThanksMessage>
    </ThanksContainer>
  );
};

export default Thanks;
