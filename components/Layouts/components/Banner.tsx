import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import BannerImage from "@/public/images/banner.svg";
import { styled } from "@mui/material";
import { red, white } from "@/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Banner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <BannerStyled sx={{ mb: 3.6 }}>
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Image
            style={{
              borderRadius: isMobile ? 0 : 30,
              width: "100%",
              height: "auto",
            }}
            src={BannerImage}
            alt="banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            style={{ borderRadius: 30, width: "100%", height: "auto" }}
            src={BannerImage}
            alt="banner"
          />
        </SwiperSlide>
      </Swiper>
    </BannerStyled>
  );
};

export default Banner;
const BannerStyled = styled("div")(() => ({
  "--swiper-pagination-color": red,
  "--swiper-pagination-bullet-inactive-color": white[100],
  "--swiper-pagination-bullet-size": "9px",
  "--swiper-pagination-bullet-inactive-opacity": "1",
}));
