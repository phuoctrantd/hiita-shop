import { black, red, white } from "@/styles";
import {
  Box,
  LinearProgress,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Product1Fs from "@/public/images/flashSale/product1.png";
import FireImage from "@/public/images/flashSale/fire.png";
interface ItemProductFsProps {
  name: string;
}
const ItemProductFs: React.FC<ItemProductFsProps> = ({ name }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Stack
        sx={{
          backgroundColor: white[100],
          borderRadius: "8px",
          height: "100%",
          width: "100%",
        }}
        textAlign={"center"}
        spacing={0.5}
      >
        <Box>
          <img
            src={Product1Fs.src}
            alt=""
            width={"100%"}
            height={isMobile ? "200px" : "220px"}
          />
        </Box>
        <Box px={isMobile ? 2 : 4} sx={{ flexGrow: 1 }}>
          <Typography fontSize={14} fontWeight={700}>
            {name}
          </Typography>
        </Box>
        <Stack
          spacing={0.5}
          sx={{
            padding: "6px 25px 14px 25px",
          }}
        >
          <Box>
            <Typography
              fontSize={12}
              fontWeight={700}
              sx={{
                textDecoration: "line-through",
                textDecorationColor: black,
              }}
            >
              100.000đ
            </Typography>
          </Box>
          <Box>
            <Typography fontSize={14} fontWeight={800} color={red[100]}>
              90.000đ
            </Typography>
          </Box>
          <Box position={"relative"}>
            <img
              src={FireImage.src}
              alt=""
              width={48}
              height={50}
              style={{
                position: "absolute",
                zIndex: 1,
                bottom: "-8px",
                left: "-13px",
              }}
            />
            <Typography
              sx={{
                position: "absolute",
                zIndex: 1,
                left: "30%",
                top: "3px",
              }}
              fontSize={"10px !important"}
              fontWeight={600}
            >
              Còn 10 / 15 suất
            </Typography>
            <LinearProgress
              sx={{
                height: "22px",
                borderRadius: "10px",
                backgroundColor: "#D9D9D9",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#FFDF31",
                  borderRadius: "10px",
                },
              }}
              variant="determinate"
              value={80}
            />
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default ItemProductFs;
