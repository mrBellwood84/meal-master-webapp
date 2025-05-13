import { ToolbarClickButton } from "@/components/_shared/buttons/ToolbarClickButton";
import { ToolbarNavBackButton } from "@/components/_shared/buttons/ToolbarNavBackButton";
import { ToolbarContainer } from "@/components/_shared/containers/ToolbarContainer";
import { ToolbarText } from "@/components/_shared/text/ToolbarText";
import { useAppSelector } from "@/lib/state/hooks";
import { Undo } from "@mui/icons-material";
import { capitalize } from "@mui/material";

export const IngredientEditToolbar = () => {
  const selected = useAppSelector((s) => s.ingredientEdit.original);
  const changed = useAppSelector((s) => s.ingredientEdit.changed);
  const handleUndoChanges = () => {
    console.log("DEV :: not implemented");
  };

  return (
    <ToolbarContainer>
      <ToolbarNavBackButton href="/ingredient" />
      <ToolbarText
        text={selected ? `Redigerer ${capitalize(selected.name)}` : ""}
        sx={{ flexGrow: 1 }}
      />
      <ToolbarClickButton
        title="Angre"
        onClick={handleUndoChanges}
        variant="outlined"
        color="error"
        endIcon={<Undo />}
        disabled={!changed}
      />
    </ToolbarContainer>
  );
};
