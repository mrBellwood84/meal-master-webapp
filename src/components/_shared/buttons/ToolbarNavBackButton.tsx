import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";

interface IProps {
  text?: string;
  href?: string;
}

export const ToolbarNavBackButton = ({ text, href }: IProps) => {
  return (
    <Button LinkComponent={Link} href={href ?? "#"} startIcon={<ArrowBack />}>
      {text ?? "tilbake"}
    </Button>
  );
};
