import Head from "next/head";
import Image from "next/image";
import HomeContainer from "../components/Home/HomeContainer";
import Logo from "@/public/images/logo-social.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Siêu chợ Hiita - Siêu giá tốt Hiita.vn - Săn deal 0Đ - Miễn phí giao
          hàng
        </title>
        <meta
          name="description"
          content="Siêu chợ Hiita - Siêu giá tốt Hiita.vn - Săn deal 0Đ - Miễn phí giao hàng"
        />
        <meta name="keywords" content="trai cay" />
        <meta property="og:image" content={Logo.src} />
      </Head>
      <HomeContainer />
    </>
  );
}
