import { black, red, white } from "@/styles";
import {
  Box,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import Logo from "@/public/images/logo.svg";
import PhoneIcon from "@/public/images/phone_icon_1.svg";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CartIcon from "@/public/images/cart_icon.svg";
import Menu from "./Menu";

const Header = () => {
  return (
    <>
      <Box
        style={{
          width: "100%",
          backgroundColor: red,
        }}
      >
        <Container maxWidth="xl" sx={{ padding: "20px 0 !important" }}>
          <Grid container>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Image src={Logo} alt="logo" width="170" height="73" />
            </Grid>
            <Grid
              item
              xs={5}
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <TextField
                sx={{
                  borderRadius: 26,
                  width: 360,
                  height: 50,
                  border: "1px solid #000000",
                  backgroundColor: white[100],
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                      borderColor: "transparent",
                    },
                  },
                  "& .MuiOutlinedInput-root:hover": {
                    "& > fieldset": {
                      borderColor: "transparent",
                    },
                  },
                  "& .MuiOutlinedInput-input": {
                    padding: "13px 20px 6px 20px",
                    color: black,
                  },
                }}
                placeholder="Tìm kiếm sản phẩm....."
              />
            </Grid>
            <Grid
              item
              xs={1.5}
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "flex",
                },
                justifyContent: "end",
              }}
            >
              <Stack
                direction="row"
                sx={{ alignItems: "center" }}
                spacing={0.6}
              >
                <Image
                  src={PhoneIcon}
                  alt="icon_phone"
                  width="40"
                  height="40"
                />
                <Box>
                  <TextHeader>Tư vấn hỗ trợ</TextHeader>
                  <TextHeader sx={{ fontSize: 17, fontWeight: 700 }}>
                    19006633
                  </TextHeader>
                </Box>
              </Stack>
            </Grid>
            <Grid
              item
              xs={1.5}
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "flex",
                },
                justifyContent: "end",
              }}
            >
              <Stack
                direction="row"
                sx={{ alignItems: "center" }}
                spacing={0.6}
              >
                <AccountCircleOutlinedIcon
                  sx={{ color: white[100], fontSize: 40 }}
                />
                <Box>
                  <TextHeader>Xin chào</TextHeader>
                  <TextHeader sx={{ fontSize: 13, fontWeight: 600 }}>
                    Đăng nhập
                  </TextHeader>
                </Box>
              </Stack>
            </Grid>
            <Grid
              item
              xs={1}
              sx={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <Image src={CartIcon} alt="logo" width="28" height="28" />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container
        maxWidth="xl"
        sx={{
          padding: "10px 0 !important",
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
          },
        }}
      >
        <Menu />
      </Container>
    </>
  );
};

export default Header;

const TextHeader = styled(Typography)(({ theme }) => ({
  fontSize: 15,
  color: white[100],
  fontWeight: 400,
}));
