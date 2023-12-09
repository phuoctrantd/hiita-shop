import React from "react";
import Title from "./Title";
import { Box } from "@mui/material";
import ProductFeatured from "./ProductFeatured";
import Ginseng1 from "@/public/images/products/ginseng1.png";
import Ginseng2 from "@/public/images/products/ginseng2.png";
import Ginseng3 from "@/public/images/products/ginseng3.png";
import Ginseng4 from "@/public/images/products/ginseng4.png";
import Ginseng5 from "@/public/images/products/ginseng5.png";

export const dataProductFeatured = [
  {
    id: 1,
    name: "Sâm Ngọc Linh Thượng phẩm loại 1 củ",
    price: 399000,
    priceSale: 499000,
    image: Ginseng1,
  },
  {
    id: 2,
    name: "Sâm Ngọc Linh Thượng phẩm loại 3 củ",
    price: 399000,
    priceSale: 499000,
    image: Ginseng2,
  },
  {
    id: 3,
    name: "Sâm Ngọc Linh Thượng phẩm loại 5 củ",
    price: 399000,
    priceSale: 499000,
    image: Ginseng3,
  },
  {
    id: 4,
    name: "Sâm Ngọc Linh Thượng phẩm loại 1 củ",
    price: 399000,
    priceSale: 499000,
    image: Ginseng4,
  },
  {
    id: 5,
    name: "Sâm Ngọc Linh Thượng phẩm loại 1 củ",
    price: 399000,
    priceSale: 499000,
    image: Ginseng5,
  },
  {
    id: 6,
    name: "Sâm Ngọc Linh Thượng phẩm loại 1 củ",
    price: 399000,
    priceSale: 499000,
    image: Ginseng1,
  },
  {
    id: 7,
    name: "Sâm Ngọc Linh Thượng phẩm loại 1 củ",
    price: 399000,
    priceSale: 499000,
    image: Ginseng2,
  },
  {
    id: 8,
    name: "Sâm Ngọc Linh Thượng phẩm loại 1 củ",
    price: 399000,
    priceSale: 499000,
    image: Ginseng3,
  },
  {
    id: 9,
    name: "Sâm Ngọc Linh Thượng phẩm loại 1 củ",
    price: 399000,
    priceSale: 499000,
    image: Ginseng4,
  },
  {
    id: 10,
    name: "Sâm Ngọc Linh Thượng phẩm loại 1 củ",
    price: 399000,
    priceSale: 499000,
    image: Ginseng5,
  },
];
const GinsengCategory = () => {
  return (
    <Box my={5.6}>
      <Title title="Nhân sâm" />
      <ProductFeatured dataProductFeatured={dataProductFeatured} />
    </Box>
  );
};

export default GinsengCategory;
