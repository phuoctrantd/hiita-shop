import { black, red, white } from "@/styles";
import {
  Box,
  Container,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import Logo from "@/public/images/logo.svg";
import IconPhone from "@/public/images/phone_icon_1.svg";
const Header = () => {
  return (
    <Box
      style={{
        width: "100%",
        height: "100px",
        backgroundColor: red,
      }}
    >
      <Container maxWidth="lg" sx={{ padding: "20px 0" }}>
        <Stack direction="row">
          <Image src={Logo} alt="logo" width="170" height="73" />
          <TextField
            sx={{
              borderRadius: 26,
              width: 420,
              height: 55,
              border: "1px solid #000000",
              backgroundColor: white,
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
                padding: "21px 20px 18px 20px",
                color: black,
              },
            }}
            placeholder="Tìm kiếm sản phẩm....."
          />
          <Stack direction="row" spacing={2} sx={{ marginLeft: "auto" }}>
            <Image src={IconPhone} alt="icon_phone" width="40" height="40" />
            <Box>
              <TextHeader>Hotline</TextHeader>
              <TextHeader sx={{ fontSize: 17, fontWeight: 700 }}>
                19006633
              </TextHeader>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;

const TextHeader = styled(Typography)(({ theme }) => ({
  fontSize: 15,
  color: white,
  fontWeight: 400,
}));
