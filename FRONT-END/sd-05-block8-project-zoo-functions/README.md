# Boas vindas ao PROJETO ZOO FUNCTIONS!

 ### Tecnologias utilizadas
      
      ECMA Script 6 e Higher Order Functions!
> Este projeto desenvolvido com o intuito de desenvolver as habilidades em manipular High Order Functions e os recursos do EC6.
As funções foram implementadas obeservando o assert de cada um dos testes que estão no src/zoo.js para passarem em cada um dos testes automatizados.
os Dados utilizados estáo localizados no arquivo src/data.js.

### Requisitos do projeto


##### 1- Função animalsByIds:
- Caso receba nenhum parâmetro, retorna um array vazio
- Ao receber como parâmetro um único id, retorna os animais com este id
- Ao receber mais de um id, retorna os animais que têm um desses ids.

##### 2- Função animalsOlderThan:
- Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta espécie possuem a idade mínima especificada.

##### 3- Função employeeByName:
- Sem parâmetros, retorna um objeto vazio
- Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
- Quando provido o último nome do funcionário, retorna o objeto do funcionário.

##### 4- Função createEmployee:
- Cria um novo colaborador a partir de objetos contendo informações pessoais, gerentes e animais gerenciados.

##### 5- Função isManager:
- Testa se o id passado é de um gerente.

##### 6- Função addEmployee:
- Adiciona um funcionário no fim da lista.

##### 7- Função animalCount:
- Sem parâmetros, returna animais e suas quantidades
- Com o nome de uma espécie de animal, retorna somente a quantidade.

##### 8- Função entryCalculator:
- Retorna 0 se nenhum argumento for passado
- Retorna 0 se um objeto vazio for passado
- Retorna o preço total a ser cobrado dado o número de adultos, crianças e idosos.

##### 9- Função animalMap:
- Sem parâmetros, retorna animais categorizados por localização
- Com opções especificadas, retorna nomes de animais
- Com opções especificadas, retorna nomes de animais ordenados
- Com opções especificadas, retorna somente nomes de animais macho/fêmea
- Só retorna informações específicas de gênero se includeNames for setado.

##### 10- Função schedule:
- Sem parâmetros, retorna um cronograma legível para humanos
- Se um único dia for passado, retorna somente este dia em um formato legível para humanos.

##### 11- Função oldestFromFirstSpecies:
- Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário, 
e retorna um array com nome, sexo e idade do animal mais velho dessa espécie.

##### 12- Função increasePrices:
- Ao passar uma porcentagem, incrementa todos os preços, arrendondados em duas casas decimais.

##### 13- Função employeeCoverage:
- Sem parâmetros, retorna uma lista de funcionários e os animais pelos quais eles são responsáveis
- Com o id de um funcionário, retorna os animais pelos quais o funcionário é responsável
- Com o primeiro nome de um funcionário, retorna os animais pelos quais o funcionário é responsável
- Com o último nome de um um funcionário, retorna os animais pelos quais o funcionário é responsável.
