import Page from "@/components/Page";
import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import ImageAbout1 from "@/public/images/about/about1.png";
import ImageAbout2 from "@/public/images/about/about2.png";
import IconVery from "@/public/images/icon_very.png";
import { black, gray, red, white } from "@/styles";
import { NextPage } from "next";
const About: NextPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Page title="Giới thiệu" sx={{ mb: 10 }}>
        <Grid container spacing={isMobile ? 2 : 12} alignItems={"center"}>
          <Grid item xs={isMobile ? 12 : 6}>
            <img src={ImageAbout1.src} alt="about" />
          </Grid>
          <Grid item xs={isMobile ? 12 : 6}>
            <Stack direction={"row"} spacing={1}>
              <Typography fontSize={43} fontWeight={700}>
                Về chúng tôi,
              </Typography>
              <Typography fontSize={43} fontWeight={700} color={red[100]}>
                Hiita.vn
              </Typography>
            </Stack>

            <Typography fontSize={16} fontWeight={400} color={gray[400]}>
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </Typography>
            <Stack direction={"column"} my={3.75} spacing={2.25}>
              <Stack direction={"row"} spacing={1}>
                <Box>
                  <img src={IconVery.src} alt="about" />
                </Box>
                <Typography fontSize={18} fontWeight={500}>
                  Trái cây nhập khẩu
                </Typography>
              </Stack>
              <Stack direction={"row"} spacing={1}>
                <Box>
                  <img src={IconVery.src} alt="about" />
                </Box>
                <Typography fontSize={18} fontWeight={500}>
                  Siêu deal 0 đồng
                </Typography>
              </Stack>
              <Stack direction={"row"} spacing={1}>
                <Box>
                  <img src={IconVery.src} alt="about" />
                </Box>
                <Typography fontSize={18} fontWeight={500}>
                  Siêu chợ, Siêu giá tốt
                </Typography>
              </Stack>
            </Stack>
            <Button
              sx={{
                p: "16px 19px",
                borderRadius: "13px",
                background:
                  "var(--Personal-Gradiant-Gradiant-4, linear-gradient(75deg, #F5E9F1 0%, #EBF4F8 52.07%, #F7E3E2 102.02%))",
                textTransform: "none",
              }}
            >
              <Typography fontSize={20} fontWeight={600} color={black}>
                Liên hệ với chúng tôi!
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid container my={isMobile ? 2 : 4.25}>
          <Grid item xs={isMobile ? 12 : 6}>
            <Stack
              direction={"column"}
              sx={{
                backgroundColor: red[100],
                pl: isMobile ? "20px" : "60px",
                pr: "20px",
                pb: isMobile ? "20px" : "unset",
              }}
              height={"100%"}
              justifyContent={"center"}
            >
              <Typography
                fontSize={"36px !important"}
                fontWeight={600}
                sx={{ color: white[100] }}
                lineHeight={3}
              >
                Hiita.vn
              </Typography>
              <Box>
                <Typography
                  fontSize={15}
                  fontWeight={400}
                  sx={{ color: white[100] }}
                >
                  Refinement Chair with Ripped Seat, made of retro Eucalyptus
                  wood, of great resistance, Kiln dried, made with a spike
                  system and painted with P.U. (Polyurethane) With its entire
                  structure painted in wood, it offers a lot of elegance to your
                  environment and when cleaning is very easy, as it is washable
                  and light for movement. sophistication.
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={isMobile ? 12 : 6}>
            <img
              src={ImageAbout2.src}
              alt="about"
              style={{ width: "100%", height: "100%" }}
            />
          </Grid>
        </Grid>
        <Stack
          direction={"column"}
          alignItems={"center"}
          spacing={isMobile ? 2 : 4}
        >
          <Typography
            fontSize={"72px !important"}
            fontWeight={400}
            sx={{ color: red[100] }}
          >
            Hiita.vn
          </Typography>
          <Typography fontSize={12} fontWeight={700}>
            SIÊU CHỢ - SIÊU GIÁ TỐT
          </Typography>
          <Box width={isMobile ? "100%" : "500px"}>
            <Typography fontSize={15} fontWeight={400} textAlign={"center"}>
              There are multiples of high quality pieces, with styles that
              transition from classic to contemporary. An exclusive selection of
              lampshades, vases, murals, pillows, paintings and many gifts to
              compose great projects. In order selection, a mix of basic style,
              stricter customization and more compact dimensions, composing
              sophisticated and exclusive environments.
            </Typography>
          </Box>
        </Stack>
      </Page>
    </>
  );
};

export default About;
