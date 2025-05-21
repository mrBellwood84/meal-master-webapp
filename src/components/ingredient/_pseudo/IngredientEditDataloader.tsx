"use client";

import { ingredientAgent } from "@/lib/apiagent/ingredientAgent";
import { messureAgent } from "@/lib/apiagent/messureAgent";
import { IIngredient } from "@/lib/models/Ingredients/IIngredient";
import { IIngredientCategory } from "@/lib/models/Ingredients/IIngredientCategory";
import { IMessure } from "@/lib/models/messure/IMessure";
import { ingredientEditStateActions } from "@/lib/state/ingredients/edit/slice";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

interface IProps {
  id: string;
}

export const IngredientEditDataloader = ({ id }: IProps) => {
  const dispatch = useDispatch();

  const apiCalled = useRef<boolean>(false);

  const {
    initSelected,
    initCategories,
    initMessures,
    setLoadingSuccess,
    setLoadFailed,
  } = ingredientEditStateActions;

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

    dispatch(initSelected(ingredientResponse.data as IIngredient));
    dispatch(initCategories(categoryResponse.data as IIngredientCategory[]));
    dispatch(initMessures(messureResponse.data as IMessure[]));
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
