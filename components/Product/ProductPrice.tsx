import { formatPrice } from "@/lib/contansts";
import { Product } from "@/lib/types/product";
import { black, blue, gray, orange, red, white, yellow } from "@/styles";
import {
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

interface ProductPriceProps {
  dataProduct: Product;
}

const ProductPrice: React.FC<ProductPriceProps> = ({ dataProduct }) => {
  const [selectedBoxSize, setSelectedBoxSize] = React.useState(0);
  const [selectedSize, setSelectedSize] = React.useState(0);
  const selectedBoxSizeData =
    dataProduct.variants && dataProduct.variants[selectedBoxSize];
  const selectedSizeData = selectedBoxSizeData?.sizes[selectedSize];

  const savePrice = () => {
    const price = Number(selectedSizeData?.price);
    const priceSale = Number(selectedSizeData?.priceSale);
    const savePrice = price - priceSale;
    return formatPrice(String(savePrice));
  };

  const handleBoxSizeChange = (index: number) => {
    setSelectedBoxSize(index);
    setSelectedSize(0);
  };

  const handleSizeChange = (index: number) => {
    setSelectedSize(index);
  };

  const [quantity, setQuantity] = React.useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Typography variant="h4" sx={{ fontWeight: 600 }} mb={3}>
        {dataProduct.name}
      </Typography>

      <Grid container mb={2}>
        <Grid container spacing={isMobile ? 1 : 2} mb={isMobile ? 1 : 2}>
          <Grid
            item
            xs={6}
            sx={{ display: "flex", alignItems: "center", gap: 0.2 }}
          >
            <TypographyDes>Thương hiệu </TypographyDes>
            <span>:</span>
            <TypographyDes sx={{ fontWeight: 700, fontSize: 16 }}>
              Hiita Shop
            </TypographyDes>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ display: "flex", alignItems: "center", gap: 0.2 }}
          >
            <TypographyDes>Mã sản phẩm </TypographyDes>

            <span>:</span>
            <TypographyDes sx={{ fontWeight: 700, fontSize: 16 }}>
              Xyzab182
            </TypographyDes>
          </Grid>
        </Grid>
        <Grid container spacing={isMobile ? 1 : 2} mb={isMobile ? 1 : 2}>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.2,
              order: isMobile ? 2 : 1,
            }}
          >
            <Typography fontSize={20} fontWeight={700} color={red[100]}>
              {selectedSizeData && formatPrice(selectedSizeData.priceSale)}
            </Typography>
          </Grid>
          <Grid
            item
            xs={isMobile ? 12 : 6}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.2,
              order: isMobile ? 2 : 1,
            }}
          >
            <TypographyDes>Giá niêm yết </TypographyDes>
            <span>:</span>
            <TypographyDes
              sx={{
                fontWeight: 600,
                fontSize: 14,
                textDecoration: "line-through",
                textDecorationColor: black,
              }}
            >
              {selectedSizeData && formatPrice(selectedSizeData.price)}
            </TypographyDes>
          </Grid>
        </Grid>
        <Grid container spacing={isMobile ? 1 : 2} mb={isMobile ? 1 : 2}>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", alignItems: "center", gap: 0.2 }}
          >
            <TypographyDes>Trạng thái </TypographyDes>
            <span>:</span>
            <TypographyDes>Còn hàng</TypographyDes>
          </Grid>
        </Grid>
        <Grid container spacing={isMobile ? 1 : 2} mb={isMobile ? 1 : 2}>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
          >
            <TypographyDes
              sx={{
                fontWeight: 500,
              }}
            >
              Tiết kiệm
            </TypographyDes>
            <TypographyDes
              sx={{
                fontWeight: 700,
              }}
            >
              {savePrice()}
            </TypographyDes>
            <TypographyDes
              sx={{
                fontWeight: 500,
              }}
            >
              so với giá thị trường
            </TypographyDes>
          </Grid>
        </Grid>
        {dataProduct.variants && dataProduct.variants.length > 0 && (
          <>
            <Grid container spacing={isMobile ? 1 : 2} mb={isMobile ? 1 : 2}>
              <Grid
                item
                xs={isMobile ? 3 : 2}
                display={"flex"}
                alignItems={"center"}
              >
                <TypographyDes>Size hộp:</TypographyDes>
              </Grid>
              <Grid
                item
                xs={isMobile ? 9 : 10}
                display={"flex"}
                sx={{ flexWrap: "wrap", gap: 0.5 }}
              >
                {dataProduct.variants.map((variant, index) => (
                  <Box
                    key={index}
                    onClick={() => handleBoxSizeChange(index)}
                    sx={{
                      border: `1px solid ${red[100]}`,
                      cursor: "pointer",
                      borderRadius: "5px",
                      backgroundColor:
                        index === selectedBoxSize ? red[100] : white[100],
                    }}
                    p={1}
                  >
                    <TypographyDes
                      sx={{
                        color:
                          index === selectedBoxSize ? white[100] : red[100],
                      }}
                    >
                      {variant.box_size}
                    </TypographyDes>
                  </Box>
                ))}
              </Grid>

              <Grid
                item
                xs={isMobile ? 3 : 2}
                display={"flex"}
                alignItems={"center"}
              >
                <TypographyDes>Kích thước:</TypographyDes>
              </Grid>
              <Grid
                item
                xs={isMobile ? 9 : 10}
                display={"flex"}
                sx={{ flexWrap: "wrap", gap: 0.5 }}
              >
                {selectedBoxSizeData &&
                  selectedBoxSizeData.sizes.map((size, index) => (
                    <Box
                      key={index}
                      onClick={() => handleSizeChange(index)}
                      sx={{
                        border: `1px solid ${red[100]}`,
                        cursor: "pointer",
                        borderRadius: "5px",

                        backgroundColor:
                          index === selectedSize ? red[100] : white[100],
                      }}
                      p={1}
                    >
                      <TypographyDes
                        sx={{
                          color: index === selectedSize ? white[100] : red[100],
                        }}
                      >
                        {size.name}
                      </TypographyDes>
                    </Box>
                  ))}
              </Grid>
            </Grid>
          </>
        )}
        <Grid item xs={isMobile ? 3 : 2} display={"flex"} alignItems={"center"}>
          <TypographyDes>Số lượng :</TypographyDes>
        </Grid>
        <Grid
          item
          xs={isMobile ? 9 : 10}
          display={"flex"}
          alignItems={"center"}
        >
          <Stack direction={"row"}>
            <BoxStyled onClick={handleDecrement}>-</BoxStyled>
            <TextField
              sx={{
                "& .MuiOutlinedInput-input": {
                  padding: "5px",
                  width: "40px",
                  textAlign: "center",
                  fontSize: "14px",
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "0",
                },
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    border: `1px solid ${gray}`,
                  },
                },
                borderRadius: "0",
              }}
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            />
            <BoxStyled onClick={handleIncrement}>+</BoxStyled>
          </Stack>
        </Grid>
      </Grid>

      <Box>
        <Stack direction={isMobile ? "column" : "row"} mb={1} spacing={0.8}>
          <ButtonStyled
            sx={{
              backgroundColor: orange,
              "&:hover": {
                backgroundColor: orange,
                boxShadow: `0 0 10px ${orange}`,
              },
            }}
          >
            Thêm vào giỏ hàng
          </ButtonStyled>
          <ButtonStyled
            sx={{
              backgroundColor: blue,
              "&:hover": {
                backgroundColor: blue,
                boxShadow: `0 0 10px ${blue}`,
              },
            }}
          >
            Mua ngay
          </ButtonStyled>
        </Stack>
        <ButtonStyled
          sx={{
            width: isMobile ? "100%" : "auto",
            backgroundColor: yellow,
            "&:hover": {
              backgroundColor: yellow,
              boxShadow: `0 0 10px ${yellow}`,
            },
          }}
        >
          Gọi 19006633 để được tư vấn mua hàng
        </ButtonStyled>
      </Box>
    </>
  );
};

export default ProductPrice;

const TypographyDes = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 400,
  color: black,
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 400,
  color: white[100],
  padding: "10px",
  borderRadius: "10px",
}));

export const BoxStyled = styled(Stack)(({ theme }) => ({
  cursor: "pointer",
  color: "#A4AAAF",
  border: `1px solid ${gray}`,
  padding: "0px 13px",

  justifyContent: "center",
}));
