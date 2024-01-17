import React from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import BannerFruit1 from "@/public/images/banners/banner1.png";
import BannerGinseng from "@/public/images/banners/banner_ginseng.png";
import { black, gray, red } from "@/styles";
import Link from "next/link";
import { formatPrice, generateSlug } from "@/lib/contansts";
import { ProductType } from "@/lib/types/product";
import ProductFruit1 from "@/public/images/products/product1.png";
import { getImageUrl } from "@/lib/utils/ultil";
import { SwiperStyled } from "./TabContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import ItemProduct from "../Product/ItemProduct";
interface ProductFeaturedProps {
  fruit?: boolean;
  dataProductFeatured: Array<ProductType>;
}

interface dataProductFeaturedProps {
  id: number;
  name: string;
  price: number;
  priceSale: number;
  image: StaticImageData;
}

const ProductFeatured: React.FC<ProductFeaturedProps> = ({
  dataProductFeatured,
  fruit,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const firstRow =
    dataProductFeatured && dataProductFeatured.slice(0, fruit ? 5 : 3);
  const secondRow =
    dataProductFeatured && dataProductFeatured.slice(fruit ? 5 : 3, 10);

  return (
    <>
      <SwiperStyled style={{ width: "100%" }}>
        <Swiper
          navigation={true}
          slidesPerView={isMobile ? 2 : 5}
          modules={[Navigation, Autoplay]}
          spaceBetween={15}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
        >
          {dataProductFeatured?.map((item) => (
            <SwiperSlide key={item.id} style={{ height: "auto" }}>
              <ItemProduct item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperStyled>
    </>
  );
};

export default ProductFeatured;
