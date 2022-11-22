import { request } from "@/utils/burger-api";
import { getCookie } from "@/utils/cookie";

const USER_BASE = "https://norma.nomoreparties.space/api/auth/user";

export async function getUserInfo() {
  return await request(USER_BASE, {
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
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}
