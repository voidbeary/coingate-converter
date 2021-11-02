import Typography from "@mui/material/Typography";
import React from "react";
import type { FC } from "react";

type Props = {
  isDesktop: boolean;
};

const Header: FC<Props> = ({ isDesktop }) => {
  return (
    <>
      <Typography
        variant="h1"
        color="secondary.contrastText"
        sx={{ gridArea: "header", fontSize: isDesktop ? "4rem" : "2rem" }}
        mb={5}
      >
        <Typography
          variant="h1"
          component="span"
          color="primary.main"
          sx={{
            fontSize: isDesktop ? "4rem" : "2rem",
          }}
        >
          {"Buy Bitcoin, "}
        </Typography>
        {"Ethereum, Litecoin and other crypto "}
        <Typography
          variant="h1"
          component="span"
          color="primary.main"
          sx={{
            fontSize: isDesktop ? "4rem" : "2rem",
          }}
        >
          online
        </Typography>
      </Typography>
    </>
  );
};
export { Header };
