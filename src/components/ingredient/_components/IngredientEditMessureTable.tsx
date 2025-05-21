import { IIngredientMessure } from "@/lib/models/Ingredients/IIngredientMessure";
import { useAppDispatch } from "@/lib/state/hooks";
import { ingredientEditStateActions } from "@/lib/state/ingredients/edit/slice";
import { Add, Cancel, Delete, Done, Edit } from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  capitalize,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";
import { Fragment, useState } from "react";

interface IRowProps {
  messure: IIngredientMessure;
  onEditClick: (ingredientMessure: IIngredientMessure) => void;
  onRemoveClick: (ingredientMessureId: string) => void;
}

interface ITableProps {
  messures: IIngredientMessure[];
}

const MessureRow = ({ messure, onEditClick, onRemoveClick }: IRowProps) => {
  const [removeConfirm, setRemoveConfirm] = useState<boolean>(false);

  const handleSetRemoveConfirm = () => setRemoveConfirm(true);
  const handleCancelDelete = () => setRemoveConfirm(false);

  return (
    <TableRow hover>
      <TableCell>{capitalize(messure.name)}</TableCell>
      <TableCell>
        {messure.namePlural ? capitalize(messure.namePlural) : ""}
      </TableCell>
      <TableCell align="center">{messure.unit}</TableCell>
      <TableCell align="center">{messure.quantity}</TableCell>
      <TableCell align="center">{messure.type}</TableCell>
      <TableCell align="center">
        {removeConfirm && (
          <ButtonGroup size="small">
            <Button
              variant="contained"
              color="success"
              startIcon={<Done />}
              onClick={() => onRemoveClick(messure.id)}
            >
              Bekreft
            </Button>
            <Button
              variant="outlined"
              color="error"
              endIcon={<Cancel />}
              onClick={handleCancelDelete}
            >
              Avbryt
            </Button>
          </ButtonGroup>
        )}
        {!removeConfirm && (
          <ButtonGroup size="small">
            <Button
              color="success"
              variant="contained"
              startIcon={<Edit />}
              onClick={() => onEditClick(messure)}
            >
              Rediger
            </Button>
            <Button
              color="error"
              endIcon={<Delete />}
              onClick={handleSetRemoveConfirm}
            >
              Fjern
            </Button>
          </ButtonGroup>
        )}
      </TableCell>
    </TableRow>
  );
};

export const IngredientEditMessureTable = ({ messures }: ITableProps) => {
  const dispatch = useAppDispatch();
  const { setMessureDialogCreate, setMessureDialogEdit } =
    ingredientEditStateActions;

  const handleCreateClick = () => dispatch(setMessureDialogCreate());
  const handleEditClick = (ingredientMessure: IIngredientMessure) =>
    dispatch(setMessureDialogEdit(ingredientMessure));
  const handleDeleteClick = (ingredientMessureId: string) => {
    console.log("not implemented");
    console.log(ingredientMessureId);
  };

  return (
    <Fragment>
      <TableContainer sx={{ mt: 2, mb: 2 }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Navn</TableCell>
              <TableCell>(Flertall)</TableCell>
              <TableCell align="center">Måleenhet</TableCell>
              <TableCell align="center">I gram</TableCell>
              <TableCell align="center">Type</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {messures.map((m) => (
              <MessureRow
                key={m.id}
                messure={m}
                onEditClick={handleEditClick}
                onRemoveClick={handleDeleteClick}
              />
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={5} />
              <TableCell align="center">
                <Button
                  onClick={handleCreateClick}
                  size="small"
                  variant="contained"
                  color="success"
                  startIcon={<Add />}
                  sx={{ width: "52%" }}
                >
                  Legg til
                </Button>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Fragment>
  );
};
