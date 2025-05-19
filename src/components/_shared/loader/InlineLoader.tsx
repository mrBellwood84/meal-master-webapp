import { CircularProgress, SxProps } from "@mui/material";

interface IProps {
  size?: string | number;
  thickness?: number;
  sx?: SxProps;
}

export const InlineLoader = ({ size, thickness, sx }: IProps) => {
  return (
    <CircularProgress size={size} thickness={thickness ?? 3.6} sx={{ ...sx }} />
  );
};
