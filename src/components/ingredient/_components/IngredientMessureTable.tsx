import { ContentSubHeader } from "@/components/_shared/text/ContentSubHeader";
import { IIngredientMessure } from "@/lib/models/Ingredients/IIngredientMessure";
import {
  capitalize,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

interface IRowProps {
  messure: IIngredientMessure;
}

interface ITableProps {
  messures: IIngredientMessure[];
}

const MessureRow = ({ messure }: IRowProps) => {
  return (
    <TableRow hover>
      <TableCell>{capitalize(messure.name)}</TableCell>
      <TableCell>
        {messure.namePlural ? capitalize(messure.namePlural) : ""}{" "}
      </TableCell>
      <TableCell align="center">{messure.unit}</TableCell>
      <TableCell align="center">{messure.quantity}</TableCell>
      <TableCell align="right">{messure.type}</TableCell>
    </TableRow>
  );
};

export const IngredientMessureTable = ({ messures }: ITableProps) => {
  return (
    <TableContainer sx={{ mt: 3, mb: 2 }}>
      <ContentSubHeader title="Måleenheter" />
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Navn</TableCell>
            <TableCell>(Flertall)</TableCell>
            <TableCell align="center">Måleenhet</TableCell>
            <TableCell align="center">I gram</TableCell>
            <TableCell align="right">Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {messures.map((m) => (
            <MessureRow key={m.id} messure={m} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
