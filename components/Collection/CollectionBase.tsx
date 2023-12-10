import React from "react";
import { useParams } from "next/navigation";
import Page from "../Page";
import {
  MENU_DATA,
  formatPrice,
  generateNameFromSlug,
  generateSlug,
  priceRange,
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
import { dataProductFeatured } from "../Home/GinsengCategory";
import Image from "next/image";
import Link from "next/link";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { usePagination } from "@/lib/hooks/pagination";
const CollectionBase = () => {
  const params = useParams();
  const [sort, setSort] = React.useState("latest");
  const [openFilter, setOpenFilter] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };
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
    marginTop: 10,
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
    setSelectedItems((prevState) => ({
      ...prevState,
      [id]: event.target.checked,
    }));
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  return (
    <Page title={params ? generateNameFromSlug(params.slug as string) : ""}>
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
            onChange={handleChange}
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
            {dataProductFeatured.map((item, index) => (
              <Grid
                item
                xs={isMobile ? 6 : 4}
                key={index}
                sx={{
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
              >
                <Link href={`/product/${generateSlug(item.name, item.id)}`}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: isMobile ? "200px" : "270px",
                    }}
                  />
                  <TypoTitleProdStyled>{item.name}</TypoTitleProdStyled>
                  <TypoPriceStyled>{formatPrice(item.price)}</TypoPriceStyled>
                </Link>
              </Grid>
            ))}
          </Grid>
          <Grid container my={6}>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Pagination
                count={3}
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
                      {MENU_DATA.map((item, index) => (
                        <React.Fragment key={index}>
                          {item.subMenu && (
                            <>
                              <Link
                                href={item.link}
                                key={index}
                                onClick={handleCloseFilter}
                              >
                                <TypoLinkCategory>
                                  {item.label}
                                </TypoLinkCategory>
                              </Link>
                              {item.subMenu.map((itemSubmenu, indexSubmenu) => (
                                <Link
                                  href={itemSubmenu.link}
                                  key={indexSubmenu}
                                  onClick={handleCloseFilter}
                                >
                                  <TypoLinkCategory>
                                    {itemSubmenu.label}
                                  </TypoLinkCategory>
                                </Link>
                              ))}
                            </>
                          )}
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
                  {MENU_DATA.map((item, index) => (
                    <React.Fragment key={index}>
                      {item.subMenu && (
                        <>
                          <Link href={item.link} key={index}>
                            <TypoLinkCategory>{item.label}</TypoLinkCategory>
                          </Link>
                          {item.subMenu.map((itemSubmenu, indexSubmenu) => (
                            <Link href={itemSubmenu.link} key={indexSubmenu}>
                              <TypoLinkCategory>
                                {itemSubmenu.label}
                              </TypoLinkCategory>
                            </Link>
                          ))}
                        </>
                      )}
                    </React.Fragment>
                  ))}
                </Stack>
              </Box>
            </Stack>
          )}
        </Grid>
      </Grid>
    </Page>
  );
};

export default CollectionBase;
