import { IoIosArrowBack } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  max-width: 430px;
  height: 60px;
  background-color: #fdfff3;
  padding: 0 16px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const BackButton = styled.button`
  all: unset;
  position: absolute;
  left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  color: #406142;
`;

const Logo = styled.div`
  width: 100px;
  height: 40px;
`;
const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const showBackButton = location.pathname !== "/home";
  return (
    <Container>
      {showBackButton && (
        <BackButton onClick={() => navigate(-1)}>
          <IoIosArrowBack />
        </BackButton>
      )}
      <Logo>
        <Link to={"/home"}>
          <img src="/imgs/logo.png" alt="logo"></img>
        </Link>
      </Logo>
    </Container>
  );
};

export default Header;
