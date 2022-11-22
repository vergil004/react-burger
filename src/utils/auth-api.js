import { request } from "@/utils/burger-api";
import { setCookie } from "@/utils/cookie";

const forgotPasswordBase =
  "https://norma.nomoreparties.space/api/password-reset";
const registerBase = "https://norma.nomoreparties.space/api/auth/register";
const loginBase = "https://norma.nomoreparties.space/api/auth/login";

export async function forgotPassword(email) {
  return await request(forgotPasswordBase, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email }),
  });
}

export async function registration({ email, password, name }) {
  return await request(registerBase, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password, name: name }),
  });
}

export async function resetPassword({ password, token }) {
  return await request(`${forgotPasswordBase}/reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password: password, token: token }),
  });
}

export async function loginUser({ password, email }) {
  return await request(loginBase, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password: password, email: email }),
  }).then((res) => {
    setCookie("accessToken", res.accessToken);
    setCookie("refreshToken", res.refreshToken);
    return res;
  });
}
