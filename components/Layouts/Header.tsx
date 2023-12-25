import { black, red, white } from "@/styles";
import {
  Avatar,
  Badge,
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
import { useAtom } from "jotai";
import { cartAtom } from "@/lib/hooks/useCart";
import Login from "../Dialog/Login";
import Register from "../Dialog/Register";
import { useAuth } from "@/lib/provider/AuthProvider";
import { useRouter } from "next/navigation";

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
  const [cart] = useAtom(cartAtom);
  const cartLength = cart?.length;
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openRegister, setOpenRegister] = React.useState(false);

  const handleOpenLogin = () => {
    setOpenRegister(false);
    setOpenLogin(true);
  };

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  const handleOpenRegister = () => {
    setOpenLogin(false);
    setOpenRegister(true);
  };

  const handleCloseRegister = () => {
    setOpenRegister(false);
  };
  const { user, handleLogout } = useAuth();
  const router = useRouter();
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
                <img
                  src={Logo.src}
                  alt="logo"
                  width={isMobile ? "140" : "190"}
                  height={isMobile ? "40" : "60"}
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
                    padding: "15px 20px 6px 20px",
                    color: black,
                    fontSize: "14px !important",
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
                  <img
                    src={PhoneIcon.src}
                    alt="icon_phone"
                    width="35"
                    height="35"
                  />
                  <Box
                    onClick={() => {
                      window.open("tel:19006633", "_blank");
                    }}
                    sx={{ cursor: "pointer" }}
                  >
                    <TextHeader>Tư vấn hỗ trợ</TextHeader>
                    <TextHeader sx={{ fontSize: 13, fontWeight: 700 }}>
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
                {user ? (
                  <>
                    <Avatar
                      sx={{
                        width: 29,
                        height: 29,
                        background: white[100],
                        color: red[100],
                        fontWeight: 600,
                      }}
                    >
                      {user?.name[0]}
                    </Avatar>
                  </>
                ) : (
                  <AccountCircleOutlinedIcon
                    sx={{ color: white[100], fontSize: 35 }}
                  />
                )}
                <Box>
                  <TextHeader
                    onClick={user ? handleLogout : () => {}}
                    sx={{
                      cursor: user ? "pointer" : "unset",
                      fontSize: isMobile
                        ? "13px !important"
                        : "12px !important",
                      "&:hover": {
                        textDecoration: user ? "underline" : "unset",
                        textShadow: user
                          ? `0px 0px 5px ${white[100]}`
                          : "unset",
                      },
                    }}
                  >
                    {user ? "Đăng xuất" : "Xin chào"}
                  </TextHeader>
                  <TextHeader
                    onClick={
                      user ? () => router.push("/account") : handleOpenLogin
                    }
                    sx={{
                      cursor: "pointer",
                      fontSize: isMobile
                        ? "12px !important"
                        : "13px !important",
                      fontWeight: 600,
                      "&:hover": {
                        textDecoration: "underline",
                        textShadow: `0px 0px 5px ${white[100]}`,
                      },
                    }}
                  >
                    {user?.name || "Đăng nhập"}
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
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link href={"/cart"}>
                <Badge
                  sx={{
                    "& .MuiBadge-badge": {
                      color: red[100],
                      backgroundColor: white[100],
                    },
                  }}
                  badgeContent={cartLength}
                >
                  <img src={CartIcon.src} alt="logo" width="28" height="28" />
                </Badge>
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
      <Login
        open={openLogin}
        close={handleCloseLogin}
        handleOpenRegister={handleOpenRegister}
      />
      <Register
        open={openRegister}
        close={handleCloseRegister}
        handleOpenLogin={handleOpenLogin}
      />
    </>
  );
};

export default Header;

const TextHeader = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  color: white[100],
  fontWeight: 400,
}));
