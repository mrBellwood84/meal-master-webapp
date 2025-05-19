import { ToolbarClickButton } from "@/components/_shared/buttons/ToolbarClickButton";
import { ToolbarNavBackButton } from "@/components/_shared/buttons/ToolbarNavBackButton";
import { ToolbarContainer } from "@/components/_shared/containers/ToolbarContainer";
import { InlineLoader } from "@/components/_shared/loader/InlineLoader";
import { ToolbarText } from "@/components/_shared/text/ToolbarText";
import { useAppSelector } from "@/lib/state/hooks";
import { Undo } from "@mui/icons-material";
import { Box, capitalize } from "@mui/material";

export const IngredientEditToolbar = () => {
  const selected = useAppSelector((s) => s.ingredientEdit.original);
  const changed = useAppSelector((s) => s.ingredientEdit.changed);
  const handleUndoChanges = () => undefined;

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
        disabled={!changed}
      />
    </ToolbarContainer>
  );
};
