import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Con = styled.div`
  cursor: pointer;
  img {
    width: 100%;
    border-radius: 20px;
  }
`;

const BannerImg = [
  {
    id: 0,
    img: "/imgs/banner1.gif",
  },
  {
    id: 1,
    img: "/imgs/banner2.gif",
  },
  {
    id: 2,
    img: "/imgs/banner3.gif",
  },
  {
    id: 3,
    img: "/imgs/banner4.gif",
  },
  {
    id: 4,
    img: "/imgs/banner5.gif",
  },
];

const Banner = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
    >
      {BannerImg.map((item) => (
        <SwiperSlide key={item.id}>
          <Con>
            <Link
              to={`https://gocamping.or.kr/zboard/read.do?searchWrd=&pageIndex=1&lmCode=campSafe&searchCnd=&searchCate1=&pd_pkid=6522`}
            >
              <img src={item.img} alt={`Banner ${item.id}`} />
            </Link>
          </Con>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
