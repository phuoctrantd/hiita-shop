import React from "react";
import Title from "./Title";
import { Box } from "@mui/material";
import ProductFeatured from "./ProductFeatured";
import ProductFruit1 from "@/public/images/products/product1.png";
import ProductFruit2 from "@/public/images/products/product2.png";
import ProductFruit3 from "@/public/images/products/product3.png";
import ProductFruit4 from "@/public/images/products/product4.png";
import ProductFruit5 from "@/public/images/products/product5.png";
import ProductFruit6 from "@/public/images/products/product6.png";
import ProductFruit7 from "@/public/images/products/product7.png";
import { useQuery } from "react-query";
import { ProductResponse } from "@/lib/types/response";
import { useCategoryProducts } from "@/lib/hooks/useCategoryProducts";

const FruitCategory = () => {
  const { data, isLoading } = useCategoryProducts(5, 1, 30);
  return (
    <Box my={5.6}>
      <Title
        title="TRÁI CÂY NHẬP KHẨU"
        link="/collections/trai-cay-nhap-khau"
      />
      <ProductFeatured dataProductFeatured={data?.data || []} fruit />
    </Box>
  );
};

export default FruitCategory;
