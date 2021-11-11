import Button from "@mui/material/Button";
import type { FC } from "react";

type Props = {
  currencyName: string;
  disabled: boolean;
};

const BuyButton: FC<Props> = ({ currencyName, disabled }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      type="submit"
      disabled={disabled}
      sx={{
        borderRadius: "5px 50px 50px 20px",
        boxShadow: "0px 2px 0px rgba(0, 0, 0, 0.043)",
        width: "100%",
        "&.Mui-disabled": {
          backgroundColor: "#B5B5B5",
          boxShadow: "0px 2px 0px rgba(0, 0, 0, 0.043)",
          color: "#FFFFFF",
        },
      }}
    >
      Buy {currencyName}
    </Button>
  );
};
export { BuyButton };
