import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";



const Detail = () => {
  const location = useLocation();
  return (
    <div>
      <Container>
        <Box>
          <Top>
            <Left>💗{location.state.place} 대기환경 알림💗<br/>{location.state.date}</Left>
          </Top>
          <Body>
            미세먼지(㎍/㎥): {location.state.mun}<br />
            초미세먼지농도(㎍/㎥): {location.state.small}<br />
            오존(ppm): {location.state.oo}<br />
            통합대기환경지수: {location.state.cai}<br />
            지수결정물질: {location.state.gas}<br />
            이산화질소농도(ppm): {location.state.sec}<br />
            일산화탄소농도(ppm): {location.state.fir}<br />
            아황산가스농도(ppm): {location.state.ah}<br />
          </Body>
        </Box>
      </Container>
    </div>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  width: 150%;
  height: 500px;
  border-radius: 3px;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15%;
`
const Top = styled.div`
  background-color: aliceblue;
  border-radius: 10px;
  padding: 10px;
  color: black;
  display: flex;
  height: 20%;
  align-items: center;
  margin: 5% 10%;
  text-align: center;
  justify-content: center;
  align-items: center;
`
const Left = styled.div`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  justify-content: center;
  align-items: center;
`

const Body = styled.div`
  color: black;
  height: 70%;
  width: 100%;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:pink;
  font-weight: bold;
  font-size: 30px;
`
export default Detail;
