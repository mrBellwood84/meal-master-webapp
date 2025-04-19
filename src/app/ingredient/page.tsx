import { createCrudLink } from "@/lib/links/links";
import Link from "next/link";

const links = createCrudLink("/ingredient");

const IngredientPage = () => {
  return (
    <div>
      <h1>Ingredient page</h1>
      <div>This page will hold registered Ingredients</div>
      <div>
        should include a search bar, and option to get incomplete Ingredient
        entities
      </div>
      <ul>
        {links.map((x) => (
          <li key={x.key}>
            <Link href={x.url}>{x.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientPage;
