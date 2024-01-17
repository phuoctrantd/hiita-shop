import { formatPrice, generateSlug } from "@/lib/contansts";
import { ProductType } from "@/lib/types/product";
import { getImageUrl } from "@/lib/utils/ultil";
import { black, gray, red, white } from "@/styles";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Link from "next/link";
import React from "react";

interface ItemProductProps {
  item: ProductType;
}
const ItemProduct: React.FC<ItemProductProps> = ({ item }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Link href={`/san-pham/${generateSlug(item.name, item.id)}`}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          cursor: "pointer",
          transition: "transform 0.3s",
          "&:hover": {
            transform: "scale(1.01)",
          },
          border: `1px solid ${gray[300]}`,
        }}
      >
        <Box sx={{ position: "relative", width: "100%", height: "auto" }}>
          <img
            src={getImageUrl(item.product_variants[0].image_url)}
            alt="product"
            style={{
              width: "100%",
            }}
            height={200}
          />

          {item.discount && (
            <Box
              sx={{
                backgroundColor: red[100],
                position: "absolute",
                top: 0,
                p: "2px 5px",
                zIndex: 2,
                right: 0,
                color: white[100],
              }}
            >
              <Typography fontSize={12} fontWeight={500}>
                -{item.discount}%
              </Typography>
            </Box>
          )}
        </Box>

        <Box
          mb={isMobile ? 1.5 : 1}
          px={2}
          mt={1.8}
          sx={{ flexGrow: 1 }}
          textAlign={"center"}
        >
          <Typography fontSize={14} fontWeight={700} color={black}>
            {item.name}
          </Typography>
        </Box>
        <Box textAlign={"center"}>
          <Typography
            fontSize={12}
            fontWeight={700}
            color={red[200]}
            sx={{
              textDecoration: "line-through",
              textDecorationColor: black,
            }}
          >
            {item.discount && formatPrice(item.product_variants[0].price)}
          </Typography>
          <Typography fontSize={14} fontWeight={800} color={red[100]}>
            {formatPrice(item.product_variants[0].promotional_price)}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default ItemProduct;
