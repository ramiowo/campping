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
      <SkewLoader color="#66C76A" />
    </Container>
  );
};

export default Loading;
