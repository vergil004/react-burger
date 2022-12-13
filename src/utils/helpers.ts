export const BASE_URL = "https://norma.nomoreparties.space/api";

export const checkResponse = (res: any) => {
  return res.ok
    ? res.json()
    : res.json().then((err: any) => Promise.reject(err));
};

export function requestAPI(url: string, options?: RequestInit) {
  return fetch(url, options).then((response) => checkResponse(response));
}
