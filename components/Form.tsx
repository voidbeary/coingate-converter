import { Box } from "@mui/system";
import type { FC } from "react";
import { CurrencySelection } from "./CurrencySelection";
import { BuyButton } from "../components/BuyButton";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import TextField from "@mui/material/TextField";
import { useState } from "react";

type Props = {
  isDesktop: boolean;
  rates: Record<string, { EUR: string }>;
};

const Form: FC<Props> = ({ isDesktop, rates }) => {
  const [currencyName, setcurrencyName] = useState("BTC");
  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        borderRadius: "30px",
        width: isDesktop ? "75%" : "100%",
        // height: "40vh", //TODO: delete me
        gridArea: "form",
        position: "relative",
        marginBottom: isDesktop ? undefined : "10%",
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
      <form>
        <TextField id="pay" label="Pay" type="number" />
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="eur">
            <NativeSelect
              defaultValue="EUR"
              inputProps={{
                id: "eur",
              }}
            >
              <option value="EUR">EUR</option>
            </NativeSelect>
          </InputLabel>
        </FormControl>
        <TextField id="buy" label="Buy" type="number" />
        <CurrencySelection
          rates={rates}
          currencyName={currencyName}
          setcurrencyName={setcurrencyName}
        />
        <BuyButton rates={rates} currencyName={currencyName} />
      </form>
    </Box>
  );
};
export { Form };
