import { ICheckboxItem } from "@/lib/models/_shared/ICheckboxItem";
import { IIngredient } from "@/lib/models/Ingredients/IIngredient";
import { IIngredientCategory } from "@/lib/models/Ingredients/IIngredientCategory";
import { IIngredientMessure } from "@/lib/models/Ingredients/IIngredientMessure";

/**
 * Initializes the category checkbox items based on the ingredient's categories.
 * @param ingredient List of ingredients
 * @param categories List of all ingredient categories
 * @returns List of checkbox items
 */
const initializeCategoryCheckboxItems = (
  ingredient: IIngredient,
  categories: IIngredientCategory[]
) => {
  const checkCategories = ingredient.categories.map((x) => x.id);
  const checkboxItems: ICheckboxItem[] = categories.map((c) => {
    return {
      id: c.id,
      label: c.name,
      checked: checkCategories.includes(c.id),
      loading: false,
    };
  });
  return checkboxItems;
};

/**
 * Sets the loading state of a category checkbox item.
 * @param id The ID of the category checkbox item
 * @param items The list of category checkbox items
 * @returns The updated list of category checkbox items
 */
const setCategoryCheckboxLoading = (id: string, items: ICheckboxItem[]) => {
  const result = [...items];
  const index = result.findIndex((x) => x.id === id);
  if (index !== -1) result[index].loading = true;
  return result;
};

/**
 * Sets the checked state of a category checkbox item.
 * @param id The ID of the category checkbox item
 * @param checked The new checked state
 * @param items The list of category checkbox items
 * @returns The updated list of category checkbox items
 */
const setCategoryChecked = (
  updatedItem: ICheckboxItem,
  items: ICheckboxItem[]
) => {
  const result = [...items];
  const index = result.findIndex((x) => x.id === updatedItem.id);
  if (index !== -1) {
    result[index] = updatedItem;
  }
  return result;
};

/**
 * Ads or updates the ingredient measurements for a specific ingredient.
 * @param ingredient The ingredient to update
 * @param IIngredientMessure The ingredient measurement to update
 * @returns The updated ingredient
 */
const updateIngredientMessures = (
  ingredient: IIngredient,
  IIngredientMessure: IIngredientMessure
) => {
  const selected = { ...ingredient };
  const messures = [...selected.messures];
  const index = messures.findIndex((x) => x.id === IIngredientMessure.id);
  if (index !== -1) messures[index] = IIngredientMessure;
  else messures.push(IIngredientMessure);
  selected.messures = messures;
  return selected;
};

/**
 * Removes an ingredient measurement from the ingredient.
 * @param ingredient The ingredient to update
 * @param id The ID of the measurement to remove
 * @returns The updated ingredient
 */
const removeIngredientMessure = (ingredient: IIngredient, id: string) => {
  const selected = { ...ingredient };
  const messures = [...selected.messures].filter((x) => x.id !== id);
  selected.messures = messures;
  return selected;
};

export const ingredientUpdateStateFunctions = {
  initializeCategoryCheckboxItems,
  setCategoryCheckboxLoading,
  setCategoryChecked,
  updateIngredientMessures,
  removeIngredientMessure,
};
