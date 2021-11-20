import { Box } from "@mui/system";
import React, { ChangeEventHandler, FC, FormEventHandler } from "react";
import { BuyButton } from "../components/BuyButton";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/router";
import { PayInput } from "./PayInput";
import { BuyInput } from "./BuyInput";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";

const paymentMethods = [
  "SEPA Bank transfer",
  "Credit and debit card",
  "Apple pay",
];

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
  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0]);
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    router.push(
      "hhttps://giphy.com/gifs/rickroll-rick-astley-never-gonna-give-you-up-Vuw9m5wXviFIQ/tile"
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
    <Box sx={{ gridArea: "form" }}>
      <Box
        sx={{
          backgroundColor: "background.paper",
          borderRadius: "30px",
          width: isDesktop ? "75%" : "100%",
          position: "relative",
          marginBottom: isDesktop ? undefined : "10%",
          padding: "5%",
          paddingTop: isDesktop ? "20%" : "5%",
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
            <PayInput
              handlePayOnChange={handlePayOnChange}
              payInput={payInput}
              payCurrencyName={payCurrencyName}
              handlePayCurrencyChange={handlePayCurrencyChange}
              rates={rates}
              buyCurrencyName={buyCurrencyName}
            />
            <BuyInput
              handleBuyOnChange={handleBuyOnChange}
              buyInput={buyInput}
              buyCurrencyName={buyCurrencyName}
              handleBuyCurrencyChange={handleBuyCurrencyChange}
              rates={rates}
            />
            <InputLabel
              variant="standard"
              htmlFor="payment"
              sx={{ fontSize: "1rem", marginBottom: "10%" }}
            >
              Payment method
            </InputLabel>
            <Select
              value={paymentMethod}
              sx={{
                p: "1% 2%",
                display: "flex",
                flexDirection: "row",
                borderRadius: "20px",
                border: isFocused ? "1px solid #16DFB5" : "1px solid #D9D9D9",
                fontSize: "1rem",
                marginBottom: "27%",
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
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              {paymentMethods.map((paymentMethod) => (
                <MenuItem
                  key={paymentMethod}
                  value={paymentMethod}
                  sx={{
                    fontSize: "1rem",
                    display: "flex",
                    flexDirection: "row",
                    borderRadius: "20px",
                  }}
                >
                  {paymentMethod}
                </MenuItem>
              ))}
            </Select>
            <BuyButton
              currencyName={buyCurrencyName}
              disabled={!Number(payInput) || !Number(buyInput)}
            />
          </form>
        )}
      </Box>
    </Box>
  );
};
export { Form };
