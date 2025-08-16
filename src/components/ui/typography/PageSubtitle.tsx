import { SxProps, Typography } from '@mui/material';

interface IProps {
  title: string;
  sx?: SxProps;
}

export const PageSubtitle = ({ title, sx }: IProps) => {
  return (
    <Typography variant="h5" component="div" sx={sx}>
      {title}
    </Typography>
  );
};
