/* eslint-disable @typescript-eslint/no-wrapper-object-types */

const baseUrl = process.env.NEXT_PUBLIC_MEALMASTER_API_URL;

export const _rootAgent = {
  get: async (path: string) => {
    const url = `${baseUrl}${path}`;

    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {},
    });

    return response;
  },

  post: async (path: string, body: Object) => {
    const url = `${baseUrl}${path}`;

    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    return response;
  },

  put: async (path: string, body: Object) => {
    const url = `${baseUrl}${path}`;

    const response = await fetch(url, {
      method: "PUT",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    return response;
  },

  delete: async (path: string, body: Object) => {
    const url = `${baseUrl}${path}`;
    const response = await fetch(url, {
      method: "DELETE",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    return response;
  },
};
