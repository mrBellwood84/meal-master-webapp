import { Divider, Toolbar } from "@mui/material";
import { Fragment, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

export const ToolbarContainer = ({ children }: IProps) => {
  return (
    <Fragment>
      <Toolbar
        variant="dense"
        disableGutters
        sx={{
          display: "flex",
          alignItems: "center",

          mt: 2,
        }}
      >
        {children}
      </Toolbar>
      <Divider sx={{ mb: 2 }} />
    </Fragment>
  );
};
