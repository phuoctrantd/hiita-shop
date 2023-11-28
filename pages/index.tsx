import Head from "next/head";
import HomeContainer from "./Home/HomeContainer";
export const metadata = {
  title: "Next.js",
};
export default function Home() {
  return (
    <>
      <Head>
        <title>
          Hiita - Nhân sâm thượng hạng và Trái cây nhập khẩu giá tốt nhất
        </title>
        <meta
          name="description"
          content=" Hiita - Nhân sâm thượng hạng và Trái cây nhập khẩu giá tốt nhất"
        />
      </Head>
      <HomeContainer />
    </>
  );
}
