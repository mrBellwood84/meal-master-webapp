import { IMeasure } from '@/types/measures/IMeasure';
import { INutrientType } from '@/types/nutrients/INutrientType';

export interface INutrient {
  id: string;
  name: string;
  displayIndex: number;
  measure: IMeasure;
  type: INutrientType;
}
