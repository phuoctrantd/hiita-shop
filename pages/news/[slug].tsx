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
import { NextPage } from "next";
import { useParams, useRouter } from "next/navigation";
import { useQuery } from "react-query";
import { NewsType } from "@/lib/types/news";
import { getIdFromSlug } from "@/lib/contansts";
import { getImageUrl } from "@/lib/utils/ultil";
const News: NextPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const params = useParams();
  const slug = params?.slug;
  const { data } = useQuery<NewsType>(`posts/${getIdFromSlug(String(slug))}`, {
    enabled: !!slug,
  });
  return (
    <>
      {data && (
        <Page title={data.name} category="Tin tức">
          <Grid container mb={10} spacing={isMobile ? 5 : 2}>
            <Grid item xs={isMobile ? 12 : 9}>
              <Stack direction={"column"} spacing={2}>
                <img
                  src={getImageUrl(data.image_url)}
                  alt={data.name}
                  style={{
                    width: "100%",
                    height: isMobile ? "300px" : "500px",
                    objectFit: "cover",
                  }}
                />
                <Box>
                  <Typography fontSize={24} fontWeight={700}>
                    {data.name}
                  </Typography>
                  <Stack direction={"row"} spacing={1} alignItems={"center"}>
                    <DateRangeOutlinedIcon
                      fontSize={"small"}
                      sx={{ color: red[100] }}
                    />
                    <Typography fontSize={14} fontWeight={400}>
                      {new Date(data.created_at).toLocaleDateString()}
                    </Typography>
                  </Stack>
                </Box>
                <Divider />
                <Box
                  sx={{
                    "&.MuiBox-root img": {
                      width: isMobile ? "100%" : "50%",
                      height: isMobile ? "auto" : "500px",
                    },
                  }}
                  dangerouslySetInnerHTML={{ __html: data.content }}
                ></Box>
              </Stack>
            </Grid>
            <Grid item xs={isMobile ? 12 : 3}>
              <NewsRelated />
            </Grid>
          </Grid>
        </Page>
      )}
    </>
  );
};

export default News;
