import styled from "styled-components";
import Wrapper from "../../components/Wrapper";
import { useNavigate } from "react-router-dom";

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StartWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 150px;
  img {
    /* margin: 0 auto; */
    width: 285px;
    height: 250px;
  }
  .startLogo {
    margin-top: 50px;
    width: 270px;
    height: 48px;
  }
`;
const StartBtn = styled.button`
  all: unset;
  width: 100%;
  max-width: 280px;
  height: 50px;
  background-color: #a6b93a;
  /* margin-top: 100px; */
  border-radius: 20px;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
  position: absolute;
  bottom: 10%;
  letter-spacing: 1px;
`;

const Start = () => {
  const homenav = useNavigate();

  const handleStart = () => {
    homenav("/home");
  };
  return (
    <Wrapper>
      <Container>
        <StartWrap>
          <img src="/imgs/startimg.png" alt="startImg" />
          <img
            className="startLogo"
            src="/imgs/startLogo.png"
            alt="startLogo"
          />
        </StartWrap>
        <StartBtn onClick={handleStart}>캠핑장 보러가기</StartBtn>
      </Container>
    </Wrapper>
  );
};

export default Start;
