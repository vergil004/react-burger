const ingredientsDataUrl = "https://norma.nomoreparties.space/api/ingredients";
const sendOrderUrl = "https://norma.nomoreparties.space/api/orders";

const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export async function getIngredientsData() {
  return await fetch(ingredientsDataUrl).then((response) =>
    checkResponse(response)
  );
}

export async function sendOrderData(idList) {
  return await fetch(sendOrderUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ingredients: idList }),
  })
    .then((response) => {
      return checkResponse(response);
    })
    .then((data) => data);
}
