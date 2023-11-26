import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { styled, Box } from "@mui/system";
import { red, white } from "@/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import BannerImage from "@/public/images/banners/banner.svg";

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
          <Box
            sx={{
              borderRadius: isMobile ? 0 : "30px",
              maxWidth: "100%",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Image
              src={BannerImage}
              alt="banner"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        </SwiperSlide>
      </Swiper>
    </BannerStyled>
  );
};

const BannerStyled = styled("div")(() => ({
  "--swiper-pagination-color": red[100],
  "--swiper-pagination-bullet-inactive-color": white[100],
  "--swiper-pagination-bullet-size": "9px",
  "--swiper-pagination-bullet-inactive-opacity": "1",
}));

export default Banner;
