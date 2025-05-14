import { ISource } from "../ISource";
import { IIngredientCategory } from "./IIngredientCategory";
import { IIngredientMessure } from "./IIngredientMessure";
import { IIngredientNutrient } from "./IIngredientNutrient";

export interface IIngredient {
  id: string;
  name: string;
  namePlural?: string;
  messures: IIngredientMessure[];
  categories: IIngredientCategory[];
  nutrients: IIngredientNutrient[];
  nutrientSource: ISource;
}
