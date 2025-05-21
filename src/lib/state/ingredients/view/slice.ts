import { IIngredient } from "@/lib/models/Ingredients/IIngredient";
import { IFilterMenuItem } from "@/lib/models/_shared/IFilterMenuItem";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ingredientViewStoreFunctions } from "./colletion";

const {
  initCategoryFilterMenuItems,
  updateCategoryFilterMenuItems,
  extractCategoryKeys,
  stringSearchOnly,
  stringAndCategorySearch,
  updateSelected,
} = ingredientViewStoreFunctions;

interface IState {
  all: IIngredient[];
  filtered: IIngredient[];
  selected?: IIngredient;

  searchString: string;

  categoryFilterItems: IFilterMenuItem[];
  categoryFilterKeys: string[];

  loading: boolean;
  loadSuccess: boolean;
}

const initialState: IState = {
  all: [],
  filtered: [],
  searchString: "",
  categoryFilterItems: [],
  categoryFilterKeys: [],

  loading: true,
  loadSuccess: false,
};

const slice = createSlice({
  name: "ingredientView",
  initialState,
  reducers: {
    setAll: (state, action: PayloadAction<IIngredient[]>) => {
      state.all = action.payload;
      state.filtered = stringSearchOnly("", action.payload);
      state.selected = state.selected
        ? updateSelected(state.selected.id, action.payload)
        : undefined;
      state.categoryFilterItems = initCategoryFilterMenuItems(action.payload);
      state.loading = false;
      state.loadSuccess = true;
    },

    setSelected: (state, action: PayloadAction<IIngredient | undefined>) => {
      state.selected = action.payload;
    },

    handleSearchString: (state, action: PayloadAction<string>) => {
      const item_result = stringAndCategorySearch(
        action.payload,
        state.all,
        state.categoryFilterKeys
      );
      const category_filter = updateCategoryFilterMenuItems(
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

    setLoading: (state) => {
      state.loading = true;
    },

    setLoadFailed: (state) => {
      state.loading = false;
      state.loadSuccess = false;
    },
  },
});

export const ingredientViewStateActions = slice.actions;
export const ingredientViewReducer = slice.reducer;
