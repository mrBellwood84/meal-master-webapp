import { IconButton, SxProps } from '@mui/material';
import React from 'react';
import Link from 'next/link';

interface IProps {
  href: string;
  disabled?: boolean;
  sx?: SxProps;
  children?: React.ReactNode;
}

export const AppIconLinkButton = ({ href, disabled = false, sx, children }: IProps) => {
  return (
    <IconButton LinkComponent={Link} sx={sx} disabled={disabled} href={href}>
      {children}
    </IconButton>
  );
};
