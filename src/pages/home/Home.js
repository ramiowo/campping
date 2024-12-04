import styled from "styled-components";
import Banner from "./components/Banner";
import { Link, useNavigate } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import CampPlace from "./components/CampPlace";
import { fetchBaseList } from "../../api";
import { FaCar, FaCaravan, FaDog } from "react-icons/fa6";
import { GiBarracksTent, GiCampingTent } from "react-icons/gi";

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
  background-color: #66c76a;
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

const CategoryWrap = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    font-size: 26px;
  }
`;
const CategoryItem = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
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
            <CategoryWrap>
              <h3>취향따라 캠핑가기</h3>
              <CategoryItem>
                <Link to={`/normal`}>
                  <GiCampingTent style={{ color: "#fff", fontSize: "30px" }} />
                </Link>
              </CategoryItem>
              <CategoryItem>
                <Link to={`/glamping`}>
                  <GiBarracksTent style={{ color: "#fff" }} />
                </Link>
              </CategoryItem>
              <CategoryItem>
                <Link to={`/caravan`}>
                  <FaCaravan style={{ color: "#fff" }} />
                </Link>
              </CategoryItem>
              <CategoryItem>
                <Link to={`/car`}>
                  <FaCar style={{ color: "#fff" }} />
                </Link>
              </CategoryItem>
              <CategoryItem>
                <Link to={`/pet`}>
                  <FaDog style={{ color: "#fff" }} />
                </Link>
              </CategoryItem>
            </CategoryWrap>
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
