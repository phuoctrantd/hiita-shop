import React from "react";
import Title from "./Title";
import { Box } from "@mui/material";
import ProductFeatured from "./ProductFeatured";
import ProductFruit1 from "@/public/images/products/product1.png";
import ProductFruit2 from "@/public/images/products/product2.png";
import ProductFruit3 from "@/public/images/products/product3.png";
import ProductFruit4 from "@/public/images/products/product4.png";
const FruitCategory = () => {
  const dataProductFeatured = [
    {
      id: 1,
      name: "Dâu tây Osaka",
      price: "399.000 VNĐ",
      priceSale: "499.000 VNĐ",
      image: ProductFruit1,
    },
    {
      id: 2,
      name: "Kiwi",
      price: "399.000 VNĐ",
      priceSale: "499.000 VNĐ",
      image: ProductFruit2,
    },
    {
      id: 3,
      name: "Cherry",
      price: "399.000 VNĐ",
      priceSale: "499.000 VNĐ",
      image: ProductFruit3,
    },
    {
      id: 4,
      name: "Táo",
      price: "399.000 VNĐ",
      priceSale: "499.000 VNĐ",
      image: ProductFruit4,
    },
    {
      id: 5,
      name: "Dâu tây Osaka",
      price: "399.000 VNĐ",
      priceSale: "499.000 VNĐ",
      image: ProductFruit1,
    },
    {
      id: 6,
      name: "Kiwi",
      price: "399.000 VNĐ",
      priceSale: "499.000 VNĐ",
      image: ProductFruit2,
    },
    {
      id: 7,
      name: "Cherry",
      price: "399.000 VNĐ",
      priceSale: "499.000 VNĐ",
      image: ProductFruit3,
    },
    {
      id: 8,
      name: "Táo",
      price: "399.000 VNĐ",
      priceSale: "499.000 VNĐ",
      image: ProductFruit4,
    },
    {
      id: 9,
      name: "Cherry",
      price: "399.000 VNĐ",
      priceSale: "499.000 VNĐ",
      image: ProductFruit3,
    },
    {
      id: 10,
      name: "Táo",
      price: "399.000 VNĐ",
      priceSale: "499.000 VNĐ",
      image: ProductFruit4,
    },
  ];
  return (
    <Box my={5.6}>
      <Title title="TRÁI CÂY NHẬP KHẨU" />
      <ProductFeatured dataProductFeatured={dataProductFeatured} />
    </Box>
  );
};

export default FruitCategory;
