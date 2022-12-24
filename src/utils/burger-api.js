const NORMA_API = 'https://norma.nomoreparties.space/api';

export default function getIngredients() {
  return fetch(`${NORMA_API}/ingredients`)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
    })
    .catch(err => {throw new Error(`Ошибка: ${err}`)});
}

export function getOrder(ingredientsIds, setOrderNumber) {
  return fetch(`${NORMA_API}/orders`,{
    method: "POST",
    body: JSON.stringify({ ingredients: ingredientsIds }),
    headers: {'Content-Type': 'application/json;charset=utf-8'}
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  })
  .then(res => {setOrderNumber(res.order.number)})
  .catch(err => {throw new Error(`Ошибка: ${err}`)});
}
