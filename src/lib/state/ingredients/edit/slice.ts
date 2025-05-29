import { IIngredient } from "@/lib/models/Ingredients/IIngredient";
import { IIngredientCategory } from "@/lib/models/Ingredients/IIngredientCategory";
import { ICheckboxItem } from "@/lib/models/_shared/ICheckboxItem";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ingredientEditStoreFunctions } from "./collection";
import { IMessure } from "@/lib/models/messure/IMessure";
import { IIngredientMessure } from "@/lib/models/Ingredients/IIngredientMessure";

interface IState {
  selected?: IIngredient;
  original?: IIngredient;

  categories: ICheckboxItem[];

  messures: IMessure[];
  ingredientMessureSelected: IIngredientMessure | null;
  ingredientMessureDialogOpen: boolean;

  changed: boolean;
  loading: boolean;
  loadingSuccess: boolean;
}

const {
  initCategoryCheckboxItems,
  setCategoryCheckboxLoading,
  setCategoryChecked,
} = ingredientEditStoreFunctions;

const initialState: IState = {
  categories: [],
  messures: [],

  ingredientMessureSelected: null,
  ingredientMessureDialogOpen: false,

  changed: false,
  loading: true,
  loadingSuccess: false,
};

const slice = createSlice({
  name: "ingredientEdit",
  initialState,
  reducers: {
    initSelected: (state, action: PayloadAction<IIngredient>) => {
      state.selected = action.payload;
      state.original = action.payload;
    },

    initCategories: (state, action: PayloadAction<IIngredientCategory[]>) => {
      const categories = action.payload.filter((x) => !x.name.includes("TEST"));
      state.categories = initCategoryCheckboxItems(state.selected!, categories);
    },

    initMessures: (state, action: PayloadAction<IMessure[]>) => {
      state.messures = action.payload.filter((x) => {
        if (x.type !== "energi") return x;
      });
    },

    setSelected: (state, action: PayloadAction<IIngredient>) => {
      state.selected = action.payload;
    },

    setCategoryCheckboxLoading: (state, action: PayloadAction<string>) => {
      state.categories = setCategoryCheckboxLoading(
        action.payload,
        state.categories
      );
    },

    setCategoryChecked: (
      state,
      action: PayloadAction<{ id: string; checked: boolean }>
    ) => {
      state.categories = setCategoryChecked(
        action.payload.id,
        action.payload.checked,
        state.categories
      );
    },

    setMessureDialogEdit: (
      state,
      action: PayloadAction<IIngredientMessure>
    ) => {
      state.ingredientMessureSelected = action.payload;
      state.ingredientMessureDialogOpen = true;
    },

    setMessureDialogCreate: (state) => {
      state.ingredientMessureSelected = null;
      state.ingredientMessureDialogOpen = true;
    },

    closeMessureDialog: (state) => {
      state.ingredientMessureSelected = null;
      state.ingredientMessureDialogOpen = false;
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
