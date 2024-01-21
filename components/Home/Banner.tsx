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
import { useQuery } from "react-query";
import { getImageUrl } from "@/lib/utils/ultil";

interface Banner {
  slides: [
    {
      url: string;
    },
  ];
}
const Banner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { data } = useQuery<Banner>(`/settings`, {
    keepPreviousData: true,
  });
  return (
    <BannerStyled sx={{ mt: isMobile ? 3 : 0 }}>
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 6000,
          disableOnInteraction: true,
        }}
      >
        {data?.slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                borderRadius: isMobile ? 0 : "30px",
                maxWidth: "100%",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src={getImageUrl(slide.url)}
                alt="banner"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </SwiperSlide>
        ))}
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
