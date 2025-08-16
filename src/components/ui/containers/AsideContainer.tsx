import { Box, Paper, Skeleton, Typography } from '@mui/material';
import React from 'react';

interface IProps {
  loading?: boolean;
  loadingFailed?: boolean;
  children?: React.ReactNode;
}

export const AsideContainer = ({ loading, loadingFailed, children }: IProps) => {
  if (loading)
    return (
      <Box sx={{ mr: 1, width: '100%' }}>
        <Skeleton variant="rectangular" sx={{ height: '20vh', width: '100%', borderRadius: 0 }} />
      </Box>
    );

  if (loadingFailed)
    return (
      <Box sx={{ mr: 1, minHeight: '10vh' }}>
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
    <Box sx={{ maxWidth: '30vw', mr: 1, mb: 5 }}>
      <Paper
        elevation={0}
        sx={{ height: '100%', maxHeight: '80vh', overflow: 'hidden', borderRadius: 0 }}
      >
        {children}
      </Paper>
    </Box>
  );
};
