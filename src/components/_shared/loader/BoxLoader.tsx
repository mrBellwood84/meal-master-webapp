import { Box, CircularProgress } from "@mui/material";

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
      <CircularProgress size={size} />
    </Box>
  );
};
