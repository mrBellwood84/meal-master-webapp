"use client";

import { ingredientAgent } from "@/lib/apiagent/ingredientAgent";
import { useAppDispatch } from "@/lib/state/hooks";
import { ingredientViewStateActions } from "@/lib/state/ingredients/view/slice";
import { useEffect, useRef } from "react";

export const IngredientViewDataloader = () => {
  // get redux hooks
  const dispatch = useAppDispatch();

  // local hook
  const apiCalled = useRef<boolean>(false);

  // state actions
  const { setAll } = ingredientViewStateActions;

  // method for api loading
  const handleApiCall = async () => {
    const data = await ingredientAgent.getAll();
    dispatch(setAll(data));
    apiCalled.current = true;
  };

  // this run to ensure api only load once...
  useEffect(() => {
    if (!apiCalled.current) handleApiCall();
  });

  return null;
};
