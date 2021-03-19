# Boas vindas ao repositório do projeto de StarWars Datatable Filters em React com Redux!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

### Entrega

  - Projeto individual.

  - Serão três dias de projeto.
  
  - O projeto tem até a seguinte data: `24/08/2020 - 14:00h`. Para ser entregue a avaliação final.

## O que deverá ser desenvolvido

Você criará um projeto em React utilizando Redux para controle de estado. A aplicação consistirá em uma tabela com informações acerca de todos os planetas existentes no universo fictício da série _Star Wars_. A tabela será alimentada com dados retornados de uma [API](https://swapi-trybe.herokuapp.com/api). Haverá, também, vários filtros que permitirão a quem usa selecionar e encontrar com facilidade a informação desejada.

## Desenvolvimento

Este repositório já contém um _template_ de uma aplicação React criado e configurado. Após clonar o projeto e instalar as dependências (mais sobre isso abaixo), você não precisará realizar nenhuma configuração adicional. A documentação da API pode ser encontrada [aqui](https://swapi-trybe.herokuapp.com/documentation).

## Requisitos do projeto

### 1 - Fazer uma requisição para o endpoint `/planets` da API de Star Wars e preencher uma tabela com os dados retornados, com exceção dos da coluna `residents`

A tabela deve ser renderizada por um componente chamado `<Table />`. Os dados recebidos da API devem ser salvos num campo chamado `data` do `store` e é daí que a tabela deve lê-los. A requisição deve ser feita num componente separado do componente da tabela.

A tabela deve ter uma primeira linha com os headers e as demais com as informações de cada campo. Essa linha será considerada nos testes, então caso um teste busque por oito linhas na tabela, serão sete linhas com as informações sobre os planetas e uma referente aos headers.

### 2 - Sua página deve ter um campo de texto que filtra a tabela para somente exibir planetas cujos nomes incluam o texto digitado

Ele deve atualizar a tabela com os planetas que se encaixam no filtro à medida que o nome é digitado, sem ter que apertar um botão para efetuar a filtragem. Por exemplo, se digitar "Tatoo", o planeta "Tatooine" deve ser exibido. Você deve usar **Redux** para fazer o gerenciamento do estado da aplicação e o texto digitado deve ser salvo num campo `filters: { filterByName: { name } }`. É muito importante que `filterByName` esteja dentro de `filters`, como no exemplo a seguir:

```javascript
{
  filters: {
    filterByName: {
      name: 'Tatoo'
    }
  }
}
```

O campo de texto deve possuir a propriedade `data-testid='name-filter'` para que a avaliação automatizada funcione.

![image](searchHQ.gif)

### 3 - Sua página deve ter um filtro para valores numéricos

Ele funcionará com três seletores:

  - O primeiro deve abrir um dropdown que permita a quem usa selecionar uma das seguintes colunas: `population`, `orbital_period`, `diameter`, `rotation_period` e `surface_water`. Deve ser uma tag `select` com a propriedade `data-testid='column-filter'`;
  - O segundo deve determinar se a faixa de valor será `Maior que`, `Menor que` ou `Igual a` o numero que virá a seguir. Uma tag `select` com a propriedade `data-testid='comparison-filter'`;
  - O terceiro deve ser uma caixa de texto que só aceita números. Essa caixa deve ser uma tag `input` com a propriedade `data-testid='value-filter'`;
  - Deve haver um botão para acionar o filtro, com a propriedade `data-testid='button-filter'`.

A combinação desses três seletores deve filtrar os dados da tabela de acordo com a coluna correspondente e com os valores escolhidos. Por exemplo:
  - A seleção `population | maior que | 100000` - Seleciona somente planetas com mais de 100000 habitantes.
  - A seleção `diameter | menor que | 8000` - Seleciona somente planetas com diâmetro menor que 8000.

Você deve usar **Redux** para fazer o gerenciamento do estado da aplicação. No `store`, esses valores devem ser salvos nos campos `filters { filterByName: { name }, filterByNumericValues: [{ column, comparison, value }] }`. Tenha em mente que a avaliação automatizada exige que o estado inicial da chave `filterByNumericValues` seja um array vazio, `[]`. Veja um exemplo de como o estado deve ficar quando uma filtragem for feita:

```javascript
{
  filters:
    {
      filterByName: {
        name: ''
      },
      filterByNumericValues: [
        {
          column: 'population',
          comparison: 'maior que',
          value: '100000',
        }
      ]
    }
  }
}
```


### 4 - Sua página deverá ser carregada com somente um filtro de valores numéricos

Após clicar no botão com o data-testid `button-filter`, sua aplicação deve permitir que quem a usa adicione um novo filtro numérico sem que precise deletar o filtro anterior. Ou seja: dado que você usa três elementos para configurar o seu filtro numérico, após clicar no botão esses três elementos devem permanecer na tela e funcionais na filtragem da tabela, mas três novos elementos devem ser adicionados para que, assim, quem usa pode selecionar um novo filtro numérico. Além disso, no dropdown de colunas desse novo filtro não deve mais haver a coluna que já foi selecionada no filtro anterior. Caso todas as colunas já tenham sido incluídas em filtros anteriores, ao atualizar o filtro nenhuma das colunas devem estar disponíveis. Você deve usar **Redux** para fazer o gerenciamento do estado da aplicação.

Por exemplo: imagine que você selecionou no primeiro filtro numérico as seguintes seleções: `population | maior que | 100000`. Após clicar no botão com data-testid `button-filter` deve ser possível adicionar um segundo filtro, além deste. No dropdown desse novo filtro a se adicionar, a opção `population` não deve aparecer. Em resumo, seus filtros numéricos não podem repetir as colunas que selecionam. Se no segundo filtro fosse selecionado `diameter | menor que | 8000`, o estado ficaria assim:

```javascript
{
  filters: {
    filterByName: {
      name: ''
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '100000',
      },
      {
        column: 'diameter',
        comparison: 'menor que',
        value: '8000',
      }
    ]
  }
}
```


### 5 - Cada filtro de valores numéricos deve ter um ícone de `X` que, ao ser clicado, o apaga e desfaz suas filtragens dos dados da tabela

A coluna que este filtro selecionava deve passar a ficar disponível nos dropdowns dos demais filtros já presentes na tela. Você deve usar **Redux** para fazer o gerenciamento do estado da aplicação. Cada filtro deve possuir a propriedade `data-testid='filter'`, com um `button` em seu interior com o texto `X`.

![image](filtersHQ.gif)

## BÔNUS

### 6 - As colunas da tabela devem ser ordenáveis de forma ascendente ou descendente

A informação acerca da ordenação das colunas deve ser armazenada nos campos `filters: { filterByName: { name }, filterByNumericValues = [], order: { column: 'Name', sort: 'ASC'} }`, o campo column representa o nome da coluna a ordenar e a ordem representa a ordenação, sendo 'ASC' ascendente e 'DESC' descendente. Por padrão, a tabela começa ordenada pela coluna 'Name' em ordem ascendente. Por exemplo:

```javascript
{
  filters: {
    filterByName: {
      name: ''
    },
    filterByNumericValues : [],
    order: {
      column: 'Name',
      sort: 'ASC',
    }
  }
}
```

Essa ordenação deve ser feita via filtro: um dropdown selecionará a coluna a basear a ordenação e um par de radio buttons determinará se esta é ascendente ou descendente.

O dropdown deve ser um elemento `select` com a propriedade `data-testid='column-sort'`, com as opções das colunas escolhíveis em seu interior. Deve haver também, dois `inputs` de tipo `radio`, com propriedade `data-testid='column-sort-input'`, para definir o sentido da ordenação (com `value` sendo `ASC` ou `DESC`) e um botão para submeter a ordenação, com uma tag `button` e a propriedade `data-testid='column-sort-button'`.

![image](orderHQ.gif)

---

### Implementações técnicas

Algumas coisas devem seguir um padrão pré-estabelecido para que a avaliação automatizada aprove a implementação.

#### Provider

É preciso que o `store` seja provido para a aplicação no `index.js`. Caso contrário não será possível realizar os testes, pois como você viu para testar uma aplicação que utiliza **Redux** é necessário que os testes provejam à aplicação um store próprio, substituindo um que deve ser declarado no `index.js`.

#### Reducers

Nos testes, para a criação do `store`, é utilizado o `reducer` que você desenvolveu, então para que os testes ocorram como o previsto é preciso que seu `reducer` final seja exportado de `src/reducers/index.js`, pois é desse caminho que o arquivo de testes fará a importação dele.

---

## Instruções para entregar seu projeto:

### ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório
  * `git clone git@github.com:tryber/sd-05-block16-project-react-redux-starwars-database-filters.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `sd-05-block16-project-react-redux-starwars-database-filters`

2. Instale as dependências
  * `npm install`

3. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora crie uma branch para qual você vai submeter os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    * Exemplo: `git checkout -b joaozinho-react-redux-starwars-datatable-filters`

4. Crie um diretório `components` dentro de `src` e crie seus componenets dentro deste diretório. Por exemplo, crie um componente `Table` e adicione-o ao `App`:

```sh
mkdir src/components
touch src/components/Table.js
```

```javascript
import React from 'react';

const Table = () => <div>StarWars Datatable with Filters</div>;

export default Table;
```

```javascript
import React from 'react';
import './App.css';

import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Table />
      </header>
    </div>
  );
}

