import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box, styled, Stack, useTheme, useMediaQuery } from "@mui/material";
import { red, white } from "@/styles";
import "swiper/css";
import "swiper/css/navigation";
import TabContainer from "./TabContainer";
import ProductFruit1 from "@/public/images/products/product1.png";
import ProductFruit8 from "@/public/images/products/product8.png";
import ProductFruit5 from "@/public/images/products/product5.png";
import ProductFruit6 from "@/public/images/products/product6.png";
import fruit_demo from "@/public/images/fruit_demo.png";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const TabCategory = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
          backgroundColor: red[100],
          borderRadius: "0 0 20px 20px",
          width: "100%",
        }}
        alignItems={"end"}
      >
        {value === index && <>{children}</>}
      </Stack>
    );
  }

  const TabCustom = styled(Tab)(({ theme }) => ({
    color: red[100],
    width: isMobile ? "auto" : "25%",
    fontWeight: 700,
    py: 1.25,
    fontSize: 14,
    "&.Mui-selected": {
      color: white[100],
      backgroundColor: red[100],
      borderRadius: "20px 20px 0 0",
    },
  }));
  const dataProductCategory = [
    {
      id: 1,
      name: "Cam Osaka",
      image: fruit_demo,
      price: "1000000",
    },
    {
      id: 2,
      name: "Chuối Úc ",
      image: ProductFruit5,
      price: "1000000",
    },
    {
      id: 3,
      name: "Dâu tây Kyoto",
      image: ProductFruit1,
      price: "1000000",
    },
    {
      id: 4,
      name: "Nho sữa Hà Lan",
      image: ProductFruit8,
      price: "1000000",
    },
    {
      id: 5,
      name: "Việt Quất Hà Lan",
      image: ProductFruit6,
      price: "1000000",
    },
  ];

  return (
    <>
      <Box sx={{ width: "100%", mb: 3.75 }}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
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
          <TabContainer fruitTab dataProductCategory={dataProductCategory} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <TabContainer dataProductCategory={dataProductCategory} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <TabContainer dataProductCategory={dataProductCategory} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <TabContainer dataProductCategory={dataProductCategory} />
        </CustomTabPanel>
      </Box>
    </>
  );
};

export default TabCategory;
