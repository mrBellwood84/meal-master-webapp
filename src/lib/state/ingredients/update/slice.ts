import { ICheckboxItem } from "@/lib/models/_shared/ICheckboxItem";
import { IIngredient } from "@/lib/models/Ingredients/IIngredient";
import { IIngredientMessure } from "@/lib/models/Ingredients/IIngredientMessure";
import { IMessure } from "@/lib/models/messure/IMessure";
import { ingredientUpdateStateFunctions } from "./collection";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IIngredientCategory } from "@/lib/models/Ingredients/IIngredientCategory";

const {
  initializeCategoryCheckboxItems,
  updateIngredientMessures,
  removeIngredientMessure,
  resetCategoryCheckboxItems,
  setCategoryCheckboxLoading,
  setCategoryChecked,
  checkSelectedChanged,
} = ingredientUpdateStateFunctions;

interface IDataLoadAction {
  ingredient: IIngredient;
  categories: IIngredientCategory[];
  messures: IMessure[];
}

interface IState {
  selected?: IIngredient;
  original?: IIngredient;

  categories: ICheckboxItem[];
  messures: IMessure[];

  ingredientMessureSelected?: IIngredientMessure;

  ingredientMessureDialogOpen: boolean;
  ingredientMessureDialogLoading: boolean;

  changed: boolean;
  loading: boolean;
  loadingSuccess: boolean;
}

const initialState: IState = {
  categories: [],
  messures: [],
  ingredientMessureDialogOpen: false,
  ingredientMessureDialogLoading: false,
  changed: false,
  loading: true,
  loadingSuccess: false,
};

const slice = createSlice({
  name: "ingredientUpdate",
  initialState,
  reducers: {
    loadData: (state, action: PayloadAction<IDataLoadAction>) => {
      const categories = action.payload.categories.filter(
        (c) => !c.name.includes("TEST")
      );

      state.selected = action.payload.ingredient;
      state.original = action.payload.ingredient;
      state.categories = initializeCategoryCheckboxItems(
        action.payload.ingredient,
        categories
      );
      state.messures = action.payload.messures.filter(
        (x) => x.type !== "energi"
      );
      state.loading = false;
      state.loadingSuccess = true;
    },

    updateSelected: (state, action: PayloadAction<IIngredient>) => {
      state.selected = action.payload;
      state.changed = checkSelectedChanged(
        action.payload,
        state.original as IIngredient
      );
    },

    setCategoryCheckboxLoading: (state, action: PayloadAction<string>) => {
      const updatedCategories = setCategoryCheckboxLoading(
        action.payload,
        state.categories
      );
      state.categories = updatedCategories;
    },

    updateCategoryCheckbox: (state, action: PayloadAction<ICheckboxItem>) => {
      state.categories = setCategoryChecked(action.payload, state.categories);
    },

    updateIngredientMessure: (
      state,
      action: PayloadAction<IIngredientMessure>
    ) => {
      const updatedSelected = updateIngredientMessures(
        state.selected as IIngredient,
        action.payload
      );
      state.selected = updatedSelected;
      state.changed = checkSelectedChanged(
        updatedSelected,
        state.original as IIngredient
      );
    },

    removeIngredientMessure: (state, action: PayloadAction<string>) => {
      const updatedSelected = removeIngredientMessure(
        state.selected as IIngredient,
        action.payload
      );
      state.selected = updatedSelected;
      state.changed = checkSelectedChanged(
        updatedSelected,
        state.original as IIngredient
      );
    },

    undoAllChanges: (state) => {
      state.selected = state.original;
      state.changed = false;
      state.categories = resetCategoryCheckboxItems(
        state.selected as IIngredient,
        state.categories
      );
    },

    openMessureDialogCreate: (state) => {
      state.ingredientMessureSelected = undefined;
      state.ingredientMessureDialogOpen = true;
      state.ingredientMessureDialogLoading = false;
    },

    openMessureDialogUpdate: (
      state,
      action: PayloadAction<IIngredientMessure>
    ) => {
      state.ingredientMessureSelected = action.payload;
      state.ingredientMessureDialogOpen = true;
      state.ingredientMessureDialogLoading = false;
    },

    closeMessureDialog: (state) => {
      state.ingredientMessureSelected = undefined;
      state.ingredientMessureDialogOpen = false;
      state.ingredientMessureDialogLoading = false;
    },

    setMessureDialogLoading: (state, action: PayloadAction<boolean>) => {
      state.ingredientMessureDialogLoading = action.payload;
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

export const ingredientUpdateStateActions = slice.actions;
export const ingredientUpdateStateReducer = slice.reducer;