export default App;
```

5. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (deve aparecer listado o arquivo _src/last.js_ em vermelho)
  * Adicione o arquivo alterado ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (deve aparecer listado o arquivo _src/last.js_ em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'iniciando o projeto. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

6. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin joaozinho-react-testing`

7. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-05-block16-project-react-redux-starwars-database-filters/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-05-block16-project-react-redux-starwars-database-filters/pulls) e confira que o seu _Pull Request_ está criado

---

### DURANTE O DESENVOLVIMENTO

* ⚠ **LEMBRE-SE DE CRIAR TODOS OS ARQUIVOS DENTRO DA PASTA COM O SEU NOME** ⚠

* Faça `commits` das alterações que você fizer no código regularmente

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

* Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

---

### DEPOIS DE TERMINAR O DESENVOLVIMENTO (OPCIONAL)

Para **"entregar"** seu projeto, siga os passos a seguir:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas
  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**
  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**
  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-03`

Se ainda houver alguma dúvida sobre como entregar seu projeto, [aqui tem um video explicativo](https://vimeo.com/362189205).

---

### REVISANDO UM PULL REQUEST

⚠⚠⚠

À medida que você e as outras pessoas que estudam na Trybe forem entregando os projetos, vocês receberão um alerta via Slack para também fazer a revisão dos Pull Requests dos seus colegas. Fiquem atentos às mensagens do "Pull Reminders" no Slack!

Use o material que você já viu sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os projetos que chegaram para você.
editado.
