import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 430px;
  min-height: 100vh;
  padding: 0 16px;
  margin: 0 auto;
  background-color: #fdfff3;
  position: relative;
`;

const Wrapper = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Wrapper;
