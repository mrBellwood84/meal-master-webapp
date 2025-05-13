import { Button, SxProps } from "@mui/material";
import { ReactNode } from "react";

interface IProps {
  title: string;
  onClick: () => void;
  endIcon?: ReactNode;
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "success" | "error";
  disabled?: boolean;
  sx?: SxProps;
}

export const ToolbarClickButton = ({
  title,
  onClick,
  endIcon,
  variant,
  color,
  disabled = false,
  sx,
}: IProps) => {
  return (
    <Button
      variant={variant ?? "contained"}
      color={color ?? "primary"}
      size="small"
      onClick={onClick}
      endIcon={endIcon ?? null}
      disabled={disabled}
      sx={{ ...sx }}
    >
      {title}
    </Button>
  );
};
