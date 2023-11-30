import React from "react";
import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import Banner from "./Banner";
import TabCategory from "./TabCategory";
import FruitCategory from "./FruitCategory";
import GinsengCategory from "./GinsengCategory";
import News from "./News";
const HomeContainer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container maxWidth="xl" sx={{ padding: "0 !important" }}>
      <Banner />
      <Box px={isMobile ? 2 : 8}>
        <TabCategory />
        <FruitCategory />
        <GinsengCategory />
        <News />
      </Box>
    </Container>
  );
};

export default HomeContainer;
