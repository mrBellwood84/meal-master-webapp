"use client";

import { IngredientEditDataloader } from "@/components/ingredient/_pseudo/IngredientEditDataloader";
import { IngredientEditContent } from "@/components/ingredient/edit/IngredientEditContent";
import { IngredientEditToolbar } from "@/components/ingredient/edit/IngredientEditToolbar";
import { Fragment, useEffect, useState } from "react";

interface IProps {
  params: Promise<{ ingredient: string }>;
}

const IngredientEditPage = ({ params }: IProps) => {
  const [id, setId] = useState<string>();

  useEffect(() => {
    const loadId = async () => {
      const ingredientId = (await params).ingredient;
      setId(ingredientId);
    };
    if (!id) loadId();
  });

  return (
    <Fragment>
      {id && <IngredientEditDataloader id={id} />}
      <IngredientEditToolbar />
      <IngredientEditContent />
    </Fragment>
  );
};

export default IngredientEditPage;
