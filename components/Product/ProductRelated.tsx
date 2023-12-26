import { black, red } from "@/styles";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import ProductFruit1 from "@/public/images/products/product1.png";
import ProductFruit2 from "@/public/images/products/product2.png";
import ProductFruit3 from "@/public/images/products/product3.png";
import ProductFruit4 from "@/public/images/products/product4.png";
import ProductFruit5 from "@/public/images/products/product5.png";
import ProductFruit6 from "@/public/images/products/product6.png";
import ProductFruit7 from "@/public/images/products/product7.png";
import { formatPrice, generateSlug } from "@/lib/contansts";
import Link from "next/link";
import Title from "../Home/Title";
import { SwiperStyled } from "../Home/News";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { useCategoryProducts } from "@/lib/hooks/useCategoryProducts";
import { getImageUrl } from "@/lib/utils/ultil";
interface ProductRelatedProps {
  category_id: number;
}
const ProductRelated: React.FC<ProductRelatedProps> = ({ category_id }) => {
  const { data } = useCategoryProducts(category_id, 1, 30);
  const dataProductRelated = data?.data;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Box>
        <Title title="Sản phẩm liên quan" />
        <SwiperStyled>
          <Swiper
            navigation={true}
            slidesPerView={isMobile ? 2 : 4}
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
          >
            {dataProductRelated?.length &&
              dataProductRelated.map((item, index) => (
                <SwiperSlide key={index}>
                  <Link href={`/product/${generateSlug(item.name, item.id)}`}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "100%",
                        cursor: "pointer",
                        transition: "transform 0.3s",
                        "&:hover": {
                          transform: "scale(1.02)",
                        },
                      }}
                    >
                      <img
                        src={getImageUrl(item.product_variants[0].image_url)}
                        alt="product"
                        style={{
                          width: "100%",
                        }}
                        height={200}
                      />

                      <Box
                        mb={isMobile ? 1.5 : 1}
                        px={2}
                        mt={1.8}
                        textAlign={"center"}
                      >
                        <Typography
                          fontSize={14}
                          fontWeight={700}
                          color={black}
                        >
                          {item.name}
                        </Typography>
                      </Box>
                      <Box textAlign={"center"}>
                        <Typography
                          fontSize={12}
                          fontWeight={700}
                          color={red[200]}
                          sx={{
                            textDecoration: "line-through",
                            textDecorationColor: black,
                          }}
                        >
                          {item.discount &&
                            formatPrice(item.product_variants[0].price)}
                        </Typography>
                        <Typography
                          fontSize={14}
                          fontWeight={800}
                          color={red[100]}
                        >
                          {formatPrice(
                            item.product_variants[0].promotional_price
                          )}
                        </Typography>
                      </Box>
                    </Box>
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </SwiperStyled>
      </Box>
    </>
  );
};

export default ProductRelated;
