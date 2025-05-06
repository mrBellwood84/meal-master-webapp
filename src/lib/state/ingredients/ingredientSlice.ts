import { IIngredient } from "@/lib/models/IIngredient";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ingredientSearchFilter } from "./searchFunctions";

export interface IngredientState {
  allData: IIngredient[];
  filteredData: IIngredient[];
  selected: IIngredient | null;

  searchString: string;

  dataLoading: boolean;
  dataLoadSuccess: boolean;
}

const initialState: IngredientState = {
  allData: [],
  filteredData: [],
  selected: null,

  searchString: "",

  dataLoading: true,
  dataLoadSuccess: false,
};

export const ingredientSlice = createSlice({
  name: "ingredient",
  initialState,
  reducers: {
    setAllIngredients: (state, action: PayloadAction<IIngredient[]>) => {
      state.allData = action.payload;
      state.filteredData = action.payload;
      state.dataLoading = false;
      state.dataLoadSuccess = true;
    },

    setSelectedIngredient: (state, action: PayloadAction<IIngredient>) => {
      state.selected = action.payload;
    },

    setSearchString: (state, action: PayloadAction<string>) => {
      const lenOldStr = action.payload.length;
      const lenNewStr = state.searchString.length;
      state.searchString = action.payload;

      if (!action.payload) {
        state.filteredData = state.allData;
        return;
      }
      if (lenNewStr > lenOldStr) {
        state.filteredData = ingredientSearchFilter(
          action.payload,
          state.filteredData
        );
      }
      state.filteredData = ingredientSearchFilter(
        action.payload,
        state.allData
      );
    },

    setLoadFailed: (state) => {
      state.dataLoading = false;
    },
  },
});
