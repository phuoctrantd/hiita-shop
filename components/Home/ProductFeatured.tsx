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
                height: "100%",
                cursor: "pointer",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            >
              <img
                src={item.image_url ? item.image_url[0] : ProductFruit1.src}
                alt="product"
                style={{
                  width: "100%",
                }}
                height={isMobile ? 200 : 252}
              />

              <Box textAlign="center" mt={1.8} mb={1}>
                <Box mb={isMobile ? 1.5 : 2.8} px={2}>
                  <Typography fontSize={14} fontWeight={700} color={black}>
                    {item.name}
                  </Typography>
                </Box>
                <Typography
                  fontSize={12}
                  fontWeight={700}
                  color={red[200]}
                  sx={{
                    textDecoration: "line-through",
                    textDecorationColor: black,
                  }}
                >
                  {item.product_variants[0].promotional_price &&
                    formatPrice(item.product_variants[0].price)}
                </Typography>
                <Typography fontSize={14} fontWeight={800} color={red[100]}>
                  {formatPrice(
                    item.product_variants[0].promotional_price ||
                      item.product_variants[0].price
                  )}
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
                height: "100%",
                cursor: "pointer",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            >
              <img
                src={item.image_url ? item.image_url[0] : ProductFruit1.src}
                alt="product"
                style={{
                  width: "100%",
                }}
                height={isMobile ? 200 : 252}
              />

              <Box textAlign="center" mt={1.8} mb={1}>
                <Box mb={isMobile ? 1.5 : 2.8} px={2}>
                  <Typography fontSize={14} fontWeight={700} color={black}>
                    {item.name}
                  </Typography>
                </Box>
                <Typography
                  fontSize={12}
                  fontWeight={700}
                  color={red[200]}
                  sx={{
                    textDecoration: "line-through",
                    textDecorationColor: black,
                  }}
                >
                  {item.promotional_price && formatPrice(item.price)}
                </Typography>
                <Typography fontSize={14} fontWeight={800} color={red[100]}>
                  {item.promotional_price
                    ? formatPrice(item.promotional_price)
                    : formatPrice(item.price)}
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
