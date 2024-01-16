import Page from "@/components/Page";
import {
  Box,
  Divider,
  Grid,
  Pagination,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import ImageNews1 from "@/public/images/news/news1.png";
import ImageNews2 from "@/public/images/news/news2.png";
import ImageNews3 from "@/public/images/news/news3.png";
import ImageNews4 from "@/public/images/news/news4.png";
import Banner3 from "@/public/images/banners/banner3.png";
import Image from "next/image";
import Link from "next/link";
import { generateSlug } from "@/lib/contansts";
import { gray, red, white } from "@/styles";
import { usePagination } from "@/lib/hooks/usePagination";
import ProductRelated from "@/components/Product/ProductRelated";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import { NextPage } from "next";
import { useNews } from "@/lib/hooks/useNews";
import { getImageUrl } from "@/lib/utils/ultil";

const NewsList: NextPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { page, handleChangePagination } = usePagination();
  const { data } = useNews(page);
  const countPage = data?.last_page;
  return (
    <>
      <Page title="Tin tức">
        <>
          <Grid container spacing={2} mb={3}>
            {data?.data && data.data.length > 0 ? (
              <Grid item xs={isMobile ? 12 : 9}>
                {data.data.map((item, index) => (
                  <Link
                    href={`/news/${generateSlug(item.name, item.id)}`}
                    key={index}
                  >
                    <Stack
                      direction="column"
                      spacing={1}
                      mb={6}
                      sx={{
                        "&:hover": {
                          transform: "scale(1.02)",
                        },
                      }}
                    >
                      <img
                        src={getImageUrl(item.image_url)}
                        alt="news"
                        style={{
                          width: "100%",
                          height: isMobile ? "300px" : "600px",
                        }}
                      />

                      <Box>
                        <Typography fontSize={24} fontWeight={600}>
                          {item.name}
                        </Typography>
                        <Stack
                          direction={"row"}
                          spacing={1}
                          alignItems={"center"}
                        >
                          <DateRangeOutlinedIcon
                            fontSize={"small"}
                            sx={{ color: red[100] }}
                          />
                          <Typography fontSize={14} fontWeight={400}>
                            {new Date(item.created_at).toLocaleDateString()}
                          </Typography>
                        </Stack>
                      </Box>
                      <Divider />
                      <Typography
                        fontSize={16}
                        fontWeight={400}
                        color={gray[300]}
                      >
                        {item.content &&
                          new DOMParser()
                            .parseFromString(item.content, "text/html")
                            .body.innerText.slice(0, 200) + "..."}
                      </Typography>
                    </Stack>
                  </Link>
                ))}

                <Stack direction={"row"} justifyContent={"center"}>
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
              </Grid>
            ) : (
              <Grid item xs={isMobile ? 12 : 9}>
                <Typography
                  fontSize={20}
                  textAlign={"center"}
                  fontWeight={500}
                  color={red[100]}
                >
                  Không có bài viết
                </Typography>
              </Grid>
            )}

            {!isMobile && (
              <Grid item xs={3}>
                <Stack direction={"column"} spacing={4}>
                  <img
                    src={Banner3.src}
                    alt="news"
                    style={{ width: "100%", height: "400px" }}
                  />
                  <img
                    src={Banner3.src}
                    alt="news"
                    style={{ width: "100%", height: "400px" }}
                  />
                </Stack>
              </Grid>
            )}
          </Grid>
        </>
      </Page>
    </>
  );
};

export default NewsList;
