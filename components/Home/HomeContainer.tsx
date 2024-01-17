import React from "react";
import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
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
const HomeContainer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { data: dataFlashSale } = useQuery<FlashSaleType>(
    `/current-flash-sale`,
    {
      keepPreviousData: true,
    }
  );
  const [categories, setCategories] = useAtom(categoriesState);
  return (
    <Container maxWidth="xl" sx={{ padding: "0 !important" }}>
      <Banner />
      {dataFlashSale && <FlashSale dataFlashSale={dataFlashSale} />}
      <Box px={isMobile ? 2 : 8} my={2}>
        <TabCategory />
        {categories?.map((category) => (
          <FruitCategory
            key={category.id}
            category_id={category.id}
            name={category.name}
          />
        ))}

        {/* <GinsengCategory /> */}
        <News />
      </Box>
    </Container>
  );
};

export default HomeContainer;
