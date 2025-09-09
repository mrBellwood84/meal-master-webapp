import { Box, Paper, SxProps, Toolbar } from '@mui/material';
import { PageTitle } from '@/components/ui/typography/PageTitle';
import { ReactNode } from 'react';

interface IProps {
  title: string;
  children?: ReactNode;
  sx?: SxProps;
}

export const PageToolbar = ({ title, children, sx }: IProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: 'full', ...sx }}>
      <PageTitle title={title} />
      <Paper elevation={0} sx={{ mb: 1, mt: 1 }}>
        <Toolbar>{children}</Toolbar>
      </Paper>
    </Box>
  );
};
