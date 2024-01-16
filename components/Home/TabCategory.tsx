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
import { useAtom } from "jotai";
import { categoriesState } from "@/lib/hooks/categoriesState";
interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  categoryId: number;
}
const TabCategory = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [value, setValue] = React.useState(0);
  const [categories, setCategories] = useAtom(categoriesState);
  React.useEffect(() => {
    if (categories && categories.length > 0) {
      setValue(categories[0].id);
    }
  }, [categories]);
  const { data } = useCategoryProducts(value, 1, 30);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    const category = categories.find((c) => c.id === newValue);
    if (category) {
      setValue(category.id);
    }
  };

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, categoryId, ...other } = props;

    return (
      <Stack
        role="tabpanel"
        hidden={value !== categoryId}
        id={`tabpanel-${categoryId}`}
        aria-labelledby={`tab-${categoryId}`}
        {...other}
        display={value === categoryId ? "flex" : "none"}
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
        {value === categoryId && <>{children}</>}
      </Stack>
    );
  }
  const TabCustom = styled(Tab)(({ theme }) => ({
    color: red[100],
    width: isMobile ? "auto" : `${100 / categories.length}%`,
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
            {categories?.map((category) => (
              <TabCustom
                key={category.id}
                label={category.name}
                value={category.id}
              />
            ))}
          </Tabs>
        </Box>
        {categories?.map((category) => (
          <CustomTabPanel
            value={value}
            categoryId={category.id}
            key={category.id}
          >
            {value === category.id && !!data?.data.length ? (
              <TabContainer
                fruitTab={category.id === categories[0].id}
                dataProductCategory={data.data}
              />
            ) : (
              <EmptyData />
            )}
          </CustomTabPanel>
        ))}
      </Box>
    </>
  );
};

export default TabCategory;
