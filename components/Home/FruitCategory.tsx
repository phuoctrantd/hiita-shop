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

const FruitCategory = () => {
  const dataProductFeatured = [
    {
      id: 1,
      name: "Dâu tây Osaka",
      price: 399000,
      priceSale: 499000,
      image: ProductFruit1,
    },
    {
      id: 2,
      name: "Kiwi",
      price: 399000,
      priceSale: 499000,
      image: ProductFruit2,
    },
    {
      id: 3,
      name: "Cherry",
      price: 399000,
      priceSale: 499000,
      image: ProductFruit3,
    },
    {
      id: 4,
      name: "Táo",
      price: 399000,
      priceSale: 499000,
      image: ProductFruit4,
    },
    {
      id: 5,
      name: "Chuối Úc",
      price: 399000,
      priceSale: 499000,
      image: ProductFruit5,
    },
    {
      id: 6,
      name: "Việt Quất Hà Lan",
      price: 399000,
      priceSale: 499000,
      image: ProductFruit6,
    },
    {
      id: 7,
      name: "Dưa gang Osaka",
      price: 399000,
      priceSale: 499000,
      image: ProductFruit7,
    },
    {
      id: 8,
      name: "Dâu tây Osaka",
      price: 399000,
      priceSale: 499000,
      image: ProductFruit1,
    },
    {
      id: 9,
      name: "Cherry",
      price: 399000,
      priceSale: 499000,
      image: ProductFruit3,
    },
    {
      id: 10,
      name: "Táo",
      price: 399000,
      priceSale: 499000,
      image: ProductFruit4,
    },
  ];
  return (
    <Box my={5.6}>
      <Title
        title="TRÁI CÂY NHẬP KHẨU"
        link="/collections/trai-cay-nhap-khau"
      />
      <ProductFeatured dataProductFeatured={dataProductFeatured} fruit />
    </Box>
  );
};

export default FruitCategory;
