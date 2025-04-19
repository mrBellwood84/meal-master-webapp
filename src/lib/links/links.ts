import { IPageLink } from "./IPageLink";

export const appbarLinks: IPageLink[] = [
  {
    title: "Oppskrifter",
    key: "recipe",
    url: "/recipe",
  },
  {
    title: "Ingredienser",
    key: "ingredient",
    url: "/ingredient",
  },
  {
    title: "Kalender",
    key: "calendar",
    url: "/calendar",
  },
  {
    title: "Handleliste",
    key: "shopping",
    url: "/shopping",
  },
];

export const createCrudLink = (rootUrl: string) => {
  const titles: string[] = ["create", "update", "view", "delete"];
  const result: IPageLink[] = titles.map((x) => {
    return {
      title: x,
      key: x,
      url: `${rootUrl}/${x}`,
    };
  });
  return result;
};
