"use client";

import { ingredientAgent } from "@/lib/apiagent/ingredientAgent";
import { IIngredient } from "@/lib/models/Ingredients/IIngredient";
import { useAppDispatch } from "@/lib/state/hooks";
import { ingredientReadStateActions } from "@/lib/state/ingredients/read/slice";
import { useEffect, useRef } from "react";

export const IngredientViewDataloader = () => {
  // get redux hooks
  const dispatch = useAppDispatch();

  // local hook
  const apiCalled = useRef<boolean>(false);

  // state actions
  const { loadData, setLoadingFailed } = ingredientReadStateActions;

  // method for api loading
  const handleApiCall = async () => {
    const response = await ingredientAgent.getAll();

    if (response.ok) {
      const data = response.data as IIngredient[];
      dispatch(loadData(data));
      apiCalled.current = true;
      return;
    }
    dispatch(setLoadingFailed());
    apiCalled.current = true;
  };

  // this run to ensure api only load once...
  useEffect(() => {
    if (!apiCalled.current) handleApiCall();
  });

  return null;
};
