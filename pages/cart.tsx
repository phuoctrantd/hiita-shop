import React, { useState } from "react";
import {
  Grid,
  Button,
  Divider,
  styled,
  Typography,
  Box,
  TextField,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Page from "@/components/Page";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Image from "next/image";
import { black, gray, red, white } from "@/styles";
import { formatPrice, generateSlug } from "@/lib/contansts";
import { BoxStyled } from "@/components/Product/ProductPrice";
import toast, { Toaster } from "react-hot-toast";
import { useAtom } from "jotai";
import { CartItem, cartAtom } from "@/lib/hooks/useCart";
import Link from "next/link";
import { checkoutAtom, checkoutSourceAtom } from "@/lib/hooks/checkout";
import { useRouter } from "next/navigation";
import ProductFruit1 from "@/public/images/products/product1.png";
import { getImageUrl } from "@/lib/utils/ultil";
export const price = (cartItem: CartItem) => {
  return (
    cartItem.quantity *
    (cartItem.variant.flash_sale?.price || cartItem.variant?.promotional_price)
  );
};

const Cart = () => {
  const [cart, setCart] = useAtom(cartAtom);

  const removeItem = (item: CartItem) => {
    const updatedCart = cart.filter((cartItem) => {
      if (cartItem.variant && cartItem.variant.id) {
        return cartItem.variant?.id !== item.variant?.id;
      } else {
        return cartItem.id !== item.id;
      }
    });
    toast.success("Xóa sản phẩm thành công");
    setCart(updatedCart);
  };

  const handleDecrement = (item: CartItem) => {
    if (item.quantity === 1) {
      removeItem(item);
      return;
    }
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.variant && cartItem.variant.id) {
        if (cartItem.variant?.id === item.variant?.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity - 1,
          };
        }
      } else {
        if (cartItem.id === item.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity - 1,
          };
        }
      }
      return cartItem;
    });
    setCart(updatedCart);
  };

  const handleIncrement = (item: CartItem) => {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.variant && cartItem.variant.id) {
        if (cartItem.variant?.id === item.variant?.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        }
      } else {
        if (cartItem.id === item.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        }
      }
      return cartItem;
    });
    setCart(updatedCart);
  };

  const handleOnChange = (item: CartItem, value: number) => {
    if (value < 1) {
      value = 1;
    }
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.variant && cartItem.variant.id) {
        if (cartItem.variant?.id === item.variant?.id) {
          return {
            ...cartItem,
            quantity: value,
          };
        }
      } else {
        if (cartItem.id === item.id) {
          return {
            ...cartItem,
            quantity: value,
          };
        }
      }
      return cartItem;
    });
    setCart(updatedCart);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const totalCart = () => {
    return cart.reduce((acc, item) => acc + price(item), 0);
  };

  const priceProduct = (cartItem: CartItem) => {
    return (
      cartItem.variant.flash_sale?.price || cartItem.variant?.promotional_price
    );
  };

  const [checkoutProducts, setCheckoutProducts] = useAtom(checkoutAtom);
  const [, setCheckoutSource] = useAtom(checkoutSourceAtom);
  const { push } = useRouter();
  const handleCheckout = () => {
    setCheckoutProducts(cart);
    setCheckoutSource("cart");
    push("/checkout");
  };

  return (
    <Page title="Giỏ hàng">
      {cart.length > 0 ? (
        <>
          {!isMobile && (
            <Grid container>
              <Grid item xs={3}>
                <TypographyHeader>Sản Phẩm</TypographyHeader>
              </Grid>
              <Grid item xs={3}>
                <TypographyHeader>Giá</TypographyHeader>
              </Grid>
              <Grid item xs={2}>
                <TypographyHeader>Số lượng</TypographyHeader>
              </Grid>
              <Grid item xs={3}>
                <TypographyHeader>Tổng</TypographyHeader>
              </Grid>
              <Grid item xs={1}>
                <TypographyHeader>Xóa</TypographyHeader>
              </Grid>
            </Grid>
          )}
          <Divider sx={{ my: 3 }} />
          {cart.map((item, index) => (
            <React.Fragment key={`${item.id}-${index}`}>
              <Grid container>
                <Grid
                  item
                  xs={isMobile ? 7 : 3}
                  sx={{ display: "flex", gap: 2 }}
                >
                  <Link href={`/product/${generateSlug(item.name, item.id)}`}>
                    <Box>
                      <img
                        src={getImageUrl(item.product_variants[0].image_url)}
                        alt="product"
                        width="100"
                        height="100"
                      />
                    </Box>
                  </Link>

                  <Stack direction={"column"} justifyContent={"space-between"}>
                    <Link href={`/product/${generateSlug(item.name, item.id)}`}>
                      <Typography
                        fontSize={16}
                        fontWeight={700}
                        sx={{
                          "&:hover": { color: red[100] },
                        }}
                      >
                        {item.name}
                      </Typography>
                    </Link>
                    <Typography fontSize={12} fontWeight={400}>
                      {item.variant && item.variant.name}
                    </Typography>
                    {isMobile && (
                      <Stack direction={"row"}>
                        <BoxStyled
                          sx={{ padding: "0 10px" }}
                          onClick={() => handleDecrement(item)}
                        >
                          -
                        </BoxStyled>
                        <TextField
                          sx={{
                            "& .MuiOutlinedInput-input": {
                              padding: "5px",
                              width: "25px",
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
                            "& .MuiOutlinedInput-notchedOutline": {
                              border: "none",
                              borderTop: `1px solid ${gray[100]}`,
                              borderBottom: `1px solid ${gray[100]}`,
                            },
                            "& .MuiOutlinedInput-root:hover": {
                              "& > fieldset": {
                                borderColor: gray[100],
                              },
                            },
                            borderRadius: "0",
                          }}
                          value={item.quantity}
                          onChange={(e) =>
                            handleOnChange(item, Number(e.target.value))
                          }
                        />
                        <BoxStyled
                          sx={{ padding: "0 10px" }}
                          onClick={() => handleIncrement(item)}
                        >
                          +
                        </BoxStyled>
                      </Stack>
                    )}
                  </Stack>
                </Grid>
                {!isMobile && (
                  <Grid item xs={3} display={"flex"} alignItems={"center"}>
                    <TypographyPrice>
                      {formatPrice(priceProduct(item))}
                    </TypographyPrice>
                  </Grid>
                )}
                {!isMobile && (
                  <Grid
                    item
                    xs={2}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Stack direction={"row"}>
                      <BoxStyled sx={{}} onClick={() => handleDecrement(item)}>
                        -
                      </BoxStyled>
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
                          "& .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                            borderTop: `1px solid ${gray[100]}`,
                            borderBottom: `1px solid ${gray[100]}`,
                          },
                          "& .MuiOutlinedInput-root:hover": {
                            "& > fieldset": {
                              borderColor: gray[100],
                            },
                          },
                          borderRadius: "0",
                        }}
                        value={item.quantity}
                        onChange={(e) =>
                          handleOnChange(item, Number(e.target.value))
                        }
                      />
                      <BoxStyled onClick={() => handleIncrement(item)}>
                        +
                      </BoxStyled>
                    </Stack>
                  </Grid>
                )}
                <Grid
                  item
                  xs={isMobile ? 4 : 3}
                  display={"flex"}
                  alignItems={isMobile ? "end" : "center"}
                  justifyContent={isMobile ? "center" : "start"}
                >
                  <TypographyPrice>{formatPrice(price(item))}</TypographyPrice>
                </Grid>
                <Grid
                  item
                  xs={1}
                  display={"flex"}
                  alignItems={isMobile ? "end" : "center"}
                >
                  <CloseOutlinedIcon
                    sx={{
                      fontSize: 21,
                      cursor: "pointer",
                      "&:hover": {
                        color: red[100],
                      },
                    }}
                    onClick={() => removeItem(item)}
                  />
                </Grid>
              </Grid>
              <Divider sx={{ mt: 2, mb: isMobile ? 3 : 2 }} />
            </React.Fragment>
          ))}

          <Grid
            container
            justifyContent={isMobile ? "start" : "flex-end"}
            mt={isMobile ? 1 : 5}
            mb={isMobile ? 5 : 12}
          >
            <Grid item xs={5} mb={2}>
              <Typography fontSize={32} fontWeight={700} lineHeight={"40px"}>
                Thanh toán
              </Typography>
            </Grid>
            <Grid container justifyContent={isMobile ? "start" : "flex-end"}>
              <Grid
                item
                xs={isMobile ? 12 : 5}
                sx={{
                  border: `1px solid ${gray[100]}`,
                  borderRadius: "6px",
                  p: "24px 20px",
                }}
              >
                <Grid container justifyContent={"flex-end"} mb={2}>
                  <Grid item xs={6}>
                    <Typography fontSize={20} fontWeight={600}>
                      Tổng tiền
                    </Typography>
                  </Grid>
                  <Grid item xs={6} display={"flex"} justifyContent={"end"}>
                    <TypographyHeader sx={{ fontSize: 14 }}>
                      {formatPrice(totalCart())}
                    </TypographyHeader>
                  </Grid>
                </Grid>
                {/* <Grid container justifyContent={"flex-end"}>
                  <Grid item xs={6}>
                    <TypographyHeader sx={{ fontWeight: 400 }}>
                      Giảm giá sản phẩm
                    </TypographyHeader>
                  </Grid>
                  <Grid item xs={6} display={"flex"} justifyContent={"end"}>
                    <TypographyPrice>
                      {formatPrice(totalPromotionalCart())}
                    </TypographyPrice>
                  </Grid>
                </Grid> */}
                <Divider sx={{ my: 2 }} />
                <Grid container justifyContent={"flex-end"}>
                  <Grid item xs={6}>
                    <Typography fontSize={20} fontWeight={700}>
                      Tổng thanh toán
                    </Typography>
                  </Grid>
                  <Grid item xs={6} display={"flex"} justifyContent={"end"}>
                    <TypographyHeader>
                      {formatPrice(totalCart())}
                    </TypographyHeader>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent={isMobile ? "start" : "flex-end"}
              mt={3}
            >
              <Grid item xs={isMobile ? 12 : 5}>
                <Button
                  onClick={handleCheckout}
                  sx={{
                    fontSize: 16,
                    fontWeight: 400,
                    width: "100%",
                    backgroundColor: red[100],
                    py: 2,
                    color: white[100],
                    "&:hover": {
                      backgroundColor: red[100],
                      boxShadow: `0 0 10px ${red[100]}`,
                    },
                  }}
                >
                  Tới mục thanh toán
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <Box my={5}>
            <Typography
              fontSize={20}
              textAlign={"center"}
              fontWeight={500}
              color={red[100]}
            >
              Giỏ hàng của bạn còn trống
            </Typography>
          </Box>
        </>
      )}
    </Page>
  );
};

export default Cart;

const TypographyHeader = styled(Typography)`
  font-size: 18px;
  font-weight: 700;
`;

const TypographyPrice = styled(Typography)`
  font-size: 14px;
  font-weight: 500;
`;
