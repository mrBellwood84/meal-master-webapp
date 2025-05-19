import { Box } from "@mui/material";
import { InlineLoader } from "./InlineLoader";

interface IProps {
  size?: string | number;
}

export const BoxLoader = ({ size }: IProps) => {
  return (
    <Box
      sx={{
        p: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <InlineLoader size={size} />
    </Box>
  );
};
