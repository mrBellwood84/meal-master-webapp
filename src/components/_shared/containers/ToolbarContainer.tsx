import { Toolbar } from "@mui/material";
import { ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

export const ToobarContainer = ({ children }: IProps) => {
  return (
    <Toolbar variant="dense" disableGutters sx={{ mt: 1, mb: 1 }}>
      {children}
    </Toolbar>
  );
};
