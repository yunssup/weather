import { BodySection, HeadSection, HeadText, HomeContainer } from "./components/BodyStyle";

const Home = () => {
  // State 작성------------------------------------------------

  // Function 작성---------------------------------------------

  // OPEN API 비동기로 불러와 State에 저장하기

  // ComponentDidMount-----------------------------------------

  return (
    <HomeContainer>
      <HeadSection>
        <HeadText>서울시 권역별 실시간 대기환경 현황</HeadText>
      </HeadSection>
      <BodySection>{/* 아래에 날씨 Open API 관련 코드 작성 */}</BodySection>
    </HomeContainer>
  );
};

export default Home;
