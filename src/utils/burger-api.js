const ingredientsDataUrl = 'https://norma.nomoreparties.space/api/ingredients';

const checkResponse = (res) => {
      return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export async function getIngredientsData() {
   return await fetch(ingredientsDataUrl)
    .then(response => checkResponse(response))
}