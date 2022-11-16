import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);
//
const sectionItems = document.querySelector('.products');

window.onload = async () => {
  const productsComputer = await fetchProductsList('computador');
  productsComputer.forEach((product) => {
    sectionItems.appendChild(createProductElement(product));
  });
};
