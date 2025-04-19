import { createCrudLink } from "@/lib/links/links";
import Link from "next/link";

const links = createCrudLink("/recipe");

const RecipePage = () => {
  return (
    <div>
      <h1>Recipes</h1>
      <div>a bar here for search and add recipies??</div>
      <div>List or cards for recipes</div>
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

export default RecipePage;
