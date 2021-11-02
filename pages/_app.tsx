import "../styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import type { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../utils/theme";
import Head from "next/head";
import useMediaQuery from "@mui/material/useMediaQuery";
import { NavBar } from "../components/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  const isDesktop = useMediaQuery("(min-width:1440px)");
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar isDesktop={isDesktop} />
        <Component {...pageProps} isDesktop={isDesktop} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
