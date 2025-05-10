"use client";

import { ingredientAgent } from "@/lib/apiagent/ingredientAgent";
import { useAppDispatch } from "@/lib/state/hooks";
import { ingredientStateActions } from "@/lib/state/ingredients/ingredientSlice";
import { useEffect, useRef } from "react";

export const IngredientDataLoader = () => {
  // get redux hooks
  const dispatch = useAppDispatch();

  // local hook
  const runApiLoad = useRef<boolean>(false);

  // method for api loading
  const apiLoad = async () => {
    const data = await ingredientAgent.getAll();
    dispatch(ingredientStateActions.setAll(data));
    runApiLoad.current = true;
  };

  // this run to ensure api only load once...
  useEffect(() => {
    if (!runApiLoad.current) apiLoad();
  });

  return null;
};
