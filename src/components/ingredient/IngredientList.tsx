"use client";

import { useAppDispatch, useAppSelector } from "@/lib/state/hooks";
import { AsideContainer } from "../_shared/containers/AsideContainer";
import { AsideListItemButton } from "../_shared/buttons/AsideListItemButton";
import { AsideItemButtonList } from "../_shared/containers/AsideItemButtonList";
import { BoxLoader } from "../_shared/loader/BoxLoader";
import { Typography } from "@mui/material";
import { IIngredient } from "@/lib/models/IIngredient";
import { ingredientSlice } from "@/lib/state/ingredients/ingredientSlice";

export const IngredientList = () => {
  const dispatch = useAppDispatch();

  const filteredData = useAppSelector((s) => s.ingredients.filteredData);
  const loading = useAppSelector((s) => s.ingredients.dataLoading);
  const loadingSuccess = useAppSelector((s) => s.ingredients.dataLoadSuccess);

  const setSelectedIngredient = (item: IIngredient) => {
    dispatch(ingredientSlice.actions.setSelectedIngredient(item));
  };

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
