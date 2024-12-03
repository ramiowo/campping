import styled from "styled-components";
import Banner from "./components/Banner";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import { FiSearch } from "react-icons/fi";
import { EditIcon } from "@chakra-ui/icons";

const Container = styled.section`
  width: 100%;
  max-width: 430px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #dfe5c1;
`;

const SearchBtn = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  background-color: #7a805c;
  border-radius: 30px;
  margin-top: 20px;
  cursor: pointer;
`;

const SerchWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  p {
    margin-right: 10px;
  }
`;

const Home = () => {
  const Searchnav = useNavigate();

  const SearchClick = () => {
    Searchnav("/Search");
  };
  return (
    <Wrapper>
      <Container>
        <Banner />
        <SearchBtn onClick={SearchClick}>
          <SerchWrap>
            <p>빠른 캠핑장 찾기</p>
            <FiSearch style={{ fontSize: "20px" }} />
          </SerchWrap>
        </SearchBtn>
      </Container>
    </Wrapper>
  );
};

export default Home;
