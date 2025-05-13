import { SxProps, Typography } from "@mui/material";

interface IProps {
  text?: string;
  sx?: SxProps;
}

export const ToolbarText = ({ text, sx }: IProps) => {
  return (
    <Typography variant="h6" component="div" sx={{ ml: 2, ...sx }}>
      {text}
    </Typography>
  );
};
