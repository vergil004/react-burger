import { requestAPI } from "@/utils/helpers";
import { getCookie, setCookie } from "@/utils/cookie";

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
const optionPost = {
  method: "POST",
  mode: "cors",
  cache: "no-cache",
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
  redirect: "follow",
  referrerPolicy: "no-referrer",
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
  return await requestAPI(`${USER_BASE}token`, optionPost).then((response) => {
    console.log(response);
    localStorage.setItem("refreshToken", response.refreshToken);
    setCookie("accessToken", response.accessToken);
    return response;
  });
}
