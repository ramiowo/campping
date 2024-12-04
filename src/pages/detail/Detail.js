import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { detaillList } from "../../api";
import styled from "styled-components";
import Wrapper from "../../components/Wrapper";
import Loading from "../../components/Loading";

const Container = styled.div``;
const Title = styled.div``;
const TextWrap = styled.div``;
const LinkBtn = styled.div``;

const Detail = () => {
  const { id } = useParams();
  const [campDetail, setCampDtail] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await detaillList();
        const items = response.response?.body?.items?.item || [];
        const detail = items.find((item) => item.contentId === id);
        setCampDtail(detail);
        setIsLoading(false);
      } catch (error) {
        console.log("디테일 에러", error);
      }
    };

    fetchDetail();
  }, [id]);
  console.log(campDetail);
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <Wrapper>
          <Container>
            <img
              src={campDetail.firstImageUrl || "/path/to/noimg.jpg"}
              alt={campDetail.facltNm}
            />
            <TextWrap>
              <h3>{campDetail.facltNm}</h3>
              <p>
                {campDetail.addr1 || campDetail.addr2 || "주소정보가 없습니다."}
              </p>
              <p>{campDetail.tel}</p>
              <p>
                {campDetail.intro || campDetail.featureNm || "설명이 없습니다."}
              </p>
              <p>반려동물 동반여부</p>
              <span>{campDetail.animalCmgCl}</span>
              <p>테마</p>
              <span>{campDetail.themaEnvrnCl || "제공 정보가 없습니다."}</span>
            </TextWrap>
            <LinkBtn style={{ backgroundColor: "red" }}>
              <Link
                to={campDetail.homepage || campDetail.resveUrl}
                target="blank"
              >
                예약하기
              </Link>
            </LinkBtn>
          </Container>
        </Wrapper>
      )}
    </div>
  );
};

export default Detail;
