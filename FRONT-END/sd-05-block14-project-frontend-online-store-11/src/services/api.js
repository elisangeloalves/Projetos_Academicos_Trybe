export async function getCategories() {
  const result = await fetch(
    'https://api.mercadolibre.com/sites/MLB/categories',
  )
    .then((response) => response.json())
    .then((data) => data);

  return result;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const result = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
  )
    .then((response) => response.json())
    .then((data) => data);
  return result;
}
