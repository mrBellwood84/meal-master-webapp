import { IIngredient } from "../models/IIngredient";
import { _rootAgent } from "./_rootAgent";

const path = "ingredient";

export const ingredientAgent = {
  getAll: async () => {
    const response = await _rootAgent.get(path);
    const data: IIngredient[] = await response.json();
    return data;
  },
};
