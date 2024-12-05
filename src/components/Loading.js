import styled from "styled-components";
import { SkewLoader } from "react-spinners";

const Container = styled.div`
  width: 100%;
  max-width: 430px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fdfff3;
`;

const Loading = () => {
  return (
    <Container>
      <SkewLoader color="#66C76A" />
    </Container>
  );
};

export default Loading;
