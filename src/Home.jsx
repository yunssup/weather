import React, { useEffect, useState } from "react";
import {
  BodySection,
  DataTable,
  HeadSection,
  HeadText,
  HomeContainer,
  TableTBody,
  TableTHead,
  TableTd,
  TableTh,
} from "./components/BodyStyle";
import axios from "axios";

// Constant-----------------------------------------------
const API_KEY = "6e4f534e4f776e733830444d696c71";

const Home = () => {
  // State------------------------------------------------
  const [weatherData, setWeatherData] = useState([]);
  const fetchData = async () => {
    // OPEN API 비동기로 불러와 State에 저장하기
    try {
      const response = await axios.get(
        `http://openAPI.seoul.go.kr:8088/${API_KEY}/json/RealtimeCityAir/1/5/`
      );
      setWeatherData(response.data.RealtimeCityAir.row);
    } catch (error) {
      console.log(error);
    }
  };
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
          <TableTHead>
            <tr>
              {/* MSRDT */}
              <TableTh>측정일시</TableTh>
              {/* MSRRGN_NM */}
              <TableTh>권역명</TableTh>
              {/* PM10 */}
              <TableTh>미세먼지(㎍/㎥)</TableTh>
              {/* PM25 */}
              <TableTh>초미세먼지농도(㎍/㎥)</TableTh>
              {/* IDEX_NM */}
              <TableTh>통합대기환경등급</TableTh>
              {/* IDEX_MVL */}
              <TableTh>통합대기환경지수</TableTh>
            </tr>
          </TableTHead>
          <TableTBody>
            {weatherData.map((data, idx) => (
              <React.Fragment key={idx}>
                <tr>
                  <TableTd>{data.MSRDT.slice(0, 8)}</TableTd>
                  <TableTd>{data.MSRRGN_NM}</TableTd>
                  <TableTd>{data.PM10}</TableTd>
                  <TableTd>{data.PM25}</TableTd>
                  <TableTd>{data.IDEX_NM}</TableTd>
                  <TableTd>{data.IDEX_MVL}</TableTd>
                </tr>
              </React.Fragment>
            ))}
            {/* <td>{weatherData[0].MSRDT.slice(0, 8)}</td>
              <td>{weatherData[0].MSRRGN_NM}</td>
              <td>{weatherData[0].PM10}</td>
              <td>{weatherData[0].PM25}</td>
              <td>{weatherData[0].IDEX_NM}</td>
              <td>{weatherData[0].IDEX_MVL}</td> */}
          </TableTBody>
        </DataTable>
      </BodySection>
    </HomeContainer>
  );
};

export default Home;
