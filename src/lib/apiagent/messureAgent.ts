import { IMessure } from "../models/messure/IMessure";
import { _rootAgent } from "./_rootAgent";

const path = "messure";

export const messureAgent = {
  getAll: async () => {
    const response = await _rootAgent.get(path);
    const { ok, status, statusText } = response;
    const data: IMessure[] | null = ok ? await response.json() : null;
    return {
      data,
      ok,
      status,
      statusText,
    };
  },
};
