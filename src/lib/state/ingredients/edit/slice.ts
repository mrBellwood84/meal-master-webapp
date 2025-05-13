import { IIngredient } from "@/lib/models/Ingredients/IIngredient";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  selected?: IIngredient;
  original?: IIngredient;

  changed: boolean;
  dataLoading: boolean;
  dataLoadSuccess: boolean;
}

const initialState: IState = {
  changed: false,
  dataLoading: true,
  dataLoadSuccess: false,
};

const slice = createSlice({
  name: "ingredientEdit",
  initialState,
  reducers: {
    setSelected: (state, action: PayloadAction<IIngredient>) => {
      state.selected = action.payload;
      state.original = action.payload;
      state.dataLoading = false;
      state.dataLoadSuccess = true;
    },
    setLoadFailed: (state) => {
      state.dataLoading = false;
      state.dataLoadSuccess = false;
    },
  },
});

export const ingredientEditStateActions = slice.actions;
export const ingredientEditReducer = slice.reducer;
