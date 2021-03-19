const answerPhone = require('../src/asyncJest');

/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('o retorno do telefonema', () => {
  test('atende', (done) => {
  //  assert.fail();
    expect(answerPhone(true)).resolves.toEqual('Oi!');
    done();
// Insira seu teste assíncrono aqui
  });
  test('ocupado', (done) => {
  //  assert.fail();
    expect(answerPhone(false)).rejects.toEqual('Infelizmente não podemos atender...');
    done();
// Insira seu teste assíncrono aqui
  });
});
