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
import Image from "next/image";
import logo from "../public/coingate.png";
import Button from "@mui/material/Button";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

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
        <Box
          sx={{
            backgroundColor: "#ffffff",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            position: "fixed",
            height: "9.5vh",
            width: "100%",
            top: 0,
            left: 0,
            zIndex: 1,
            boxShadow: "0px 5px 11px rgba(29, 0, 62, 0.07)",
          }}
        >
          <Box
            sx={{
              width: "max(7%,157px)",
              marginX: isDesktop ? "2%" : "5%",
            }}
          >
            <Image alt="logo" src={logo} layout="responsive" />
          </Box>
          {isDesktop && (
            <>
              <Box
                component="ul"
                sx={{
                  display: "flex",
                  listStyle: "none",
                  color: "#7F88A0",
                  padding: 0,
                  margin: 0,
                  flexGrow: 1,
                }}
              >
                <Box component="li" sx={{ marginX: "3%", fontSize: "1.15rem" }}>
                  Products
                </Box>
                <Box component="li" sx={{ marginX: "3%", fontSize: "1.15rem" }}>
                  Recources
                </Box>
                <Box component="li" sx={{ marginX: "3%", fontSize: "1.15rem" }}>
                  Buy Instantly
                </Box>
              </Box>

              <Button
                variant="text"
                sx={{
                  color: "#7F88A0",
                  textTransform: "none",
                  marginX: "1.5%",
                  fontSize: "1.15rem",
                }}
              >
                Log in
              </Button>
              <Button
                variant="contained"
                endIcon={<KeyboardArrowRightRoundedIcon />}
                sx={{
                  textTransform: "none",
                  boxShadow: "none",
                  borderRadius: "4px 50px 50px 40px",
                  paddingY: "0.4%",
                  marginX: "1.5%",
                  paddingRight: "1.2%",
                  paddingLeft: "1.5%",
                  fontSize: "1.15rem",
                  "&:hover": { boxShadow: "none" },
                }}
              >
                Sign up
              </Button>
            </>
          )}
          {!isDesktop && (
            <MenuRoundedIcon
              sx={{
                color: "#C7C7C7",
                marginLeft: "auto",
                marginRight: "3%",
                height: "40px",
                width: "auto",
              }}
            />
          )}
        </Box>
        <Component {...pageProps} isDesktop={isDesktop} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
