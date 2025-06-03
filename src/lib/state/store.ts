import { configureStore } from "@reduxjs/toolkit";
import { ingredientReadStateReducer } from "./ingredients/read/slice";
import { ingredientUpdateStateReducer } from "./ingredients/update/slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      ingredientRead: ingredientReadStateReducer,
      ingredientUpdate: ingredientUpdateStateReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
