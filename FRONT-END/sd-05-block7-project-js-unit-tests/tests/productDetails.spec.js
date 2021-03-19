/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');
const { isArray, isObject, isDeepStrictEqual } = require('util');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:

    // Teste que o retorno da função é um array.
    assert.strictEqual(isArray(productDetails()), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual((Object.entries(productDetails('produto1', 'produto2', 'produto3', 'produto4')).length), 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(isObject(Object.entries(productDetails('produto1', 'produto2'))), true);
    // Teste que os dois objetos são diferentes entre si.
    assert.deepStrictEqual(isDeepStrictEqual(Object.entries(productDetails('produto1', 'produto2'))[0],Object.entries(productDetails('produto1', 'produto2'))[1]), false);
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.strictEqual(isDeepStrictEqual(productDetails('produto1', 'produto2')[0].details.productId.lastIndexOf('123'), productDetails('produto1', 'produto2')[1].details.productId.lastIndexOf('123')), true  );
});
});