import { IIngredient } from "@/lib/models/Ingredients/IIngredient";
import { IFilterMenuItem } from "@/lib/models/shared/IFilterMenuItem";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ingredientsStoreFunctions } from "./ingredientStoreFunctions";

const {
  initFilterItems,
  updateFilterItemCount,
  extractCategoryKeys,
  stringAndCategorySearch,
} = ingredientsStoreFunctions;

interface IIngredientState {
  all: IIngredient[];
  filtered: IIngredient[];
  selected?: IIngredient;

  searchString: string;

  categoryFilterItems: IFilterMenuItem[];
  categoryFilterKeys: string[];

  dataLoading: boolean;
  dataLoadSuccess: boolean;
}

const initialState: IIngredientState = {
  all: [],
  filtered: [],
  searchString: "",
  categoryFilterItems: [],
  categoryFilterKeys: [],

  dataLoading: true,
  dataLoadSuccess: false,
};

const ingredientSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {
    setAll: (state, action: PayloadAction<IIngredient[]>) => {
      state.all = action.payload;
      state.filtered = action.payload;
      state.categoryFilterItems = initFilterItems(action.payload);
      state.dataLoading = false;
      state.dataLoadSuccess = true;
    },

    setSelected: (state, action: PayloadAction<IIngredient>) => {
      state.selected = action.payload;
    },

    handleSearchString: (state, action: PayloadAction<string>) => {
      const item_result = stringAndCategorySearch(
        action.payload,
        state.all,
        state.categoryFilterKeys
      );
      const category_filter = updateFilterItemCount(
        item_result,
        state.categoryFilterItems
      );

      state.filtered = item_result;
      state.categoryFilterItems = category_filter;
      state.searchString = action.payload;
    },

    handleCategoryFilter: (state, action: PayloadAction<IFilterMenuItem[]>) => {
      const keys = extractCategoryKeys(action.payload);

      const item_result = stringAndCategorySearch(
        state.searchString,
        state.all,
        keys
      );

      state.filtered = item_result;
      state.categoryFilterItems = action.payload;
      state.categoryFilterKeys = keys;
    },

    setLoadFailed: (state) => {
      state.dataLoading = false;
      state.dataLoadSuccess = false;
    },
  },
});

export const ingredientStateActions = ingredientSlice.actions;
export const ingredientReducer = ingredientSlice.reducer;
