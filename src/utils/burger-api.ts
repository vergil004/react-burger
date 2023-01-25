import { requestPostAPI, BASE_URL } from "./helpers";
import { getCookie } from "./cookie";

export function getIngredientsData() {
  return requestPostAPI(`${BASE_URL}/ingredients`);
}

export async function sendOrderData(idList: [string]) {
  return await requestPostAPI(`${BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: getCookie("accessToken"),
    },
    body: JSON.stringify({ ingredients: idList }),
  });
}
