import { IIngredientCategory } from "./IIngredientCategory";
import { IMessure } from "./IMessure";
import { INutrientIngredient } from "./INutrientIngredient";
import { ISource } from "./ISource";

export interface IIngredient {
  id: string;
  name: string;
  volumWeightRatio: number;
  messure: IMessure;
  categories: IIngredientCategory[];
  nutrients: INutrientIngredient[];
  souree: ISource;
}
