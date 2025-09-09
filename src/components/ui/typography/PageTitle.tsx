import { Typography } from '@mui/material';

interface IProps {
  title: string;
}

export const PageTitle = ({ title }: IProps) => {
  return (
    <Typography variant="h4" component="div" sx={{ borderBottom: '1px solid lightgrey' }}>
      {title}
    </Typography>
  );
};
