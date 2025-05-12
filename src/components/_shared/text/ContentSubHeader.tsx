import { Typography } from "@mui/material";

interface IProps {
  title: string;
}

export const ContentSubHeader = ({ title }: IProps) => {
  return (
    <Typography variant="h6" component="div">
      {title}
    </Typography>
  );
};
