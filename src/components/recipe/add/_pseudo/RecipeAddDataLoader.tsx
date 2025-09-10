'use client';

import { useRef } from 'react';
import { recipeApiService } from '@/services/apiservices/recipeApiService';

export const RecipeAddDataLoader = () => {
  const loaded = useRef<boolean>(false);

  if (!loaded.current) {
    loaded.current = true;
    recipeApiService
      .getCrudOptions()
      .then((data) => {
        console.log(data);
        console.warn('recipe crud options fetched, but not stored');
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return null;
};
