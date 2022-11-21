import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

describe('1 - Teste a função fetchProduct', () => {
  it('Testa se fetchProduct é uma função', () => {
   expect(fetchProduct).toBeInstanceOf(Function);
  });
  it('Testa a função fetchProduct com sem argumento retorna erro com mensagem', () => {
   expect(async () => {await fetchProduct()}).rejects.toThrow('ID não informado');
  } );
  it('Testa a função fetchProduct com argumento retorna resultado esperado', async () => {
    expect(await fetchProduct('MLB1405519561')).toMatchObject(product);
   } )
});
