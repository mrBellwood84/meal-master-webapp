import { OneFieldForm } from "@/components/_shared/form/OneFieldForm";
import { useAppDispatch, useAppSelector } from "@/lib/state/hooks";
import { Box, Divider } from "@mui/material";
import { ContentErrorText } from "@/components/_shared/text/ContentError";
import { IIngredientUpdateNameDTO } from "@/lib/models/Ingredients/DTOs/IIngredientUpdateNameDTO";
import { ingredientAgent } from "@/lib/apiagent/ingredientAgent";
import { ingredientEditStateActions } from "@/lib/state/ingredients/edit/slice";
import { SourceText } from "@/components/_shared/text/SourceText";
import { AppCheckbox } from "@/components/_shared/form/AppCheckbox";
import { useState } from "react";
import { IIngredientUpdateCategoryDTO } from "@/lib/models/Ingredients/DTOs/IIngredientUpdateCategoryDTO";
import { IIngredientCategory } from "@/lib/models/Ingredients/IIngredientCategory";
import { IIngredient } from "@/lib/models/Ingredients/IIngredient";

export const IngredientEditContent = () => {
  // hooks
  const dispatch = useAppDispatch();

  // actions
  const { setSelected, setCategoryCheckboxLoading, setCategoryChecked } =
    ingredientEditStateActions;

  // states
  const selected = useAppSelector((s) => s.ingredientEdit.selected);
  const categories = useAppSelector((s) => s.ingredientEdit.categories);
  const loading = useAppSelector((s) => s.ingredientEdit.loading);
  const loadingFailed = !useAppSelector((s) => s.ingredientEdit.loadingSuccess);

  const [nameLoading, setNameLoading] = useState<boolean>(false);
  const [pluralLoading, setPluralLoading] = useState<boolean>(false);

  // handle functions
  const handleNameUpdate = async (name: string) => {
    setNameLoading(true);
    const dto: IIngredientUpdateNameDTO = {
      id: selected!.id,
      name,
      namePlural: selected!.namePlural ?? "",
    };
    const response = await ingredientAgent.updateName(dto);
    if (response.ok) dispatch(setSelected({ ...selected!, name }));
    if (!response.ok) console.error("DEV :: Error handling not added");
    setNameLoading(false);
  };

  const handleNamePluralUpdate = async (namePlural: string) => {
    setPluralLoading(true);
    const dto: IIngredientUpdateNameDTO = {
      id: selected!.id,
      name: selected!.name,
      namePlural,
    };
    const response = await ingredientAgent.updateName(dto);
    if (response.ok) dispatch(setSelected({ ...selected!, namePlural }));
    if (!response.ok) console.error("DEV :: Error handling not added");
    setPluralLoading(false);
  };

  const handleCheckBoxOnClick = async (categoryId: string) => {
    dispatch(setCategoryCheckboxLoading(categoryId));

    const updatedSelected = { ...selected };
    const item = categories.find((x) => x.id === categoryId);
    const checked = item!.checked;

    const dto: IIngredientUpdateCategoryDTO = {
      ingredientId: selected!.id,
      categoryId: categoryId,
    };

    if (checked) {
      await ingredientAgent.removeCategory(dto);
      updatedSelected.categories = updatedSelected.categories!.filter(
        (x) => x.id !== item!.id
      );
    }

    if (!checked) {
      await ingredientAgent.addCategory(dto);
      const updatedCategories = [...updatedSelected.categories!];
      const category: IIngredientCategory = {
        id: item!.id,
        name: item!.label,
      };
      updatedCategories.push(category);
      updatedSelected.categories = updatedCategories;
    }

    dispatch(setSelected(updatedSelected as IIngredient));
    dispatch(setCategoryChecked({ id: item!.id, checked }));
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
        loading={nameLoading}
        handleSave={handleNameUpdate}
      />
      <OneFieldForm
        label="Flertall"
        value={selected!.namePlural}
        loading={pluralLoading}
        handleSave={handleNamePluralUpdate}
      />

      <Divider sx={{ mt: 1, mb: 1 }} />

      <Box
        sx={{
          display: "grid",
          gridAutoRows: "auto",
          gridTemplateColumns: "repeat(8, 1fr)",
        }}
      >
        {categories.map((c) => (
          <AppCheckbox
            key={c.id}
            label={c.label}
            checked={c.checked}
            loading={c.loading}
            onChange={() => handleCheckBoxOnClick(c.id)}
          />
        ))}
      </Box>

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
