import { Box } from "@mui/system";
import Link from "@mui/material/Link";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import type { FC } from "react";
import Typography from "@mui/material/Typography";

type Props = {
  isDesktop: boolean;
};

const Description: FC<Props> = ({ isDesktop }) => {
  return (
    <Box sx={{ gridArea: "paragraph" }}>
      <Typography
        variant="body1"
        color="secondary.contrastText"
        gutterBottom
        sx={{
          gridArea: "paragraph",
          fontSize: isDesktop ? "1.5rem" : "1.2rem",
        }}
        mb={3}
      >
        Why bother going through complicated exchanges? Buy cryptocurrency with
        top payment methods like SEPA bank transfer, Credit and Debit Card,
        Apple Pay, Mobile balance or Klarna. You can buy Bitcoin, Ethereum or
        any other popular crypto directly to your personal wallet without making
        any initial deposits. It&apos;s as easy as it gets!
      </Typography>
      {isDesktop && (
        <Link
          href="https://dashboard.coingate.com/register"
          underline="hover"
          sx={{
            fontSize: "1.25rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          Start now <KeyboardArrowRightRoundedIcon />
        </Link>
      )}
    </Box>
  );
};
export { Description };
