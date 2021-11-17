import { CurrencySelection } from "./CurrencySelection";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import { ChangeEventHandler, useState, FC } from "react";
import InputLabel from "@mui/material/InputLabel";

type Props = {
  handlePayOnChange: ChangeEventHandler<HTMLInputElement>;
  payInput: string;
  payCurrencyName: string;
  handlePayCurrencyChange: (buyCurrencyName: string) => void;
  rates: Record<string, Record<string, string>>;
  buyCurrencyName: string;
};

const PayInput: FC<Props> = ({
  handlePayOnChange,
  payInput,
  payCurrencyName,
  handlePayCurrencyChange,
  rates,
  buyCurrencyName,
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
      <Divider sx={{ height: 30, paddingLeft: "2%" }} orientation="vertical" />
      <CurrencySelection
        currencyName={payCurrencyName}
        onChange={handlePayCurrencyChange}
        selectOptions={Object.keys(rates[buyCurrencyName])}
        label="payCurrency"
      />
    </Paper>
  );
};
export { PayInput };
