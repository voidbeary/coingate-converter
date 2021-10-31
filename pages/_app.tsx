import "../styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import type { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../utils/theme";
import { Box } from "@mui/system";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            backgroundColor: "#ff9ab3",
            // backgroundColor: "#ffffff",
            position: "fixed",
            height: "9.5vh",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1,
          }}
        >
          logo
        </Box>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
