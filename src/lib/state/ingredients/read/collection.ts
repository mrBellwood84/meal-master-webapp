import { IFilterMenuItem } from "@/lib/models/_shared/IFilterMenuItem";
import { IIngredient } from "@/lib/models/Ingredients/IIngredient";

/**
 * Initialize the category filter with the ingredients provided.
 * This function creates a list of unique categories from the ingredients
 * and counts how many ingredients belong to each category.
 * @param ingredients The array of ingredients to initialize the category filter.
 * @returns An array of filter menu items representing the unique categories.
 */
const initializeCategoryFilter = (ingredients: IIngredient[]) => {
  const result: IFilterMenuItem[] = [];

  for (const ingredient of ingredients) {
    for (const category of ingredient.categories) {
      if (category.name.includes("TEST")) continue;
      const existingCategory = result.find((x) => x.name === category.name);
      if (existingCategory) {
        existingCategory.count++;
        continue;
      }
      result.push({
        name: category.name,
        checked: false,
        count: 1,
      });
    }
  }
  result.sort((a, b) => (a.name < b.name ? -1 : 1));
  return result;
};

/**
 * Update the category filter based on the current ingredients.
 * This function updates the count of each category in the filter items
 * and resets the count for categories that are not present in the ingredients.
 * @param ingredients The array of ingredients to update the filter.
 * @param filterItems The array of filter menu items to update.
 * @returns The updated array of filter menu items.
 */
const updateCategoryFilter = (
  ingredients: IIngredient[],
  filterItems: IFilterMenuItem[]
) => {
  filterItems.map((x) => (x.count = 0));
  for (const ingredient of ingredients) {
    for (const category of ingredient.categories) {
      if (category.name.includes("TEST")) continue;
      const resIndex = filterItems.findIndex((x) => x.name === category.name);
      if (resIndex !== -1) filterItems[resIndex].count++;
    }
  }
  return filterItems;
};

/**
 * Extract the keys of the categories that are checked in the filter items.
 * @param filterItems The array of filter menu items to extract keys from.
 * @returns An array of category names that are checked in the filter items.
 */
const extractCategoryKeys = (filterItems: IFilterMenuItem[]) => {
  const result: string[] = [];
  for (const item of filterItems) {
    if (item.name.includes("TEST")) continue;
    if (item.checked) result.push(item.name);
  }
  return result;
};

/**
 * Search for ingredients based on the search string.
 * @param searchString The search string to match against ingredient names.
 * @param ingredients The array of ingredients to search.
 * @returns An array of ingredients that match the search string.
 */
const stringSearchOnly = (searchString: string, ingredients: IIngredient[]) => {
  const result: IIngredient[] = [];
  const ss_norm = searchString.toLowerCase();
  for (const ingredient of ingredients) {
    if (ingredient.name.includes("TEST")) continue;
    if (ingredient.name.toLowerCase().includes(ss_norm))
      result.push(ingredient);
  }
  return result;
};

/**
 * Search for ingredients based on checked categories.
 * @param categoryKeys The array of category names to match against ingredient categories.
 * @param ingredients The array of ingredients to search.
 * @returns An array of ingredients that belong to the specified categories.
 */
const categorySearchOnly = (
  categoryKeys: string[],
  ingredients: IIngredient[]
) => {
  if (categoryKeys.length == 0) return ingredients;

  const result: IIngredient[] = [];
  for (const ingredient of ingredients) {
    const categories = ingredient.categories;
    let match = false;
    for (const category of categories) {
      if (categoryKeys.includes(category.name)) {
        match = true;
        break;
      }
    }
    if (match) result.push(ingredient);
  }
  return result;
};

/**
 * Search for ingredients based on both search string and category keys.
 * @param searchString The search string to match against ingredient names.
 * @param ingredients The array of ingredients to search.
 * @param categoryKeys The array of category names to match against ingredient categories.
 * @returns An array of ingredients that match the search string and belong to the specified categories.
 */
const stringAndCategorySearch = (
  searchString: string,
  ingredients: IIngredient[],
  categoryKeys: string[]
) => {
  if (categoryKeys.length === 0)
    return stringSearchOnly(searchString, ingredients);

  const result: IIngredient[] = [];
  const ss_norm = searchString.toLowerCase();

  for (const ingredient of ingredients) {
    if (ingredient.name.includes("TEST")) continue;
    if (!ingredient.name.toLowerCase().includes(ss_norm)) continue;

    const categories = ingredient.categories;
    for (const category of categories) {
      if (categoryKeys.includes(category.name)) {
        result.push(ingredient);
        break;
      }
    }
  }
  return result;
};

/**
 * Update the selected ingredient based on the selected ID.
 * @param selectedId The ID of the ingredient to update.
 * @param ingredients The array of ingredients to search.
 * @returns The updated ingredient or undefined if not found.
 */
const updateSelected = (selectedId: string, ingredients: IIngredient[]) => {
  const i = ingredients.findIndex((x) => x.id === selectedId);
  if (i === -1) return undefined;
  return ingredients[i];
};

/**
 * Exported functions for ingredient read state management.
 */
export const ingredientReadStateFunctions = {
  initializeCategoryFilter,
  updateCategoryFilter,
  extractCategoryKeys,
  stringSearchOnly,
  categorySearchOnly,
  stringAndCategorySearch,
  updateSelected,
};
