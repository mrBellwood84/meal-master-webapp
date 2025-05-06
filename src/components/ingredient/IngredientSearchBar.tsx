"use client";

import { useAppDispatch, useAppSelector } from "@/lib/state/hooks";
import { ToobarContainer } from "../_shared/containers/ToolbarContainer";
import { SearchTextField } from "../_shared/inputs/SearchTextField";
import { ChangeEvent } from "react";
import { ingredientSlice } from "@/lib/state/ingredients/ingredientSlice";

export const IngredientSearchBar = () => {
  const dispatch = useAppDispatch();

  const searchString = useAppSelector((s) => s.ingredients.searchString);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const str = e.target.value;
    dispatch(ingredientSlice.actions.setSearchString(str));
  };

  const handleClearClick = () => {
    dispatch(ingredientSlice.actions.setSearchString(""));
  };

  return (
    <ToobarContainer>
      <SearchTextField
        value={searchString}
        handleOnChange={handleOnChange}
        handleClearClick={handleClearClick}
      />
    </ToobarContainer>
  );
};
