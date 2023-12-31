import React from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import BannerFruit1 from "@/public/images/banners/banner1.png";
import BannerGinseng from "@/public/images/banners/banner_ginseng.png";
import { black, red } from "@/styles";
import Link from "next/link";
import { formatPrice, generateSlug } from "@/lib/contansts";
import { ProductType } from "@/lib/types/product";
import ProductFruit1 from "@/public/images/products/product1.png";
import { getImageUrl } from "@/lib/utils/ultil";
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
    <Grid container alignItems="stretch" spacing={2}>
      {!isMobile && (
        <Grid item xs={fruit ? 2 : 4}>
          <img
            src={fruit ? BannerFruit1.src : BannerGinseng.src}
            alt="banner"
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
      )}
      {firstRow?.map((item, index) => (
        <Grid item xs={isMobile ? 6 : 2} key={index}>
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
                sx={{ flexGrow: 1 }}
                textAlign={"center"}
              >
                <Typography fontSize={14} fontWeight={700} color={black}>
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
                  {item.discount && formatPrice(item.product_variants[0].price)}
                </Typography>
                <Typography fontSize={14} fontWeight={800} color={red[100]}>
                  {formatPrice(item.product_variants[0].promotional_price)}
                </Typography>
              </Box>
            </Box>
          </Link>
        </Grid>
      ))}
      {fruit && !isMobile && (
        <Grid item xs={2}>
          <img
            src={BannerFruit1.src}
            alt="banner"
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
      )}
      {secondRow?.map((item, index) => (
        <Grid item xs={isMobile ? 6 : 2} key={index}>
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
                textAlign={"center"}
                mt={1.8}
                sx={{ flexGrow: 1 }}
              >
                <Typography fontSize={14} fontWeight={700} color={black}>
                  {item.name}
                </Typography>
              </Box>
              <Box>
                <Typography
                  fontSize={12}
                  fontWeight={700}
                  color={red[200]}
                  sx={{
                    textDecoration: "line-through",
                    textDecorationColor: black,
                  }}
                  textAlign={"center"}
                >
                  {item.discount && formatPrice(item.product_variants[0].price)}
                </Typography>
                <Typography fontSize={14} fontWeight={800} color={red[100]}>
                  {formatPrice(item.product_variants[0].promotional_price)}
                </Typography>
              </Box>
            </Box>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductFeatured;
