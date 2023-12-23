import { red, white } from "@/styles";
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import Logo from "@/public/images/hiita-logo.png";
import { MENU_DATA_FOOTER } from "@/lib/contansts";
const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      style={{
        width: "100%",
        backgroundColor: white[100],
        borderRadius: isMobile ? "0 0 15px 15px" : 0,
      }}
    >
      <Container maxWidth="xl" sx={{ padding: "34px 0 20px 0 !important" }}>
        <Image
          src={Logo}
          alt="logo"
          width="200"
          height="70"
          style={{ marginBottom: "23px" }}
        />
        <Grid container padding={"5px 0 0 28px"}>
          {MENU_DATA_FOOTER.map((item, index) => (
            <Grid item xs={isMobile ? 12 : 3} key={index}>
              <TextTitle
                sx={{
                  marginBottom: isMobile ? 2 : 5.6,
                  marginTop: isMobile ? 3 : 0,
                }}
              >
                {item.title}
              </TextTitle>
              {item.data.map((item, index) => (
                <TextMenu key={index}>{item.label}</TextMenu>
              ))}
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ backgroundColor: white[200], my: 5 }} />
        <Grid container px={isMobile ? 2.5 : 0}>
          <Grid item xs={isMobile ? 12 : 6}>
            <TextTitle>HIITA Siêu chợ - Siêu giá tốt</TextTitle>
            <Box mt={5}>
              <TextTitle>
                Copyright@ 2023 Hiita Siêu chợ - Siêu giá tốt
              </TextTitle>
              <TextTitle>
                Chứng nhận ĐKKD số: 0388282939 do sở KH & ĐT TP.Hà Nội cấp{" "}
              </TextTitle>
              <TextTitle>Địa chỉ: Tòa nhà ABCD Hà Nội</TextTitle>
              <TextTitle>Điện thoại: 19003366 - Email: support@hh.vn</TextTitle>
            </Box>
          </Grid>
          <Grid
            item
            xs={isMobile ? 12 : 6}
            sx={{
              display: "flex",
              gap: 2.5,
              justifyContent: isMobile ? "start" : "end",
            }}
          >
            <Stack
              direction={"row"}
              spacing={2.5}
              display={isMobile ? "none" : "flex"}
            >
              <Typography fontSize={15} fontWeight={700} color={red[100]}>
                BẢN ĐỒ
              </Typography>
              <Divider
                orientation="vertical"
                sx={{ backgroundColor: white[200], height: 30 }}
              />
            </Stack>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.509228182785!2d105.8467269758722!3d21.012301088342685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab8b9b67add5%3A0xa1025680426f517d!2zMTgzIFAuIELDoCBUcmnhu4d1LCBCw7lpIFRo4buLIFh1w6JuLCBIYWkgQsOgIFRyxrBuZywgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1700591572986!5m2!1svi!2s"
              width="337"
              height="230"
              style={{ border: "0" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;

const TextTitle = styled(Typography)(({ theme }) => ({
  fontSize: 15,
  color: red[100],
  fontWeight: 700,
  textTransform: "uppercase",
  marginBottom: 12,
}));
const TextMenu = styled(Typography)(({ theme }) => ({
  fontSize: 15,
  fontWeight: 600,
  color: red[100],
  cursor: "pointer",
  marginBottom: 10,
  "&:hover": {
    textShadow: "0px 0px 5px #fff",
  },
}));
