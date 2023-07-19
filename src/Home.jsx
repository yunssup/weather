import { useEffect } from "react";
import {
  BodySection,
  DataTable,
  HeadSection,
  HeadText,
  HomeContainer,
  TableTh,
} from "./components/BodyStyle";

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
      <BodySection></BodySection>
    </HomeContainer>
  );
};

export default Home;
