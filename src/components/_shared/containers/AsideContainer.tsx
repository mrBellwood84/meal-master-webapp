import { Box } from "@mui/material";
import { ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

export const AsideContainer = ({ children }: IProps) => {
  return (
    <Box sx={{ border: "1px solid #ddd", borderRadius: 1 }}>{children}</Box>
  );
};
