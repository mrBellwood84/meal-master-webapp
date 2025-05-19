"use client";

import { ingredientAgent } from "@/lib/apiagent/ingredientAgent";
import { IIngredient } from "@/lib/models/Ingredients/IIngredient";
import { IIngredientCategory } from "@/lib/models/Ingredients/IIngredientCategory";
import { ingredientEditStateActions } from "@/lib/state/ingredients/edit/slice";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

interface IProps {
  id: string;
}

export const IngredientEditDataloader = ({ id }: IProps) => {
  const dispatch = useDispatch();

  const apiCalled = useRef<boolean>(false);

  const { setSelected, setCategories, setLoadingSuccess, setLoadFailed } =
    ingredientEditStateActions;

  const handleApiCall = async () => {
    const ingredientResponse = await ingredientAgent.getSingle(id);

    if (!ingredientResponse.ok) {
      dispatch(setLoadFailed());
      return;
    }

    const categoryResponse = await ingredientAgent.getCategories();
    if (!categoryResponse.ok) {
      dispatch(setLoadFailed());
      return;
    }

    if (!ingredientResponse.ok) {
      const data = ingredientResponse.data as IIngredient;
      dispatch(setSelected(data));
      return;
    }

    dispatch(setSelected(ingredientResponse.data as IIngredient));
    dispatch(setCategories(categoryResponse.data as IIngredientCategory[]));
    dispatch(setLoadingSuccess());
  };

  useEffect(() => {
    if (!apiCalled.current) {
      handleApiCall();
      apiCalled.current = true;
    }
  });

  return null;
};
