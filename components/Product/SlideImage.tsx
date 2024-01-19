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
import { ProductType, ProductsVariant } from "@/lib/types/product";
interface SlideImageProps {
  product: ProductType;
}

const SlideImage: React.FC<SlideImageProps> = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.activeIndex);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const images = product.images.concat(
    product.product_variants.map((item: ProductsVariant) => ({
      image_url: item.image_url,
    }))
  );
  return (
    <>
      {images.length > 0 && (
        <SwiperStyled>
          <Swiper
            spaceBetween={10}
            navigation={true}
            loop={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
            onSlideChange={handleSlideChange}
          >
            {images.map((item, index) => (
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
            {images.map((item, index) => (
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
      )}
    </>
  );
};

export default SlideImage;
