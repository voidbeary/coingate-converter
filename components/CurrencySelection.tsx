import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
import { ChangeEventHandler } from "react";
import type { FC } from "react";
import FormControl from "@mui/material/FormControl";

type Props = {
  currencyName: string;
  onChange: (currencyName: string) => void;
  selectOptions: string[];
  label: string;
};

const CurrencySelection: FC<Props> = ({
  currencyName,
  onChange,
  selectOptions,
  label,
}) => {
  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    onChange(e.target.value);
  };

  return (
    <>
      <InputLabel variant="standard" htmlFor={label} />
      <NativeSelect
        value={currencyName}
        sx={{
          "&::before": {
            display: "none",
          },
          "&::after": {
            display: "none",
          },
        }}
        inputProps={{
          name: label,
          id: label,
          sx: {
            "&:focus": {
              backgroundColor: "transparent",
            },
          },
        }}
        onChange={handleChange}
      >
        {selectOptions.map((name) => {
          return (
            <option value={name} key={name}>
              {name}
            </option>
          );
        })}
      </NativeSelect>
    </>
  );
};
export { CurrencySelection };
