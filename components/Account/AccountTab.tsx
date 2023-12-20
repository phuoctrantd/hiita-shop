import { red, white } from "@/styles";
import {
  Box,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

const AccountTab = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Grid
        container
        sx={{
          padding: "20px",
          border: `1px solid ${red[100]}`,
          borderRadius: "12px",
        }}
      >
        <Grid item xs={12}>
          <Typography fontSize={16} fontWeight={600}>
            Hồ Sơ Của Tôi
          </Typography>
          <Divider sx={{ backgroundColor: red[100], my: 2 }} />
        </Grid>
        <Grid item xs={12} display={"flex"} flexDirection={"column"} gap={2.5}>
          <Grid container spacing={2}>
            <Grid item xs={isMobile ? 4 : 3}>
              <Typography fontSize={14} fontWeight={500}>
                Tên đăng nhập
              </Typography>
            </Grid>
            <Grid item xs={isMobile ? 8 : 9}>
              <Typography fontSize={14} fontWeight={500}>
                Nguyễn Văn Huy
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={isMobile ? 4 : 3}>
              <Typography fontSize={14} fontWeight={500}>
                Họ tên
              </Typography>
            </Grid>
            <Grid item xs={isMobile ? 8 : 9}>
              <Typography fontSize={14} fontWeight={500}>
                Nguyễn Văn Huy
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={isMobile ? 4 : 3}>
              <Typography fontSize={14} fontWeight={500}>
                Email
              </Typography>
            </Grid>
            <Grid item xs={isMobile ? 8 : 9}>
              <Typography fontSize={14} fontWeight={500}>
                Email
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={isMobile ? 4 : 3}>
              <Typography fontSize={14} fontWeight={500}>
                Số điện thoại
              </Typography>
            </Grid>
            <Grid item xs={isMobile ? 8 : 9}>
              <Typography fontSize={14} fontWeight={500}>
                Số điện thoại
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default AccountTab;
