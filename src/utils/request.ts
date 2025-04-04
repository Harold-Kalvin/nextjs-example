import { getCSRFToken } from "utils/cookies";

type RequestMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
type RequestData = Record<string, unknown> | null;

export async function request(
  method: RequestMethod,
  path: string,
  data?: RequestData
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> {
  const options: RequestInit = {
    method: method,
    credentials: "include",
    headers: {
      accept: "application/json",
      "X-CSRFToken": getCSRFToken() ?? "",
      "Content-Type": "application/json",
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(path, options);
  return await response.json();
}
