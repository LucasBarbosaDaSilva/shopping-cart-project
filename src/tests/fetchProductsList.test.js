import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui

describe('1 - Teste a função fetchProductsList', () => {
  it('Testa se fetchProductsList é uma função', () => {
   expect(fetchProductsList).toBeInstanceOf(Function);
  });
  it('Testa a função fetchProductsList com sem argumento retorna erro com mensagem', () => {
   expect(async () => {await fetchProductsList()}).rejects.toThrow('Termo de busca não informado');
  } );
  it('Testa a função fetchProductsList com argumento retorna resultado esperado', async () => {
    expect(await fetchProductsList('computador')).toMatchObject(computadorSearch);
   } )
});