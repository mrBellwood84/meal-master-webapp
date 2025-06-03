"use client";

import { useAppDispatch, useAppSelector } from "@/lib/state/hooks";
import { AsideContainer } from "../_shared/containers/AsideContainer";
import { AsideListItemButton } from "../_shared/buttons/AsideListItemButton";
import { AsideItemButtonList } from "../_shared/containers/AsideItemButtonList";
import { BoxLoader } from "../_shared/loader/BoxLoader";
import { ListItem, Typography } from "@mui/material";
import { IIngredient } from "@/lib/models/Ingredients/IIngredient";
import { ChangeEvent } from "react";
import { SearchTextField } from "../_shared/inputs/SearchTextField";
import { ingredientReadStateActions } from "@/lib/state/ingredients/read/slice";

export const IngredientViewItemList = () => {
  const dispatch = useAppDispatch();

  // data state
  const filteredData = useAppSelector((s) => s.ingredientRead.filtered);

  // search states
  const searchfieldValue = useAppSelector((s) => s.ingredientRead.searchString);

  // loading state
  const loading = useAppSelector((s) => s.ingredientRead.loading);
  const loadingSuccess = useAppSelector((s) => s.ingredientRead.loadSuccess);

  // actions
  const { setSelected, handleStringSearch } = ingredientReadStateActions;

  // handle ingredient button click
  const setSelectedIngredient = (item: IIngredient) => {
    dispatch(setSelected(item));
  };

  // handle search actions
  const handleSearchFieldChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(handleStringSearch(e.target.value));

  const handleSearchClickClear = () => dispatch(handleStringSearch(""));

  if (loading)
    return (
      <AsideContainer>
        <BoxLoader size={50} />
      </AsideContainer>
    );

  if (!loadingSuccess)
    return (
      <AsideContainer>
        <Typography
          color="error"
          variant="h6"
          component="div"
          sx={{ m: 2, textAlign: "center" }}
        >
          Ingen data
        </Typography>
      </AsideContainer>
    );

  return (
    <AsideContainer>
      <AsideItemButtonList>
        <ListItem sx={{ mb: 1, mt: 1 }}>
          <SearchTextField
            value={searchfieldValue}
            handleOnChange={handleSearchFieldChange}
            handleClearClick={handleSearchClickClear}
          />
        </ListItem>
        {filteredData &&
          filteredData.map((x) => (
            <AsideListItemButton
              key={x.id}
              label={x.name}
              onClick={() => setSelectedIngredient(x)}
            />
          ))}
      </AsideItemButtonList>
    </AsideContainer>
  );
};
