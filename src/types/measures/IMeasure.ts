import { IMeasureType } from '@/types/measures/IMeasureType';

export interface IMeasure {
  id: string;
  name: string;
  namePlural: string;
  unit: string;
  relativeSize: number;
  type: IMeasureType;
}
