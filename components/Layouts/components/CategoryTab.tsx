import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  Box,
  Typography,
  styled,
  Stack,
  Button,
  ButtonProps,
  Grid,
} from "@mui/material";
import { black, red, white } from "@/styles";
import Image from "next/image";
import fruit_category from "@/public/images/fruit_category.svg";
import fruit_demo from "@/public/images/fruit_demo.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import FruitTab from "./FruitTab";
import GinsengTab from "./GinsengTab";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const CategoryTab = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <Stack
        display={value === index ? "flex" : "none"}
        direction="row"
        sx={{
          py: 1.6,
          backgroundColor: red,
          borderRadius: "0 0 20px 20px",
          width: "100%",
        }}
        alignItems={"end"}
      >
        {value === index && <>{children}</>}
      </Stack>
    );
  }

  return (
    <>
      <Box sx={{ width: "100%", mb: 3.75 }}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            sx={{
              ".MuiTabs-indicator": {
                backgroundColor: "transparent",
              },
            }}
          >
            <TabCustom label="Trái Cây nhập khẩu" />
            <TabCustom label="Nhân sâm" />
            <TabCustom label="Quà tặng" />
            <TabCustom label="Danh mục khác" />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <FruitTab />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <GinsengTab />
        </CustomTabPanel>
      </Box>
    </>
  );
};

export default CategoryTab;
const TabCustom = styled(Tab)(({ theme }) => ({
  color: red,
  width: "25%",
  fontWeight: 700,
  py: 1.25,
  fontSize: 14,
  "&.Mui-selected": {
    color: white[100],
    backgroundColor: red,
    borderRadius: "20px 20px 0 0",
  },
}));
