import { useAppDispatch, useAppSelector } from "@/lib/state/hooks";
import { ingredientEditStateActions } from "@/lib/state/ingredients/edit/slice";
import { Cancel, Save } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

export const IngredientEditMessureDialogForm = () => {
  const dialogOpen = useAppSelector(
    (s) => s.ingredientEdit.ingredientMessureDialogOpen
  );
  const selected = useAppSelector(
    (s) => s.ingredientEdit.ingredientMessureEdit
  );

  const { closeMessureDialog } = ingredientEditStateActions;
  const dispatch = useAppDispatch();

  const handleCloseDialog = () => dispatch(closeMessureDialog());

  return (
    <Dialog open={dialogOpen} onClose={handleCloseDialog}>
      <DialogTitle>{selected ? "Rediger" : "Opprett"}</DialogTitle>
      <DialogContent>Innhold</DialogContent>
      <DialogActions>
        <Button
          onClick={handleCloseDialog}
          color="success"
          startIcon={<Save />}
        >
          Lagre
        </Button>
        <Button onClick={handleCloseDialog} color="error" endIcon={<Cancel />}>
          Avbryt
        </Button>
      </DialogActions>
    </Dialog>
  );
};
