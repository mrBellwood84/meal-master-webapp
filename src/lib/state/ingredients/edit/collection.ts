import { IIngredient } from "@/lib/models/Ingredients/IIngredient";
import { IIngredientCategory } from "@/lib/models/Ingredients/IIngredientCategory";
import { ICheckboxItem } from "@/lib/models/shared/ICheckboxItem";

const initCategoryCheckboxItems = (
  selected: IIngredient,
  categories: IIngredientCategory[]
) => {
  const selectedCategories = selected.categories.map((x) => x.id);
  const result: ICheckboxItem[] = categories.map((x) => {
    return {
      id: x.id,
      label: x.name,
      checked: selectedCategories.includes(x.id),
      loading: false,
    };
  });
  return result;
};

const setCategoryCheckboxLoading = (id: string, items: ICheckboxItem[]) => {
  const result = [...items];
  const index = result.findIndex((x) => x.id === id);
  result[index].loading = true;
  return result;
};

const setCategoryChecked = (
  id: string,
  checked: boolean,
  items: ICheckboxItem[]
) => {
  const result = [...items];
  const index = result.findIndex((x) => x.id === id);
  result[index].checked = !checked;
  result[index].loading = false;
  return result;
};

export const ingredientEditStoreFunctions = {
  initCategoryCheckboxItems,
  setCategoryCheckboxLoading,
  setCategoryChecked,
};
