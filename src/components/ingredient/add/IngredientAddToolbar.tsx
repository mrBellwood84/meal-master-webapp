import { ToolbarNavBackButton } from "@/components/_shared/buttons/ToolbarNavBackButton";
import { ToolbarContainer } from "@/components/_shared/containers/ToolbarContainer";
import { ToolbarText } from "@/components/_shared/text/ToolbarText";

export const IngredientAddToolbar = () => {
  return (
    <ToolbarContainer>
      <ToolbarNavBackButton href="/ingredient" />
      <ToolbarText text="Legg til ingrediens" sx={{ flexGrow: 1 }} />
    </ToolbarContainer>
  );
};
