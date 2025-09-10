'use client';

import { useRef } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { ingredientApiService } from '@/services/apiservices/ingredientApiService';
import { ingredientViewStateActions } from '@/store/ingredients/ingredientViewState';

export const IngredientViewDataLoader = () => {
  const dispatch = useAppDispatch();
  const loaded = useRef<boolean>(false);

  const { setIngredientAll, setLoadingFailed } = ingredientViewStateActions;

  if (!loaded.current) {
    loaded.current = true;
    ingredientApiService
      .getAll()
      .then((x) => dispatch(setIngredientAll(x)))
      .catch((err) => {
        console.error(err);
        dispatch(setLoadingFailed());
      });
  }

  return null;
};
