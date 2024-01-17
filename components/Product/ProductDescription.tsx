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

const ProductDescription: React.FC<ProductDescriptionProps> = ({
  description,
}) => {
  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <>
        {value === index && (
          <Box
            sx={{
              p: "23px 20px",
              border: `1px solid rgba(0, 0, 0, 0.12)`,
              overflow: "auto",
              maxHeight: isMobile ? "400px" : "700px",
            }}
          >
            <Typography fontSize={14}>{children}</Typography>
          </Box>
        )}
      </>
    );
  }
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const TabCustom = styled(Tab)(({ theme }) => ({
    color: red[100],
    width: "auto",
    fontWeight: isMobile ? 500 : 700,
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
          <Box
            sx={{
              "&.MuiBox-root img": {
                width: isMobile ? "100%" : "50%",
                height: isMobile ? "auto" : "500px",
              },
            }}
            dangerouslySetInnerHTML={{ __html: description }}
          ></Box>
        </CustomTabPanel>
      </Box>
    </>
  );
};

export default ProductDescription;
