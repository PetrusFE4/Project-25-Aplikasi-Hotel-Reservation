import styled from "styled-components";

const ProfileContainer = styled.div`
  margin: 0px 150px;
  margin-top: 2rem;

  @media screen and (max-width: 1200px) {
    margin: 0px 30px;
  }

  @media screen and (max-width: 675px) {
    margin: 20px 20px;
  }
`;

const ProfileContainerTitle = styled.h2`
  text-align: left;
  font-size: 25px;
`;

const EditButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  position: relative;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const CloseButton = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  color: #fff;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 5px;
  &:hover {
    background-color: darkred;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const BookingHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 150px;
  margin-top: 2rem;

  @media screen and (max-width: 1200px) {
    margin: 0px 30px;
  }

  @media screen and (max-width: 675px) {
    margin: 50px 20px;
  }
`;

const BookingHistoryTitle = styled.h2`
  text-align: left;
  font-size: 25px;
  margin-bottom: 20px;
`;

const BookingHistoryItem = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100%;
`;

const BookingHistoryItemTitle = styled.h3`
  @media screen and (max-width: 1200px) {
    font-size: 20px;
  }

  @media screen and (max-width: 675px) {
    font-size: 15px;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const StyledThead = styled.thead`
  background-color: #f4f4f4;
`;

const StyledTh = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
  background-color: #f8f8f8;
  font-weight: bold;
`;

const StyledTbody = styled.tbody`
  text-align: center;
`;

const StyledTd = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

export {
  ProfileContainer,
  ProfileContainerTitle,
  EditButton,
  PopupContainer,
  PopupContent,
  CloseButton,
  Form,
  Input,
  BookingHistoryContainer,
  BookingHistoryTitle,
  BookingHistoryItem,
  BookingHistoryItemTitle,
  StyledTable,
  StyledThead,
  StyledTh,
  StyledTbody,
  StyledTd,
};
