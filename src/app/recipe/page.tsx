import { createCrudLink } from "@/lib/links/links";
import Link from "next/link";

const links = createCrudLink("/recipe");

const RecipePage = () => {
  return (
    <div>
      <h1>Oppskrifter</h1>
      <div>
        Denne siden skal inneholde oppskrifter. Oppskrifter skal vises som liste
        eller cards. Søkbar på navn, kategori, ingredienser, med mer.
      </div>
      <div>
        Det skal også være mulighet for å legge til oppskrifter, enten ved å
        importere fra andre oppskrift sider, eller skrive inn fra bunnen selv.
        Oppskrifter som blir importert fra andre nettsider, vil ha
        kildehenvisning med link.
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

export default RecipePage;
