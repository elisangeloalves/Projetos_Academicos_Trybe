Ao iniciar este projeto, você concorda com as diretrizes do Código de Ética e Conduta e do Manual da Pessoa Estudante da Trybe.

---

# Boas vindas ao repositório do Crush Manager!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por Slack! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um Pull Request para colocar seus códigos.

---

## Habilidades

Neste projeto, verificamos se você é capaz de:

- Escrever APIs utilizando Node e Express;
- Criar rotas;
- Aplicar middlewares.

---

## Entregáveis

Para entregar o seu projeto você deverá criar um Pull Request neste repositório.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://course.betrybe.com/intro/git/) sempre que precisar!

### O que deverá ser desenvolvido

Você vai desenvolver uma API de um CRUD (**C**reate, **R**ead, **U**pdate e **D**elete) de crushs. Você vai desenvolver alguns endpoints que irão ler e escrever em um arquivo, isso utilizando o módulo `fs`.

### Desenvolvimento

#### Data de Entrega

O projeto tem até a seguinte data: `26/11/2020 - 14:00h`. Para ser entregue a avaliação final.

---

## Instruções para entregar seu projeto

### ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório

- `git clone https://github.com/betrybe/sd-05-project-crush-manager.git`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd sd-05-project-crush-manager`

2. Instale as dependências [**Caso existam**]

- `npm install`

3. Crie uma branch a partir da branch `master`

- Verifique que você está na branch `master`
  - Exemplo: `git branch`
- Se não estiver, mude para a branch `master`
  - Exemplo: `git checkout master`
- Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
  - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
  - Exemplo: `git checkout -b joaozinho-sd-05-project-crush-manager`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

- Verifique que as mudanças ainda não estão no _stage_
  - Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
- Adicione o novo arquivo ao _stage_ do Git
  - Exemplo:
    - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
    - `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
- Faça o `commit` inicial
  - Exemplo:
    - `git commit -m 'iniciando o projeto 5'` (fazendo o primeiro commit)
    - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto

- Usando o exemplo anterior: `git push -u origin joaozinho-sd-05-project-crush-manager`

6. Crie um novo `Pull Request` _(PR)_

- Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-0x-project-crush-manager/pulls)
- Clique no botão verde _"New pull request"_
- Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
- Clique no botão verde _"Create pull request"_
- Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
- **Não se preocupe em preencher mais nada por enquanto!**
- Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-0x-project-crush-manager/pulls) e confira que o seu _Pull Request_ está criado

### DURANTE O DESENVOLVIMENTO:

- Faça `commits` das alterações que você fizer no código regularmente

- Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

- Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

### DEPOIS DE TERMINAR O DESENVOLVIMENTO (OPCIONAL):

Para sinalizar que o seu projeto está pronto para o _"Code Review"_ dos seus colegas, faça o seguinte:

- Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

  - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

  - No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

  - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-05`.

Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

### REVISANDO UM PULL REQUEST

Use o conteúdo sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os _Pull Requests_.

## Sobre o avaliador

O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?

---

## Requisitos

### 1 - Crie o endpoint POST `/login`

#### Os seguintes pontos serão avaliados:

- O endpoint deve ser capaz de retornar um token aleatório de 16 caracteres que deverá ser utilizado nas demais requisições.

  - O endpoint deverá o retornar o token gerado, da seguinte forma:

  ```js
  {
    "token": "7mqaVRXJSp886CGr"
  }
  ```

- O corpo da requisição deverá ter o seguinte formato:

  ```js
  {
    "email": "email@email.com",
    "password": 123456
  }
  ```

- O campo `email` deverá ser um email válido. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O campo \"email\" é obrigatório"
    }
    ```

  - Caso o email passado não seja um email válido retorne um código de `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O \"email\" deve ter o formato \"email@email.com\""
    }
    ```

- O campo `password` deverá ter pelo menos 6 caracteres.

  - Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O campo \"password\" é obrigatório"
    }
    ```

  - Caso a senha não tenha pelo menos 6 caracteres retorne um código de `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O \"password\" ter pelo menos 6 caracteres"
    }
    ```

### 2 - Crie o endpoint POST `/crush`

#### Os seguintes pontos serão avaliados:

- O endpoint deve ser capaz de adicionar um novo crush ao seu arquivo;

- O corpo da requisição deverá ter o seguinte formato:

  ```js
  {
    "name": "Keanu Reeves",
    "age": 56,
    "date": {
      "datedAt": "22/10/2019",
      "rate": 5
    }
  }
  ```

- O campo `name` deverá ter no mínimo 3 caracteres. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O campo \"name\" é obrigatório"
    }
    ```

  - Caso o nome não tenha pelo menos 3 caracteres retorne um código de `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O \"name\" deve ter pelo menos 3 caracteres"
    }
    ```

