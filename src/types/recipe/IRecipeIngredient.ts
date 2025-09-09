import { IIngredient } from '@/types/ingredients/IIngredient';
import { IMeasure } from '@/types/measures/IMeasure';

export interface IRecipeIngredient {
  id: string;
  amount: number;
  ingredient: IIngredient;
  measure: IMeasure;
}
