const baseUrl = process.env.NEXT_PUBLIC_MEALMASTER_API_URL;

export const _base = {
  get: async (path: string) => {
    const url = `${baseUrl}${path}`;

    return await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {},
    });
  },

  post: async (path: string, body: object) => {
    const url = `${baseUrl}${path}`;

    return await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  },

  put: async (path: string, body: object) => {
    const url = `${baseUrl}${path}`;

    return await fetch(url, {
      method: 'PUT',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  },

  delete: async (path: string, body: object) => {
    const url = `${baseUrl}${path}`;
    return await fetch(url, {
      method: 'DELETE',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  },
};
