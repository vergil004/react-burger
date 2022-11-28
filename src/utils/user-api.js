import { requestAPI, BASE_URL, checkResponse } from "@/utils/helpers";
import { getCookie, setCookie, deleteCookie } from "@/utils/cookie";

const optionGet = {
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
const optionPost = (method, headers, data) => {
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

export async function updateUserInfo(data) {
  return await requestAPI(
    `${BASE_URL}/auth/user`,
    optionPost(
      "PATCH",
      {
        "Content-Type": "application/json",
        Authorization: getCookie("accessToken"),
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
      console.log(error);
      return error;
    });
}
