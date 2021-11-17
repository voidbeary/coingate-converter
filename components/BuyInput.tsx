import { CurrencySelection } from "./CurrencySelection";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import { ChangeEventHandler, FC, useState } from "react";
import InputLabel from "@mui/material/InputLabel";

type Props = {
  handleBuyOnChange: ChangeEventHandler<HTMLInputElement>;
  buyInput: string;
  buyCurrencyName: string;
  handleBuyCurrencyChange: (buyCurrencyName: string) => void;
  rates: Record<string, Record<string, string>>;
};
const BuyInput: FC<Props> = ({
  handleBuyOnChange,
  buyInput,
  buyCurrencyName,
  handleBuyCurrencyChange,
  rates,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Paper
      component="div"
      sx={{
        p: "1% 1%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: "20px",
        border: isFocused ? "1px solid #16DFB5" : "1px solid #D9D9D9",
        marginBottom: "7%",
      }}
    >
      <InputLabel htmlFor="buy" sx={{ fontSize: "1rem" }}>
        Buy
      </InputLabel>
      <InputBase
        id="buy"
        type="text"
        onChange={handleBuyOnChange}
        value={buyInput}
        sx={{
          ml: 1,
          flex: 2,
        }}
        inputProps={{
          inputMode: "numeric",
          pattern: "[0-9.]*",
          sx: { textAlign: "center" },
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <Divider sx={{ height: 30, paddingRight: "2%" }} orientation="vertical" />
      <CurrencySelection
        currencyName={buyCurrencyName}
        onChange={handleBuyCurrencyChange}
        selectOptions={Object.keys(rates)}
        label="buyCurrency"
      />
    </Paper>
  );
};
export { BuyInput };
