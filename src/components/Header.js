import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  max-width: 430px;
  height: 60px;
  background-color: #dfe5c1;
  padding: 0 16px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  width: 100px;
  height: 40px;
`;
const Header = () => {
  return (
    <Container>
      <Logo>
        <Link to={"/home"}>
          <img src="/imgs/logo.png" alt="logo"></img>
        </Link>
      </Logo>
    </Container>
  );
};

export default Header;
