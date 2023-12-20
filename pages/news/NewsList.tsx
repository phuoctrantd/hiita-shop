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
import { usePagination } from "@/lib/hooks/pagination";
import ProductRelated from "@/components/Product/ProductRelated";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import { NextPage } from "next";
export const dataNewsList = [
  {
    id: 1,
    title: "Tin tức 1  ",
    description: "Mô tả tin tức 1",
    image: ImageNews1,
    content: "Nội dung tin tức 1",
    created_at: "2021-10-10 10:10:10",
  },
  {
    id: 2,
    title: "Tin tức 2",
    description: "Mô tả tin tức 2",
    image: ImageNews2,
    content: "Nội dung tin tức 2",
    created_at: "2021-10-10 10:10:10",
  },
  {
    id: 3,
    title: "Tin tức 3",
    description: "Mô tả tin tức 3",
    image: ImageNews3,
    content: "Nội dung tin tức 3",
    created_at: "2021-10-10 10:10:10",
  },
  {
    id: 4,
    title: "Tin tức 4",
    description: "Mô tả tin tức 4",
    image: ImageNews4,
    content: "Nội dung tin tức 4",
    created_at: "2021-10-10 10:10:10",
  },
];
const NewsList: NextPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { page, handleChangePagination } = usePagination();
  return (
    <>
      <Page title="Tin tức">
        <>
          <Grid container spacing={2} mb={3}>
            <Grid item xs={isMobile ? 12 : 9}>
              {dataNewsList.map((item, index) => (
                <Link
                  href={`/news/${generateSlug(item.title, item.id)}`}
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
                    <Image
                      src={item.image}
                      alt="news"
                      style={{
                        width: "100%",
                        height: isMobile ? "300px" : "600px",
                      }}
                    />

                    <Box>
                      <Typography fontSize={24} fontWeight={600}>
                        {item.title}
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
                      {item.description}
                    </Typography>
                  </Stack>
                </Link>
              ))}

              <Stack direction={"row"} justifyContent={"center"}>
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
              </Stack>
            </Grid>
            {!isMobile && (
              <Grid item xs={3}>
                <Stack direction={"column"} spacing={4}>
                  <Image
                    src={Banner3}
                    alt="news"
                    style={{ width: "100%", height: "400px" }}
                  />
                  <Image
                    src={Banner3}
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
