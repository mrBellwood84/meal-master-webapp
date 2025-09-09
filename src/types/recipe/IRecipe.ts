import { IRecipeIngredient } from '@/types/recipe/IRecipeIngredient';
import { IRecipeStep } from '@/types/recipe/IRecipeStep';
import { IRecipeCategory } from '@/types/recipe/RecipeCategory';
import { ISource } from '@/types/misc/ISource';

export interface IRecipe {
  id: string;
  title: string;
  description: string;
  portions: number;
  ingredients: IRecipeIngredient[];
  steps: IRecipeStep[];
  categories: IRecipeCategory[];
  source: ISource;
}
