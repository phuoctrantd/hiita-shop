import { Breadcrumbs, Container, Typography, styled } from "@mui/material";
import Head from "next/head";
import React, { Children } from "react";
import Logo from "@/public/images/hiita-logo.png";
import { ReactNode } from "react";
import Link from "next/link";
import { black, red } from "@/styles";

interface PageProps {
  children: ReactNode;
  title?: string;
  category?: string;
}

const Page: React.FC<PageProps> = ({ children, title, category }) => {
  return (
    <>
      <Head>
        <title>
          {title
            ? title
            : "Hiita - Nhân sâm thượng hạng và Trái cây nhập khẩu giá tốt nhất"}
        </title>
        <meta
          name="description"
          content="Hiita - Nhân sâm thượng hạng và Trái cây nhập khẩu giá tốt nhất"
        />
        <meta name="keywords" content="nhan sam, trai cay" />
        <meta property="og:image" content={Logo.src} />
      </Head>
      <Container maxWidth={"lg"} sx={{ padding: "0 !important" }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ my: 3 }}>
          <Link href="/">
            <TypographyBreadcrumb>Trang chủ</TypographyBreadcrumb>
          </Link>
          {category && (
            <Link href="/">
              <TypographyBreadcrumb>{category}</TypographyBreadcrumb>
            </Link>
          )}
          <TypographyBreadcrumb sx={{ color: red[100] }}>
            {title}
          </TypographyBreadcrumb>
        </Breadcrumbs>
        {children}
      </Container>
      ;
    </>
  );
};

export default Page;

const TypographyBreadcrumb = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 500,
  color: black,
}));
