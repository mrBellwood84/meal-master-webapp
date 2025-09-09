'use client';

import { Close, Search } from '@mui/icons-material';
import { Box, IconButton, InputAdornment, SxProps, TextField } from '@mui/material';
import { ChangeEvent } from 'react';

interface IProps {
  value: string;
  handleOnChangeAction: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClearClickAction: () => void;
  sx?: SxProps;
}

export const SearchTextField = ({
  value,
  handleOnChangeAction,
  handleClearClickAction,
  sx,
}: IProps) => {
  const showClear = Boolean(value);

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end', ...sx }}>
      <TextField
        variant="standard"
        size="small"
        value={value}
        placeholder="Søk"
        onChange={handleOnChangeAction}
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
                <IconButton size="small" onClick={handleClearClickAction}>
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
