import { OneFieldForm } from "@/components/form/OneFieldForm";
import { useAppDispatch, useAppSelector } from "@/lib/state/hooks";
import { Box, Divider } from "@mui/material";
import { ContentErrorText } from "@/components/_shared/text/ContentError";
import { IIngredientUpdateNameDTO } from "@/lib/models/Ingredients/DTOs/IIngredientUpdateNameDTO";
import { ingredientAgent } from "@/lib/apiagent/ingredientAgent";
import { ingredientEditStateActions } from "@/lib/state/ingredients/edit/slice";
import { SourceText } from "@/components/_shared/text/SourceText";

export const IngredientEditContent = () => {
  // hooks
  const dispatch = useAppDispatch();

  // actions
  const { setSelected, setLoading } = ingredientEditStateActions;

  // states
  const selected = useAppSelector((s) => s.ingredientEdit.selected);
  const loading = useAppSelector((s) => s.ingredientEdit.loading);
  const loadingFailed = !useAppSelector((s) => s.ingredientEdit.loadingSuccess);

  // handle functions
  const handleNameUpdate = async (name: string) => {
    dispatch(setLoading());
    const dto: IIngredientUpdateNameDTO = {
      id: selected!.id,
      name,
      namePlural: selected!.namePlural ?? "",
    };
    const response = await ingredientAgent.updateName(dto);
    if (response.ok) dispatch(setSelected({ ...selected!, name }));
    if (!response.ok) console.error("DEV :: Error handling not added");
  };

  const handleNamePluralUpdate = async (namePlural: string) => {
    dispatch(setLoading());
    const dto: IIngredientUpdateNameDTO = {
      id: selected!.id,
      name: selected!.name,
      namePlural,
    };
    const response = await ingredientAgent.updateName(dto);
    if (response.ok) dispatch(setSelected({ ...selected!, namePlural }));
    if (!response.ok) console.error("DEV :: Error handling not added");
  };

  if (loading)
    return (
      <Box>
        <OneFieldForm loading />
        <OneFieldForm loading />
        <Divider sx={{ mt: 1, mb: 2 }} />
      </Box>
    );

  if (loadingFailed)
    return (
      <Box>
        <ContentErrorText />
      </Box>
    );

  return (
    <Box>
      <OneFieldForm
        label="Navn"
        value={selected!.name}
        handleSave={handleNameUpdate}
      />
      <OneFieldForm
        label="Flertall"
        value={selected!.namePlural}
        handleSave={handleNamePluralUpdate}
      />
      <Divider sx={{ mt: 1, mb: 1 }} />
      <div>kategorier</div>
      <Divider sx={{ mt: 1, mb: 1 }} />
      <div>måleenheter</div>
      <Divider sx={{ mt: 1, mb: 1 }} />
      <SourceText
        text={selected!.nutrientSource.text}
        type={selected!.nutrientSource.type}
      />
    </Box>
  );
};
