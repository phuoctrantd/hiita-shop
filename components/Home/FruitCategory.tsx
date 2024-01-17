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
import { generateSlug } from "@/lib/contansts";

interface fruitCategoryProps {
  category_id: number;
  name: string;
}
const FruitCategory: React.FC<fruitCategoryProps> = ({ category_id, name }) => {
  const { data, isLoading } = useCategoryProducts(category_id, 1, 30);
  if (isLoading || !data || data.data.length === 0) {
    return null;
  }
  return (
    <Box my={5.6}>
      <Title
        title={name}
        link={`/collections/${generateSlug(name, category_id)}`}
      />
      <ProductFeatured dataProductFeatured={data.data || []} fruit />
    </Box>
  );
};

export default FruitCategory;
