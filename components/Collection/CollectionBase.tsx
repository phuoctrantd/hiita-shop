import React from "react";
import { useParams } from "next/navigation";
import Page from "../Page";
import {
  MENU_DATA,
  formatPrice,
  getInfoCategory,
  generateSlug,
  priceRange,
  getIdFromSlug,
} from "@/lib/contansts";
import {
  Box,
  Button,
  Checkbox,
  Drawer,
  FormControlLabel,
  Grid,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { black, gray, red, white } from "@/styles";
import Image from "next/image";
import Link from "next/link";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { usePagination } from "@/lib/hooks/usePagination";
import { useCategoryProducts } from "@/lib/hooks/useCategoryProducts";
import Ginseng1 from "@/public/images/products/ginseng1.png";
import { getImageUrl } from "@/lib/utils/ultil";
import { useAtom } from "jotai";
import { categoriesState } from "@/lib/hooks/categoriesState";
import ItemProduct from "../Product/ItemProduct";
const CollectionBase = () => {
  const params = useParams();
  const [openFilter, setOpenFilter] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [sort, setSort] = React.useState("latest");

  const handleChangeSort = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };
  const sortParams = React.useMemo(() => {
    let sortField = "created_at";
    let sortType = "desc";

    switch (sort) {
      case "latest":
        sortField = "created_at";
        sortType = "desc";
        break;
      case "oldest":
        sortField = "created_at";
        sortType = "asc";
        break;
      case "price_max":
        sortField = "min_price";
        sortType = "asc";
        break;
      case "price_min":
        sortField = "min_price";
        sortType = "desc";
        break;
    }

    return { field: sortField, type: sortType };
  }, [sort]);

  const MenuItemStyled = styled(MenuItem)(({ theme }) => ({
    fontSize: 14,
    fontWeight: 400,
    color: black,
  }));

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
  const TypoTitleFilterStyled = styled(Typography)(({ theme }) => ({
    fontSize: 18,
    fontWeight: 700,
    color: black,
  }));

  const TypoLinkCategory = styled(Typography)(({ theme }) => ({
    fontSize: 14,
    fontWeight: 500,
    color: black,
    "&:hover": {
      color: red[100],
    },
  }));
  const { page, handleChangePagination } = usePagination();

  const [selectedItems, setSelectedItems] = React.useState<{
    [key: number]: boolean;
  }>({});

  const handleChangePriceRange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const isChecked = event.target.checked;

    setSelectedItems((prevState) => ({
      ...prevState,
      [id]: isChecked,
    }));
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  const priceRangeParams = React.useMemo(() => {
    const selectedPriceRanges = priceRange.filter(
      (range) => selectedItems[range.id]
    );

    if (selectedPriceRanges.length === 0) {
      return {};
    }

    const min = Math.min(...selectedPriceRanges.map((range) => range.min));
    const max = Math.max(...selectedPriceRanges.map((range) => range.max));

    return { min, max };
  }, [selectedItems]);
  const categoryId =
    params && params.slug ? getIdFromSlug(String(params.slug)) : null;
  const { data, isLoading } = useCategoryProducts(
    Number(categoryId),
    page,
    12,
    sortParams.field,
    sortParams.type,
    priceRangeParams.min,
    priceRangeParams.max
  );
  const dataProductFeatured = data?.data;
  const countPage = data?.last_page;
  React.useEffect(() => {
    setSelectedItems({});
  }, [categoryId]);
  const [categories, setCategories] = useAtom(categoriesState);
  const title = categories.find((item) => item.id === Number(categoryId))?.name;
  return (
    <Page title={title}>
      <>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"start"}
        >
          <Stack direction="row" spacing={2} alignItems={"center"} mb={3}>
            <Typography fontSize={14} fontWeight={700}>
              Sắp xếp theo
            </Typography>
            <Select
              value={sort}
              onChange={handleChangeSort}
              sx={{ height: "33px", fontSize: "14px", color: red[100] }}
            >
              <MenuItemStyled value={"latest"}>Mới nhất</MenuItemStyled>
              <MenuItemStyled value={"oldest"}>Cũ nhất</MenuItemStyled>
              <MenuItemStyled value={"price_max"}>
                Giá thấp đến cao
              </MenuItemStyled>
              <MenuItemStyled value={"price_min"}>
                Giá cao đến thấp
              </MenuItemStyled>
            </Select>
          </Stack>
          {isMobile && (
            <>
              <Button
                onClick={() => setOpenFilter(true)}
                sx={{
                  border: `1px solid ${gray[100]}`,
                  borderRadius: "30px",
                  p: "2px 10px",
                }}
              >
                <Typography sx={{ textTransform: "none" }}>Bộ lọc</Typography>
                <FilterAltOutlinedIcon />
              </Button>
            </>
          )}
        </Stack>
        <Grid container spacing={3}>
          <Grid item xs={isMobile ? 12 : 9}>
            <Grid container spacing={isMobile ? 2 : 3}>
              {dataProductFeatured?.length ? (
                dataProductFeatured?.map((item, index) => (
                  <Grid item xs={isMobile ? 6 : 4} key={index}>
                    <ItemProduct item={item} />
                  </Grid>
                ))
              ) : (
                <>
                  <Grid item xs={12}>
                    <Typography
                      fontSize={20}
                      textAlign={"center"}
                      fontWeight={500}
                      color={red[100]}
                    >
                      Không có sản phẩm
                    </Typography>
                  </Grid>
                </>
              )}
            </Grid>
            <Grid container my={6}>
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                {!!dataProductFeatured?.length && (
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
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            {isMobile ? (
              <>
                <Drawer
                  anchor={"right"}
                  open={openFilter}
                  onClose={handleCloseFilter}
                  PaperProps={{
                    sx: { width: "70%", padding: "10px" },
                  }}
                >
                  <Stack
                    direction={"column"}
                    spacing={3}
                    sx={{
                      borderRadius: "6px",
                      border: `1px solid ${gray[200]}`,
                      p: 3,
                    }}
                  >
                    <Box>
                      <TypoTitleFilterStyled>Khoảng Giá</TypoTitleFilterStyled>
                      <Box>
                        {priceRange.map((item, index) => (
                          <FormControlLabel
                            key={index}
                            label={item.label}
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: 14,
                                fontWeight: 500,
                                color: black,
                                "&:hover": {
                                  color: red[100],
                                },
                              },
                            }}
                            control={
                              <Checkbox
                                sx={{ "&.Mui-checked": { color: red[100] } }}
                                checked={selectedItems[item.id] || false}
                                onChange={(event) =>
                                  handleChangePriceRange(event, item.id)
                                }
                              />
                            }
                          />
                        ))}
                      </Box>
                    </Box>
                    <Box>
                      <TypoTitleFilterStyled mb={1}>
                        Danh mục sản phẩm
                      </TypoTitleFilterStyled>
                      <Stack direction={"column"} spacing={0.5}>
                        {categories.map((item, index) => (
                          <React.Fragment key={index}>
                            <>
                              <Link
                                href={`/collections/${generateSlug(
                                  item.name,
                                  item.id
                                )}`}
                                key={index}
                                onClick={handleCloseFilter}
                              >
                                <TypoLinkCategory>{item.name}</TypoLinkCategory>
                              </Link>
                            </>
                          </React.Fragment>
                        ))}
                      </Stack>
                    </Box>
                  </Stack>
                </Drawer>
              </>
            ) : (
              <Stack
                direction={"column"}
                spacing={3}
                sx={{
                  borderRadius: "6px",
                  border: `1px solid ${gray[200]}`,
                  p: "20px 0px 20px 20px",
                }}
              >
                <Box>
                  <TypoTitleFilterStyled>Khoảng Giá</TypoTitleFilterStyled>
                  <Box>
                    {priceRange.map((item, index) => (
                      <FormControlLabel
                        key={index}
                        label={item.label}
                        sx={{
                          "& .MuiFormControlLabel-label": {
                            fontSize: 14,
                            fontWeight: 500,
                            color: black,
                            "&:hover": {
                              color: red[100],
                            },
                          },
                        }}
                        control={
                          <Checkbox
                            sx={{ "&.Mui-checked": { color: red[100] } }}
                            checked={selectedItems[item.id] || false}
                            onChange={(event) =>
                              handleChangePriceRange(event, item.id)
                            }
                          />
                        }
                      />
                    ))}
                  </Box>
                </Box>
                <Box>
                  <TypoTitleFilterStyled mb={1}>
                    Danh mục sản phẩm
                  </TypoTitleFilterStyled>
                  <Stack direction={"column"} spacing={0.5}>
                    {categories.map((item, index) => (
                      <React.Fragment key={index}>
                        <>
                          <Link
                            href={`/collections/${generateSlug(
                              item.name,
                              item.id
                            )}`}
                            key={index}
                          >
                            <TypoLinkCategory>{item.name}</TypoLinkCategory>
                          </Link>
                        </>
                      </React.Fragment>
                    ))}
                  </Stack>
                </Box>
              </Stack>
            )}
          </Grid>
        </Grid>
      </>
    </Page>
  );
};

export default CollectionBase;
