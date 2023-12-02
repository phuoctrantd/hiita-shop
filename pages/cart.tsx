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
import Ginseng1 from "@/public/images/products/ginseng1.png";
import Ginseng2 from "@/public/images/products/ginseng2.png";
import Ginseng3 from "@/public/images/products/ginseng3.png";
import Ginseng4 from "@/public/images/products/ginseng4.png";
import Ginseng5 from "@/public/images/products/ginseng5.png";
import ProductFruit1 from "@/public/images/products/product1.png";
import ProductFruit2 from "@/public/images/products/product2.png";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Image from "next/image";
import { gray, red, white } from "@/styles";
import { formatPrice } from "@/lib/contansts";
import { BoxStyled } from "@/components/Product/ProductPrice";
import toast, { Toaster } from "react-hot-toast";
const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Dâu Nhật Bản ",
      price: "1500000",
      priceSale: "15000000",
      quantity: 1,
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
    },
    {
      id: 2,
      name: "Sản phẩm 2",
      price: "1500000",
      priceSale: "12090000",
      quantity: 2,
      images: [
        ProductFruit1,
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
    },
    {
      id: 3,
      name: "Sản phẩm 3",
      price: "1500000",
      priceSale: "15000000",
      quantity: 1,
      images: [
        ProductFruit2,
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
    },
  ]);

  const removeItem = (itemId: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    toast.success("Xóa sản phẩm thành công");
    setCartItems(updatedCart);
  };

  const handleDecrement = (itemId: number) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }

      return item;
    });
    setCartItems(updatedCart);
  };
  const handleIncrement = (itemId: number) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const handleOnChange = (itemId: number, value: number) => {
    if (value < 1) {
      value = 1;
    }
    const updatedCart = cartItems.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: value,
        };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Page title="Giỏ hàng">
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
      {cartItems.map((item, index) => (
        <React.Fragment key={item.id}>
          <Grid container>
            <Grid item xs={isMobile ? 7 : 3} sx={{ display: "flex", gap: 2 }}>
              <Box>
                <Image
                  src={item.images[0]}
                  alt="product"
                  width="100"
                  height="100"
                />
              </Box>
              <Stack direction={"column"} justifyContent={"space-between"}>
                <Typography fontSize={16} fontWeight={700}>
                  {item.name}
                </Typography>
                {isMobile && (
                  <Stack direction={"row"}>
                    <BoxStyled
                      sx={{ padding: "0 10px" }}
                      onClick={() => handleDecrement(item.id)}
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
                            border: `1px solid ${gray}`,
                          },
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                          borderTop: `1px solid ${gray}`,
                          borderBottom: `1px solid ${gray}`,
                        },
                        "& .MuiOutlinedInput-root:hover": {
                          "& > fieldset": {
                            borderColor: gray,
                          },
                        },
                        borderRadius: "0",
                      }}
                      value={item.quantity}
                      onChange={(e) =>
                        handleOnChange(item.id, Number(e.target.value))
                      }
                    />
                    <BoxStyled
                      sx={{ padding: "0 10px" }}
                      onClick={() => handleIncrement(item.id)}
                    >
                      +
                    </BoxStyled>
                  </Stack>
                )}
              </Stack>
            </Grid>
            {!isMobile && (
              <Grid item xs={3} display={"flex"} alignItems={"center"}>
                <TypographyPrice>{formatPrice(item.price)}</TypographyPrice>
              </Grid>
            )}
            {!isMobile && (
              <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }}>
                <Stack direction={"row"}>
                  <BoxStyled sx={{}} onClick={() => handleDecrement(item.id)}>
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
                          border: `1px solid ${gray}`,
                        },
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                        borderTop: `1px solid ${gray}`,
                        borderBottom: `1px solid ${gray}`,
                      },
                      "& .MuiOutlinedInput-root:hover": {
                        "& > fieldset": {
                          borderColor: gray,
                        },
                      },
                      borderRadius: "0",
                    }}
                    value={item.quantity}
                    onChange={(e) =>
                      handleOnChange(item.id, Number(e.target.value))
                    }
                  />
                  <BoxStyled onClick={() => handleIncrement(item.id)}>
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
              <TypographyPrice>
                {formatPrice(String(Number(item.price) * item.quantity))}
              </TypographyPrice>
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
                onClick={() => removeItem(item.id)}
              />
            </Grid>
          </Grid>
          <Divider sx={{ mt: 2, mb: isMobile ? 3 : "unset" }} />
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
              border: `1px solid ${gray}`,
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
                  {formatPrice(
                    String(
                      cartItems.reduce(
                        (acc, item) => acc + Number(item.price) * item.quantity,
                        0
                      )
                    )
                  )}
                </TypographyHeader>
              </Grid>
            </Grid>
            <Grid container justifyContent={"flex-end"}>
              <Grid item xs={6}>
                <TypographyHeader sx={{ fontWeight: 400 }}>
                  Giảm giá sản phẩm
                </TypographyHeader>
              </Grid>
              <Grid item xs={6} display={"flex"} justifyContent={"end"}>
                <TypographyPrice>
                  {formatPrice(
                    String(
                      cartItems.reduce(
                        (acc, item) =>
                          acc + Number(item.priceSale) * item.quantity,
                        0
                      )
                    )
                  )}
                </TypographyPrice>
              </Grid>
            </Grid>
            <Divider sx={{ my: 2 }} />
            <Grid container justifyContent={"flex-end"}>
              <Grid item xs={6}>
                <Typography fontSize={20} fontWeight={700}>
                  Tổng thanh toán
                </Typography>
              </Grid>
              <Grid item xs={6} display={"flex"} justifyContent={"end"}>
                <TypographyHeader>
                  {formatPrice(
                    String(
                      cartItems.reduce(
                        (acc, item) => acc + Number(item.price) * item.quantity,
                        0
                      )
                    )
                  )}
                </TypographyHeader>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justifyContent={isMobile ? "start" : "flex-end"} mt={3}>
          <Grid item xs={isMobile ? 12 : 5}>
            <Button
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
