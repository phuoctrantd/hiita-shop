import { red } from "@/styles";
import { Box, Typography } from "@mui/material";
import React from "react";

const Custom404 = () => {
  return (
    <>
      <Box my={5}>
        <Typography fontSize={100} textAlign={"center"} color={red[100]}>
          404
        </Typography>
        <Typography fontSize={60} textAlign={"center"} color={red[100]}>
          Xin lỗi, trang bạn tìm kiếm không tồn tại hoặc đã bị gỡ bỏ
        </Typography>
      </Box>
    </>
  );
};

export default Custom404;
