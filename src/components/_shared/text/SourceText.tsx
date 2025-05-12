import { Link as MUILink, Typography } from "@mui/material";
import Link from "next/link";

interface IProps {
  text: string;
  type: "text" | "href" | string;
}

export const SourceText = ({ text, type }: IProps) => {
  if (type === "href") {
    return (
      <Typography
        variant="caption"
        sx={{ fontStyle: "oblique", color: "gray" }}
      >
        Kilde:{" "}
        <MUILink component={Link} href={text} target="_blank">
          {text}
        </MUILink>
      </Typography>
    );
  }

  return (
    <Typography variant="caption" sx={{ fontStyle: "oblique", color: "gray" }}>
      Kilde: {text}
    </Typography>
  );
};
