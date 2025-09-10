'use client';

import { Close, Search } from '@mui/icons-material';
import { IconButton, InputAdornment, SxProps, TextField } from '@mui/material';
import { ChangeEvent } from 'react';

interface IProps {
  value: string;
  handleOnChangeAction: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClearClickAction: () => void;
  sx?: SxProps;
}

export const AppSearchField = ({
  value,
  handleOnChangeAction,
  handleClearClickAction,
  sx,
}: IProps) => {
  const showClear = Boolean(value);

  return (
    <TextField
      variant="standard"
      size="small"
      placeholder="Søk"
      value={value}
      onChange={handleOnChangeAction}
      sx={{ ...sx }}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
          endAdornment: showClear && (
            <InputAdornment position="end">
              <IconButton size="small" onClick={handleClearClickAction}>
                <Close />
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
};
