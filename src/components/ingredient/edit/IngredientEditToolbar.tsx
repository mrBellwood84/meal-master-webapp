import { ToolbarClickButton } from "@/components/_shared/buttons/ToolbarClickButton";
import { ToolbarNavBackButton } from "@/components/_shared/buttons/ToolbarNavBackButton";
import { ToolbarContainer } from "@/components/_shared/containers/ToolbarContainer";
import { InlineLoader } from "@/components/_shared/loader/InlineLoader";
import { ToolbarText } from "@/components/_shared/text/ToolbarText";
import { useAppDispatch, useAppSelector } from "@/lib/state/hooks";
import { ingredientUpdateStateActions } from "@/lib/state/ingredients/update/slice";
import { Undo } from "@mui/icons-material";
import { Box, capitalize } from "@mui/material";

export const IngredientEditToolbar = () => {
  const dispatch = useAppDispatch();
  const selected = useAppSelector((s) => s.ingredientUpdate.selected);
  const changed = useAppSelector((s) => s.ingredientUpdate.changed);
  const loading = useAppSelector((s) => s.ingredientUpdate.loading);
  const { undoAllChanges } = ingredientUpdateStateActions;

  const handleUndoChanges = () => {
    console.error("DEV :: Undo all changes not implemented yet");
    console.error("DEV :: Call api here....");
    dispatch(undoAllChanges());
  };

  return (
    <ToolbarContainer>
      <ToolbarNavBackButton href="/ingredient" />
      {!selected && (
        <Box sx={{ flexGrow: 1, display: "flex", ml: 1, alignItems: "center" }}>
          <InlineLoader size={20} />
          <ToolbarText text="Laster inn" color="primary" />
        </Box>
      )}
      {selected && (
        <ToolbarText
          text={selected ? `Redigerer ${capitalize(selected.name)}` : ""}
          sx={{ flexGrow: 1 }}
        />
      )}
      <ToolbarClickButton
        title="Angre"
        onClick={handleUndoChanges}
        variant="outlined"
        color="error"
        endIcon={<Undo />}
        disabled={!changed || loading}
      />
    </ToolbarContainer>
  );
};
