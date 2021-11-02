import { Box } from "@mui/system";
import Image from "next/image";
import logo from "../public/coingate.png";
import Button from "@mui/material/Button";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import type { FC } from "react";

type Props = {
  isDesktop: boolean;
};

const NavBar: FC<Props> = ({ isDesktop }) => {
  return (
    <Box
      component="nav"
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
  );
};
export { NavBar };
