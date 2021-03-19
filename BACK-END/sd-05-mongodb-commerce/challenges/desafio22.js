/* 
Desafio 22
Retorne o nome e a quantidade de vendas (vendidos) dos sanduíches em que o número de vendas é múltiplo de 5.
 
*/

db.produtos.find(
  { vendidos: { $mod: [5, 0] } },
  { nome: 1, vendidos: 1, _id: 0 }
);
