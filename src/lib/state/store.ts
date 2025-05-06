import { configureStore } from "@reduxjs/toolkit";
import { ingredientSlice } from "./ingredients/ingredientSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      ingredients: ingredientSlice.reducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
