import { IFilterMenuItem } from "@/lib/models/_shared/IFilterMenuItem";
import { IIngredient } from "@/lib/models/Ingredients/IIngredient";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ingredientReadStateFunctions } from "./collection";

const {
  initializeCategoryFilter,
  updateSelected,
  updateCategoryFilter,
  stringSearchOnly,
  stringAndCategorySearch,
  extractCategoryKeys,
} = ingredientReadStateFunctions;

interface IState {
  all?: IIngredient[];
  filtered?: IIngredient[];
  selected?: IIngredient;

  searchString: string;
  categoryFilterItems: IFilterMenuItem[];
  categoryFilterKeys: string[];

  loading: boolean;
  loadSuccess: boolean;
}

const initialState: IState = {
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
    loadData: (state, action: PayloadAction<IIngredient[]>) => {
      state.all = action.payload;
      state.filtered = stringSearchOnly("", action.payload);
      state.selected = state.selected
        ? updateSelected(state.selected.id, action.payload)
        : undefined;
      state.categoryFilterItems = initializeCategoryFilter(action.payload);
      state.loading = false;
      state.loadSuccess = true;
    },

    setSelected: (state, action: PayloadAction<IIngredient | undefined>) => {
      state.selected = action.payload;
    },

    handleStringSearch: (state, action: PayloadAction<string>) => {
      const itemResult = stringAndCategorySearch(
        action.payload,
        state.all ?? [],
        state.categoryFilterKeys
      );
      const filterResult = updateCategoryFilter(
        itemResult,
        state.categoryFilterItems
      );

      state.filtered = itemResult;
      state.categoryFilterItems = filterResult;
      state.searchString = action.payload;
    },

    handleCategoryFilter: (state, action: PayloadAction<IFilterMenuItem[]>) => {
      const keys = extractCategoryKeys(action.payload);

      const itemResult = stringAndCategorySearch(
        state.searchString,
        state.all ?? [],
        keys
      );

      state.filtered = itemResult;
      state.categoryFilterItems = action.payload;
      state.categoryFilterKeys = keys;
    },

    setLoading: (state) => {
      state.loading = true;
    },

    setLoadSuccess: (state) => {
      state.loading = false;
      state.loadSuccess = true;
    },

    setLoadingFailed: (state) => {
      state.loading = false;
      state.loadSuccess = false;
    },
  },
});

export const ingredientReadStateActions = slice.actions;
export const ingredientReadStateReducer = slice.reducer;
