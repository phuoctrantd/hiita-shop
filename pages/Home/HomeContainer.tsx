import React from "react";
import { Box, Container } from "@mui/material";
import Banner from "./components/Banner";
import CategoryTab from "./components/TabCategory";
import FruitCategory from "./components/FruitCategory";
const HomeContainer = () => {
  return (
    <Container maxWidth="xl" sx={{ padding: "0 !important" }}>
      <Banner />
      <Box px={8}>
        <CategoryTab />
        <FruitCategory />
      </Box>
    </Container>
  );
};

export default HomeContainer;
