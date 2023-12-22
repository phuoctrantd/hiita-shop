import { black, red, white } from "@/styles";
import {
  Box,
  Button,
  Stack,
  Tab,
  Tabs,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface ProductDescriptionProps {
  description: string;
}
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <>
      {value === index && (
        <Box sx={{ p: "23px 20px", border: `1px solid rgba(0, 0, 0, 0.12)` }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </>
  );
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({
  description,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const TabCustom = styled(Tab)(({ theme }) => ({
    color: red[100],
    width: "auto",
    fontWeight: 700,
    py: 1.25,
    fontSize: 14,
    "&.Mui-selected": {
      color: white[100],
      backgroundColor: red[100],
    },
  }));
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <TabCustom label="Mô tả" />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Typography fontSize={14}> {description}</Typography>
        </CustomTabPanel>
      </Box>
    </>
  );
};

export default ProductDescription;
