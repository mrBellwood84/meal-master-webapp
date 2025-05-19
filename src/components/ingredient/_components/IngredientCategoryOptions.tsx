import { IIngredientCategory } from "@/lib/models/Ingredients/IIngredientCategory";

interface IProps {
  all?: IIngredientCategory[];
  selected?: IIngredientCategory[];
  loading?: boolean;
}
export const IngredientCategoryOptions = ({ loading = false }: IProps) => {
  if (loading) return <div>loading</div>;
  return <div>No loading</div>;
};
