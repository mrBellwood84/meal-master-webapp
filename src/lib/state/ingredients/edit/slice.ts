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
  ingredientMessureDialogLoading: boolean;

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
  ingredientMessureDialogLoading: false,

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

    setMessureAdded: (state, action: PayloadAction<IIngredientMessure>) => {
      const updatedSelected = state.selected!;
      const updatedMessures = [...updatedSelected.messures];
      updatedMessures.push(action.payload);
      updatedSelected.messures = updatedMessures;
      state.selected = updatedSelected;
    },

    setMessureChanged: (state, action: PayloadAction<IIngredientMessure>) => {
      const index = state.selected!.messures.findIndex(
        (x) => x.id === action.payload.id
      );
      const newMessures = [...state.selected!.messures];
      newMessures[index] = action.payload;
      state.selected!.messures = newMessures;
    },

    setMessureRemoved: (state, action: PayloadAction<string>) => {
      const updatedSelected = state.selected!;
      const updatedMessures = [...updatedSelected.messures].filter(
        (x) => x.id !== action.payload
      );
      updatedSelected.messures = updatedMessures;
      state.selected = updatedSelected;
    },

    setMessureDialogEdit: (
      state,
      action: PayloadAction<IIngredientMessure>
    ) => {
      state.ingredientMessureSelected = action.payload;
      state.ingredientMessureDialogOpen = true;
      state.ingredientMessureDialogLoading = false;
    },

    setMessureDialogCreate: (state) => {
      state.ingredientMessureSelected = null;
      state.ingredientMessureDialogOpen = true;
      state.ingredientMessureDialogLoading = false;
    },

    closeMessureDialog: (state) => {
      state.ingredientMessureSelected = null;
      state.ingredientMessureDialogOpen = false;
      state.ingredientMessureDialogLoading = false;
    },

    setMessureDialogLoading: (state, action: PayloadAction<boolean>) => {
      state.ingredientMessureDialogLoading = action.payload;
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
