import { Button, SxProps } from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";

interface IProps {
  title: string;
  href: string;
  endIcon?: ReactNode;
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "success" | "error";
  disabled?: boolean;
  sx?: SxProps;
}

export const ToolbarLinkButton = ({
  title,
  href,
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
      LinkComponent={Link}
      href={href}
      endIcon={endIcon ?? null}
      disabled={disabled}
      sx={{ ...sx }}
    >
      {title}
    </Button>
  );
};
