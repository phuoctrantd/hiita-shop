import React, { useState } from "react";
import Page from "@/components/Page";
import SlideImage from "@/components/Product/SlideImage";
import {
  Grid,
  Stack,
  Typography,
  styled,
  Button,
  TextField,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { black, blue, orange, red, white, yellow } from "@/styles";
import Ginseng1 from "@/public/images/products/ginseng1.png";
import Ginseng2 from "@/public/images/products/ginseng2.png";
import Ginseng3 from "@/public/images/products/ginseng3.png";
import Ginseng4 from "@/public/images/products/ginseng4.png";
import Ginseng5 from "@/public/images/products/ginseng5.png";
import { formatPrice } from "@/lib/contansts";
import ProductPrice from "@/components/Product/ProductPrice";
import News from "@/components/Home/News";
import ProductDescription from "@/components/Product/ProductDescription";
import ProductRelated from "@/components/Product/ProductRelated";

const Product = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const dataProduct = {
    id: 1,
    name: "cherry nhap khau ngon",
    price: 100000,
    promotional_price: 90000,
    code: "xcxvxc",
    status: 1,
    is_publish: 1,
    type: 1,
    category_id: 1,
    country_id: 1,
    variant_type_id: 1,
    image_url: [Ginseng1, Ginseng2, Ginseng3, Ginseng4, Ginseng5],
    description: "abc hehe",
    created_at: null,
    updated_at: null,
    category: {
      id: 1,
      name: "Nhân sâm",
    },
    country: {
      id: 1,
      name: "Nhật",
    },
    variant_type: {
      id: 1,
      name: "Size hộp",
    },
    product_variants: [
      {
        id: 1,
        product_id: 1,
        name: "Mini ~0.6kg",
        price: 520000,
        promotional_price: 500000,
        status: 1,
        box_size: "14*15*5(cm)",
        code: "1",
      },
      {
        id: 2,
        product_id: 1,
        name: "Medium ~1kg",
        price: 1000000,
        promotional_price: 900000,
        status: 1,
        box_size: "20*15*5(cm)",
        code: "1",
      },
      {
        id: 3,
        product_id: 1,
        name: "Medium ~2kg",
        price: 2000000,
        promotional_price: 1900000,
        status: 1,
        box_size: "30*25*5(cm)",
        code: "1",
      },
    ],
  };

  return (
    <Page title={dataProduct.name} category={dataProduct.category.name}>
      <Grid container spacing={isMobile ? 5 : 10} mb={5}>
        <Grid item xs={isMobile ? 12 : 6}>
          <SlideImage images={dataProduct.image_url} />
        </Grid>
        <Grid item xs={isMobile ? 12 : 6}>
          <ProductPrice dataProduct={dataProduct} />
        </Grid>
      </Grid>
      <Grid container mb={7} spacing={5}>
        <Grid item xs={isMobile ? 12 : 8.5}>
          <ProductDescription description={dataProduct.description} />
        </Grid>
        <Grid item xs={isMobile ? 12 : 3.5}>
          <ProductRelated />
        </Grid>
      </Grid>
      <News />
    </Page>
  );
};

export default Product;
