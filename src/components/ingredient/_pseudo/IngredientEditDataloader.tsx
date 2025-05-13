"use client";

import { ingredientAgent } from "@/lib/apiagent/ingredientAgent";
import { ingredientEditStateActions } from "@/lib/state/ingredients/edit/slice";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

interface IProps {
  id: string;
}

export const IngredientEditDataloader = ({ id }: IProps) => {
  const dispatch = useDispatch();

  const apiCalled = useRef<boolean>(false);

  const { setSelected } = ingredientEditStateActions;

  const handleApiCall = async () => {
    const data = await ingredientAgent.getSingle(id);
    dispatch(setSelected(data));
    apiCalled.current = true;
  };

  useEffect(() => {
    if (!apiCalled.current) handleApiCall();
  });

  return null;
};
