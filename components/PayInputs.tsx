import { CurrencySelection } from "./CurrencySelection";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";

function PayInputs({
  handlePayOnChange,
  payInput,
  payCurrencyName,
  handlePayCurrencyChange,
  rates,
  buyCurrencyName,
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
      <InputLabel htmlFor="pay" sx={{ fontSize: "1rem" }}>
        Pay
      </InputLabel>
      <InputBase
        id="pay"
        type="text"
        onChange={handlePayOnChange}
        value={payInput}
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
        currencyName={payCurrencyName}
        onChange={handlePayCurrencyChange}
        selectOptions={Object.keys(rates[buyCurrencyName])}
        label="payCurrency"
      />
    </Paper>
  );
}
export { PayInputs };
