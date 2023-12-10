import React from "react";
import ImageNews1 from "@/public/images/news/news1.png";
import Page from "@/components/Page";
import Image from "next/image";
import {
  Box,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import { gray, red } from "@/styles";
import NewsRelated from "@/components/News/NewsRelated";
const News = () => {
  const dataNews = {
    id: 1,
    title: "Tin tức 1 ",
    description: "Mô tả tin tức 1",
    image: ImageNews1,
    content: "Nội dung tin tức 1",
    created_at: "2021-10-10 10:10:10",
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Page title={dataNews.title} category="Tin tức">
        <Grid container mb={10} spacing={isMobile ? 5 : 2}>
          <Grid item xs={isMobile ? 12 : 9}>
            <Stack direction={"column"} spacing={2}>
              <Image
                src={dataNews.image}
                alt={dataNews.title}
                style={{ width: "100%", height: isMobile ? "300px" : "500px" }}
              />
              <Box>
                <Typography fontSize={24} fontWeight={700}>
                  {dataNews.title}
                </Typography>
                <Stack direction={"row"} spacing={1} alignItems={"center"}>
                  <DateRangeOutlinedIcon
                    fontSize={"small"}
                    sx={{ color: red[100] }}
                  />
                  <Typography fontSize={14} fontWeight={400}>
                    {new Date(dataNews.created_at).toLocaleDateString()}
                  </Typography>
                </Stack>
              </Box>
              <Divider />
              <Typography fontSize={16} fontWeight={400} color={gray[300]}>
                {dataNews.description}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={isMobile ? 12 : 3}>
            <NewsRelated />
          </Grid>
        </Grid>
      </Page>
    </>
  );
};

export default News;
