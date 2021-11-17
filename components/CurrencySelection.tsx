import InputLabel from "@mui/material/InputLabel";
import React, { ChangeEventHandler } from "react";
import type { FC } from "react";
import { MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Image from "next/image";
import { Box } from "@mui/system";

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
  const handleChange = (e: SelectChangeEvent<string>) => {
    onChange(e.target.value);
  };

  return (
    <>
      <InputLabel variant="standard" htmlFor={label} />
      <Select
        value={currencyName}
        sx={{
          marginX: "2%",
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          fontSize: "1rem",
          minWidth: "28%",
          height: "2%",
        }}
        inputProps={{
          name: label,
          id: label,
          sx: {
            display: "flex",
            justifyContent: "center",
            p: 0,
            "&:focus": {
              backgroundColor: "transparent",
            },
          },
        }}
        onChange={handleChange}
      >
        {selectOptions.map((name) => {
          const lowercaseName = name.toLowerCase();
          return (
            <MenuItem
              value={name}
              key={name}
              sx={{
                fontSize: "1rem",
              }}
            >
              <Box>
                <Image
                  alt="currency logo"
                  src={`https://assets.coingate.com/images/crypto-svgs/${lowercaseName}.svg`}
                  height="20"
                  width="20"
                  className="image"
                ></Image>
              </Box>
              <Box component="span" sx={{ paddingLeft: "10px" }}>
                {name}
              </Box>
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
};
export { CurrencySelection };
