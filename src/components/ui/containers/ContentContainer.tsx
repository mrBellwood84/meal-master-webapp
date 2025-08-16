import { Box, Paper } from '@mui/material';
import React from 'react';

interface IProps {
  children?: React.ReactNode;
}

export const ContentContainer = ({ children }: IProps) => {
  return (
    <Box sx={{ ml: 1, mb: 5 }}>
      <Paper elevation={0} sx={{ p: 1, borderRadius: 0 }}>
        {children}
      </Paper>
    </Box>
  );
};
