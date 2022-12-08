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
