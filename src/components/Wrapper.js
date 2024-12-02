import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 430px;
  min-height: 100vh;
  padding: 70px 16px;
  margin: 0 auto;
  background-color: #c7d291;
`;

const Wrapper = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Wrapper;
