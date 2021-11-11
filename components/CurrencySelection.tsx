import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
import { ChangeEventHandler } from "react";
import type { FC } from "react";

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
          fontSize: "1rem",
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
            <option value={name} key={name} style={{ fontSize: "1rem" }}>
              {name}
            </option>
          );
        })}
      </NativeSelect>
    </>
  );
};
export { CurrencySelection };
