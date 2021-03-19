# Boas vindas ao repositório do projeto de testes com a React Testing Library!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

---

### Entrega

  - Projeto individual.

  - Serão dois dias de projeto.
  
  - O projeto tem até a seguinte data: `12/08/2020 - 14:00h`. Para ser entregue a avaliação final.


## O que deverá ser desenvolvido

Nesse projeto você escreverá testes para uma aplicação React.

## Desenvolvimento

Este repositório já contém uma aplicação React criada e configurada. Após clonar o projeto e instalar as dependências (mais sobre isso abaixo), você não precisará realizar nenhuma configuração adicional. Você deverá utilizar [`Jest`](https://jestjs.io/) e a biblioteca [`React Testing Library`](https://testing-library.com/) (também já instaladas e configuradas) para escrever os testes. Note que a aplicação contém uma implementação completa de todos os requisitos da Pokédex. Seu trabalho será, para cada requisito listado a seguir, escrever testes que garantam sua corretude. Cuidado com [testes _falsos positivos_](https://talkingabouttesting.com/2015/08/04/falsos-negativos-falsos-positivos-verdadeiros-negativos-e-verdadeiros-positivos/). Falsos positivos serão desconsiderados na avaliação.

### Quem testa os testes?

  Nesse trabalho o avaliador automatizado **testam os testes de vocês!** A ideia dele é a seguinte: você vai escrever casos de teste para a aplicação, certo? E esses testes têm que garantir que a aplicação está funcionando, certo? Pois bem! Se eu quebro uma parte da aplicação, fazendo uma alteração no código, seus testes devem quebrar, certo? Pois é isso que o avaliador faz.
  Como assim? Pense da seguinte forma: nosso avaliador vai navegar por toda a aplicação da Pokédex e vai fazer várias mudanças no código dela **para que ela quebre e pare de funcionar**. Em seguida ele vai rodar seus testes. Caso seus testes não acusem que aplicação está com problemas o avaliador não vai aprovar aquele requisito! Se, para todas as alterações que o avaliador fizer no código da aplicação, os seus testes acusarem problemas, tudo será aprovado! O avaliador garante, portanto, que seus testes testam a aplicação da Pokédex como se deve!
  Na linguagem do avaliador, dizemos que cada mudança que o avaliador faz na sua aplicação é um **mutante**. O avaliador cria vários mutantes e seus testes **devem matar todos!** Se algum mutante sobreviver, temos problemas. Certo? Vamos aos requisitos então!

## Requisitos do projeto

A seguir estão listados todos os requisitos do projeto. Lembre-se que para a avaliação utilizaremos testes por mutação, então cada requisito só será aceito se os testes tiverem comportamento adequado tanto na aplicação original como na modificada.

Todos os arquivos de teste que vocês usarão **já estão previamente criados e novos arquivos não devem ser criados**. Como exemplo colocamos um teste dentro do arquivo `src/tests/App.test.js`. Além disso, **cada requisito se refere a um arquivo da aplicação da Pokédex**. Obter aprovação num requisito significa que todos os casos de erro daquele arquivo estão cobertos, ou seja, todos os mutantes criados naquele arquivo pelo avaliador foram mortos. Nos subitens de cada requisito detalhamos o que é necessário fazer para obter a aprovação neles.

### 1. Testes do arquivo App.js

  - Ao carregar a aplicação no caminho de URL “/”, a página principal da Pokédex deve ser mostrada.

  - No topo da aplicação, deve haver um conjunto fixo de links de navegação

    - O primeiro link deve possuir o texto `Home` com a URL `/`;

    - O segundo link deve possuir o texto `About` com a URL `/about`;

    - O terceiro link deve possuir o texto `Favorite Pokémons` com a URL `/favorites`.

  - Ao clicar no link "Home" na barra de navegação, a aplicação deve ser redirecionada para a página inicial, na URL "/"

  - Ao clicar no link "About" na barra de navegação, a aplicação deve ser redirecionada para a página de `About`, na URL "/about"

  - Ao clicar no link "Favorite Pokémons" na barra de navegação, a aplicação deve ser redirecionada para a página de pokémons favoritados, na URL "/favorites"

  - Entrar em uma URL desconhecida exibe a página `Not Found`

### 2. Testes do arquivo About.js

  - A página "About" deve exibir informações sobre a Pokédex

  - A página deve conter um heading `h2` com o texto `About Pokédex`;

  - A página deve conter dois parágrafos com texto sobre a Pokédex;

  - A página deve conter a seguinte imagem de uma Pokédex: `https://cdn.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png`.

### 3. Testes do arquivo FavoritePokemons.js

  - Caso a pessoa não tenha pokémons favoritos, a mensagem `No favorite pokemon found` deve aparecer na tela.

  - A página não deve exibir nenhum card de pokémon não favoritado.

  - A página deve exibir todos os cards de pokémons favoritados;

### 4. Testes do arquivo NotFound.js

  - A página deve conter um heading `h2` com o texto `Page requested not found 😭`;

  - A página deve exibir a imagem `https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif`.

### 5. Testes do arquivo Pokedex.js

  - Ao apertar o botão de próximo, a página deve exibir o próximo pokémon da lista

    - O botão deve conter o texto `Próximo pokémon`;

    - Cliques sucessivos no botão devem mostrar o próximo pokémon da lista;

    - Ao se chegar ao último pokémon da lista, a Pokédex deve voltar para o primeiro pokémon no apertar do botão.

  - A Pokédex deve exibir apenas um pokémon por vez

  - A Pokédex deve conter botões de filtro

    - A partir da seleção de um botão de tipo, a Pokédex deve circular somente pelos pokémons daquele tipo;

    - O texto do botão deve ser o nome do tipo, p. ex. `Psychic`.

  - A Pokédex deve conter um botão para resetar o filtro

    - O texto do botão deve ser `All`;

    - Após clicá-lo, a Pokédex deve voltar a circular por todos os pokémons;

    - Quando a página carrega, o filtro selecionado deve ser o `All`.

  - A Pokédex deve gerar, dinamicamente, um botão de filtro para cada tipo de pokémon

    - Os botões de filtragem devem ser dinâmicos: sua Pokédex deve gerar um botão de filtragem para cada tipo de pokémon disponível nos dados independente de quais ou quantos sejam, sem repetição de tipos. Ou seja, se sua Pokédex possui pokémons do tipo `Fire`, `Psychic`, `Electric` e `Normal`, deve aparecer como opção de filtro um botão para cada um desses tipos. Além disso, ela deve manter o botão `All`.

  - O botão de `Próximo pokémon` deve ser desabilitado se a lista filtrada de pokémons tiver um só pokémon

### 6. Testes do arquivo Pokemon.js

  - Deve ser retornado um card com as informações de determinado pokémon;

  - O nome correto do pokémon deve aparecer na tela;

  - O peso médio do pokémon deve ser exibido com um texto no formato `Average weight: <value> <measurementUnit>`, onde `<value>` e `<measurementUnit>` são, respectivamente, o peso médio do pokémon e sua unidade de medida;

  - A imagem deve conter um atributo `src` com a URL da imagem do pokémon. A imagem deverá ter também um atributo `alt` com o texto `<name> sprite`, onde `<name>` é o nome do pokémon;

  - O pokémon exibido na Pokédex deve conter um link de navegação para exibir detalhes deste pokémon. O link deve possuir a URL `/pokemons/<id>`, onde `<id>` é o id do pokémon exibido;

  - Ao clicar no link de navegação do pokémon, a aplicação deve ser redirecionada para a página de detalhes de pokémon. A URL exibida no navegador deve mudar para `/pokemon/<id>`, onde `<id>` é o id do pokémon cujos detalhes se deseja ver;

  - Pokémons favoritados devem exibir um ícone de uma estrela

    - O ícone deve ser uma imagem, com o atributo `src` igual `/star-icon.svg`;

    - A imagem deve ter o atributo `alt` igual a `<pokemon> is marked as favorite`, onde `<pokemon>` é o nome do pokémon cujos detalhes estão sendo exibidos.

### Testes do arquivo PokemonDetails.js

  - Deve conter mais informações sobre apenas o pokémon selecionado;

  - A página deve conter um texto `<name> Details`, onde `<name>` é o nome do pokémon;

  - O pokémon exibido na página de detalhes não deve conter um link de navegação para exibir detalhes deste pokémon;

  - A seção de detalhes deve conter um heading `h2` com o texto `Summary`;

  - A seção de detalhes deve conter um parágrafo com o resumo do pokémon específico sendo visualizado;

  - A página de detalhes deve exibir uma seção com os mapas com as localizações do pokémon

      - A seção de detalhes deve conter um heading `h2` com o texto `Game Locations of <name>`, , onde `<name>` é o nome do pokémon exibido;

      - A seção de detalhes deve exibir todas as localizações do pokémon;

      - Cada localização deve exibir o nome da localização e uma imagem do mapa da localização;

      - A imagem da localização deve ter um atributo `src` com a URL da localização;

      - A imagem da localização deve ter um atributo `alt` com o texto `<name> location`, onde `<name>` é o nome do pokémon.

  - A página de detalhes deve permitir favoritar um pokémon

    - A página deve conter um checkbox que permita favoritar um pokémon. Cliques no checkbox devem, alternadadamente, adicionar e remover o pokémon da lista de favoritos;

    - O label do checkbox deve ser `Pokémon favoritado?`.

## Quer fazer mais? Temos algumas sugestões!

O que temos a seguir não são requisitos bônus - são ideias para você se aprofundar mais no projeto e **aprender mais!** Que tal trabalhar neles? Começamos com algo bem direto:

  - A cobertura de testes deve ser 100%

    - Para ver a cobertura de testes, execute no terminal o comando `npm run test-coverage`.

Além disso, a Pokédex é uma aplicação estática, com seus dados pré-definidos. Utilizando a [PokéAPI](https://pokeapi.co/), é possível deixá-la mais dinâmica e realista.

Se quiser implemente os requisitos propostos a seguir e escreva testes para eles. Tente manter sempre a cobertura de testes em 100%, garantindo assim que não há código ou fluxos lógicos não testados. Para um desafio adicional, tente utilizar TDD - escreva os testes à medida que for implementando os requisitos.

  - Adicione uma rota para exibir uma lista de localizações

    - A URL da rota deve ser `/locations`;

    - A página deve exibir uma lista com as localizações retornadas pela PokéAPI. Você pode ler [aqui](https://pokeapi.co/docs/v2.html/#resource-lists-section) e [aqui](https://pokeapi.co/docs/v2.html/#locations-section) como utilizar a PokéAPI para buscar uma lista de localizações.

  - Adicione na barra de navegação um link para a lista de localizações

    - O link deve conter o texto `Locations`;

    - Ao clicar no link, a página com a lista de localizações deve ser exibida.

  - Adicione botões de paginação na lista de localizações

  Por default, os _endpoints_ da PokéAPI retornam no máximo 20 resultados. Utilizando os parâmetros `limit` e `offset`, você pode especificar qual página deseja buscar e qual seu tamanho. Veja [aqui](https://pokeapi.co/docs/v2.html/#resource-lists-section) como utilizar estes parâmetros.

    - Adicone dois botões "Anterior" e "Próxima" que permitam navegar entre as página da lista de localizações;

    - Na primeira página, o botão "Anterior" deve ser desabilitado. Da mesma forma, ao alcançar a última página, o botão "Próximo" deve ser desabilitado.

  - Adiciona uma rota para exibir uma lista de gerações

    - A URL da rota deve ser `/generations`;

    - A página deve exibir uma lista com as gerações retornadas pela PokéAPI. Você pode ler [aqui](https://pokeapi.co/docs/v2.html/#resource-lists-section) e [aqui](https://pokeapi.co/docs/v2.html/#generations) como utilizar a PokéAPI para buscar uma lista de gerações.

  - Adicione na barra de navegação um link para a lista de gerações

    - O link deve conter o texto `Generations`;

    - Ao clicar no link, a página com a lista de gerações deve ser exibida.

  - Adicione uma rota para exibir informações sobre uma geração

    - A URL da rota deve ser `/generations/<id>`, onde `<id>` é o id da geração exibida;

    - A página deve exibir, após buscar na PokéAPI, o nome da geração e uma lista com os nomes dos pokémons introduzidos nesta geração.

  - Adicione a cada geração na lista de gerações um link para a página de detalhes desta geração

    - Ao clicar no link, a página com informações sobre a geração clicada deve ser exibida.

---

## Instruções para entregar seu projeto:

### ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório
  * `git clone git@github.com:tryber/sd-05-block15-project-react-testing-library.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-05-block15-project-react-testing-library`

2. Instale as dependências
  * `npm install`

3. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora crie uma branch para qual você vai submeter os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    * Exemplo: `git checkout -b joaozinho-react-testing`

4. Adicione um teste para algum dos requisitos do projeto. Por exemplo, para o requisito #1, adicione em `App.test.js`:

```javascript
test('shows the Pokédex when the route is `/`', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  );

  expect(getByText('Encountered pokémons')).toBeInTheDocument();
});
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
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-05-block15-project-react-testing-library/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-05-block15-project-react-testing-library/pulls) e confira que o seu _Pull Request_ está criado

---

### DURANTE O DESENVOLVIMENTO

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
  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-05`

Se ainda houver alguma dúvida sobre como entregar seu projeto, [aqui tem um video explicativo](https://vimeo.com/362189205).

---

### REVISANDO UM PULL REQUEST

⚠⚠⚠

À medida que você e os outros alunos forem entregando os projetos, vocês serão alertados **via Slack** para também fazer a revisão dos _Pull Requests_ dos seus colegas. Fiquem atentos às mensagens do _"Pull Reminders"_ no _Slack_!

Os monitores também farão a revisão de todos os projetos, e irão avaliar tanto o seu _Pull Request_, quanto as revisões que você fizer nos _Pull Requests_ dos seus colegas!!!

Use o material que você já viu sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os projetos que chegaram para você.
