import { requestAPI, BASE_URL, checkResponse } from "@/utils/helpers";
import { getCookie, setCookie, deleteCookie } from "@/utils/cookie";
import { TMethodRequest, IRequest } from "@/utils/types";

type TToken = {
  token: string | null;
};

const optionGet: any = {
  method: "GET",
  mode: "cors",
  cache: "no-cache",
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
    Authorization: getCookie("accessToken"),
  },
  redirect: "follow",
  referrerPolicy: "no-referrer",
};
const optionPost: (
  method: TMethodRequest,
  headers: Record<string, string>,
  data: IRequest | TToken
) => {
  mode: string;
  redirect: string;
  headers: Record<string, string>;
  cache: string;
  method: "GET" | "POST" | "PATCH";
  referrerPolicy: string;
  credentials: string;
  body: string;
} = (
  method: TMethodRequest,
  headers: Record<string, string>,
  data: IRequest | TToken
) => {
  return {
    method: method,
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: headers,
    body: JSON.stringify(data),
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };
};

export const refreshTokenRequest = () => {
  return fetch(`${BASE_URL}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  }).then(checkResponse);
};

export async function getUserInfo() {
  return await requestAPI(`${BASE_URL}/auth/user`, optionGet)
    .then((response) => {
      return response;
    })
    .catch(async (error) => {
      if (error.message === "jwt expired") {
        await updateAccessToken();
        requestAPI(`${BASE_URL}/auth/user`, optionGet).then((result) => {
          return result;
        });
      }
      return error;
    });
}

export async function updateAccessToken() {
  // @ts-ignore
  // @ts-ignore
  return await requestAPI(
    `${BASE_URL}/auth/token`,
    optionPost(
      "POST",
      {
        "Content-Type": "application/json;charset=utf-8",
      },
      { token: localStorage.getItem("refreshToken") }
    )
  )
    .then((response) => {
      localStorage.setItem("refreshToken", response.refreshToken);
      setCookie("accessToken", response.accessToken);
      getUserInfo();
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export async function updateUserInfo(data: IRequest) {
  return await requestAPI(
    `${BASE_URL}/auth/user`,
    optionPost(
      "PATCH",
      {
        "Content-Type": "application/json",
        Authorization: getCookie("accessToken") || "",
      },
      data
    )
  )
    .then((response) => {
      return response;
    })
    .catch(async (error) => {
      if (error.message === "jwt expired") {
        await updateAccessToken();
        requestAPI(`${BASE_URL}/auth/user`, optionGet).then((result) => {
          return result;
        });
      }
      return error;
    });
}

export async function logout() {
  return await requestAPI(
    `${BASE_URL}/auth/logout`,
    optionPost(
      "POST",
      { "Content-Type": "application/json" },
      {
        token: localStorage.getItem("refreshToken"),
      }
    )
  )
    .then((result) => {
      localStorage.clear();
      deleteCookie("accessToken");
      return result;
    })
    .catch((error) => {
      return error;
    });
}
