import { Typography } from "@mui/material";

interface IProps {
  title: string;
}

export const ContentHeader = ({ title }: IProps) => {
  return (
    <Typography
      variant="h4"
      component="div"
      sx={{ mb: 1, pb: 1, borderBottom: "1px solid black" }}
    >
      {title}
    </Typography>
  );
};
