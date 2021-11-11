import { CurrencySelection } from "./CurrencySelection";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import { useState } from "react";

function BuyInputs({
  handleBuyOnChange,
  buyInput,
  buyCurrencyName,
  handleBuyCurrencyChange,
  rates,
}) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Paper
      component="div"
      sx={{
        p: "2px 4px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: "20px",
        border: isFocused ? "2px solid #16DFB5" : "1px solid #D9D9D9",
      }}
    >
      <label htmlFor="buy">Buy</label>
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
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <CurrencySelection
        currencyName={buyCurrencyName}
        onChange={handleBuyCurrencyChange}
        selectOptions={Object.keys(rates)}
        label="buyCurrency"
      />
    </Paper>
  );
}
export { BuyInputs };
