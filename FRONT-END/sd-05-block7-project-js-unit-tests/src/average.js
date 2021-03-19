/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.
  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 2]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
const average = (array) => {
  let media = 0;
  let contador = 0;
  if (array.length === 0) return undefined;
  function isArray(myArray) {
    return (myArray.constructor === Array);
  }
  for (cont = 0; cont < array.length; cont += 1) {
    if (!isArray(array) || typeof array[cont] !== 'number') {
      return undefined;
    }
    media += array[cont];
    contador += 1;
  }
  return Math.round(media / contador);
};

module.exports = average;
