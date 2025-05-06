import { IIngredient } from "@/lib/models/IIngredient";

export const ingredientSearchFilter = (
  searchString: string,
  itemList: IIngredient[]
) => {
  const ss = searchString.toLowerCase();
  return itemList.filter((x) => x.name.includes(ss));
};
