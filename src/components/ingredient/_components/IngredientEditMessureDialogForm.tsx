import { IIngredientUpdateMessureDTO } from "@/lib/models/Ingredients/DTOs/IIngredientUpdateMessureDTO";
import { useAppDispatch, useAppSelector } from "@/lib/state/hooks";
import { ingredientEditStateActions } from "@/lib/state/ingredients/edit/slice";
import { Save, Cancel } from "@mui/icons-material";
import {
  Button,
  capitalize,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { v4 as uuid } from "uuid";
import { ChangeEvent, useEffect, useState } from "react";
import { ingredientAgent } from "@/lib/apiagent/ingredientAgent";

export const IngredientEditMessureDialogForm = () => {
  // hooks and global state
  const dispatch = useAppDispatch();
  const { closeMessureDialog } = ingredientEditStateActions;

  const ingredientId = useAppSelector((s) => s.ingredientEdit.selected)!.id;

  const selected = useAppSelector(
    (s) => s.ingredientEdit.ingredientMessureSelected
  );
  const dialogOpen = useAppSelector(
    (s) => s.ingredientEdit.ingredientMessureDialogOpen
  );

  const messures = useAppSelector((s) => s.ingredientEdit.messures);
  const volumeMessures = messures.filter((x) => x.type === "volum");
  const unitMessures = messures.filter((x) => x.type === "enhet");

  // local hooks
  const [messureId, setMessureId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [plural, setPlural] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [unit, setUnit] = useState<string>("");
  const [type, setType] = useState<string>("");

  const [selectErrorMSG, setSelectErrorMSG] = useState<string>("");
  const [quantityErrorMSG, setQuantityErrorMSG] = useState<string>("");

  // local functions
  const handleDialogClose = () => {
    setMessureId("");
    setName("");
    setPlural("");
    setQuantity(0);
    setUnit("");
    setType("");
    setSelectErrorMSG("");
    setQuantityErrorMSG("");
    dispatch(closeMessureDialog());
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    const index = messures.findIndex((x) => x.name === value);
    const item = messures[index];

    setMessureId(item.id);
    setName(item.name);
    setPlural(item.namePlural ?? "");
    setUnit(item.unit);
    setType(item.type);
    setSelectErrorMSG("");
  };

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const parsed = parseInt(event.target.value);
    setQuantity(Boolean(parsed) ? parsed : 0);
    setQuantityErrorMSG("");
  };

  const handleCreate = async (dto: IIngredientUpdateMessureDTO) => {
    await ingredientAgent.addMessure(dto);
  };

  const handleUpdate = async (dto: IIngredientUpdateMessureDTO) => {
    if (selected?.quantity === dto.quantity) return;
    await ingredientAgent.updateMessure(dto);
  };

  const handleOnSubmit = async () => {
    console.log("DEV :: Set modal loadspinner");

    // validate
    let fieldError = false;

    if (!name) {
      fieldError = true;
      setSelectErrorMSG("Velg mål");
    } else setSelectErrorMSG("");

    if (quantity <= 0) {
      fieldError = true;
      setQuantityErrorMSG("Verdi må være høyere enn null");
    } else setQuantityErrorMSG("");

    if (fieldError) return;

    const dto: IIngredientUpdateMessureDTO = {
      id: selected ? selected.id : uuid(),
      ingredientId,
      messureId,
      quantity,
    };

    if (selected) await handleUpdate(dto);
    else await handleCreate(dto);

    console.log("DEV :: Reload state");
    console.log("DEV :: Close modal");
  };

  useEffect(() => {
    const initSelected = () => {
      if (!selected) return;
      const index = messures.findIndex((x) => x.name === selected.name);
      const id = messures[index].id;
      setMessureId(id);
      setName(selected.name);
      setPlural(selected.namePlural ?? "");
      setQuantity(selected.quantity);
      setUnit(selected.unit);
      setType(selected.type);
    };

    const clearSelected = () => {
      if (selected) return;
      setMessureId("");
      setName("");
      setPlural("");
      setQuantity(0);
      setUnit("");
      setType("");
    };

    if (selected) initSelected();
    else clearSelected();
  }, [messures, selected]);

  return (
    <Dialog open={dialogOpen} onClose={handleDialogClose}>
      <DialogTitle>{selected ? "Rediger" : "Opprett"}</DialogTitle>

      <DialogContent sx={{ display: "flex", alignItems: "flex-end" }}>
        <FormControl sx={{ mt: 1, mr: 1 }} error={Boolean(selectErrorMSG)}>
          <InputLabel>Navn</InputLabel>
          <Select
            value={name}
            onChange={handleSelectChange}
            variant="standard"
            size="small"
            sx={{ width: 120, mr: 1, ml: 1 }}
            disabled={Boolean(selected)}
            MenuProps={{
              PaperProps: {
                sx: { height: 300 },
              },
            }}
          >
            <ListSubheader>Volum</ListSubheader>
            {volumeMessures.map((x) => (
              <MenuItem key={x.id} value={x.name}>
                {capitalize(x.name)}
              </MenuItem>
            ))}
            <ListSubheader>Enhet</ListSubheader>
            {unitMessures.map((x) => (
              <MenuItem key={x.id} value={x.name}>
                {capitalize(x.name)}
              </MenuItem>
            ))}
          </Select>
          {Boolean(selectErrorMSG) && (
            <FormHelperText>{selectErrorMSG}</FormHelperText>
          )}
        </FormControl>

        <TextField
          value={plural ? capitalize(plural) : "-"}
          variant="standard"
          size="small"
          label="(Flertall)"
          sx={{ width: 120 }}
          disabled
        />

        <TextField
          value={unit}
          variant="standard"
          size="small"
          label="Måleenhet"
          sx={{ width: 60, ml: 1, mr: 1 }}
          disabled
        />

        <TextField
          value={quantity}
          onChange={handleQuantityChange}
          type="number"
          variant="standard"
          size="small"
          label="I gram"
          error={Boolean(quantityErrorMSG)}
          helperText={quantityErrorMSG}
          sx={{ ml: 1, mr: 1 }}
        />

        <TextField
          value={capitalize(type)}
          variant="standard"
          size="small"
          label="Type"
          sx={{ width: 60, ml: 1 }}
          disabled
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleOnSubmit} color="success" startIcon={<Save />}>
          Lagre
        </Button>
        <Button
          onClick={handleDialogClose}
          color="error"
          endIcon={<Cancel />}
          variant="contained"
        >
          Avbryt
        </Button>
      </DialogActions>
    </Dialog>
  );
};
