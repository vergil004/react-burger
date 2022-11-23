import { requestAPI } from "@/utils/helpers";

const BASE_URL = "https://norma.nomoreparties.space/api";

export function getIngredientsData() {
  return requestAPI(`${BASE_URL}/ingredients`);
}

export async function sendOrderData(idList) {
  return await requestAPI(`${BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ingredients: idList }),
  });
}
