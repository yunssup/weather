import { useEffect, useState } from "react";
import{useNavigate} from "react-router-dom"
import { BodySection, HeadSection, HeadText, HomeContainer,TableTh } from "./components/BodyStyle";
import axios from "axios"
const Home = () => {
const navigate=useNavigate();
  // State 작성------------------------------------------------

const [weatherData, setweatherData]=useState([]);
const { VITE_APP_API_KEY }=import.meta.env;

  // Function 작성---------------------------------------------

const fetchData = async () =>{
  try {
    const response = await axios.get(`http://openAPI.seoul.go.kr:8088/${VITE_APP_API_KEY}/json/RealtimeCityAir/1/26/`);
setweatherData(response.data.RealtimeCityAir.row);

  } catch (error) {
    console.log("데이터를 불러오는데 실패했습니다.");
  }
};
console.log(weatherData);
  // OPEN API 비동기로 불러와 State에 저장하기

  // ComponentDidMount-----------------------------------------
useEffect(()=>{
fetchData();
},[]);

const sortedData=weatherData.sort((a,b)=>a.PM10-b.PM10);
  return (
    <HomeContainer>
      <HeadSection>
        <HeadText>서울시 권역별 실시간 대기환경 현황</HeadText>
      </HeadSection>
      <BodySection>
        <table>
          <thead>
<tr>
  <TableTh>권역명</TableTh>
  <TableTh>측정소명</TableTh>
  <TableTh>미세먼지</TableTh>
  <TableTh>초미세먼지농도</TableTh>
  <TableTh>통합대기환경등급</TableTh>
  <TableTh>통합대기환경지수</TableTh>
  </tr>
    </thead>
    <tbody>
  {weatherData.map((lion, idx) => (
    <tr key={idx} style={{ color: lion.MSRSTE_NM === "노원구" ? "orange" : "" }}>
      <td>{lion.MSRRGN_NM}</td>
      <td onClick={() => navigate(`/detail/${lion.MSRSTE_NM}`)}>
        {lion.MSRSTE_NM}
      </td>
<td>{lion.PM10}</td>
<td>{lion.PM25}</td>
<td style={{ color: lion.IDEX_NM === "좋음" ? "green" : lion.IDEX_NM === "나쁨" ? "red" : "" }}>
        {lion.IDEX_NM || "-"}
      </td><td>{lion.IDEX_MVL}</td>
</tr>
  ))}
          </tbody>
          </table>
        </BodySection>
    </HomeContainer>
  );
};

export default Home;
