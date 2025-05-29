export interface IIngredientMessure {
  id: string;
  name: string;
  namePlural?: string;
  quantity: number;
  unit: string;
  type: "vekt" | "volum" | "enhet" | string;
}
