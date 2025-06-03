import { redirect } from "next/navigation";

const IngredientUpdateRedirectPage = () => {
  redirect("/ingredient");
  return null;
};

export default IngredientUpdateRedirectPage;
