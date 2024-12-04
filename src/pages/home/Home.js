import styled from "styled-components";
import Banner from "./components/Banner";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import { FiSearch } from "react-icons/fi";

import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import CampPlace from "./components/CampPlace";
import { fetchBaseList } from "../../api";
import { FaFire } from "react-icons/fa6";

const Container = styled.section`
  width: 100%;
  max-width: 430px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #fdfff3;
`;

const SearchBtn = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  background-color: #57dc4d;
  border-radius: 30px;
  margin-top: 20px;
  cursor: pointer;
  color: #fff;
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
  const [campData, setCampData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const SearchClick = () => {
    Searchnav("/Search");
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetchBaseList();
        const items = response.response?.body?.items?.item;
        setCampData(items || []);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <Wrapper>
          <Container>
            <Banner />
            <SearchBtn onClick={SearchClick}>
              <SerchWrap>
                <p>빠른 캠핑장 찾기</p>
                <FiSearch style={{ fontSize: "20px" }} />
              </SerchWrap>
            </SearchBtn>
            <CampPlace
              title={
                <p>
                  지금 <span style={{ color: "#D9362B" }}>HOT</span> 한 추천
                  캠핑장
                </p>
              }
              data={campData}
            />
          </Container>
        </Wrapper>
      )}
    </div>
  );
};

export default Home;
