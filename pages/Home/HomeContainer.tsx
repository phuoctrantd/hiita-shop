import React from "react";
import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import Banner from "./components/Banner";
import TabCategory from "./components/TabCategory";
import FruitCategory from "./components/FruitCategory";
import GinsengCategory from "./components/GinsengCategory";
import News from "./components/News";
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
