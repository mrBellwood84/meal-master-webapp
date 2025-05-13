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
import { ingredientViewStateActions } from "@/lib/state/ingredients/view/slice";

export const IngredientViewItemList = () => {
  const dispatch = useAppDispatch();

  // data state
  const filteredData = useAppSelector((s) => s.ingredientView.filtered);

  // search states
  const searchfieldValue = useAppSelector((s) => s.ingredientView.searchString);

  // loading state
  const loading = useAppSelector((s) => s.ingredientView.dataLoading);
  const loadingSuccess = useAppSelector(
    (s) => s.ingredientView.dataLoadSuccess
  );

  // actions
  const { setSelected, handleSearchString } = ingredientViewStateActions;

  // handle ingredient button click
  const setSelectedIngredient = (item: IIngredient) => {
    dispatch(setSelected(item));
  };

  // handle search actions
  const handleSearchFieldChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(handleSearchString(e.target.value));

  const handleSearchClickClear = () => dispatch(handleSearchString(""));

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
        {filteredData.map((x) => (
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
