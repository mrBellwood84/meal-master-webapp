import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

export const RecipeNutrionList = () => {
  return (
    <Box sx={{ border: "1px solid lightgray", borderRadius: 1, mt: 1, p: 2 }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Næringsinnhold Oppskrift</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Energi</TableCell>
            <TableCell>80 kcal</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Fett</TableCell>
            <TableCell>0,4g</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Karbohydrater</TableCell>
            <TableCell>6,1 g</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>- sukkerarter</TableCell>
            <TableCell>5,9 g</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Proteiner</TableCell>
            <TableCell>0.5 g</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};
