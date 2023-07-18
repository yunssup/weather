import { styled } from "styled-components";

// Body Component 관련 styled component

// Frame---------------------------------------
export const HomeContainer = styled.div`
  max-width: 100%;
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid orange;
`;

export const HeadSection = styled.section`
  width: 700px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid orange;
  transition: all 0.3s;
  @media all and (max-width: 705px) {
    width: 100%;
  }
  @media all and (max-width: 505px) {
    width: 375px;
  }
`;

export const BodySection = styled.section`
  width: 700px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid orange;
  transition: all 0.3s;
  @media all and (max-width: 705px) {
    width: 100%;
  }
  @media all and (max-width: 505px) {
    width: 375px;
  }
`;

// Item---------------------------------------
export const HeadText = styled.h1`
  font-family: "AppleSDGothicNeoB";
  font-size: 20px;
  color: ${(props) => props.theme.textColor};
`;

export const DataTable = styled.table`
  width: 100%;
  height: 100%;
  border: 1px solid yellow;
  border-collapse: collapse;
  text-align: center;
`;

export const TableTHead = styled.thead`
  background-color: ${(props) => props.theme.secondaryColor};
`;

export const TableTBody = styled.tbody``;

export const TableTh = styled.th`
  min-width: 50px;
`;

export const TableTd = styled.td`
  vertical-align: middle;
  border: ${(props) => `1px solid ${props.theme.primaryColor}`};
`;
