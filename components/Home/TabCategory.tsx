import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  Box,
  styled,
  Stack,
  useTheme,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { red, white } from "@/styles";
import "swiper/css";
import "swiper/css/navigation";
import TabContainer from "./TabContainer";
import ProductFruit1 from "@/public/images/products/product1.png";
import ProductFruit8 from "@/public/images/products/product8.png";
import ProductFruit5 from "@/public/images/products/product5.png";
import ProductFruit6 from "@/public/images/products/product6.png";
import fruit_demo from "@/public/images/fruit_demo.png";
import { ProductType } from "@/lib/types/product";
import { useQuery } from "react-query";
import { ProductResponse } from "@/lib/types/response";
import { useCategoryProducts } from "@/lib/hooks/useCategoryProducts";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const TabCategory = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [value, setValue] = React.useState(5);
  const { data } = useCategoryProducts(value, 1, 30);

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
        justifyContent={"center"}
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

  const EmptyData = () => {
    return (
      <Box
        sx={{
          height: "225px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography fontSize={18} fontWeight={500} color={white[100]}>
          Không có sản phẩm
        </Typography>
      </Box>
    );
  };

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
              "& .MuiTabScrollButton-root": {
                display: "none",
              },
            }}
          >
            <TabCustom label="Trái Cây nhập khẩu" value={5} />
            <TabCustom label="Nhân sâm" value={1} />
            <TabCustom label="Quà tặng" value={9} />
            <TabCustom label="Danh mục khác" value={10} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={5}>
          {!!data?.data.length ? (
            <TabContainer fruitTab dataProductCategory={data.data} />
          ) : (
            <EmptyData />
          )}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          {!!data?.data.length ? (
            <TabContainer dataProductCategory={data.data} />
          ) : (
            <EmptyData />
          )}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={9}>
          {!!data?.data.length ? (
            <TabContainer dataProductCategory={data.data} />
          ) : (
            <EmptyData />
          )}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={10}>
          {!!data?.data.length ? (
            <TabContainer dataProductCategory={data.data} />
          ) : (
            <EmptyData />
          )}
        </CustomTabPanel>
      </Box>
    </>
  );
};

export default TabCategory;
