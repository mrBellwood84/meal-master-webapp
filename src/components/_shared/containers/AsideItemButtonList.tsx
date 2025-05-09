import { List } from "@mui/material";
import { ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

export const AsideItemButtonList = ({ children }: IProps) => {
  return <List dense>{children}</List>;
};
