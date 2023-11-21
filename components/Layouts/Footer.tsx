import { red, white } from "@/styles";
import {
  Box,
  Container,
  Divider,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import Logo from "@/public/images/logo.svg";
import { MENU_DATA_FOOTER } from "@/lib/contansts";
const Footer = () => {
  return (
    <Box
      style={{
        width: "100%",
        backgroundColor: red,
      }}
    >
      <Container maxWidth="xl" sx={{ padding: "34px 0 20px 0 !important" }}>
        <Image src={Logo} alt="logo" width="170" height="73" />
        <Grid container padding={"5px 0 0 28px"}>
          {MENU_DATA_FOOTER.map((item, index) => (
            <Grid item xs={3} key={index}>
              <TextTitle sx={{ marginBottom: 5.6 }}>{item.title}</TextTitle>
              {item.data.map((item, index) => (
                <TextMenu key={index}>{item.label}</TextMenu>
              ))}
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ backgroundColor: white[200], my: 5 }} />
        <Grid container>
          <Grid item xs={6}>
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
            xs={6}
            sx={{ display: "flex", gap: 2.5, justifyContent: "end" }}
          >
            <Typography fontSize={17} fontWeight={800} color={white[100]}>
              BẢN ĐỒ
            </Typography>
            <Divider
              orientation="vertical"
              sx={{ backgroundColor: white[200], height: 30 }}
            />
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
  color: white[100],
  fontWeight: 700,
  textTransform: "uppercase",
  marginBottom: 12,
}));
const TextMenu = styled(Typography)(({ theme }) => ({
  fontSize: 15,
  fontWeight: 600,
  color: white[100],
  cursor: "pointer",
  marginBottom: 10,
  "&:hover": {
    textShadow: "0px 0px 5px #fff",
  },
}));
