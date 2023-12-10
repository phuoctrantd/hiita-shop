import React from "react";
import {
  Stack,
  Divider,
  Box,
  styled,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { red, white } from "@/styles";
import Link from "next/link";
interface TitleProps {
  title: string;
  link?: string;
}

const Title: React.FC<TitleProps> = ({ title, link }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Box mb={2.5}>
        <Stack
          direction="row"
          spacing={14}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box
            sx={{
              p: 1.6,
              borderRadius: "9px 9px 0px 0px",
              backgroundColor: red[100],
              color: white[100],
              fontSize: 14,
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            {title}
          </Box>
          {link && !isMobile && (
            <Link href={link}>
              <TypographyLink> Xem thêm</TypographyLink>
            </Link>
          )}
        </Stack>
        <Divider sx={{ backgroundColor: red[100], height: 3 }} />
      </Box>
    </>
  );
};

export default Title;
const TypographyLink = styled(Typography)(({ theme }) => ({
  color: red[100],
  fontSize: 14,
  fontWeight: 700,
  "&:hover": {
    textShadow: "0px 0px 5px #E51E41",
  },
}));
