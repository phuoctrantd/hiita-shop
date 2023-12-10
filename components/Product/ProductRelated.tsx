import { black, red } from "@/styles";
import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import ProductFruit1 from "@/public/images/products/product1.png";
import ProductFruit2 from "@/public/images/products/product2.png";
import ProductFruit3 from "@/public/images/products/product3.png";
import ProductFruit4 from "@/public/images/products/product4.png";
import ProductFruit5 from "@/public/images/products/product5.png";
import ProductFruit6 from "@/public/images/products/product6.png";
import ProductFruit7 from "@/public/images/products/product7.png";
import { formatPrice, generateSlug } from "@/lib/contansts";
import Link from "next/link";
import Title from "../Home/Title";
const ProductRelated = () => {
  const dataProductRelated = [
    {
      id: 1,
      name: "Dâu tây Osaka",
      price: 399000,
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Stack>
        {isMobile ? (
          <Title title="Sản phẩm liên quan" />
        ) : (
          <Typography
            color={red[100]}
            fontSize={16}
            fontWeight={800}
            textAlign={"center"}
            mb={3}
            sx={{ textTransform: "uppercase" }}
          >
            Sản phẩm liên quan
          </Typography>
        )}

        <Stack
          spacing={1}
          direction={isMobile ? "row" : "column"}
          sx={{ overflow: "auto" }}
        >
          {dataProductRelated.slice(0, 5).map((item) => (
            <Link
              href={`/product/${generateSlug(item.name, item.id)}`}
              key={item.id}
            >
              <Stack
                direction={"row"}
                spacing={2}
                sx={{
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                  width: isMobile ? "250px" : "100%",
                }}
              >
                <Image
                  src={item.image}
                  width={100}
                  height={100}
                  alt={item.name}
                />
                <Stack>
                  <Typography fontSize={16} fontWeight={700}>
                    {item.name}
                  </Typography>
                  {item.priceSale && (
                    <Typography
                      fontSize={14}
                      fontWeight={700}
                      color={red[200]}
                      sx={{
                        textDecoration: "line-through",
                        textDecorationColor: black,
                      }}
                    >
                      {formatPrice(item.priceSale)}
                    </Typography>
                  )}
                  <Typography fontSize={16} fontWeight={800} color={red[100]}>
                    {formatPrice(item.price)}
                  </Typography>
                </Stack>
              </Stack>
            </Link>
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default ProductRelated;
