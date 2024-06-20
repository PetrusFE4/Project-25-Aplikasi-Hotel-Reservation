import styled from "styled-components";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 150px;
  margin-top: 2rem;

  @media screen and (max-width: 1200px) {
    margin: 0px 30px;
  }

  @media screen and (max-width: 675px) {
    margin: 0px 20px;
  }
`;

const DashboardTitle = styled.h2`
  text-align: left;
  font-size: 25px;
  margin-bottom: 20px;
`;

const DashboardItem = styled.div`
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100%;
`;

const DashboardItemTitle = styled.h3`
  font-size: 20px;
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
  DashboardContainer,
  DashboardTitle,
  DashboardItem,
  DashboardItemTitle,
  StyledTable,
  StyledThead,
  StyledTh,
  StyledTbody,
  StyledTd,
};
