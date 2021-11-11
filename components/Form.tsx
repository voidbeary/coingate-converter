import { Box } from "@mui/system";
import { ChangeEventHandler, FC, FormEventHandler } from "react";
import { BuyButton } from "../components/BuyButton";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/router";
import { PayInputs } from "./PayInputs";
import { BuyInputs } from "./BuyInputs";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";

function calcBuyValue(payValue: string, rate: number): string {
  return Number((Number(payValue) / rate).toFixed(6)) / 1 + "";
}

function calcPayValue(buyValue: string, rate: number): string {
  return Number((Number(buyValue) * rate).toFixed(6)) / 1 + "";
}

function calcRate(
  buyCurrencyName: string,
  payCurrencyName: string,
  rates: Record<string, Record<string, string>> | null
): number {
  return Number(rates?.[buyCurrencyName]?.[payCurrencyName] || "0");
}

type Props = {
  isDesktop: boolean;
  rates: Record<string, Record<string, string>> | null;
};

const Form: FC<Props> = ({ isDesktop, rates }) => {
  const [payCurrencyName, setPayCurrencyName] = useState("EUR");
  const [buyCurrencyName, setBuyCurrencyName] = useState("BTC");
  const [payInput, setPayInput] = useState("");
  const [buyInput, setBuyInput] = useState("");
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    router.push(
      "https://giphy.com/gifs/rickroll-rick-astley-never-gonna-give-you-up-Vuw9m5wXviFIQ"
    );
  };

  const handlePayOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const payValue = e.target.value.replace(/[^\d.]/g, "");
    if (payValue.split(".").length > 2 || payValue[0] == ".") {
      return;
    }
    setPayInput(payValue);
    const rate = calcRate(buyCurrencyName, payCurrencyName, rates);
    setBuyInput(calcBuyValue(payValue, rate));
  };
  const handleBuyOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const buyValue = e.target.value.replace(/[^\d.]/g, "");
    if (buyValue.split(".").length > 2 || buyValue[0] == ".") {
      return;
    }
    setBuyInput(buyValue);
    const rate = calcRate(buyCurrencyName, payCurrencyName, rates);
    setPayInput(calcPayValue(buyValue, rate));
  };
  const handlePayCurrencyChange = (currencyName: string) => {
    setPayCurrencyName(currencyName);
    const rate = calcRate(buyCurrencyName, currencyName, rates);
    setBuyInput(calcBuyValue(payInput, rate));
  };
  const handleBuyCurrencyChange = (buyCurrencyName: string) => {
    if (!rates?.[buyCurrencyName]) {
      return;
    }
    let modifiedPayCurrencyName = payCurrencyName;
    if (!rates[buyCurrencyName][modifiedPayCurrencyName]) {
      modifiedPayCurrencyName = Object.keys(rates[buyCurrencyName])[0] || "EUR";
      setPayCurrencyName(modifiedPayCurrencyName);
    }
    setBuyCurrencyName(buyCurrencyName);
    const rate = calcRate(buyCurrencyName, modifiedPayCurrencyName, rates);
    setPayInput(calcPayValue(buyInput, rate));
  };
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        borderRadius: "30px",
        width: isDesktop ? "75%" : "100%",
        gridArea: "form",
        position: "relative",
        marginBottom: isDesktop ? undefined : "10%",
        padding: "2%",
        "&::before": isDesktop
          ? {
              position: "absolute",
              width: "100%",
              height: "100%",
              content: '""',
              zIndex: -1,
              backgroundColor: "#E9F6FF",
              top: "-10%",
              left: "-13%",
              transform: "rotate(-5.53deg)",
              borderRadius: "30px",
            }
          : undefined,
      }}
    >
      {!rates && (
        <Box
          sx={{
            display: "flex",
            minHeight: isDesktop ? "100%" : "20vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {rates && (
        <form onSubmit={handleSubmit}>
          <PayInputs
            handlePayOnChange={handlePayOnChange}
            payInput={payInput}
            payCurrencyName={payCurrencyName}
            handlePayCurrencyChange={handlePayCurrencyChange}
            rates={rates}
            buyCurrencyName={buyCurrencyName}
          />
          <BuyInputs
            handleBuyOnChange={handleBuyOnChange}
            buyInput={buyInput}
            buyCurrencyName={buyCurrencyName}
            handleBuyCurrencyChange={handleBuyCurrencyChange}
            rates={rates}
          />
          <InputLabel variant="standard" htmlFor="payment">
            Payment method
          </InputLabel>
          <NativeSelect
            defaultValue="payment"
            sx={{
              p: "2px 4px",
              display: "flex",
              flexDirection: "row",
              borderRadius: "20px",
              border: isFocused ? "2px solid #16DFB5" : "1px solid #D9D9D9",
              "&::before": {
                display: "none",
              },
              "&::after": {
                display: "none",
              },
            }}
            inputProps={{
              name: "payment",
              id: "payment",
              sx: {
                "&:focus": {
                  backgroundColor: "transparent",
                },
              },
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          >
            <option value="bank-transfer">Bank transfer</option>
            <option value="credit-card">Credit card</option>
            <option value="debit-card">Debit card</option>
            );
          </NativeSelect>
          <BuyButton
            currencyName={buyCurrencyName}
            disabled={!payInput || !buyInput}
          />
        </form>
      )}
    </Box>
  );
};
export { Form };
