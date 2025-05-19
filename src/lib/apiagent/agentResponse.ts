export interface IAgentResponse {
  data: object | null;
  ok: boolean;
  status: number;
  statusText: string;
}

export const createAgentResponse = (response: Response): IAgentResponse => {
  const { ok, status, statusText } = response;
  return {
    data: null,
    ok,
    status,
    statusText,
  };
};
