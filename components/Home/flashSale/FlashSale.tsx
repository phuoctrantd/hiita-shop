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
import { useQuery } from "react-query";
import { FlashSaleType } from "@/lib/types/flashSale";
import { addZero, formatDate, formatTime } from "@/lib/utils/ultil";
interface FlashSaleProps {
  dataFlashSale: FlashSaleType;
}
const FlashSale: React.FC<FlashSaleProps> = ({ dataFlashSale }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const formatFlashSaleTime = (start_at: Date, end_at: Date) => {
    const startDate = new Date(start_at);
    const endDate = new Date(end_at);

    if (
      startDate.getDate() === endDate.getDate() &&
      startDate.getMonth() === endDate.getMonth() &&
      startDate.getFullYear() === endDate.getFullYear()
    ) {
      const startTimeString = formatTime(
        startDate.getHours(),
        startDate.getMinutes()
      );
      const endTimeString = formatTime(
        endDate.getHours(),
        endDate.getMinutes()
      );
      return `Đang diễn ra ${startTimeString} - ${endTimeString}`;
    } else {
      const startDateString = formatDate(startDate);
      const endDateString = formatDate(endDate);
      return `Đang diễn ra ${startDateString} - ${endDateString}`;
    }
  };
  const countDownFs = () => {
    const startDate = new Date(dataFlashSale?.start_at || new Date());
    const endDate = new Date(dataFlashSale?.end_at || new Date());
    const now = new Date();
    const time = endDate.getTime() - now.getTime();
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    return { days, hours, minutes, seconds };
  };
  const [countdown, setCountdown] = React.useState(countDownFs());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(countDownFs());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [dataFlashSale]);
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
          {dataFlashSale &&
            formatFlashSaleTime(dataFlashSale.start_at, dataFlashSale.end_at)}
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
              padding: "5px 5px 5px 7px",
              borderRadius: "4px",
              width: "30px",
            }}
          >
            <Typography fontSize={13} fontWeight={700} color={white[100]}>
              {addZero(countDownFs().days)}
            </Typography>
          </Box>
          <Typography fontSize={14} fontWeight={700} color={white[100]}>
            :
          </Typography>
          <Box
            sx={{
              backgroundColor: black,
              padding: "5px 5px 5px 7px",
              borderRadius: "4px",
              width: "30px",
            }}
          >
            <Typography fontSize={13} fontWeight={700} color={white[100]}>
              {addZero(countDownFs().hours)}
            </Typography>
          </Box>
          <Typography fontSize={14} fontWeight={700} color={white[100]}>
            :
          </Typography>
          <Box
            sx={{
              backgroundColor: black,
              padding: "5px 5px 5px 7px",
              borderRadius: "4px",
              width: "30px",
            }}
          >
            <Typography fontSize={13} fontWeight={700} color={white[100]}>
              {addZero(countDownFs().minutes)}
            </Typography>
          </Box>
          <Typography fontSize={14} fontWeight={700} color={white[100]}>
            :
          </Typography>
          <Box
            sx={{
              backgroundColor: black,
              padding: "5px 5px 5px 7px",
              borderRadius: "4px",
              width: "30px",
            }}
          >
            <Typography fontSize={13} fontWeight={700} color={white[100]}>
              {addZero(countDownFs().seconds)}
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
          {dataFlashSale?.products.map((product) => (
            <SwiperSlide key={product.id} style={{ height: "auto" }}>
              <ItemProductFs product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperStyled>
    </Stack>
  );
};

export default FlashSale;
