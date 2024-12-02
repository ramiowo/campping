import styled from "styled-components";
import Wrapper from "../../components/Wrapper";

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin: 0 auto;
    width: 285px;
    height: 250px;
  }
`;

const Start = () => {
  return (
    <Wrapper>
      <Container>
        <img src="/imgs/startimg.png" alt="" />
        <h2>CAMP PING</h2>
      </Container>
    </Wrapper>
  );
};

export default Start;
