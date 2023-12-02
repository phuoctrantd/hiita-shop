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
import Logo from "@/public/images/logo.png";
import PhoneIcon from "@/public/images/phone_icon_1.svg";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CartIcon from "@/public/images/cart_icon.svg";
import Menu from "./Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import DragHandleOutlinedIcon from "@mui/icons-material/DragHandleOutlined";
import DrawerContainer from "./components/DrawerContainer";
import Link from "next/link";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [openMenu, setOpenMenu] = React.useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };
  return (
    <>
      <Box
        style={{
          width: "100%",
          backgroundColor: red[100],
          borderRadius: isMobile ? "15px 15px 0 0" : 0,
        }}
      >
        <Container maxWidth="xl" sx={{ padding: "20px 10px !important" }}>
          <Grid container spacing={2}>
            <Grid
              order={1}
              item
              xs={isMobile ? 5 : 3}
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Link href="/">
                <Image
                  src={Logo}
                  alt="logo"
                  width={isMobile ? "170" : "190"}
                  height="60"
                />
              </Link>
            </Grid>
            <Grid
              order={isMobile ? 5 : 2}
              item
              xs={isMobile ? 12 : 5}
              sx={{
                display: "flex",
                justifyContent: isMobile ? "space-between" : "start",
                alignItems: "center",
                gap: "20px",
              }}
            >
              {isMobile && (
                <DragHandleOutlinedIcon
                  sx={{ fontSize: "40px", color: white[100] }}
                  onClick={handleOpenMenu}
                />
              )}
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
            {!isMobile && (
              <Grid
                order={3}
                item
                xs={1.5}
                sx={{
                  justifyContent: "end",
                  display: "flex",
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
            )}
            <Grid
              order={isMobile ? 2 : 4}
              item
              xs={isMobile ? 5 : 1.5}
              sx={{
                justifyContent: "end",
                display: "flex",
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
                  <TextHeader
                    sx={{
                      fontSize: isMobile
                        ? "13px !important"
                        : "15px !important",
                    }}
                  >
                    Xin chào
                  </TextHeader>
                  <TextHeader
                    sx={{
                      fontSize: isMobile
                        ? "12px !important"
                        : "13px !important",
                      fontWeight: 600,
                    }}
                  >
                    Đăng nhập
                  </TextHeader>
                </Box>
              </Stack>
            </Grid>

            <Grid
              order={isMobile ? 3 : 5}
              item
              xs={isMobile ? 2 : 1}
              sx={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <Link href={"/cart"}>
                <Image src={CartIcon} alt="logo" width="28" height="28" />
              </Link>
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
      <DrawerContainer openMenu={openMenu} handleCloseMenu={handleCloseMenu} />
    </>
  );
};

export default Header;

const TextHeader = styled(Typography)(({ theme }) => ({
  fontSize: 15,
  color: white[100],
  fontWeight: 400,
}));
