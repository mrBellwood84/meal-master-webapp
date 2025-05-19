import { IIngredient } from "@/lib/models/Ingredients/IIngredient";
import { IIngredientCategory } from "@/lib/models/Ingredients/IIngredientCategory";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  selected?: IIngredient;
  original?: IIngredient;

  categories: IIngredientCategory[];

  changed: boolean;
  loading: boolean;
  loadingSuccess: boolean;
}

const initialState: IState = {
  categories: [],
  changed: false,
  loading: true,
  loadingSuccess: false,
};

const slice = createSlice({
  name: "ingredientEdit",
  initialState,
  reducers: {
    setSelected: (state, action: PayloadAction<IIngredient>) => {
      state.selected = action.payload;
      state.original = action.payload;
    },
    setCategories: (state, action: PayloadAction<IIngredientCategory[]>) => {
      state.categories = action.payload;
    },
    setLoading: (state) => {
      state.loading = true;
      state.loadingSuccess = false;
    },
    setLoadingSuccess: (state) => {
      state.loading = false;
      state.loadingSuccess = true;
    },
    setLoadFailed: (state) => {
      state.loading = false;
      state.loadingSuccess = false;
    },
  },
});

export const ingredientEditStateActions = slice.actions;
export const ingredientEditReducer = slice.reducer;
