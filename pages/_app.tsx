import Footer from "@/components/Layouts/Footer";
import Header from "@/components/Layouts/Header";
import { defaultTheme, red } from "@/styles";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import "./../styles/globals.css";
import { Toaster } from "react-hot-toast";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/lib/react-query";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <QueryClientProvider client={queryClient}>
          <Header />
          <Toaster
            toastOptions={{
              duration: 2500,
              style: {
                color: red[100],
                fontSize: "14px",
                fontWeight: 500,
                borderRadius: "5px",
                paddingLeft: "10px",
                paddingRight: "0",
              },
            }}
          />
          <Component {...pageProps} />
          <Footer />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
