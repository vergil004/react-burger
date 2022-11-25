import { requestAPI } from "@/utils/helpers";
import { getCookie, setCookie, deleteCookie } from "@/utils/cookie";

const USER_BASE = "https://norma.nomoreparties.space/api/auth/";
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

export async function getUserInfo() {
  return await requestAPI(`${USER_BASE}user`, optionGet)
    .then((response) => {
      return response;
    })
    .catch(async (error) => {
      if (error.message === "jwt expired") {
        await updateAccessToken();
        requestAPI(`${USER_BASE}user`, optionGet).then((result) => {
          return result;
        });
      }
      return error;
    });
}

export async function updateAccessToken() {
  return await requestAPI(
    `${USER_BASE}token`,
    optionPost(
      "PATCH",
      {
        "Content-Type": "application/json",
      },
      { token: localStorage.getItem("refreshToken") }
    )
  )
    .then((response) => {
      localStorage.setItem("refreshToken", response.refreshToken);
      setCookie("accessToken", response.accessToken);
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export async function updateUserInfo(data) {
  return await requestAPI(
    `${USER_BASE}user`,
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
        requestAPI(`${USER_BASE}user`, optionGet).then((result) => {
          return result;
        });
      }
      return error;
    });
}

export async function logout() {
  return await requestAPI(
    `${USER_BASE}logout`,
    optionPost(
      "POST",
      { "Content-Type": "application/json" },
      {
        token: localStorage.getItem("refreshToken"),
      }
    )
  )
    .then((result) => {
      deleteCookie("refreshToken");
      deleteCookie("accessToken");
      return result;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
}
