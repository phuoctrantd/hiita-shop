import Page from "@/components/Page";
import { TextField } from "@/components/TextField";
import { checkoutAtom } from "@/lib/hooks/checkout";
import { red, white } from "@/styles";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  Collapse,
  Divider,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useAtom } from "jotai";
import Image from "next/image";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import QrDemo from "@/public/images/qr_demo.jpg";
import ProductFruit1 from "@/public/images/products/product1.png";
import request from "@/lib/request";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { price } from "../cart";
import { formatPrice } from "@/lib/contansts";
const CheckoutContainer = () => {
  const [checkoutProducts, setCheckoutProducts] = useAtom(checkoutAtom);
  const TypographyTitle = styled(Typography)(({ theme }) => ({
    fontSize: 18,
    fontWeight: 700,
  }));
  const { push } = useRouter();
  const validation = z.object({
    email: z
      .string()
      .min(1, "Email là bắt buộc")
      .email({ message: "Email không hợp lệ" }),
    name: z
      .string()
      .min(2, { message: "Tên phải có ít nhất 2 ký tự" })
      .max(30, { message: "Tên không được quá 20 ký tự" }),
    phone: z
      .string()
      .min(1, "Số điện thoại là bắt buộc")
      .max(10, "Số điện thoại không được quá 10 số")
      .refine((value) => !isNaN(parseFloat(value)), "Số điện thoại phải là số"),
    address: z
      .string()
      .min(1, { message: "Địa chỉ là bắt buộc" })
      .max(50, { message: "Địa chỉ được quá 50 ký tự" }),
    note: z.string().optional(),
  });
  type CheckoutForm = z.infer<typeof validation>;
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CheckoutForm>({
    defaultValues: {
      email: "",
      name: "",
      phone: "",
      address: "",
      note: "",
    },
    resolver: zodResolver(validation),
  });
  const order = async (value: any) => request.post("", value);
  const onSubmit: SubmitHandler<CheckoutForm> = async (value) => {
    try {
      const data = {
        ...value,
        products: checkoutProducts,
        payment: payment,
      };
      console.log(data);
      // await order(data);
      toast.success("Đặt hàng thành công");
      push("/");
      reset();
      setCheckoutProducts([]);
    } catch (e) {
      return;
    }
  };
  const [payment, setPayment] = React.useState<Number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPayment(Number((event.target as HTMLInputElement).value));
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const total = () => {
    return formatPrice(
      checkoutProducts.reduce((acc, item) => acc + price(item), 0)
    );
  };
  return (
    <Page title="Thanh toán">
      <>
        {checkoutProducts.length > 0 ? (
          <Grid
            container
            spacing={5}
            onSubmit={handleSubmit(onSubmit)}
            component="form"
            autoComplete="off"
          >
            <Grid item xs={isMobile ? 12 : 4} order={isMobile ? 2 : 1}>
              <TypographyTitle>Thông tin nhận hàng</TypographyTitle>
              <Stack direction="column" spacing={2} mt={2}>
                <TextField name="email" placeholder="Email" control={control} />
                <TextField
                  name="name"
                  placeholder="Họ và tên"
                  control={control}
                />
                <TextField
                  name="phone"
                  placeholder="Số điện thoại"
                  control={control}
                  type="number"
                />
                <TextField
                  name="address"
                  placeholder="Địa chỉ"
                  control={control}
                />
                <TextField
                  name="note"
                  placeholder="Ghi chú"
                  control={control}
                />
              </Stack>
            </Grid>
            <Grid item xs={isMobile ? 12 : 4} order={isMobile ? 2 : 1}>
              <TypographyTitle>Thanh toán</TypographyTitle>
              <RadioGroup
                value={payment}
                onChange={handleChange}
                sx={{
                  mt: 2,
                  "& .MuiTypography-root": {
                    fontSize: 14,
                    fontWeight: 500,
                  },
                  "& .MuiButtonBase-root": {
                    maxHeight: "38px",
                  },
                  "& .MuiFormControlLabel-root": {
                    mx: 0,
                  },
                }}
              >
                <FormControlLabel
                  sx={{
                    border: `1px solid ${red[100]}`,
                    borderRadius: "10px",
                    mb: 2,
                  }}
                  value={0}
                  control={<Radio />}
                  label="Thanh toán khi giao hàng ( COD )"
                />
                <FormControlLabel
                  sx={{ border: `1px solid ${red[100]}`, borderRadius: "10px" }}
                  value={1}
                  control={<Radio />}
                  label="Chuyển khoản qua ngân hàng"
                />
                {payment === 1 && (
                  <Stack
                    direction={"column"}
                    spacing={2}
                    sx={{ mt: 2 }}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Box>
                      <Image
                        src={QrDemo}
                        style={{ width: "150px", height: "150px" }}
                        alt="qr"
                      />
                    </Box>
                    <Typography sx={{ fontSize: 14, fontWeight: 500 }}>
                      Quét mã QR trên để thanh toán
                    </Typography>
                  </Stack>
                )}
              </RadioGroup>
            </Grid>
            <Grid item xs={isMobile ? 12 : 4} order={isMobile ? 0 : 2}>
              <Box sx={{ backgroundColor: red[300] }}>
                <Box padding={"25px 20px"}>
                  <TypographyTitle sx={{ color: white[100] }}>
                    Đơn hàng ( {checkoutProducts.length} sản phẩm )
                  </TypographyTitle>
                </Box>
                <Divider
                  sx={{
                    height: "2px",
                    backgroundColor: white[100],
                    m: "0px !important",
                  }}
                />
                <Stack
                  direction={"column"}
                  padding={"25px 20px"}
                  spacing={2}
                  sx={{ height: "300px", overflowY: "auto" }}
                >
                  {checkoutProducts.map((item, index) => (
                    <Stack
                      key={index}
                      direction={"row"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Stack direction={"row"} spacing={2}>
                        <Image
                          src={item.image_url[0]}
                          alt="product"
                          width="85"
                          height="100"
                        />
                        <Stack direction={"column"} spacing={2}>
                          <Typography
                            sx={{
                              fontSize: 16,
                              fontWeight: 700,
                              color: white[100],
                            }}
                          >
                            {item.name}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: 14,
                              fontWeight: 500,
                              color: white[100],
                            }}
                          >
                            {formatPrice(price(item))}
                          </Typography>
                        </Stack>
                      </Stack>
                      <Typography
                        fontSize={18}
                        fontWeight={600}
                        color={white[100]}
                      >
                        X{item.quantity}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
                <Divider
                  sx={{
                    height: "2px",
                    backgroundColor: white[100],
                    m: "0px !important",
                  }}
                />
                <Stack direction={"column"} spacing={3.1} padding={"25px 20px"}>
                  <Stack direction={"row"} justifyContent={"space-between"}>
                    <Typography
                      fontSize={16}
                      fontWeight={700}
                      color={white[100]}
                    >
                      Tổng cộng
                    </Typography>
                    <Typography
                      fontSize={16}
                      fontWeight={700}
                      color={white[100]}
                    >
                      {total()}
                    </Typography>
                  </Stack>
                  {!isMobile && (
                    <Box display={"flex"} justifyContent={"end"}>
                      <Button
                        type="submit"
                        sx={{
                          borderRadius: "10px",
                          backgroundColor: white[100],
                          color: red[100],
                          fontSize: 14,
                          fontWeight: 600,
                          "&:hover": {
                            backgroundColor: white[100],
                            color: red[100],
                            boxShadow: `0 0 10px ${white[100]}`,
                          },
                        }}
                      >
                        Đặt hàng
                      </Button>
                    </Box>
                  )}
                </Stack>
              </Box>
            </Grid>

            {isMobile && (
              <Grid item xs={12} order={3}>
                <Button
                  type="submit"
                  sx={{
                    width: "100%",
                    borderRadius: "10px",
                    backgroundColor: red[100],
                    color: white[100],
                    fontSize: 14,
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: red[100],
                      color: white[100],
                      boxShadow: `0 0 10px ${white[100]}`,
                    },
                  }}
                >
                  Đặt hàng
                </Button>
              </Grid>
            )}
          </Grid>
        ) : (
          <>
            <Box my={5}>
              <Typography
                fontSize={20}
                textAlign={"center"}
                fontWeight={500}
                color={red[100]}
              >
                Chưa có sản phẩm nào được chọn
              </Typography>
            </Box>
          </>
        )}
      </>
    </Page>
  );
};

export default CheckoutContainer;
