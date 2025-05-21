export interface IIngredientMessure {
  id: string;
  quantity: number;
  name: string;
  namePlural?: string;
  unit: string;
  type: "vekt" | "volum" | "enhet" | string;
}
