import { _base } from '@/services/apiservices/_base';

export const recipeApiService = {
  getCrudOptions: async () => {
    const response = await _base.get('recipe/options');
    if (response.ok) return response.json();
    throw new Error('Failed to get recipe crud options');
  },
};
