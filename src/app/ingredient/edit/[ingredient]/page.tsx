"use client";

import { IngredientEditDataloader } from "@/components/ingredient/_pseudo/IngredientEditDataloader";
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
      <div>Endre navn</div>
      <div>Ende navn flertall</div>
      <div>Checkbox kategorier</div>
      <div>Rediger målenheter</div>
      <div>Se kilde</div>
      <br />
      <div>Endring blir sendt direkte etter endring av felt</div>
    </Fragment>
  );
};

export default IngredientEditPage;
