import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Ingredient } from '@/types/ingredients/IIngredient';

interface IState {
  ingredients: Ingredient[];
  selected?: Ingredient;
  apiLoading: boolean;
  loadingFailed: boolean;
}

const initialState: IState = {
  ingredients: [],
  apiLoading: true,
  loadingFailed: false,
};

const ingredientViewState = createSlice({
  name: 'ingredientView',
  initialState,
  reducers: {
    setIngredientAll: (state, action: PayloadAction<Ingredient[]>) => {
      state.ingredients = action.payload;
      state.apiLoading = false;
    },
    setSelectedIngredient: (state, action: PayloadAction<Ingredient>) => {
      state.selected = action.payload;
    },
    setLoadingFailed: (state) => {
      state.apiLoading = false;
      state.loadingFailed = true;
    },
  },
});

export const ingredientViewStateReducer = ingredientViewState.reducer;
export const ingredientViewStateActions = ingredientViewState.actions;
