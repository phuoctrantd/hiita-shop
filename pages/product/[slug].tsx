import React, { useState } from "react";
import Page from "@/components/Page";
import SlideImage from "@/components/Product/SlideImage";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { black, blue, orange, red, white, yellow } from "@/styles";
import ProductFruit1 from "@/public/images/products/product1.png";
import ProductFruit2 from "@/public/images/products/product2.png";
import ProductFruit3 from "@/public/images/products/product3.png";
import ProductFruit4 from "@/public/images/products/product4.png";
import ProductFruit5 from "@/public/images/products/product5.png";
import ProductFruit6 from "@/public/images/products/product6.png";
import ProductFruit7 from "@/public/images/products/product7.png";
import ProductPrice from "@/components/Product/ProductPrice";
import News from "@/components/Home/News";
import ProductDescription from "@/components/Product/ProductDescription";
import ProductRelated from "@/components/Product/ProductRelated";
import { NextPage } from "next";
import { useParams } from "next/navigation";
import { getIdFromSlug } from "@/lib/contansts";
import { ProductType } from "@/lib/types/product";
import { useQuery } from "react-query";

const Product: NextPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const params = useParams();
  const slug = params?.slug;
  const { data } = useQuery<ProductType>(
    `products/${getIdFromSlug(String(slug))}`,
    {
      keepPreviousData: true,
      enabled: !!slug,
    }
  );

  return (
    <>
      {data && (
        <Page title={data.name} category={data.category.name}>
          <Grid container spacing={isMobile ? 5 : 10} mb={5}>
            <Grid item xs={isMobile ? 12 : 6}>
              <SlideImage productVariants={data.product_variants} />
            </Grid>
            <Grid item xs={isMobile ? 12 : 6}>
              <ProductPrice dataProduct={data} />
            </Grid>
          </Grid>
          <Grid container mb={7} spacing={5}>
            <Grid item xs={12}>
              <ProductDescription description={data.description} />
            </Grid>
            <Grid item xs={12}>
              <ProductRelated category_id={data.category_id} />
            </Grid>
          </Grid>
          <News />
        </Page>
      )}
    </>
  );
};

export default Product;
