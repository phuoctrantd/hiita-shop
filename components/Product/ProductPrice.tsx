import { formatPrice } from "@/lib/contansts";
import { ProductType, ProductsVariant } from "@/lib/types/product";
import { black, blue, gray, orange, red, white, yellow } from "@/styles";
import {
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { useAtom } from "jotai";
import { cartAtom } from "../../lib/hooks/useCart";
import { set } from "zod";
import toast from "react-hot-toast";
import { checkoutAtom, checkoutSourceAtom } from "@/lib/hooks/checkout";
import { useRouter } from "next/navigation";
interface ProductPriceProps {
  dataProduct: ProductType;
}

const ProductPrice: React.FC<ProductPriceProps> = ({ dataProduct }) => {
  const [selectedVariant, setSelectedVariant] = React.useState(
    dataProduct.product_variants ? dataProduct.product_variants[0] : null
  );
  const price = selectedVariant
    ? selectedVariant.promotional_price || selectedVariant.price
    : dataProduct.promotional_price || dataProduct.price;
  const savePrice = selectedVariant
    ? selectedVariant.price - price
    : dataProduct.price - price;
  const fixedPrice = selectedVariant
    ? selectedVariant.price
    : dataProduct.price;
  const handleVariantClick = (variant: ProductsVariant) => {
    setSelectedVariant(variant);
    setQuantity(1);
  };
  const [quantity, setQuantity] = React.useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const allVariantsNull = dataProduct.product_variants?.every(
    (variant) => variant.box_size === null || variant.box_size === ""
  );
  const [cart, setCart] = useAtom(cartAtom);
  const addToCart = () => {
    const existingItemIndex = cart.findIndex(
      (item) =>
        item.id === dataProduct.id &&
        ((!item.variant && !selectedVariant) ||
          (item.variant &&
            selectedVariant &&
            item.variant.id === selectedVariant.id))
    );

    if (existingItemIndex !== -1) {
      const newCartItems = [...cart];
      newCartItems[existingItemIndex] = {
        ...newCartItems[existingItemIndex],
        quantity: newCartItems[existingItemIndex].quantity + quantity,
      };
      setCart(newCartItems);
    } else {
      setCart([
        ...cart,
        { ...dataProduct, quantity, variant: selectedVariant },
      ]);
    }
    toast.success("Thêm sản phẩm vào giỏ hàng thành công");
  };
  const [checkoutProducts, setCheckoutProducts] = useAtom(checkoutAtom);
  const [, setCheckoutSource] = useAtom(checkoutSourceAtom);
  const { push } = useRouter();
  const handleCheckout = () => {
    setCheckoutProducts([
      { ...dataProduct, quantity, variant: selectedVariant },
    ]);
    setCheckoutSource("buyNow");
    push("/checkout");
  };
  return (
    <>
      <Typography variant="h4" sx={{ fontWeight: 600 }} mb={3}>
        {dataProduct.name}
      </Typography>

      <Grid container mb={2}>
        <Grid container spacing={isMobile ? 1 : 2} mb={isMobile ? 1 : 2}>
          <Grid
            item
            xs={isMobile ? 12 : 6}
            sx={{ display: "flex", alignItems: "center", gap: 0.2 }}
          >
            <TypographyDes>Thương hiệu </TypographyDes>
            <span>:</span>
            <TypographyDes sx={{ fontWeight: 700, fontSize: 16 }}>
              Hiita Shop
            </TypographyDes>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ display: "flex", alignItems: "center", gap: 0.2 }}
          >
            <TypographyDes>Mã sản phẩm </TypographyDes>

            <span>:</span>
            <TypographyDes sx={{ fontWeight: 700, fontSize: 16 }}>
              {dataProduct.code}
            </TypographyDes>
          </Grid>
        </Grid>
        <Grid container spacing={isMobile ? 1 : 2} mb={isMobile ? 1 : 2}>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.2,
              order: isMobile ? 2 : 1,
            }}
          >
            <Typography fontSize={20} fontWeight={700} color={red[100]}>
              {formatPrice(price)}
            </Typography>
          </Grid>
          {dataProduct.discount && (
            <Grid
              item
              xs={isMobile ? 12 : 6}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.2,
                order: isMobile ? 2 : 1,
              }}
            >
              <TypographyDes>Giá niêm yết </TypographyDes>
              <span>:</span>
              <TypographyDes
                sx={{
                  fontWeight: 600,
                  fontSize: 14,
                  textDecoration: "line-through",
                  textDecorationColor: black,
                }}
              >
                {formatPrice(fixedPrice)}
              </TypographyDes>
            </Grid>
          )}
        </Grid>
        <Grid container spacing={isMobile ? 1 : 2} mb={isMobile ? 1 : 2}>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", alignItems: "center", gap: 0.2 }}
          >
            <TypographyDes>Trạng thái </TypographyDes>
            <span>:</span>
            <TypographyDes>Còn hàng</TypographyDes>
          </Grid>
        </Grid>
        {dataProduct.discount && (
          <Grid container spacing={isMobile ? 1 : 2} mb={isMobile ? 1 : 2}>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
            >
              <TypographyDes
                sx={{
                  fontWeight: 500,
                }}
              >
                Tiết kiệm
              </TypographyDes>
              <TypographyDes
                sx={{
                  fontWeight: 700,
                }}
              >
                {formatPrice(savePrice)}
              </TypographyDes>
              <TypographyDes
                sx={{
                  fontWeight: 500,
                }}
              >
                so với giá thị trường
              </TypographyDes>
            </Grid>
          </Grid>
        )}
        {dataProduct.product_variants &&
          dataProduct.product_variants.length > 0 && (
            <>
              <Grid container spacing={isMobile ? 1 : 2} mb={isMobile ? 1 : 2}>
                <Grid
                  item
                  xs={isMobile ? 3 : 2}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <TypographyDes>
                    {dataProduct.variant_type && dataProduct.variant_type.name}:
                  </TypographyDes>
                </Grid>
                <Grid
                  item
                  xs={isMobile ? 9 : 10}
                  display={"flex"}
                  sx={{ flexWrap: "wrap", gap: 0.5 }}
                >
                  {dataProduct.product_variants.map((variant, index) => (
                    <Button
                      key={index}
                      sx={{
                        border: `1px solid ${red[100]}`,
                        cursor: "pointer",
                        borderRadius: "5px",
                        backgroundColor:
                          variant.id === selectedVariant?.id
                            ? red[100]
                            : white[100],
                        p: 1,
                        "&:hover": {
                          backgroundColor:
                            variant.id === selectedVariant?.id
                              ? red[100]
                              : white[100],
                        },
                        textTransform: "none",
                      }}
                      onClick={() => handleVariantClick(variant)}
                    >
                      <TypographyDes
                        sx={{
                          color:
                            variant.id === selectedVariant?.id
                              ? white[100]
                              : red[100],
                        }}
                      >
                        {variant.name}
                      </TypographyDes>
                    </Button>
                  ))}
                </Grid>
                {!allVariantsNull && (
                  <>
                    <Grid
                      item
                      xs={isMobile ? 3 : 2}
                      display={"flex"}
                      alignItems={"center"}
                    >
                      <TypographyDes>Kích thước:</TypographyDes>
                    </Grid>
                    <Grid
                      item
                      xs={isMobile ? 9 : 10}
                      display={"flex"}
                      sx={{ flexWrap: "wrap", gap: 0.5 }}
                    >
                      {dataProduct.product_variants
                        .filter((item) => item.box_size !== null)
                        .map((item, index) => (
                          <Button
                            key={index}
                            sx={{
                              border:
                                item.id === selectedVariant?.id
                                  ? `1px solid ${red[100]}`
                                  : `1px solid ${gray[100]}`,
                              cursor:
                                item.id !== selectedVariant?.id
                                  ? "not-allowed"
                                  : "pointer",
                              borderRadius: "5px",
                              backgroundColor:
                                item.id === selectedVariant?.id
                                  ? red[100]
                                  : white[100],
                              p: 1,
                              "&:hover": {
                                backgroundColor:
                                  item.id === selectedVariant?.id
                                    ? red[100]
                                    : white[100],
                              },
                              textTransform: "none",
                            }}
                            onClick={() => handleVariantClick(item)}
                            disabled={item.id !== selectedVariant?.id}
                          >
                            <TypographyDes
                              sx={{
                                color:
                                  item.id === selectedVariant?.id
                                    ? white[100]
                                    : gray[100],
                              }}
                            >
                              {item.box_size}
                            </TypographyDes>
                          </Button>
                        ))}
                    </Grid>
                  </>
                )}
              </Grid>
            </>
          )}
        <Grid item xs={isMobile ? 3 : 2} display={"flex"} alignItems={"center"}>
          <TypographyDes>Số lượng :</TypographyDes>
        </Grid>
        <Grid
          item
          xs={isMobile ? 9 : 10}
          display={"flex"}
          alignItems={"center"}
        >
          <Stack direction={"row"}>
            <BoxStyled onClick={handleDecrement}>-</BoxStyled>
            <TextField
              sx={{
                "& .MuiOutlinedInput-input": {
                  padding: "5px",
                  width: "40px",
                  textAlign: "center",
                  fontSize: "14px",
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "0",
                },
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    border: `1px solid ${gray[100]}`,
                  },
                },
                borderRadius: "0",
              }}
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            />
            <BoxStyled onClick={handleIncrement}>+</BoxStyled>
          </Stack>
        </Grid>
      </Grid>

      <Box>
        <Stack direction={isMobile ? "column" : "row"} mb={1} spacing={0.8}>
          <ButtonStyled
            sx={{
              backgroundColor: orange,
              "&:hover": {
                backgroundColor: orange,
                boxShadow: `0 0 10px ${orange}`,
              },
            }}
            onClick={() => addToCart()}
          >
            Thêm vào giỏ hàng
          </ButtonStyled>
          <ButtonStyled
            onClick={handleCheckout}
            sx={{
              backgroundColor: blue,
              "&:hover": {
                backgroundColor: blue,
                boxShadow: `0 0 10px ${blue}`,
              },
            }}
          >
            Mua ngay
          </ButtonStyled>
        </Stack>
        <ButtonStyled
          onClick={() => {
            window.open("tel:19006633", "_blank");
          }}
          sx={{
            width: isMobile ? "100%" : "auto",
            backgroundColor: yellow,
            "&:hover": {
              backgroundColor: yellow,
              boxShadow: `0 0 10px ${yellow}`,
            },
          }}
        >
          Gọi 19006633 để được tư vấn mua hàng
        </ButtonStyled>
      </Box>
    </>
  );
};

export default ProductPrice;

const TypographyDes = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 400,
  color: black,
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 400,
  color: white[100],
  padding: "10px",
  borderRadius: "10px",
}));

export const BoxStyled = styled(Stack)(({ theme }) => ({
  cursor: "pointer",
  color: "#A4AAAF",
  border: `1px solid ${gray[100]}`,
  padding: "0px 13px",

  justifyContent: "center",
}));
