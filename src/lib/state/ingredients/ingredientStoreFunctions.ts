import { IIngredient } from "@/lib/models/Ingredients/IIngredient";
import { IFilterMenuItem } from "@/lib/models/shared/IFilterMenuItem";

const initFilterItems = (ingredients: IIngredient[]) => {
  const result: IFilterMenuItem[] = [];

  for (let i = 0; i < ingredients.length; i++) {
    const categories = ingredients[i].categories;
    for (let j = 0; j < categories.length; j++) {
      const cat_name = categories[j].name;
      const res_index = result.findIndex((x) => x.name === cat_name);
      if (res_index !== -1) {
        result[res_index].count++;
        continue;
      }
      result.push({
        name: cat_name,
        checked: false,
        count: 1,
      });
    }
  }

  result.sort((a, b) => {
    if (a.name < b.name) return -1;
    return 1;
  });

  return result;
};

const updateFilterItemCount = (
  ingredients: IIngredient[],
  filterItems: IFilterMenuItem[]
) => {
  filterItems.map((x) => (x.count = 0));
  for (let i = 0; i < ingredients.length; i++) {
    const categories = ingredients[i].categories;
    for (let j = 0; j < categories.length; j++) {
      const cat_name = categories[j].name;
      const res_index = filterItems.findIndex((x) => x.name === cat_name);
      filterItems[res_index].count++;
    }
  }
  return filterItems;
};

const extractCategoryKeys = (filterItems: IFilterMenuItem[]) => {
  const result: string[] = [];
  for (let i = 0; i < filterItems.length; i++) {
    if (filterItems[i].checked) result.push(filterItems[i].name);
  }
  return result;
};

const stringSearchOnly = (searchString: string, ingedients: IIngredient[]) => {
  const result: IIngredient[] = [];
  const ss_norm = searchString.toLowerCase();
  for (let i = 0; i < ingedients.length; i++) {
    if (ingedients[i].name.includes(ss_norm)) result.push(ingedients[i]);
  }
  return result;
};

const categorySearchOnly = (
  categoryKeys: string[],
  ingedients: IIngredient[]
) => {
  if (categoryKeys.length == 0) return ingedients;

  const result: IIngredient[] = [];
  for (let i = 0; i < ingedients.length; i++) {
    const item = ingedients[i];
    const categories = item.categories;
    let match = false;
    for (let j = 0; j < categories.length; j++) {
      if (categoryKeys.includes(categories[j].name)) {
        match = true;
        break;
      }
    }
    if (match) result.push(item);
  }
  return result;
};

const stringAndCategorySearch = (
  searchString: string,
  ingredients: IIngredient[],
  categoryKeys: string[]
) => {
  if (categoryKeys.length === 0)
    return stringSearchOnly(searchString, ingredients);

  const result: IIngredient[] = [];
  const ss_norm = searchString.toLowerCase();

  for (let i = 0; i < ingredients.length; i++) {
    const item = ingredients[i];
    const stringMatch = item.name.includes(ss_norm);
    if (!stringMatch) continue;

    const cats = item.categories;
    for (let j = 0; j < cats.length; j++) {
      if (categoryKeys.includes(cats[j].name)) {
        result.push(item);
        break;
      }
    }
  }
  return result;
};

export const ingredientsStoreFunctions = {
  initFilterItems,
  updateFilterItemCount,
  extractCategoryKeys,
  stringSearchOnly,
  categorySearchOnly,
  stringAndCategorySearch,
};
