import { SxProps, Typography } from "@mui/material";

interface IProps {
  text?: string;
  color?: "primary" | "secondary";
  sx?: SxProps;
}

export const ToolbarText = ({ text, color = "secondary", sx }: IProps) => {
  return (
    <Typography
      variant="h6"
      component="div"
      sx={{ ml: 2, ...sx }}
      color={color}
    >
      {text}
    </Typography>
  );
};
