"use client";

import { ingredientAgent } from "@/lib/apiagent/ingredientAgent";
import { messureAgent } from "@/lib/apiagent/messureAgent";
import { IIngredient } from "@/lib/models/Ingredients/IIngredient";
import { IIngredientCategory } from "@/lib/models/Ingredients/IIngredientCategory";
import { IMessure } from "@/lib/models/messure/IMessure";
import { ingredientUpdateStateActions } from "@/lib/state/ingredients/update/slice";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

interface IProps {
  id: string;
}

export const IngredientEditDataloader = ({ id }: IProps) => {
  const dispatch = useDispatch();

  const apiCalled = useRef<boolean>(false);

  const { loadData, setLoadFailed } = ingredientUpdateStateActions;

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

    const messureResponse = await messureAgent.getAll();
    if (!messureResponse.ok) {
      dispatch(setLoadFailed());
      return;
    }

    dispatch(
      loadData({
        ingredient: ingredientResponse.data as IIngredient,
        categories: categoryResponse.data as IIngredientCategory[],
        messures: messureResponse.data as IMessure[],
      })
    );
  };

  useEffect(() => {
    if (!apiCalled.current) {
      handleApiCall();
      apiCalled.current = true;
    }
  });

  return null;
};
