import { IngredientCategory } from '@/types/ingredients/IIngredientCategory';
import { IIngredientMeasure } from '@/types/ingredients/IIngredientMeasure';
import { IIngredientNutrient } from '@/types/ingredients/IIngredientNutrient';
import { ISource } from '@/types/misc/ISource';

export interface Ingredient {
  id: string;
  name: string;
  namePlural: string;
  categories: IngredientCategory[];
  measures: IIngredientMeasure[];
  nutrients: IIngredientNutrient[];
  nutrientSource: ISource;
}
