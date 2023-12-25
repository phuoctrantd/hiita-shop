import React from "react";
import Page from "../Page";
import {
  Box,
  Divider,
  Grid,
  Pagination,
  Stack,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
  useThemeProps,
} from "@mui/material";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { ProductType } from "@/lib/types/product";
import { black, gray, red, white } from "@/styles";
import { ProductResponse } from "@/lib/types/response";
import Link from "next/link";
import { formatPrice, generateSlug } from "@/lib/contansts";
import { getImageUrl } from "@/lib/utils/ultil";
import { usePagination } from "@/lib/hooks/usePagination";

const SearchContainer = () => {
  const { page, handleChangePagination } = usePagination();
  const router = useRouter();
  const keyword = router.query.keyword;
  const { data } = useQuery<ProductResponse>(
    `/products?search=${keyword}&page=${page}&per_page=12`,
    {
      keepPreviousData: true,
      enabled: !!keyword,
    }
  );
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const TypoTitleProdStyled = styled(Typography)(({ theme }) => ({
    fontSize: 14,
    fontWeight: 700,
    color: black,
    marginBottom: 10,
    "&:hover": {
      color: red[100],
    },
  }));
  const TypoPriceStyled = styled(Typography)(({ theme }) => ({
    fontSize: 14,
    fontWeight: 700,
    color: red[100],
    "&:hover": {
      textShadow: `0px 0px 5px ${red[100]}`,
    },
  }));
  const countPage = data?.last_page;
  return (
    <Page title={"Tìm kiếm"}>
      {data && data?.data?.length > 0 ? (
        <>
          <Stack
            direction="column"
            spacing={1}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography
              fontSize={20}
              fontWeight={700}
              color={red[100]}
              sx={{ textTransform: "uppercase" }}
            >
              Tìm kiếm
            </Typography>
            <Typography fontSize={16}>
              Có <strong>{data && data?.data.length} sản phẩm</strong> cho tìm
              kiếm
            </Typography>
            <Divider sx={{ width: "200px" }} />
          </Stack>
          <Typography fontSize={16} fontWeight={500} my={2}>
            Kết quả tìm kiếm cho từ khóa:
            <strong style={{ color: red[100] }}>{keyword}</strong>
          </Typography>
          <Grid container spacing={2}>
            {data?.data?.map((item: ProductType, index: number) => (
              <Grid item xs={isMobile ? 6 : 3} key={index}>
                <Link href={`/product/${generateSlug(item.name, item.id)}`}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "100%",
                      cursor: "pointer",
                      transition: "transform 0.3s",
                      "&:hover": {
                        transform: "scale(1.02)",
                      },
                    }}
                  >
                    <img
                      src={getImageUrl(item.product_variants[0].image_url)}
                      alt={item.name}
                      style={{
                        width: "100%",
                        height: isMobile ? "200px" : "270px",
                      }}
                    />
                    <Box
                      px={2}
                      mt={1.8}
                      textAlign={"center"}
                      sx={{ flexGrow: 1 }}
                    >
                      <TypoTitleProdStyled>{item.name}</TypoTitleProdStyled>
                    </Box>
                    <Box textAlign={"center"}>
                      <Typography
                        fontSize={12}
                        fontWeight={700}
                        color={red[200]}
                        sx={{
                          textDecoration: "line-through",
                          textDecorationColor: black,
                        }}
                      >
                        {item.discount &&
                          formatPrice(item.product_variants[0].price)}
                      </Typography>
                      <TypoPriceStyled>
                        {formatPrice(
                          item.product_variants[0].promotional_price
                        )}
                      </TypoPriceStyled>
                    </Box>
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>
          <Stack direction={"row"} justifyContent={"center"} my={5}>
            <Pagination
              count={countPage}
              page={page}
              onChange={handleChangePagination}
              variant="outlined"
              shape="rounded"
              sx={{
                "& .MuiPaginationItem-root.Mui-selected": {
                  color: white[100],
                  backgroundColor: red[100],
                  borderColor: "transparent",
                },
                "& .MuiPaginationItem-root": {
                  color: red[100],
                  borderColor: gray[100],
                  width: "35px",
                  height: "40px",
                },
                "& .MuiPaginationItem-root.Mui-selected:hover": {
                  color: white[100],
                  backgroundColor: red[100],
                  borderColor: "transparent",
                },
              }}
            />
          </Stack>
        </>
      ) : (
        <Typography
          fontSize={20}
          textAlign={"center"}
          fontWeight={500}
          color={red[100]}
        >
          Không có sản phẩm nào cho tìm kiếm
        </Typography>
      )}
    </Page>
  );
};

export default SearchContainer;
