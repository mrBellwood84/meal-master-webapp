import { configureStore } from "@reduxjs/toolkit";
import { ingredientReducer } from "./ingredients/ingredientSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      ingredients: ingredientReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
