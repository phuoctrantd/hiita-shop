import { red } from "@/styles";
import { Box, Typography } from "@mui/material";
import Head from "next/head";
import React from "react";
import Logo from "@/public/images/hiita-logo.png";
const Custom404 = () => {
  return (
    <>
      <Head>
        <title>
          Hiita - Nhân sâm thượng hạng và Trái cây nhập khẩu giá tốt nhất
        </title>
        <meta
          name="description"
          content="Hiita - Nhân sâm thượng hạng và Trái cây nhập khẩu giá tốt nhất"
        />
        <meta name="keywords" content="nhan sam, trai cay" />
        <meta property="og:image" content={Logo.src} />
      </Head>
      <Box my={5}>
        <Typography
          fontSize={50}
          textAlign={"center"}
          fontWeight={800}
          color={red[100]}
        >
          404
        </Typography>
        <Typography fontSize={25} textAlign={"center"} color={red[100]}>
          Xin lỗi, trang bạn tìm kiếm không tồn tại hoặc đã bị gỡ bỏ
        </Typography>
      </Box>
    </>
  );
};

export default Custom404;
