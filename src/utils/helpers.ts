export const BASE_URL = "https://norma.nomoreparties.space/api";
export const BASE_WS_URL = "wss://norma.nomoreparties.space/orders";

export const checkResponse = (res: any) => {
  return res.ok
    ? res.json()
    : res.json().then((err: any) => Promise.reject(err));
};

export function requestAPI(
  url: string,
  options?: {
    mode: string;
    redirect: string;
    headers: Record<string, string>;
    cache: string;
    method: "GET" | "POST" | "PATCH";
    referrerPolicy: string;
    credentials: string;
    body: string;
  }
) {
  // @ts-ignore
  return fetch(url, options).then((response) => checkResponse(response));
}

export function requestPostAPI(
  url: string,
  options?: {
    headers: { Authorization?: string | undefined; "Content-Type": string };
    method: string;
    body: string;
  }
) {
  return fetch(url, options).then((response) => checkResponse(response));
}

export function statusLabel(status: string) {
  switch (status) {
    case "done": {
      return "Готов";
    }
    case "created": {
      return "Создан";
    }
    case "pending": {
      return "В работе:";
    }
    default:
      return status;
  }
}
