const ingredientsDataUrl = 'https://norma.nomoreparties.space/api/ingredients';

const checkResponse = (res) => {
        console.log(res.json())
      return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

// export function getIngredientsData() {
//    return fetch(ingredientsDataUrl)
//     .then(response => checkResponse(response))
// }