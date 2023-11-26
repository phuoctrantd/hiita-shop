import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import BannerFruit1 from "@/public/images/banners/banner1.png";
import BannerGinseng from "@/public/images/banners/banner_ginseng.png";
import { black, red } from "@/styles";

interface ProductFeaturedProps {
  fruit?: boolean;
  dataProductFeatured: Array<dataProductFeaturedProps>;
}

interface dataProductFeaturedProps {
  id: number;
  name: string;
  price: string;
  priceSale: string;
  image: StaticImageData;
}

const ProductFeatured: React.FC<ProductFeaturedProps> = ({
  dataProductFeatured,
  fruit,
}) => {
  const firstRow = dataProductFeatured.slice(0, fruit ? 4 : 3);
  const secondRow = dataProductFeatured.slice(fruit ? 4 : 3, 8);

  return (
    <Grid container alignItems="stretch" spacing={3}>
      <Grid item xs={fruit ? 2.4 : 4.8}>
        <Image
          src={fruit ? BannerFruit1 : BannerGinseng}
          alt="banner"
          style={{ width: "100%", height: "100%" }}
        />
      </Grid>
      {firstRow.map((item, index) => (
        <Grid item xs={2.4} key={index}>
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
            <Image
              src={item.image}
              alt="product"
              style={{
                width: "100%",
              }}
              height={252}
            />

            <Box textAlign="center" mt={1.8} mb={1}>
              <Box mb={2.8} px={2}>
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
                {item.price}
              </Typography>
              <Typography fontSize={14} fontWeight={800} color={red[100]}>
                {item.priceSale}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
      {fruit && (
        <Grid item xs={2.4}>
          <Image
            src={BannerFruit1}
            alt="banner"
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
      )}
      {secondRow.map((item, index) => (
        <Grid item xs={2.4} key={index}>
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
            <Image
              src={item.image}
              alt="product"
              style={{
                width: "100%",
              }}
              height={252}
            />

            <Box textAlign="center" mt={1.8} mb={1}>
              <Box mb={2.8} px={2}>
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
                {item.price}
              </Typography>
              <Typography fontSize={14} fontWeight={800} color={red[100]}>
                {item.priceSale}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductFeatured;
