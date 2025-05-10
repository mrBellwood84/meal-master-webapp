import { IMessure } from "../IMessure";
import { INutrientIngredient } from "../INutrientIngredient";
import { ISource } from "../ISource";
import { IIngredientCategory } from "./IIngredientCategory";

export interface IIngredient {
  id: string;
  name: string;
  volumWeightRatio: number;
  messure: IMessure;
  categories: IIngredientCategory[];
  nutrients: INutrientIngredient[];
  souree: ISource;
}
