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
    name: "Sâm Ngọc Linh Thượng phẩm loại 5 củ",
    price: "1000000",
    priceSale: "800000",
    images: [
      Ginseng1,
      Ginseng2,
      Ginseng3,
      Ginseng4,
      Ginseng5,
      Ginseng1,
      Ginseng2,
      Ginseng3,
      Ginseng4,
      Ginseng5,
    ],
    category: "Nhân sâm",
    brand: "Hiita",
    quantity: 1,
    description:
      "Tinh chất hồng sâm nhung hươu Wongi hộp 10 chai x 100ml là sản phẩm cao cấp có hiệu quả trong việc hỗ trợ tăng hệ miễn dịch nhờ hàm lượng cao của tính chất chiết xuất từ hồng sâm 6 tuổi và nhung hươu, giúp bổ sung năng lượng cho mọi lứa tuổi, giúp cơ thể phục hồi nhanh sau quá trình học tập và làm việc ở cường độ cao.Tinh chất hồng sâm nhung hươu Wongi hộp 10 chai x 100ml là sản phẩm cao cấp có hiệu quả trong việc hỗ trợ tăng hệ miễn dịch nhờ hàm lượng cao của tính chất chiết xuất từ hồng sâm 6 tuổi và nhung hươu, giúp bổ sung năng lượng cho mọi lứa tuổi, giúp cơ thể phục hồi nhanh sau quá trình học tập và làm việc ở cường độ cao.Tinh chất hồng sâm nhung hươu Wongi hộp 10 chai x 100ml là sản phẩm cao cấp có hiệu quả trong việc hỗ trợ tăng hệ miễn dịch nhờ hàm lượng cao của tính chất chiết xuất từ hồng sâm 6 tuổi và nhung hươu, giúp bổ sung năng lượng cho mọi lứa tuổi, giúp cơ thể phục hồi nhanh sau quá trình học tập và làm việc ở cường độ cao.Tinh chất hồng sâm nhung hươu Wongi hộp 10 chai x 100ml là sản phẩm cao cấp có hiệu quả trong việc hỗ trợ tăng hệ miễn dịch nhờ hàm lượng cao của tính chất chiết xuất từ hồng sâm 6 tuổi và nhung hươu, giúp bổ sung năng lượng cho mọi lứa tuổi, giúp cơ thể phục hồi nhanh sau quá trình học tập và làm việc ở cường độ cao.Tinh chất hồng sâm nhung hươu Wongi hộp 10 chai x 100ml là sản phẩm cao cấp có hiệu quả trong việc hỗ trợ tăng hệ miễn dịch nhờ hàm lượng cao của tính chất chiết xuất từ hồng sâm 6 tuổi và nhung hươu, giúp bổ sung năng lượng cho mọi lứa tuổi, giúp cơ thể phục hồi nhanh sau quá trình học tập và làm việc ở cường độ cao.Tinh chất hồng sâm nhung hươu Wongi hộp 10 chai x 100ml là sản phẩm cao cấp có hiệu quả trong việc hỗ trợ tăng hệ miễn dịch nhờ hàm lượng cao của tính chất chiết xuất từ hồng sâm 6 tuổi và nhung hươu, giúp bổ sung năng lượng cho mọi lứa tuổi, giúp cơ thể phục hồi nhanh sau quá trình học tập và làm việc ở cường độ cao.Tinh chất hồng sâm nhung hươu Wongi hộp 10 chai x 100ml là sản phẩm cao cấp có hiệu quả trong việc hỗ trợ tăng hệ miễn dịch nhờ hàm lượng cao của tính chất chiết xuất từ hồng sâm 6 tuổi và nhung hươu, giúp bổ sung năng lượng cho mọi lứa tuổi, giúp cơ thể phục hồi nhanh sau quá trình học tập và làm việc ở cường độ cao.Tinh chất hồng sâm nhung hươu Wongi hộp 10 chai x 100ml là sản phẩm cao cấp có hiệu quả trong việc hỗ trợ tăng hệ miễn dịch nhờ hàm lượng cao của tính chất chiết xuất từ hồng sâm 6 tuổi và nhung hươu, giúp bổ sung năng lượng cho mọi lứa tuổi, giúp cơ thể phục hồi nhanh sau quá trình học tập và làm việc ở cường độ cao.Tinh chất hồng sâm nhung hươu Wongi hộp 10 chai x 100ml là sản phẩm cao cấp có hiệu quả trong việc hỗ trợ tăng hệ miễn dịch nhờ hàm lượng cao của tính chất chiết xuất từ hồng sâm 6 tuổi và nhung hươu, giúp bổ sung năng lượng cho mọi lứa tuổi, giúp cơ thể phục hồi nhanh sau quá trình học tập và làm việc ở cường độ cao.",
    variants: [
      {
        id: 1,
        box_size: "Mini ~ 0.6kg",
        sizes: [
          {
            id: 1,
            name: "Size 1",
            price: "1000000",
            priceSale: "1111",
            quantity: 1,
          },
          {
            id: 2,
            name: "Size 2",
            price: "1000000",
            priceSale: "800022200",
            quantity: 1,
          },
          {
            id: 3,
            name: "Size 3",
            price: "1000000",
            priceSale: "800333000",
            quantity: 1,
          },
          {
            id: 3,
            name: "Size 3",
            price: "1000000",
            priceSale: "800333000",
            quantity: 1,
          },
          {
            id: 3,
            name: "Size 3",
            price: "1000000",
            priceSale: "800333000",
            quantity: 1,
          },
          {
            id: 3,
            name: "Size 3",
            price: "1000000",
            priceSale: "800333000",
            quantity: 1,
          },
          {
            id: 3,
            name: "Size 3",
            price: "1000000",
            priceSale: "800333000",
            quantity: 1,
          },
          {
            id: 3,
            name: "Size 3",
            price: "1000000",
            priceSale: "800333000",
            quantity: 1,
          },
          {
            id: 3,
            name: "Size 3",
            price: "1000000",
            priceSale: "800333000",
            quantity: 1,
          },
        ],
      },
      {
        id: 2,
        box_size: "Medium ~ 0.6kg",
        sizes: [
          {
            id: 1,
            name: "Size 1",
            price: "1200000",
            priceSale: "123",
            quantity: 1,
          },
          {
            id: 2,
            name: "Size 2",
            price: "1200000",
            priceSale: "123",
            quantity: 1,
          },
          {
            id: 3,
            name: "Size 3",
            price: "1200000",
            priceSale: "456",
            quantity: 1,
          },
        ],
      },
      {
        id: 3,
        box_size: "High ~ 0.6kg",
        sizes: [
          {
            id: 1,
            name: "Size 1",
            price: "1500000",
            priceSale: "111",
            quantity: 1,
          },
          {
            id: 2,
            name: "Size 2",
            price: "1500000",
            priceSale: "222",
            quantity: 1,
          },
          {
            id: 3,
            name: "Size 3",
            price: "1500000",
            priceSale: "333",
            quantity: 1,
          },
        ],
      },
      {
        id: 3,
        box_size: "High ~ 0.6kg",
        sizes: [
          {
            id: 1,
            name: "Size 1",
            price: "1500000",
            priceSale: "111",
            quantity: 1,
          },
          {
            id: 2,
            name: "Size 2",
            price: "1500000",
            priceSale: "222",
            quantity: 1,
          },
          {
            id: 3,
            name: "Size 3",
            price: "1500000",
            priceSale: "333",
            quantity: 1,
          },
        ],
      },
    ],
  };

  return (
    <Page title={dataProduct.name} category={dataProduct.category}>
      <Grid container spacing={isMobile ? 5 : 10} mb={5}>
        <Grid item xs={isMobile ? 12 : 6}>
          <SlideImage images={dataProduct.images} />
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
