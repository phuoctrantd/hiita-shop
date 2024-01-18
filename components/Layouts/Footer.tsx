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
import { MENU_DATA_FOOTER, generateSlug } from "@/lib/contansts";
import Link from "next/link";
import { categoriesState } from "@/lib/hooks/categoriesState";
import { useAtom } from "jotai";
const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  React.useEffect(() => {
    // Ensure window.FB is available before trying to use the SDK
    if ((window as any).FB) {
      (window as any).FB.XFBML.parse();
    } else {
      // Asynchronously load the SDK
      (window as any).fbAsyncInit = function () {
        (window as any).FB.init({
          appId: "your-app-id",
          autoLogAppEvents: true,
          xfbml: true,
          version: "v18.0",
        });
        (window as any).FB.XFBML.parse();
      };

      (function (d, s, id) {
        var js: HTMLScriptElement,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s) as HTMLScriptElement;
        js.id = id;
        js.src = "https://connect.facebook.net/vi_VN/sdk.js";
        if (fjs && fjs.parentNode) {
          fjs.parentNode.insertBefore(js, fjs);
        }
      })(document, "script", "facebook-jssdk");
    }
  }, []);
  const [categories, setCategories] = useAtom(categoriesState);
  return (
    <Box
      style={{
        width: "100%",
        backgroundColor: white[100],
        borderRadius: isMobile ? "0 0 15px 15px" : 0,
      }}
    >
      <Container maxWidth="xl" sx={{ padding: "34px 0 20px 0 !important" }}>
        <img
          src={Logo.src}
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
              {item.data
                ? item.data.map((item, index) => (
                    <Link href={item.link} key={index}>
                      <TextMenu>{item.label}</TextMenu>
                    </Link>
                  ))
                : categories.map((item, index) => (
                    <Link
                      href={`/collections/${generateSlug(item.name, item.id)}`}
                      key={index}
                    >
                      <TextMenu>{item.name}</TextMenu>
                    </Link>
                  ))}
            </Grid>
          ))}
          <Grid item xs={isMobile ? 12 : 3}>
            <TextTitle
              sx={{
                marginBottom: isMobile ? 2 : 5.6,
                marginTop: isMobile ? 3 : 0,
              }}
            >
              Theo dõi chúng tôi
            </TextTitle>

            <div
              style={{ width: "100%" }}
              className="fb-page"
              data-href="https://www.facebook.com/hiita.vn"
              data-tabs="timeline"
              data-width={337}
              data-height={180}
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            >
              <blockquote
                cite="https://www.facebook.com/hiita.vn"
                className="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/hiita.vn">Hiita.vn</a>
              </blockquote>
            </div>
          </Grid>
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
                Mã số thuế: 0110402921 - CÔNG TY TNHH GOLDEN FRUIT VIỆT NAM
              </TextTitle>
              <TextTitle>Địa chỉ: 52 Tân Ấp, Q. Ba Đình, Hà Nội</TextTitle>
              <TextTitle>
                Điện thoại: 0818836383 - 0389606663 - Email: hiita.vn@gmail.com
              </TextTitle>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.5968388002093!2d105.84495187597095!3d21.048811580605523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abb41a570d9f%3A0x18ab156fcca86b51!2zNTIgUC4gVMOibiDhuqRwLCBQaMO6YyB4w6EsIEJhIMSQw6xuaCwgSMOgIE7hu5lpIDExMTE2LCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1705556361059!5m2!1svi!2s"
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
