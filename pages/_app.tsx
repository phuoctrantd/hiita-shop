import Footer from "@/components/Layouts/Footer";
import Header from "@/components/Layouts/Header";
import { defaultTheme } from "@/styles";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import "./../styles/globals.css";
import { Toaster } from "react-hot-toast";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <Toaster />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}
