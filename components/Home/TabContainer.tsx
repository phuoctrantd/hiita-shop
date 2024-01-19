import React, { FC } from "react";
import Image from "next/image";
import fruit_category from "@/public/images/fruit_category.png";
import fruit_demo from "@/public/images/fruit_demo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import {
  Box,
  Typography,
  styled,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { white } from "@/styles";
import Link from "next/link";
import { formatPrice, generateSlug } from "@/lib/contansts";
import { ProductType } from "@/lib/types/product";
import { getImageUrl } from "@/lib/utils/ultil";

interface TabProps {
  fruitTab?: boolean;
  dataProductCategory: ProductType[];
}
const TabContainer: React.FC<TabProps> = ({
  fruitTab,
  dataProductCategory,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Grid container sx={{ textAlign: "center" }}>
        <Grid
          item
          xs={2.9}
          sx={{
            display: fruitTab && !isMobile ? "flex" : "none",
            alignItems: "end",
          }}
        >
          <img src={fruit_category.src} alt="fruit_category" width={270} />
        </Grid>
        <Grid item xs={fruitTab && !isMobile ? 9 : 12} px={1}>
          <SwiperStyled>
            <Swiper
              navigation={true}
              slidesPerView={fruitTab && !isMobile ? 4 : isMobile ? 2 : 5}
              modules={[Navigation, Autoplay]}
              spaceBetween={8}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
            >
              {dataProductCategory.map((item, index) => (
                <SwiperSlide key={index}>
                  <Link href={`/san-pham/${generateSlug(item.name, item.id)}`}>
                    <Box
                      position="relative"
                      sx={{
                        cursor: "pointer",
                        transition: "transform 0.3s",
                        "&:hover": {
                          transform: "scale(1.02)",
                        },
                      }}
                    >
                      <img
                        src={getImageUrl(item.product_variants[0].image_url)}
                        alt={item.name}
                        style={{
                          width: "100%",
                          height: "221px",
                          objectFit: "cover",
                        }}
                      />
                      <Box
                        sx={{
                          backgroundColor: "rgba(229, 30, 65, 0.60);",
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: "100%",
                          height: "25%",
                          padding: "0 0.5rem",
                        }}
                      >
                        <Typography
                          sx={{
                            color: white[100],
                            fontSize: 14,
                            fontWeight: 500,
                            pt: isMobile ? 0 : 0.6,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {item.name}
                        </Typography>

                        <Typography
                          sx={{
                            color: white[100],
                            fontSize: 14,
                            fontWeight: 500,
                            textAlign: "center",
                          }}
                        >
                          {formatPrice(
                            item.product_variants[0].promotional_price ||
                              item.product_variants[0].price
                          )}
                        </Typography>
                      </Box>
                    </Box>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </SwiperStyled>
        </Grid>
      </Grid>
    </>
  );
};

export default TabContainer;
export const SwiperStyled = styled("div")(() => ({
  " --swiper-navigation-color": white[100],
}));
