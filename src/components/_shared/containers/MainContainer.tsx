import { Box } from "@mui/material";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  disablePadding?: boolean;
}

export const MainContainer = ({ children, disablePadding = false }: IProps) => {
  return <Box sx={{ pl: disablePadding ? 0 : 2 }}>{children}</Box>;
};
