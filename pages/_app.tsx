import Footer from "@/components/Layouts/Footer";
import Header from "@/components/Layouts/Header";
import { defaultTheme, red } from "@/styles";
import { Box, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import "./../styles/globals.css";
import { Toaster } from "react-hot-toast";
import { QueryClientProvider, useIsFetching } from "react-query";
import { queryClient } from "@/lib/react-query";
import { CircularProgress } from "@mui/material";
import AuthProvider from "@/lib/provider/AuthProvider";
import ButtonContact from "@/components/ButtonContact";
import WelcomePopup from "@/components/Modal/WelcomePopup";
import { FacebookChatPlugin } from "@/components/FacebookChatPlugin";

function MyApp({ Component, pageProps }: AppProps) {
  const isFetching = useIsFetching();
  return (
    <>
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
      {isFetching ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            zIndex: 9999,
          }}
        >
          <CircularProgress />
        </Box>
      ) : null}
      {/* <WelcomePopup /> */}
      <FacebookChatPlugin />
      <Component {...pageProps} />
      <Footer />
      <Box
        style={{
          position: "fixed",
          bottom: "100px",
          right: "29px",
          zIndex: 1000,
        }}
      >
        <ButtonContact />
      </Box>
    </>
  );
}

export default function App(props: AppProps) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <MyApp {...props} />
          </QueryClientProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}
