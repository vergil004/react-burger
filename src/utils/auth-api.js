import { requestAPI } from "@/utils/helpers";
import { setCookie } from "@/utils/cookie";

const forgotPasswordBase =
  "https://norma.nomoreparties.space/api/password-reset";
const registerBase = "https://norma.nomoreparties.space/api/auth/register";
const loginBase = "https://norma.nomoreparties.space/api/auth/login";

export async function forgotPassword(email) {
  return await requestAPI(forgotPasswordBase, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email }),
  });
}

export async function registration({ email, password, name }) {
  return await requestAPI(registerBase, {
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
  return await requestAPI(`${forgotPasswordBase}/reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password: password, token: token }),
  });
}

export async function loginUser({ password, email }) {
  return await requestAPI(loginBase, {
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
