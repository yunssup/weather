import { useState,useEffect } from "react";
import {useNavigate} from "react-router-dom"
import { BodySection, DataTable, HeadSection, HeadText, HomeContainer, TableTd, TableTh } from "./components/BodyStyle";
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate();

  // State 작성------------------------------------------------
  const [weatherData,setweatherData]= useState([]);
  const {VITE_APP_API_KEY} = import.meta.env;
  // Function 작성---------------------------------------------

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://openAPI.seoul.go.kr:8088/${VITE_APP_API_KEY}/json/RealtimeCityAir/1/30/`);

      setweatherData(response.data.RealtimeCityAir.row)
    } catch (error) {
      console.log("데이터를 불러오는데 실패했습니다.")
    }
  
  };
  // OPEN API 비동기로 불러와 State에 저장하기
  useEffect(()=>{
    fetchData()
  },[])

  const sortedData = weatherData.sort((a,b) => a.PM10 -b.PM10).slice(0,3);

  // ComponentDidMount-----------------------------------------
  return (
    <HomeContainer>
      <HeadSection>
        <HeadText>서울시 권역별 실시간 대기환경 현황</HeadText>
      </HeadSection>
      <BodySection>
        <DataTable>
          <thead>
            <tr>
              <TableTh>권역</TableTh>
              <TableTh>측정소</TableTh>
              <TableTh>미세먼지</TableTh>
              <TableTh>초미세먼지농도</TableTh>
              <TableTh>통합대기환경등급</TableTh>
              <TableTh>통합대기환경지수</TableTh>
            </tr>
          </thead>
          <tbody>
            {weatherData.map((lion,idx)=>(
              <tr key={idx}>
                <td style={{color:`${lion.MSRSTE_NM}` === "노원구" ?  "orange" : "" }}>{lion.MSRRGN_NM}</td>
                
                <td style={{color:`${lion.MSRSTE_NM}` === "노원구" ?  "orange" : "" }} 
                onClick={() => navigate(`/detail/${lion.MSRSTE_NM}`, 
                {state: {
                region: lion.MSRRGN_NM , 
                place: lion.MSRSTE_NM , 
                date: lion.MSRDT , 
                mun:lion.PM10, 
                small:lion.PM25 , 
                oo:lion.O3,
                gas:lion.ARPLT_MAIN, 
                cai:lion.IDEX_MVL,
                sec:lion.NO2,
                fir:lion.CO,
                ah:lion.SO2
              }})}>{lion.MSRSTE_NM}</td>
                <td style={{color:`${lion.MSRSTE_NM}` === "노원구" ?  "orange" : "" }}>{lion.PM10}</td>
                <td style={{color:`${lion.MSRSTE_NM}` === "노원구" ?  "orange" : "" }}>{lion.PM25}</td>
                <td style={{color:`${lion.IDEX_NM}` === "좋음" ? "green" : (`${lion.IDEX_NM}` === "보통" ? (`${lion.MSRSTE_NM}` === "" ?  "orange" : "") :(`${lion.IDEX_NM}` === "나쁨" ? "red" : ""))}}>
                  {lion.IDEX_NM == "좋음" ? "좋음" : lion.IDEX_NM == "보통" ? "보통" : lion.IDEX_NM == "나쁨" ? "나쁨" : '-'}
                </td>
                <td style={{color:`${lion.MSRSTE_NM}` === "노원구" ?  "orange" : "" }}>{lion.IDEX_MVL}</td>                
              </tr>
            ))}
          </tbody>
        </DataTable>
      </BodySection>
    </HomeContainer>
  );
};
export default Home;