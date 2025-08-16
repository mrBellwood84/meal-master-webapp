import { _base } from '@/services/apiservices/_base';

export const ingredientApiService = {
  getAll: async () => {
    const response = await _base.get('ingredient');
    if (response.ok) return response.json();
    throw new Error('Failed to get all ingredients');
  },

  getOneById: async (id: string) => {
    const data = await _base.get(`ingredient/${id}`);
    if (data.ok) return data;
    throw new Error('Failed to get single ingredients');
  },
};
