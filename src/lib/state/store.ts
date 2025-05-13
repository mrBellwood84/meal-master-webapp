import { configureStore } from "@reduxjs/toolkit";
import { ingredientViewReducer } from "./ingredients/view/slice";
import { ingredientEditReducer } from "./ingredients/edit/slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      ingredientEdit: ingredientEditReducer,
      ingredientView: ingredientViewReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
