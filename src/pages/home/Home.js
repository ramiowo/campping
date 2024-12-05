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
import useScrollTop from "../../lib/useScrollTop";
import { Helmet } from "react-helmet-async";

const Container = styled.section`
  width: 100%;
  max-width: 430px;
  /* height: 100vh; */
  /* min-height: 100vh; */
  margin: 0 auto;
  background-color: #fdfff3;
`;

const SearchBtn = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  background-color: #66c76a;
  border-radius: 30px;
  margin-top: 40px;
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
  margin-top: 50px;
  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
  }
`;
const CategoryItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CategoryItem = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 1px solid #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  p {
    font-size: 13px;
    font-weight: 500;
    margin-top: 8px;
  }
  svg {
    margin: 0;
    display: inline;
    color: #7ddd81;
    font-size: 26px;
  }
`;

const Wrap = styled.div`
  p {
    margin-top: 6px;
    font-size: 12px;
    text-align: center;
    font-weight: 500;
    color: #555;
  }
`;

const Home = () => {
  const Searchnav = useNavigate();
  const [campData, setCampData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useScrollTop();

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
        <>
          <Helmet>
            <title>Home | CAMP PING</title>
          </Helmet>
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
                <h3>취향저격 맞춤 캠핑장</h3>
                <CategoryItems>
                  <Wrap>
                    <CategoryItem>
                      <Link to={`/normal`}>
                        <GiCampingTent style={{ fontSize: "30px" }} />
                      </Link>
                    </CategoryItem>
                    <p>일반야영장</p>
                  </Wrap>
                  <Wrap>
                    <CategoryItem>
                      <Link to={`/glamping`}>
                        <GiBarracksTent />
                      </Link>
                    </CategoryItem>
                    <p>글램핑</p>
                  </Wrap>
                  <Wrap>
                    <CategoryItem>
                      <Link to={`/caravan`}>
                        <FaCaravan />
                      </Link>
                    </CategoryItem>
                    <p>카라반</p>
                  </Wrap>
                  <Wrap>
                    <CategoryItem>
                      <Link to={`/car`}>
                        <FaCar />
                      </Link>
                    </CategoryItem>
                    <p>차박</p>
                  </Wrap>
                  <Wrap>
                    <CategoryItem>
                      <Link to={`/pet`}>
                        <FaDog />
                      </Link>
                    </CategoryItem>
                    <p>애견동반</p>
                  </Wrap>
                </CategoryItems>
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
        </>
      )}
    </div>
  );
};

export default Home;
