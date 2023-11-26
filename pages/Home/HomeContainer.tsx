import React from "react";
import { Box, Container } from "@mui/material";
import Banner from "./components/Banner";
import CategoryTab from "./components/TabCategory";
import FruitCategory from "./components/FruitCategory";
import GinsengCategory from "./components/GinsengCategory";
import News from "./components/News";
const HomeContainer = () => {
  return (
    <Container maxWidth="xl" sx={{ padding: "0 !important" }}>
      <Banner />
      <Box px={8}>
        <CategoryTab />
        <FruitCategory />
        <GinsengCategory />
        <News />
      </Box>
    </Container>
  );
};

export default HomeContainer;
