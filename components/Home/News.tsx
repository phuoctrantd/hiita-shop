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
import Link from "next/link";
import { generateSlug } from "@/lib/contansts";
import { getImageUrl } from "@/lib/utils/ultil";
import { useNews } from "@/lib/hooks/useNews";
const News = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { data } = useNews();

  return (
    <Box my={5.6}>
      <Title title="Tin tức" link="/news" />
      <SwiperStyled>
        <Swiper
          navigation={true}
          slidesPerView={isMobile ? 1 : 4}
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
        >
          {data &&
            data.data &&
            data.data.length > 0 &&
            data.data.map((item, index) => (
              <SwiperSlide key={index}>
                <Link href={`/news/${generateSlug(item.name, item.id)}`}>
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
                    <img
                      src={getImageUrl(item.image_url)}
                      alt="banner"
                      style={{
                        width: "100%",
                        height: "180px",
                        objectFit: "cover",
                      }}
                    />
                    <Box mt={1.6}>
                      <Typography fontSize={14} fontWeight={700} mb={1}>
                        {item.name}
                      </Typography>
                      <Typography fontSize={11} fontWeight={500}>
                        {item.content &&
                          new DOMParser()
                            .parseFromString(item.content, "text/html")
                            .body.innerText.slice(0, 200) + "..."}
                      </Typography>
                    </Box>
                  </Box>
                </Link>
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
