import { requestPostAPI } from "@/utils/helpers";
import { BASE_URL } from "@/utils/helpers";

export function getIngredientsData() {
  return requestPostAPI(`${BASE_URL}/ingredients`);
}

export async function sendOrderData(idList: [string]) {
  console.log(idList);
  return await requestPostAPI(`${BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ingredients: idList }),
  });
}
