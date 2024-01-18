import {
  Breadcrumbs,
  Container,
  SxProps,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Head from "next/head";
import React, { Children } from "react";
import Logo from "@/public/images/logo-social.png";
import { ReactNode } from "react";
import Link from "next/link";
import { black, red } from "@/styles";

interface PageProps {
  children: ReactNode;
  title?: string;
  category?: string;
  sx?: SxProps;
}

const Page: React.FC<PageProps> = ({ children, title, category, sx }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Head>
        <title>
          {`${title} Siêu chợ Hiita - Siêu giá tốt Hiita.vn - Săn deal 0Đ - Miễn phí giao hàng`}
        </title>
        <meta
          name="description"
          content="Siêu chợ Hiita - Siêu giá tốt Hiita.vn - Săn deal 0Đ - Miễn phí giao hàng"
        />
        <meta name="keywords" content="trai cay" />
        <meta property="og:image" content={Logo.src} />
      </Head>
      <Container
        maxWidth={"lg"}
        sx={{ padding: "0 !important", position: "relative", zIndex: 2 }}
      >
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{
            my: 3,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          <Link href="/">
            <TypographyBreadcrumb>Trang chủ</TypographyBreadcrumb>
          </Link>
          {category && (
            <Link href="/">
              <TypographyBreadcrumb>{category}</TypographyBreadcrumb>
            </Link>
          )}
          <TypographyBreadcrumb sx={{ color: red[100] }}>
            {title && title.length > 20 && isMobile
              ? title.slice(0, 20) + "..."
              : title}
          </TypographyBreadcrumb>
        </Breadcrumbs>
      </Container>
      <Container
        maxWidth={"lg"}
        sx={{ padding: "0 !important", position: "relative", zIndex: 1, ...sx }}
      >
        {children}
      </Container>
    </>
  );
};

export default Page;

const TypographyBreadcrumb = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 500,
  color: black,
}));
