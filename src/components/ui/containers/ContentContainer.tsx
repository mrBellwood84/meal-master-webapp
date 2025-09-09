import { Box, Paper, SxProps } from '@mui/material';
import React from 'react';

interface IProps {
  children?: React.ReactNode;
  sx?: SxProps;
}

export const ContentContainer = ({ children, sx }: IProps) => {
  return (
    <Box sx={{ ml: 1, mb: 5, ...sx }}>
      <Paper elevation={0} sx={{ p: 1, borderRadius: 0 }}>
        {children}
      </Paper>
    </Box>
  );
};
