import { configureStore } from '@reduxjs/toolkit';
import { ingredientViewStateReducer } from '@/store/ingredients/ingredientViewState';

export const makeStore = () => {
  return configureStore({
    reducer: {
      ingredientView: ingredientViewStateReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;
