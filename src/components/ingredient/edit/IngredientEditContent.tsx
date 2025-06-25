import { OneFieldForm } from "@/components/_shared/form/OneFieldForm";
import { useAppDispatch, useAppSelector } from "@/lib/state/hooks";
import { Box, Divider } from "@mui/material";
import { ContentErrorText } from "@/components/_shared/text/ContentError";
import { IIngredientUpdateNameDTO } from "@/lib/models/Ingredients/DTOs/IIngredientUpdateNameDTO";
import { ingredientAgent } from "@/lib/apiagent/ingredientAgent";
import { SourceText } from "@/components/_shared/text/SourceText";
import { AppCheckbox } from "@/components/_shared/form/AppCheckbox";
import { useState } from "react";
import { IIngredientUpdateCategoryDTO } from "@/lib/models/Ingredients/DTOs/IIngredientUpdateCategoryDTO";
import { IIngredientCategory } from "@/lib/models/Ingredients/IIngredientCategory";
import { IIngredient } from "@/lib/models/Ingredients/IIngredient";
import { IngredientEditMessureTable } from "../_components/IngredientEditMessureTable";
import { IngredientEditMessureDialogForm } from "../_components/IngredientEditMessureDialogForm";
import { ingredientUpdateStateActions } from "@/lib/state/ingredients/update/slice";
import { ICheckboxItem } from "@/lib/models/_shared/ICheckboxItem";
import { BoxLoader } from "@/components/_shared/loader/BoxLoader";

export const IngredientEditContent = () => {
  // hooks
  const dispatch = useAppDispatch();

  // actions
  const { updateSelected, updateCategoryCheckbox, setCategoryCheckboxLoading } =
    ingredientUpdateStateActions;

  // states
  const selected = useAppSelector((s) => s.ingredientUpdate.selected);
  const categories = useAppSelector((s) => s.ingredientUpdate.categories);
  const loading = useAppSelector((s) => s.ingredientUpdate.loading);
  const loadingFailed = !useAppSelector(
    (s) => s.ingredientUpdate.loadingSuccess
  );

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
    if (response.ok) dispatch(updateSelected({ ...selected!, name }));
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
    if (response.ok) dispatch(updateSelected({ ...selected!, namePlural }));
    if (!response.ok) console.error("DEV :: Error handling not added");
    setPluralLoading(false);
  };

  const handleCheckBoxOnClick = async (categoryId: string) => {
    dispatch(setCategoryCheckboxLoading(categoryId));

    const updatedSelected = { ...selected };
    const item = categories.find((x) => x.id === categoryId)!;
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

    const updatedCheckbox: ICheckboxItem = {
      ...item,
      checked: !checked,
      loading: false,
    };

    dispatch(updateSelected(updatedSelected as IIngredient));
    dispatch(updateCategoryCheckbox(updatedCheckbox));
  };

  if (loading)
    return (
      <Box>
        <BoxLoader />
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
      <Box sx={{ display: "flex", flexDirection: "column", mt1: 1, mb: 1 }}>
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
      </Box>

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

      <IngredientEditMessureTable messures={selected!.messures} />

      <Divider sx={{ mt: 1, mb: 1 }} />

      <SourceText
        text={selected!.nutrientSource.text}
        type={selected!.nutrientSource.type}
      />

      <IngredientEditMessureDialogForm />
    </Box>
  );
};
