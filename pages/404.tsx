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
          Siêu chợ Hiita - Siêu giá tốt Hiita.vn - Săn deal 0Đ - Miễn phí giao
          hàng
        </title>
        <meta
          name="description"
          content="Siêu chợ Hiita - Siêu giá tốt Hiita.vn - Săn deal 0Đ - Miễn phí giao hàng"
        />
        <meta name="keywords" content="trai cay" />
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
