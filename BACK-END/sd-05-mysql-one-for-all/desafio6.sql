/* 
Tendo como base o valor dos planos e o plano que cada pessoa usuária cadastrada possui no banco, queremos algumas informações sobre o faturamento da empresa. Crie uma VIEW chamada faturamento_atual que deve exibir quatro dados:

A primeira coluna deve ter o alias "faturamento_minimo" e exibir o menor valor de plano existente para uma pessoa usuária.

A segunda coluna deve ter o alias "faturamento_maximo" e exibir o maior valor de plano existente para uma pessoa usuária.

A terceira coluna deve ter o alias "faturamento_medio" e exibir o valor médio dos planos possuídos por pessoas usuárias até o momento.

Por fim, a quarta coluna deve ter o alias "faturamento_total" e exibir o valor total obtido com os planos possuídos por pessuas usuárias.

Para cada um desses dados, por se tratarem de valores monetários, deve-se arredondar o faturamento usando apenas duas casas decimais.

 */

CREATE VIEW faturamento_atual AS
SELECT MIN(valor_plano) AS 'faturamento_minimo',
MAX(valor_plano) AS 'faturamento_maximo',
ROUND(SUM(valor_plano)/4, 2) AS 'faturamento_medio',
SUM(valor_plano) AS 'faturamento_total'
FROM SpotifyClone.planos;