- O campo `age` deverá ser um inteiro e apenas pessoas maiores de idade (pelo menos `18 anos`) podem ser cadastrados. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O campo \"age\" é obrigatório"
    }
    ```

  - Caso o crush não tenha pelo menos 18 anos retorne `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O crush deve ser maior de idade"
    }
    ```

- O campo `date` deverá ser um objeto com as seguintes chaves:

  - A chave `datedAt` deve ser uma data no formato `dd/mm/aaaa`.

    - Caso a data não respeito o formato `dd/mm/aaaa` retorne `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O campo \"datedAt\" deve ter o formato \"dd/mm/aaaa\""
    }
    ```

  - A chave `rate` deve ser um inteiro de 1 à 5.

    - Caso a nota não seja um inteiro de 1 à 5 retorne `status 400`, com o seguinte corpo:

      ```js
      {
        "message": "O campo \"rate\" deve ser um inteiro de 1 à 5"
      }
      ```

  - O campo `date` é obrigatório e nenhuma das chaves citadas anteriormente podem ser vazias.

    - Caso o campo não seja informa, esteja vazio ou então alguma de suas chaves não tenham sido informadas retorne `status 400`, com o seguinte corpo:

      ```js
      {
        "message": "O campo \"date\" é obrigatório e \"datedAt\" e \"rate\" não podem ser vazios"
      }
      ```

- A requisição deve ter o token de autenticação nos headers.

  - Caso o token não seja encontrado retorne um código de `status 401`, com o seguinte corpo:

    ```js
    {
      "message": "Token não encontrado"
    }
    ```

  - Caso o token seja inválido retorne um código de `status 401`, com o seguinte corpo:

    ```js
    {
      "message": "Token inválido"
    }
    ```

- O endpoint deve retornar o `status 201` e o crush que foi cadastrado, dá seguinte forma:

  ```js
  {
    "id": 1,
    "name": "Keanu Reeves",
    "age": 56,
    "date": {
      "datedAt": "22/10/2019",
      "rate": 5
    }
  }
  ```

### 3 - Crie o endpoint GET `/crush`

#### Os seguintes pontos serão avaliados:

- O endpoint deve retornar um array com todos os crushs cadastrados. Devendo retornar o `status 200`, com o seguinte corpo:

  ```js
  [
    {
      id: 1,
      name: "Keanu Reeves",
      age: 56,
      date: {
        datedAt: "22/10/2019",
        rate: 5,
      },
    },
    {
      id: 2,
      name: "Madonna",
      age: 62,
      date: {
        datedAt: "10/09/2019",
        rate: 5,
      },
    },
  ];
  ```

- Caso não exista nenhum crush cadastrado o endpoint deve retornar um array vazio e o `status 200`.

- A requisição deve ter o token de autenticação nos headers.

  - Caso o token não seja encontrado retorne um código de `status 401`, com o seguinte corpo:

    ```js
    {
      "message": "Token não encontrado"
    }
    ```

  - Caso o token seja inválido retorne um código de `status 401`, com o seguinte corpo:

    ```js
    {
      "message": "Token inválido"
    }
    ```

### 4 - Crie o endpoint GET `/crush/:id`

- O endpoint deve retornar um crush baseado no id da rota. Devendo retornar o `status 200`, com o seguinte corpo:

  ```js
  {
    id: 1,
    name: "Keanu Reeves",
    age: 56,
    date: {
      datedAt: "22/10/2019",
      rate: 5,
    },
  }
  ```

- Caso não seja encontrado um crush baseado no id da rota, o endpoint deve retornar o `status 404` com o seguinte corpo:

  ```js
  {
    "message": "Crush não encontrado"
  }
  ```

- A requisição deve ter o token de autenticação nos headers.

  - Caso o token não seja encontrado retorne um código de `status 401`, com o seguinte corpo:

    ```js
    {
      "message": "Token não encontrado"
    }
    ```

  - Caso o token seja inválido retorne um código de `status 401`, com o seguinte corpo:

    ```js
    {
      "message": "Token inválido"
    }
    ```

### 5 - Crie o endpoint PUT `/crush/:id`

#### Os seguintes pontos serão avaliados:

- O endpoint deve ser capaz de editar um crush baseado no id da rota, sem alterar o id registrado.

- O corpo da requisição deverá ter o seguinte formato:

  ```js
  {
    "name": "Keanu Reeves",
    "age": 56,
    "date": {
      "datedAt": "22/10/2019",
      "rate": 5
    }
  }
  ```

- O campo `name` deverá ter no mínimo 3 caracteres. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O campo \"name\" é obrigatório"
    }
    ```

  - Caso o nome não tenha pelo menos 3 caracteres retorne um código de `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O \"name\" ter pelo menos 3 caracteres"
    }
    ```

