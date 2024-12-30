import { useCallback, useEffect, useState } from "react";
import { searchList } from "../../api";
import styled from "styled-components";
import Loading from "../../components/Loading";
import { Link, useSearchParams } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import useScrollTop from "../../lib/useScrollTop";
import { Helmet } from "react-helmet-async";

const Container = styled.section`
  width: 100%;
  max-width: 430px;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 16px;
  background-color: #fdfff3;
`;

const SearchWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 20px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 83%;
  height: 50px;
  background-color: #fff;
  border: 1px solid #66c76a;
  padding: 0 12px;
  border-radius: 30px;
  font-size: 14px;
`;

const Button = styled.button`
  all: unset;
  width: 14%;
  height: 50px;
  background-color: #66c76a;
  margin-left: 10px;
  font-size: 20px;
  color: #fff;
  text-align: center;
  border-radius: 30px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 18px;
`;

const Con = styled.div`
  overflow: hidden;
  text-align: center;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
  }

  p {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    font-weight: 500;
    color: #333;
    text-align: left;
    padding: 0;
    white-space: nowrap;
  }
`;

const noImg = `data:image/png;base64,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`;

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(searchParams.get("keyword") || ""); // 검색어 상태
  const [results, setResults] = useState([]); // 검색 결과 상태
  // const [pageNum, setPageNum] = useState(1); // 페이지 번호 상태
  const [loading, setLoading] = useState(false); // 로딩 상태
  const [isSearched, setIsSearched] = useState(false);
  useScrollTop();

  const handleSearch = useCallback(async () => {
    setLoading(true);
    setIsSearched(true);
    try {
      const data = await searchList(keyword, 1);
      // console.log(data);
      setResults(data?.response?.body?.items?.item || []);
      setSearchParams({ keyword });
    } catch (error) {
      console.error("검색 중 오류 발생:", error);
    } finally {
      setLoading(false);
    }
  }, [keyword]);

  useEffect(() => {
    if (keyword) {
      handleSearch();
    }
  }, [handleSearch]);

  return (
    <>
      <Helmet>
        <title>SEARCH | CAMP PING</title>
      </Helmet>

      <Container>
        <SearchWrap>
          <Input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="검색어를 입력하세요"
          />
          <Button onClick={handleSearch}>
            <LuSearch />
          </Button>
        </SearchWrap>

        {loading ? (
          <Loading />
        ) : (
          <>
            {isSearched && results.length === 0 && <p>검색 결과가 없습니다.</p>}
            <Grid>
              {results.map((item) => (
                <Con key={item.contentId}>
                  <Link to={`/detail/${item.contentId}`}>
                    <img src={item.firstImageUrl || noImg} alt={item.facltNm} />
                    <p>{item.facltNm}</p>
                  </Link>
                </Con>
              ))}
            </Grid>
          </>
        )}
      </Container>
    </>
  );
};

export default Search;
