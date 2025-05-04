import { Table, TableCell, TableHead, TableRow } from "@mui/material";

interface ITableProps {
  small?: boolean;
  title?: string;
  messure?: string;
}

export const NutritionTable = ({ small, title }: ITableProps) => {
  <Table size={small ? "small" : "medium"}>
    <TableHead>
      <TableRow>
        <TableCell>{title ?? "Næringsinnhold"}</TableCell>
        <TableCell>{title ?? "Per 100 g"}</TableCell>
      </TableRow>
    </TableHead>
  </Table>;
};
