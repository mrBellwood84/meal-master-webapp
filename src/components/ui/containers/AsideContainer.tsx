import { Box, Paper, Skeleton, SxProps, Typography } from '@mui/material';
import React from 'react';

interface IProps {
  loading?: boolean;
  loadingFailed?: boolean;
  children?: React.ReactNode;
  sx?: SxProps;
}

export const AsideContainer = ({ loading, loadingFailed, children, sx }: IProps) => {
  if (loading)
    return (
      <Box sx={{ mr: 1, ...sx }}>
        <Skeleton variant="rectangular" sx={{ height: '20vh', width: '100%', borderRadius: 0 }} />
      </Box>
    );

  if (loadingFailed)
    return (
      <Box sx={{ mr: 1, ...sx }}>
        <Paper
          elevation={0}
          sx={{
            width: '100%',
            height: '100%',
            padding: 2,
            borderRadius: 0,
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="subtitle2" fontWeight="600" alignItems="center" color="error">
            Kunne ikke laste innhold
          </Typography>
        </Paper>
      </Box>
    );

  return (
    <Box sx={{ mr: 1, mb: 5, ...sx }}>
      <Paper
        elevation={0}
        sx={{ height: '100%', maxHeight: '80vh', overflow: 'hidden', borderRadius: 0 }}
      >
        {children}
      </Paper>
    </Box>
  );
};
