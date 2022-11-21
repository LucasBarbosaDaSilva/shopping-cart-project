import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createProductElement, createCartProductElement } from './helpers/shopFunctions';
import { saveCartID } from './helpers/cartFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const sectionItems = document.querySelector('.products');
const sectionSaveCart = document.querySelector('.cart__products');

window.onload = async () => {
  const loading = document.createElement('h2');
  loading.innerText = 'carregando...';
  loading.className = 'loading';
  sectionItems.appendChild(loading);
  const productsComputer = await fetchProductsList('computador')
    .then((e) => e)
    .catch(() => {
      sectionItems.removeChild(loading);
      const catchError = document.createElement('h2');
      catchError.className = 'error';
      catchError.innerText = 'Algum erro ocorreu, recarregue a página e tente novamente';
      sectionItems.appendChild(catchError);
    });
  productsComputer.forEach((product) => {
    const { id, title, thumbnail, price } = product;
    sectionItems.appendChild(createProductElement({ id, title, thumbnail, price }));
  });
  sectionItems.removeChild(loading);
};

sectionItems.addEventListener('click', async (e) => {
  const click = e.target.parentNode.firstChild.innerText;
  saveCartID(click);
  const saveFetch = await fetchProduct(click);
  sectionSaveCart.appendChild(createCartProductElement(saveFetch));
});
