import { IIngredientUpdateCategoryDTO } from "../models/Ingredients/DTOs/IIngredientUpdateCategoryDTO";
import { IIngredientUpdateNameDTO } from "../models/Ingredients/DTOs/IIngredientUpdateNameDTO";
import { IIngredient } from "../models/Ingredients/IIngredient";
import { IIngredientCategory } from "../models/Ingredients/IIngredientCategory";
import { _rootAgent } from "./_rootAgent";

const path = "ingredient";

export const ingredientAgent = {
  getAll: async () => {
    const response = await _rootAgent.get(path);
    const { ok, status, statusText } = response;
    const data: IIngredient[] | null = ok ? await response.json() : null;

    return {
      data,
      ok,
      status,
      statusText,
    };
  },

  getSingle: async (id: string) => {
    const domain = `${path}/${id}`;
    const response = await _rootAgent.get(domain);
    const { ok, status, statusText } = response;
    const data: IIngredient | null = ok ? await response.json() : null;

    return {
      data,
      ok,
      status,
      statusText,
    };
  },

  getCategories: async () => {
    const domain = `${path}/category`;
    const response = await _rootAgent.get(domain);
    const { ok, status, statusText } = response;
    const data: IIngredientCategory[] | null = ok
      ? await response.json()
      : null;

    return {
      data,
      ok,
      status,
      statusText,
    };
  },

  updateName: async (dto: IIngredientUpdateNameDTO) => {
    const domain = `${path}/update/name`;
    const response = await _rootAgent.put(domain, dto);
    const { ok, status, statusText } = response;

    return { ok, status, statusText };
  },

  addCategory: async (dto: IIngredientUpdateCategoryDTO) => {
    const domain = `${path}/category`;
    const response = await _rootAgent.post(domain, dto);
    const { ok, status, statusText } = response;

    return { ok, status, statusText };
  },

  removeCategory: async (dto: IIngredientUpdateCategoryDTO) => {
    const domain = `${path}/category`;
    const response = await _rootAgent.delete(domain, dto);
    const { ok, status, statusText } = response;

    return { ok, status, statusText };
  },
};
