"use client";

import { useAppDispatch, useAppSelector } from "@/lib/state/hooks";
import { ToobarContainer } from "../_shared/containers/ToolbarContainer";
import { SearchTextField } from "../_shared/inputs/SearchTextField";
import { ChangeEvent } from "react";
import { FilterMenu } from "../_shared/inputs/FilterMenu";
import { IFilterMenuItem } from "@/lib/models/shared/IFilterMenuItem";
import { ingredientStateActions } from "@/lib/state/ingredients/ingredientSlice";

export const IngredientToolbar = () => {
  const dispatch = useAppDispatch();

  const searchString = useAppSelector((s) => s.ingredients.searchString);
  const categories = useAppSelector((s) => s.ingredients.categoryFilterItems);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const str = e.target.value;
    dispatch(ingredientStateActions.handleSearchString(str));
  };

  const handleClearClick = () => {
    dispatch(ingredientStateActions.handleSearchString(""));
  };

  const filterCategoryAction = (item: IFilterMenuItem) => {
    const result = categories.map((x) => {
      if (x !== item) return x;
      return { ...x, checked: !item.checked };
    });
    dispatch(ingredientStateActions.handleCategoryFilter(result));
  };

  const filterCategoryClear = () => {
    const result = categories.map((x) => {
      return { ...x, checked: false };
    });
    dispatch(ingredientStateActions.handleCategoryFilter(result));
  };

  return (
    <ToobarContainer>
      <SearchTextField
        value={searchString}
        handleOnChange={handleOnChange}
        handleClearClick={handleClearClick}
      />
      <FilterMenu
        items={categories}
        filterSelectAction={filterCategoryAction}
        filterRemoveAll={filterCategoryClear}
      />
    </ToobarContainer>
  );
};
