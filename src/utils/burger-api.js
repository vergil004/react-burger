const BASE_URL = "https://norma.nomoreparties.space/api";

const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export function request(url, options) {
  return fetch(url, options).then((response) => checkResponse(response));
}

export function getIngredientsData() {
  return request(`${BASE_URL}/ingredients`);
}

export async function sendOrderData(idList) {
  return await request(`${BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ingredients: idList }),
  });
}
