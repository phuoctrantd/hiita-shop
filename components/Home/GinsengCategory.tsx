import React from "react";
import Title from "./Title";
import { Box } from "@mui/material";
import ProductFeatured from "./ProductFeatured";
import Ginseng1 from "@/public/images/products/ginseng1.png";
import Ginseng2 from "@/public/images/products/ginseng2.png";
import Ginseng3 from "@/public/images/products/ginseng3.png";
import Ginseng4 from "@/public/images/products/ginseng4.png";
import Ginseng5 from "@/public/images/products/ginseng5.png";
import { useCategoryProducts } from "@/lib/hooks/useCategoryProducts";

const GinsengCategory = () => {
  const { data, isLoading } = useCategoryProducts(1);
  return (
    <Box my={5.6}>
      <Title title="Nhân sâm" link="/collections/nhan-sam" />
      <ProductFeatured dataProductFeatured={data?.data || []} />
    </Box>
  );
};

export default GinsengCategory;
