import { black, red, white } from "@/styles";
import {
  Box,
  LinearProgress,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Product1Fs from "@/public/images/flashSale/product1.png";
import FireImage from "@/public/images/flashSale/fire.png";
import { ProductType } from "@/lib/types/product";
import { formatPrice, generateSlug } from "@/lib/contansts";
import { getImageUrl } from "@/lib/utils/ultil";
import Link from "next/link";

interface ItemProductFsProps {
  product: ProductType;
}
const ItemProductFs: React.FC<ItemProductFsProps> = ({ product }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const getAvailableVariant = (product: ProductType) => {
    return (
      product.product_variants.find(
        (variant) =>
          Number(variant.flash_sale?.quantity) -
            Number(variant.flash_sale?.sold_quantity) >
          0
      ) || product.product_variants[0]
    );
  };

  const areAllVariantsSoldOut = (product: ProductType) => {
    return product.product_variants.every(
      (variant) =>
        Number(variant.flash_sale?.quantity) -
          Number(variant.flash_sale?.sold_quantity) ===
        0
    );
  };
  const availableVariant = getAvailableVariant(product);
  const allVariantsSoldOut = areAllVariantsSoldOut(product);
  const percentDiscount = () => {
    const price = Number(availableVariant && availableVariant.price);
    const salePrice = Number(
      availableVariant && availableVariant.flash_sale?.price
    );
    return Math.round(((price - salePrice) / price) * 100);
  };
  return (
    <>
      {availableVariant && (
        <Link
          href={`/san-pham/${generateSlug(product.name, product.id)}`}
          style={{
            pointerEvents: allVariantsSoldOut ? "none" : "auto",
          }}
        >
          <Stack
            sx={{
              backgroundColor: white[100],
              borderRadius: "8px",
              height: "100%",
              width: "100%",
              cursor: "pointer",
              transition: "transform 0.3s",
              position: "relative",
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
            textAlign={"center"}
          >
            <Box
              sx={{
                display: allVariantsSoldOut ? "unset" : "none",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.664)",
                borderRadius: "8px",
                zIndex: 1,
                content: "''",
              }}
            >
              <Typography
                fontSize={20}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  color: white[100],
                  fontWeight: 700,
                }}
              >
                Hết hàng
              </Typography>
            </Box>
            <Box mb={0.5} sx={{ position: "relative" }}>
              <img
                src={
                  availableVariant && getImageUrl(availableVariant.image_url)
                }
                alt=""
                width={"100%"}
                height={isMobile ? "200px" : "230px"}
              />
              {percentDiscount() > 1 && (
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
                    -{percentDiscount()}%
                  </Typography>
                </Box>
              )}
            </Box>
            <Box px={isMobile ? 2 : 4} sx={{ flexGrow: 1 }}>
              <Typography fontSize={14} fontWeight={700}>
                {product.name}
              </Typography>
            </Box>
            <Stack
              spacing={0.5}
              sx={{
                padding: "6px 25px 14px 25px",
              }}
            >
              <Box>
                <Typography
                  fontSize={12}
                  fontWeight={700}
                  sx={{
                    textDecoration: "line-through",
                    textDecorationColor: black,
                  }}
                >
                  {availableVariant && formatPrice(availableVariant.price)}
                </Typography>
              </Box>
              <Box>
                <Typography fontSize={14} fontWeight={800} color={red[100]}>
                  {availableVariant &&
                    availableVariant.flash_sale &&
                    formatPrice(availableVariant.flash_sale?.price)}
                </Typography>
              </Box>
              <Box position={"relative"}>
                <img
                  src={FireImage.src}
                  alt=""
                  width={48}
                  height={50}
                  style={{
                    position: "absolute",
                    zIndex: 1,
                    bottom: "-8px",
                    left: "-24px",
                  }}
                />
                <Typography
                  sx={{
                    position: "absolute",
                    zIndex: 1,
                    left: "0",
                    right: "0",
                    display: "flex",
                    justifyContent: "center",
                    top: "3px",
                  }}
                  fontSize={"10px !important"}
                  fontWeight={600}
                >
                  Còn{" "}
                  {availableVariant &&
                    availableVariant.flash_sale &&
                    availableVariant.flash_sale?.quantity -
                      availableVariant.flash_sale?.sold_quantity}{" "}
                  / {availableVariant && availableVariant.flash_sale?.quantity}{" "}
                  suất
                </Typography>
                <LinearProgress
                  sx={{
                    height: "22px",
                    borderRadius: "10px",
                    backgroundColor: "#D9D9D9",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "#FFDF31",
                      borderRadius: "10px",
                    },
                  }}
                  variant="determinate"
                  value={
                    availableVariant &&
                    availableVariant.flash_sale &&
                    (availableVariant.flash_sale?.sold_quantity /
                      availableVariant.flash_sale?.quantity) *
                      100
                  }
                />
              </Box>
            </Stack>
          </Stack>
        </Link>
      )}
    </>
  );
};

export default ItemProductFs;
