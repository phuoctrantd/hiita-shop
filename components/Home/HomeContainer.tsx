import React from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Banner from "./Banner";
import TabCategory from "./TabCategory";
import FruitCategory from "./FruitCategory";
import GinsengCategory from "./GinsengCategory";
import News from "./News";
import FlashSale from "./flashSale/FlashSale";
import { useQuery } from "react-query";
import { FlashSaleType } from "@/lib/types/flashSale";
import { categoriesState } from "@/lib/hooks/categoriesState";
import { useAtom } from "jotai";
import { ProductResponse } from "@/lib/types/response";
import ItemProduct from "../Product/ItemProduct";
const HomeContainer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { data: dataFlashSale } = useQuery<FlashSaleType>(
    `/current-flash-sale`,
    {
      keepPreviousData: true,
    }
  );
  const { data: dataProduct } = useQuery<ProductResponse>(`/products`, {
    keepPreviousData: true,
  });
  console.log(111111111, dataProduct);
  const [categories, setCategories] = useAtom(categoriesState);
  return (
    <Container maxWidth="xl" sx={{ padding: "0 !important" }}>
      <Banner />
      {dataFlashSale && <FlashSale dataFlashSale={dataFlashSale} />}
      <Box px={isMobile ? 2 : 8} my={2}>
        <Box sx={{ my: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#E51E41",
              }}
            >
              Gợi ý cho bạn
            </Typography>
          </Box>
          <Divider
            sx={{
              backgroundColor: "#E51E41",
              height: "3px",
            }}
          />
        </Box>
        <Grid container spacing={2}>
          {dataProduct?.data &&
            dataProduct?.data.length > 0 &&
            dataProduct?.data.map((item) => (
              <Grid item xs={isMobile ? 6 : 2.4} key={item.id}>
                <ItemProduct item={item} />
              </Grid>
            ))}
        </Grid>
        {/* <TabCategory />
        {categories?.map((category) => (
          <FruitCategory
            key={category.id}
            category_id={category.id}
            name={category.name}
          />
        ))} */}

        {/* <GinsengCategory /> */}
        <News />
      </Box>
    </Container>
  );
};

export default HomeContainer;
