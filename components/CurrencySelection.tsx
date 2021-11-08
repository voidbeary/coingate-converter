import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { ChangeEventHandler, useState } from "react";

function CurrencySelection({ rates, currencyName, setcurrencyName }) {
  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setcurrencyName(e.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel variant="standard" htmlFor="currency">
        <NativeSelect
          value={currencyName}
          inputProps={{
            name: "currency",
            id: "currency",
          }}
          onChange={handleChange}
        >
          {Object.keys(rates).map((name) => {
            return (
              <option value={name} key={name}>
                {name}
              </option>
            );
          })}
        </NativeSelect>
      </InputLabel>
    </FormControl>
  );
}
export { CurrencySelection };