- O campo `age` deverá ser um inteiro e apenas pessoas maiores de idade (pelo menos `18 anos`) podem ser cadastrados. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O campo \"age\" é obrigatório"
    }
    ```

  - Caso o crush não tenha pelo menos 18 anos retorne `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O crush deve ser maior de idade"
    }
    ```

- O campo `date` deverá ser um objeto com as seguintes chaves:

  - A chave `datedAt` deve ser uma data no formato `dd/mm/aaaa`.

    - Caso a data não respeito o formato `dd/mm/aaaa` retorne `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O campo \"datedAt\" deve ter o formato \"dd/mm/aaaa\""
    }
    ```

  - A chave `rate` deve ser um inteiro de 1 à 5.

    - Caso a nota não seja um inteiro de 1 à 5 retorne `status 400`, com o seguinte corpo:

      ```js
      {
        "message": "O campo \"rate\" deve ser um inteiro de 1 à 5"
      }
      ```

  - O campo `date` é obrigatório e nenhuma das chaves citadas anteriormente podem ser vazias.

    - Caso o campo não seja informa, esteja vazio ou então alguma de suas chaves não tenham sido informadas retorne `status 400`, com o seguinte corpo:

      ```js
      {
        "message": "O campo \"date\" é obrigatório e \"datedAt\" e \"rate\" não podem ser vazios"
      }
      ```

- A requisição deve ter o token de autenticação nos headers.

  - Caso o token não seja encontrado retorne um código de `status 401`, com o seguinte corpo:

    ```js
    {
      "message": "Token não encontrado"
    }
    ```

  - Caso o token seja inválido retorne um código de `status 401`, com o seguinte corpo:

    ```js
    {
      "message": "Token inválido"
    }
    ```

- O endpoint deve retornar o `status 200` e o crush que foi editado, dá seguinte forma:

  ```js
  {
    "id": 1,
    "name": "Keanu Reeves",
    "age": 56,
    "date": {
      "datedAt": "22/10/2019",
      "rate": 4
    }
  }
  ```

### 6 - Crie o endpoint DELETE `/crush/:id`

#### Os seguintes pontos serão avaliados:

- O endpoint deve deletar um crush baseado no id da rota. Devendo retornar o `status 200`, com o seguinte corpo:

  ```js
  { "message": "Crush deletado com sucesso!" }
  ```

- A requisição deve ter o token de autenticação nos headers.

  - Caso o token não seja encontrado retorne um código de `status 401`, com o seguinte corpo:

    ```js
    {
      "message": "Token não encontrado"
    }
    ```

  - Caso o token seja inválido retorne um código de `status 401`, com o seguinte corpo:

    ```js
    {
      "message": "Token inválido"
    }
    ```

### 7 - Crie o endpoint GET `/crush/search?q=searchTerm`

#### Os seguintes pontos serão avaliados:

- O endpoint deve retornar um array de crushs que contenham em seu nome o termo pesquisado no queryParam da URL. Devendo retornar o `status 200`, com o seguinte corpo:

  ```
  /search?q=Ke
  ```

  ```js
  [
    {
      id: 1,
      name: "Keanu Reeves",
      age: 56,
      date: {
        datedAt: "22/10/2019",
        rate: 5,
      },
    }
  ];
  ```

- Caso `searchTerm` não seja informado ou esteja vazio, o endpoint devera retornar um array com todos os crushs cadastrados, assim como no endpoint GET `/crush`, com um `status 200`.

- Caso nenhum crush satisfaça a busca, o endpoint deve retornar o `status 200` e um array vazio.

- A requisição deve ter o token de autenticação nos headers.

  - Caso o token não seja encontrado retorne um código de `status 401`, com o seguinte corpo:

    ```js
    {
      "message": "Token não encontrado"
    }
    ```

  - Caso o token seja inválido retorne um código de `status 401`, com o seguinte corpo:

    ```js
    {
      "message": "Token inválido"
    }
    ```

---

## Avaliando o projeto

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário. Leva menos de 3 minutos!

Link: [Formulário Avaliação Projeto](https://be-trybe.typeform.com/to/ZTeR4IbH#cohort_name=xxxxx)
