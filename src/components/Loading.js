import styled from "styled-components";
import { SkewLoader } from "react-spinners";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = () => {
  return (
    <Container>
      <SkewLoader color="#5E653B" />
    </Container>
  );
};

export default Loading;
