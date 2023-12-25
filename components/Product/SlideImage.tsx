import { Box, Stack, IconButton, useTheme, useMediaQuery } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { red } from "@/styles";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { SwiperStyled } from "../Home/TabContainer";
import ProductFruit1 from "@/public/images/products/product1.png";
import { getImageUrl } from "@/lib/utils/ultil";
import { ProductsVariant } from "@/lib/types/product";
interface SlideImageProps {
  productVariants: ProductsVariant[];
}

const SlideImage: React.FC<SlideImageProps> = ({ productVariants }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.activeIndex);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <SwiperStyled>
        <Swiper
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
          onSlideChange={handleSlideChange}
        >
          {productVariants.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={getImageUrl(item.image_url)}
                alt="banner"
                style={{
                  width: "100%",
                  height: "500px",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={1}
          slidesPerView={isMobile ? 4 : 5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {productVariants.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={getImageUrl(item.image_url)}
                alt="banner"
                style={{
                  width: "91px",
                  height: "100px",
                  border: activeIndex === index ? "2px solid red" : "none",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperStyled>
    </>
  );
};

export default SlideImage;
