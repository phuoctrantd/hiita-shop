import React from "react";
import Title from "./Title";
import {
  Box,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import ImageNews1 from "@/public/images/news/news1.png";
import ImageNews2 from "@/public/images/news/news2.png";
import ImageNews3 from "@/public/images/news/news3.png";
import ImageNews4 from "@/public/images/news/news4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { red, white } from "@/styles";
const News = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const dataNews = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim ",
      image: ImageNews1,
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat ",
      image: ImageNews2,
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna ",
      image: ImageNews3,
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut ",
      image: ImageNews4,
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut ",
      image: ImageNews4,
    },
  ];
  return (
    <Box my={5.6}>
      <Title title="Tin tức" link="/news" />
      <SwiperStyled>
        <Swiper
          navigation={true}
          slidesPerView={isMobile ? 1 : 4}
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
        >
          {dataNews.map((item, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  transition: "transform 0.3s",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                  width: "100%",
                }}
              >
                <Image
                  src={item.image}
                  alt="banner"
                  style={{ width: "100%", height: "auto" }}
                />
                <Box mt={1.6}>
                  <Typography fontSize={14} fontWeight={700} mb={1}>
                    {item.title}
                  </Typography>
                  <Typography fontSize={11} fontWeight={500}>
                    {item.description && item.description.slice(0, 200) + "..."}
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperStyled>
    </Box>
  );
};

export default News;
export const SwiperStyled = styled("div")(() => ({
  " --swiper-navigation-color": white[100],
}));
