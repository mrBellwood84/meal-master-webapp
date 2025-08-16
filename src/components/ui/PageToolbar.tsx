import React, { Fragment } from 'react';
import { Divider, Toolbar, Typography } from '@mui/material';
import { PageTitle } from '@/components/ui/typography/PageTitle';

interface IProps {
  title: string;
  children?: React.ReactNode;
}

export const PageToolbar = ({ title, children }: IProps) => {
  return (
    <Fragment>
      <Toolbar variant="dense" disableGutters sx={{ display: 'flex', alignItems: 'center' }}>
        <PageTitle title={title} />
        {children}
      </Toolbar>
      <Divider sx={{ mt: 1, mb: 1 }} />
    </Fragment>
  );
};
