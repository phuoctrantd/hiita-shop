import { black, red } from "@/styles";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
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
import { dataNewsList } from "@/pages/news/NewsList";
const NewsRelated = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Stack>
        {isMobile ? (
          <Title title="Tin tức khác" />
        ) : (
          <Typography
            color={red[100]}
            fontSize={16}
            fontWeight={800}
            textAlign={"center"}
            mb={3}
            sx={{ textTransform: "uppercase" }}
          >
            Tin tức khác
          </Typography>
        )}

        <Stack
          spacing={1}
          direction={isMobile ? "row" : "column"}
          sx={{ overflow: "auto" }}
        >
          {dataNewsList.slice(0, 5).map((item) => (
            <Link
              href={`/news/${generateSlug(item.title, item.id)}`}
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
                <img
                  src={item.image.src}
                  width={100}
                  height={100}
                  alt={item.title}
                />

                <Typography fontSize={16} fontWeight={700}>
                  {item.title}
                </Typography>
              </Stack>
            </Link>
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default NewsRelated;
