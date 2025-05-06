"use client";

import { useAppSelector } from "@/lib/state/hooks";

export const IngredientView = () => {
  const selected = useAppSelector((s) => s.ingredients.selected);
  if (!selected) return <div> Ingenting valgt </div>;
  return <div>{selected.name}</div>;
};
