import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import BannerFruit1 from "@/public/images/banner1.png";
import BannerFruit2 from "@/public/images/banner2.png";

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
  const firstRow = dataProductFeatured.slice(0, 4);
  const secondRow = dataProductFeatured.slice(4, 8);
  return (
    <Grid container alignItems={"end"} spacing={3}>
      <Grid item xs={2.4}>
        <Image
          src={BannerFruit1}
          alt="banner"
          style={{ width: "100%" }}
          height={356}
        />
      </Grid>
      {firstRow.map((item, index) => (
        <Grid item xs={2.4} key={index}>
          <Box
            sx={{
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

            <Box textAlign={"center"} mt={1.8} mb={1}>
              <Typography fontSize={14} fontWeight={700} color={black} mb={2.8}>
                {item.name}
              </Typography>
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
      <Grid item xs={2.4}>
        <Image
          src={BannerFruit1}
          alt="banner"
          style={{ width: "100%" }}
          height={356}
        />
      </Grid>
      {secondRow.map((item, index) => (
        <Grid item xs={2.4} key={index}>
          <Box
            sx={{
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

            <Box textAlign={"center"} mt={1.8} mb={1}>
              <Typography fontSize={14} fontWeight={700} color={black} mb={2.8}>
                {item.name}
              </Typography>
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
