'use client';

import { createTheme } from '@mui/material/styles';
import { colors } from '@/styles/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.green,
    },
    secondary: {
      main: colors.orange,
    },
    background: {
      default: colors.beige,
      paper: '#fff',
    },
    text: {
      primary: colors.darkGray,
    },
  },
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
});
