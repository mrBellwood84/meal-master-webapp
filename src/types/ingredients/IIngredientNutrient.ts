import { INutrient } from '@/types/nutrients/INutrient';

export interface IIngredientNutrient {
  id: string;
  value: number;
  nutrient: INutrient;
}
