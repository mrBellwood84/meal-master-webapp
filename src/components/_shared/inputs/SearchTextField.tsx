"use client";

import { Close, Search } from "@mui/icons-material";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { ChangeEvent } from "react";

interface IProps {
  value: string;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClearClick: () => void;
}

export const SearchTextField = ({
  value,
  handleOnChange,
  handleClearClick,
}: IProps) => {
  const showClear = Boolean(value);

  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
      <TextField
        variant="standard"
        size="small"
        value={value}
        onChange={handleOnChange}
        sx={{ width: 200 }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Search></Search>
              </InputAdornment>
            ),
            endAdornment: showClear && (
              <InputAdornment position="end">
                <IconButton size="small" onClick={handleClearClick}>
                  <Close />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  );
};
