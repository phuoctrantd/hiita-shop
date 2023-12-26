import {
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import BgFlashSale from "@/public/images/flashSale/bg_flashsale.png";
import TextImageFs from "@/public/images/flashSale/text_flash_sale.png";
import { black, red, white } from "@/styles";
import ItemProductFs from "./ItemProductFs";
import { SwiperStyled } from "../TabContainer";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
const FlashSale = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack
      my={3.75}
      direction="column"
      py={4.5}
      px={isMobile ? 2 : 8}
      sx={{
        backgroundImage: `url(${BgFlashSale.src})`,
        backgroundSize: "cover",
      }}
      alignItems={"center"}
    >
      <Box>
        <Typography
          fontSize={58}
          fontWeight={800}
          color={red[100]}
          sx={{
            fontStyle: "italic",
            textShadow:
              "2px 2px 0 white, -2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white",
            textTransform: "uppercase",
          }}
        >
          Flash sale
        </Typography>
      </Box>
      <Box
        sx={{
          padding: "10px 25px",
          backgroundColor: "#FFDF31",
          borderRadius: "8px",
        }}
      >
        <Typography fontSize={18} fontWeight={500} sx={{ color: red[100] }}>
          Đang diễn ra 08:00 - 23:59
        </Typography>
      </Box>
      <Stack mt={1} mb={4.75} direction={"row"} alignItems={"center"}>
        <Typography fontSize={13} fontWeight={700} color={white[100]}>
          Kết thúc trong
        </Typography>
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={0.5}
          sx={{ marginLeft: "10px" }}
        >
          <Box
            sx={{
              backgroundColor: black,
              padding: "5px",
              borderRadius: "4px",
            }}
          >
            <Typography fontSize={13} fontWeight={700} color={white[100]}>
              00
            </Typography>
          </Box>
          <Typography fontSize={14} fontWeight={700} color={white[100]}>
            :
          </Typography>
          <Box
            sx={{
              backgroundColor: black,
              padding: "5px",
              borderRadius: "4px",
            }}
          >
            <Typography fontSize={13} fontWeight={700} color={white[100]}>
              00
            </Typography>
          </Box>
          <Typography fontSize={14} fontWeight={700} color={white[100]}>
            :
          </Typography>
          <Box
            sx={{
              backgroundColor: black,
              padding: "5px",
              borderRadius: "4px",
            }}
          >
            <Typography fontSize={13} fontWeight={700} color={white[100]}>
              00
            </Typography>
          </Box>
        </Stack>
      </Stack>

      <SwiperStyled style={{ width: "100%" }}>
        <Swiper
          navigation={true}
          slidesPerView={isMobile ? 2 : 5}
          modules={[Navigation, Autoplay]}
          spaceBetween={15}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
        >
          <SwiperSlide style={{ height: "auto" }}>
            <ItemProductFs name="Quýt Úc 2PH" />
          </SwiperSlide>
          <SwiperSlide>
            <ItemProductFs name="Nho đen Mỹ Autumn Royal" />
          </SwiperSlide>
          <SwiperSlide>
            <ItemProductFs name="Dâu tây Hàn Quốc / Hana" />
          </SwiperSlide>
          <SwiperSlide>
            <ItemProductFs name="Nho Autumn Crisp Peru" />
          </SwiperSlide>
          <SwiperSlide>
            <ItemProductFs name="Nho sữa Shine Muscat" />
          </SwiperSlide>
          <SwiperSlide>
            <ItemProductFs name="Dâu tây Hàn Quốc / Hana" />
          </SwiperSlide>
          <SwiperSlide>
            <ItemProductFs name="Dâu tây Hàn Quốc / Hana" />
          </SwiperSlide>
          <SwiperSlide>
            <ItemProductFs name="Dâu tây Hàn Quốc / Hana" />
          </SwiperSlide>
        </Swiper>
      </SwiperStyled>
    </Stack>
  );
};

export default FlashSale;
