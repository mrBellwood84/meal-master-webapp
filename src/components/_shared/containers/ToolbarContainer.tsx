import { Toolbar } from "@mui/material";
import { ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

export const ToolbarContainer = ({ children }: IProps) => {
  return (
    <Toolbar
      variant="dense"
      disableGutters
      sx={{
        display: "flex",
        alignItems: "center",

        mt: 2,
        mb: 2,
        pb: 2,
        borderBottom: "1px solid black",
      }}
    >
      {children}
    </Toolbar>
  );
};
