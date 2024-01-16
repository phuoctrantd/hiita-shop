import Head from "next/head";
import Image from "next/image";
import HomeContainer from "../components/Home/HomeContainer";
import Logo from "@/public/images/hiita-logo.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hiita - Trái cây nhập khẩu giá tốt nhất</title>
        <meta
          name="description"
          content="Hiita - Trái cây nhập khẩu giá tốt nhất"
        />
        <meta name="keywords" content="trai cay" />
        <meta property="og:image" content={Logo.src} />
      </Head>
      <HomeContainer />
    </>
  );
}
