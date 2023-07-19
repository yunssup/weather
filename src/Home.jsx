import { useEffect, useState } from "react";
import {
  BodySection,
  DataTable,
  EmptyText,
  HeadSection,
  HeadText,
  HomeContainer,
  TableTd,
  TableTh,
} from "./components/BodyStyle";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // State 작성------------------------------------------------

  // Function 작성---------------------------------------------
  const fetchData = async () => {
    // OPEN API 비동기로 불러와 State에 저장하기
  };

  // ComponentDidMount-----------------------------------------
  useEffect(() => {
    // 렌더링 후 1회 실행
    fetchData();
  }, []);

  return (
    <HomeContainer>
      {/* 아래에 날씨 Open API 관련 코드 작성 */}
      <HeadSection>
        <HeadText>서울시 권역별 실시간 대기환경 현황</HeadText>
      </HeadSection>
      <BodySection>
        <DataTable>
          <thead>
            <tr>
              {/* MSRDT */}
              <TableTh>측정일</TableTh>
              {/* MSRSTE_NM */}
              <TableTh>측정소</TableTh>
              {/* PM10 */}
              <TableTh>미세먼지(㎍/㎥)</TableTh>
              {/* PM25 */}
              <TableTh>초미세먼지농도(㎍/㎥)</TableTh>
              {/* IDEX_NM */}
              <TableTh>통합대기환경등급</TableTh>
              {/* IDEX_MVL */}
              <TableTh>통합대기환경지수</TableTh>
            </tr>
          </thead>
          <tbody></tbody>
        </DataTable>
      </BodySection>
    </HomeContainer>
  );
};

export default Home;
