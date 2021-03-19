const adventure = require('../src/setupTeardown');
const { specialists } = require('../src/setupTeardown');
/*
Num universo não tão distante, um grupo de aventureiros da Trybe enfrentam uma série de testes.
O grupo parte em direção ao sucesso, mas,
devido a ameaça de criaturas temíveis, o grupo não chegará inteiro ao fim.
Após cada aventura um de nossos aventureiros cairá.
Cada um dos testes abaixo verifica a quantidade de aventureiros após cada iteração.
Sua missão aqui é:

  - Use a função randomAttack do objeto adventure
  que remove um dos aventureiros toda vez que é chamada,
  ela deve funcionar entre cada teste.
  Opcional:
  - Para ficar mais visível, imprima na tela após cada teste o grupo de aventureiros restante.
  - No fim dos testes, imprima uma mensagem com o nome do aventureiro que sobreviveu.

PS: Os codinomes dos aventureiros são reais! Tentem descobrir quem é quem!

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('quem sobreviveu?', () => {
//
  beforeEach(() => adventure.randomAttack());
  afterEach(() => console.log(`continuam sobrevivendo  a esta aventura ${adventure.specialists.map(nome => ` ${nome.nome}`)}`));
  afterAll(() => console.log(`E o ${specialists[0].nome} ,
  nosso ${specialists[0].classe}, foi o único sobrevivente dessa jornada sombria!`));
  // Adicione seu código aqui
  test('depois da primeira aventura', () => {
    // adventure.randomAttack();
    // expect(adventure.randomAttack).toHaveBeenCalledTimes(0);
    expect(adventure.specialists.length).toBe(5);
    // expect(adventure.randomAttack()).toBe(specialists[4])
  });
  test('depois da segunda aventura', () => {
    // adventure.randomAttack();
    expect(adventure.specialists.length).toBe(4);
  });
  test('depois da terceira aventura', () => {
    //  adventure.randomAttack();
    expect(adventure.specialists.length).toBe(3);
  });
  test('depois da quarta aventura', () => {
    //  adventure.randomAttack();
    expect(adventure.specialists.length).toBe(2);
  });
  test('depois da quinta aventura', () => {
    // adventure.randomAttack();
    expect(adventure.specialists.length).toBe(1);
  });
});
