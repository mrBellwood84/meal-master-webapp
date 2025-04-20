import { Box, Chip, Typography } from "@mui/material";

export const RecipeViewTitle = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        m: 1,
      }}
    >
      <Box sx={{ p: 1 }}>
        <Chip label="middag" sx={{ m: 1 }} />
        <Chip label="dessert" sx={{ m: 1 }} />
      </Box>

      <Typography variant="h3" sx={{ mt: 2, mb: 2 }}>
        Oppskrift på mat
      </Typography>

      <Typography variant="subtitle1" sx={{ mt: 2, mb: 2 }}>
        Beskrivelse av den deilige matretten i korte trekk
      </Typography>
    </Box>
  );
};
