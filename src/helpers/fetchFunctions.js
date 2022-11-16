export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (selector) => {
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${selector}`);
    const json = await response.json();
    return json.results;
  } catch (error) {
    throw new Error('Termo de busca não informado');
  }
};
