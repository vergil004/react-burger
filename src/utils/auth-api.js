import { requestAPI, BASE_URL } from "@/utils/helpers";
import { setCookie } from "@/utils/cookie";

export async function forgotPassword(email) {
  return await requestAPI(`${BASE_URL}/password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email }),
  });
}

export async function registration({ email, password, name }) {
  return await requestAPI(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password, name: name }),
  })
    .then((res) => {
      setCookie("accessToken", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);
      return res;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
}

export async function resetPassword({ password, token }) {
  return await requestAPI(`${BASE_URL}/password-reset/reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password: password, token: token }),
  });
}

export async function loginUser({ password, email }) {
  return await requestAPI(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password: password, email: email }),
  }).then((res) => {
    setCookie("accessToken", res.accessToken);
    localStorage.setItem("refreshToken", res.refreshToken);
    return res;
  });
}
