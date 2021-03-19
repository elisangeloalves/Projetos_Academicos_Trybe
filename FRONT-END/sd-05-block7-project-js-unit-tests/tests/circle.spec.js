/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const circle = require('../src/circle');
const { isNumber } = require('util');

/*
  Essa função recebe o raio de um círculo e retorna um objeto contendo suas informações (Raio, Área e Circunferência).
  Se não for especificado um raio, a função retorna undefined.
  Elabore testes para verificar se a função está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos!  Para testar, vá no seu navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/
/*
// ESCREVA SEUS TESTES ABAIXO:
    let circle_3 = circle(3);
    let area = { area: 0 };
    let circumference = { circumference: 0 };
    // ========================================================
    // Teste se circle retorna um objeto. ====>checked.
    assert.strictEqual(typeof (circle(1)), 'object');
    // ========================================================
    // Teste se o objeto retornado tem 3 entradas. ====>checked.
    assert.deepStrictEqual((Object.entries(circle(1))).length, 3);
    // ========================================================
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.====>checked.
    assert.strictEqual(circle(), undefined);
    // ========================================================
    circumference.circumference = Number(`${Object.values(circle(2))[2]}`);
    // Teste que a função retorna, dentro de um objeto, a circunferência correta para um círculo de raio 2.====>checked.
    assert.deepStrictEqual(circumference, { circumference: 12.56 });
    // ========================================================
    area.area = Number(parseFloat(`${Object.values(circle(3))[1]}`).toFixed(2));
    // Teste que a função retorna, dentro de um objeto, a área correta para um círculo de raio 3.====>checked.
    assert.deepStrictEqual(area, { area: 28.26 });
    // ========================================================
    circle_3.area = Number(parseFloat(circle(3).area).toFixed(2));
    // Teste que a função retorna, num objeto, os dados corretos de um círculo de raio 3.====>checked.
    assert.deepStrictEqual(circle_3, { radius: 3, area: 28.26, circumference: 18.84 });
*/
describe('#circle', () => {
  it('given a radius, should return an object with circles info', () => {
    //assert.fail(rece);
    // ESCREVA SEUS TESTES ABAIXO:
    let circle_3 = circle(3);
    let area = { area: 0 };
    let circumference = { circumference: 0 };
    // ========================================================
    // Teste se circle retorna um objeto. ====>checked.
    assert.strictEqual(typeof (circle(1)), 'object');
    // ========================================================
    // Teste se o objeto retornado tem 3 entradas. ====>checked.
    assert.deepStrictEqual((Object.entries(circle(1))).length, 3);
    // ========================================================
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.====>checked.
    assert.strictEqual(circle(), undefined);
    // ========================================================
    circumference.circumference = Number(`${Object.values(circle(2))[2]}`);
    // Teste que a função retorna, dentro de um objeto, a circunferência correta para um círculo de raio 2.====>checked.
    assert.deepStrictEqual(circumference, { circumference: 12.56 });
    // ========================================================
    area.area = Number(parseFloat(`${Object.values(circle(3))[1]}`).toFixed(2));
    // Teste que a função retorna, dentro de um objeto, a área correta para um círculo de raio 3.====>checked.
    assert.deepStrictEqual(area, { area: 28.26 });
    // ========================================================
    circle_3.area = Number(parseFloat(circle(3).area).toFixed(2));
    // Teste que a função retorna, num objeto, os dados corretos de um círculo de raio 3.====>checked.
    assert.deepStrictEqual(circle_3, { radius: 3, area: 28.26, circumference: 18.84 });
  });
});
