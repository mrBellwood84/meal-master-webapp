import { IIngredientMeasure } from '@/types/ingredients/IIngredientMeasure';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

interface ITableProps {
  measures: IIngredientMeasure[];
}

interface IRowProps {
  measure: IIngredientMeasure;
}

const CustomRow = ({ measure }: IRowProps) => {
  return (
    <TableRow hover>
      <TableCell>{measure.measure.name}</TableCell>
      <TableCell>{measure.measure.namePlural ?? '-'}</TableCell>
      <TableCell>{measure.measure.unit}</TableCell>
      <TableCell>{measure.quantity}</TableCell>
      <TableCell>{measure.measure.type.type}</TableCell>
    </TableRow>
  );
};

export const IngredientMeasureTable = ({ measures }: ITableProps) => {
  return (
    <Table size="small" sx={{ mt: 2, mb: 2 }}>
      <TableHead>
        <TableRow>
          <TableCell>Mål</TableCell>
          <TableCell>Flertall</TableCell>
          <TableCell>Enhet</TableCell>
          <TableCell>I gram</TableCell>
          <TableCell>Type</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {measures.map((m) => (
          <CustomRow key={m.id} measure={m} />
        ))}
      </TableBody>
    </Table>
  );
};
