# Boas vindas ao repositório do projeto de Front-End Online Store!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

### Entrega

  - Projeto em grupo.

  - Serão quatro dias de de projeto.
  
  - O projeto tem até a seguinte data: `05/08/2020 - 14:00h`. Para ser entregue a avaliação final.

## O que deverá ser desenvolvido

Neste projeto você criará uma versão simplificada, sem persistência no banco de dados, de uma loja online, desenvolvendo em grupo suas funcionalidades de acordo com demandas definidas em um quadro _Kanban_, em um cenário mais próximo ao do mercado de trabalho. A partir dessas demandas, teremos uma aplicação onde os usuários poderão:
  - Buscar produtos por termos e categorias a partir da _API do Mercado Livre_;
  - Interagir com os produtos buscados de modo a adicioná-los e removê-los de um carrinho de compras em diferentes quantidades;
  - Visualizar detalhes e avaliações prévias de um produto, bem como criar novas avaliações;
  - E por fim, finalizar a compra dos itens selecionados.

## Documentação da API do Mercado Livre

Sua página _web_ irá consumir os dados da API do _Mercado Livre_ para realizar a busca de itens da sua loja online. Para realizar essas buscas, vocês precisarão consultar os seguintes _endpoints_:

- Para listar as categorias disponíveis:
  - Tipo da requisição: `GET`
  - Endpoint: https://api.mercadolibre.com/sites/MLB/categories
- Para buscar por itens por termo:
  - Tipo da requisição: `GET`
  - Parâmetro de busca $QUERY (este parâmetro deve ser substituído pelo valor do campo de busca)
  - Endpoint: https://api.mercadolibre.com/sites/MLB/search?q=$QUERY
- Para buscar itens por categoria:
  - Tipo da requisição: `GET`
  - Parâmetro de busca $CATEGORY_ID (este parâmetro deve ser substituído pelo ID da categoria selecionada)
  - Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID
- Para buscar itens de uma categoria por termo:
  - Tipo da requisição: `GET`
  - Parâmetro de busca $QUERY (este parâmetro deve ser substituído pelo valor do campo de busca)
  - Parâmetro de busca $CATEGORY_ID (este parâmetro deve ser substituído pelo ID da categoria selecionada)
  - Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY

Exemplo de requisição para listar categorias:
```
"https://api.mercadolibre.com/sites/MLB/categories"
```

O retorno desse endpoint será algo no formato:
```json
[
    {
        "id": "MLB5672",
        "name": "Acessórios para Veículos"
    },
    ...
]
```

Exemplo de requisição de busca:
```
"https://api.mercadolibre.com/sites/MLB/search?category=MLB1055&q=Motorola"
```

O retorno desse endpoint será algo no formato:
```json
{
    "site_id": "MLB",
    "query": "Moto G",
    "paging": {
        "total": 14487,
        "offset": 0,
        "limit": 50,
        "primary_results": 1037
    },
    "results": [
        {
            "id": "MLB1370656442",
            "site_id": "MLB",
            "title": "Motorola G7 Play 32 Gb Dourado 2 Gb Ram",
            "seller": {
                "id": 29211,
                "permalink": null,
                "power_seller_status": "gold",
                "car_dealer": false,
                "real_estate_agency": false,
                "tags": []
            },
            "price": 849,
            "currency_id": "BRL",
            "available_quantity": 1,
            "sold_quantity": 0,
            "buying_mode": "buy_it_now",
            "listing_type_id": "gold_pro",
            "stop_time": "2039-11-22T03:49:51.000Z",
            "condition": "new",
            "permalink": "https://www.mercadolivre.com.br/p/MLB13996822",
            "thumbnail": "http://mlb-s1-p.mlstatic.com/964021-MLA31350197875_072019-I.jpg",
            "accepts_mercadopago": true,
            "installments": {
                "quantity": 12,
                "amount": 70.75,
                "rate": 0,
                "currency_id": "BRL"
            },
            "address": {
                "state_id": "BR-RJ",
                "state_name": "Rio de Janeiro",
                "city_id": "BR-RJ-01",
                "city_name": "Rio de Janeiro"
            },
            "shipping": {
                "free_shipping": true,
                "mode": "me2",
                "tags": [
                    "mandatory_free_shipping"
                ],
                "logistic_type": "drop_off",
                "store_pick_up": false
            },
            "seller_address": {
                "id": "",
                "comment": "",
                "address_line": "",
                "zip_code": "",
                "country": {
                    "id": "BR",
                    "name": "Brasil"
                },
                "state": {
                    "id": "BR-RJ",
                    "name": "Rio de Janeiro"
                },
                "city": {
                    "id": "BR-RJ-01",
                    "name": "Rio de Janeiro"
                },
                "latitude": "",
                "longitude": ""
            },
            "attributes": [
                {
                    "id": "BRAND",
                    "value_id": "2503",
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Outros",
                    "name": "Marca",
                    "value_name": "Motorola",
                    "value_struct": null,
                    "values": [
                        {
                            "id": "2503",
                            "name": "Motorola",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "source": 1
                },
                {
                    "source": 1,
                    "name": "Modelo de CPU",
                    "value_name": "4x1.8 GHz Kryo 250 Gold/4x1.8 GHz Kryo 250 Silver",
                    "value_struct": null,
                    "attribute_group_id": "OTHERS",
                    "id": "CPU_MODEL",
                    "value_id": "6954315",
                    "values": [
                        {
                            "id": "6954315",
                            "name": "4x1.8 GHz Kryo 250 Gold/4x1.8 GHz Kryo 250 Silver",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "attribute_group_name": "Outros"
                },
                {
                    "value_name": "Adreno 506",
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Outros",
                    "source": 1,
                    "name": "Modelo de GPU",
                    "value_id": "7524181",
                    "value_struct": null,
                    "values": [
                        {
                            "id": "7524181",
                            "name": "Adreno 506",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "id": "GPU_MODEL"
                },
                {
                    "id": "ITEM_CONDITION",
                    "value_struct": null,
                    "values": [
                        {
                            "struct": null,
                            "source": 1572,
                            "id": "2230284",
                            "name": "Novo"
                        }
                    ],
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Outros",
                    "name": "Condição do item",
                    "value_id": "2230284",
                    "value_name": "Novo",
                    "source": 1572
                },
                {
                    "name": "Linha",
                    "value_id": "59187",
                    "value_struct": null,
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Outros",
                    "id": "LINE",
                    "value_name": "Moto",
                    "values": [
                        {
                            "name": "Moto",
                            "struct": null,
                            "source": 1,
                            "id": "59187"
                        }
                    ],
                    "source": 1
                },
                {
                    "id": "MODEL",
                    "name": "Modelo",
                    "value_id": "6444567",
                    "value_name": "G7 Play",
                    "value_struct": null,
                    "values": [
                        {
                            "struct": null,
                            "source": 1,
                            "id": "6444567",
                            "name": "G7 Play"
                        }
                    ],
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Outros",
                    "source": 1
                },
                {
                    "value_id": "6954318",
                    "attribute_group_name": "Outros",
                    "attribute_group_id": "OTHERS",
                    "source": 1,
                    "id": "PROCESSOR_MODEL",
                    "name": "Modelo do processador",
                    "value_name": "Snapdragon 632",
                    "value_struct": null,
                    "values": [
                        {
                            "source": 1,
                            "id": "6954318",
                            "name": "Snapdragon 632",
                            "struct": null
                        }
                    ]
                }
            ],
            "differential_pricing": {
                "id": 33580182
            },
            "original_price": null,
            "category_id": "MLB1055",
            "official_store_id": null,
            "catalog_product_id": "MLB13996822",
            "tags": [
                "good_quality_thumbnail",
                "brand_verified",
                "extended_warranty_eligible",
                "good_quality_picture",
                "immediate_payment",
                "cart_eligible"
            ],
            "catalog_listing": true
        },
        ...
    ]
}
```

Se você quiser aprender mais sobre a API do _Mercado Livre_, veja a [documentação](https://developers.mercadolivre.com.br/pt_br/itens-e-buscas).

## Requisitos do projeto

Aqui encontram-se os requisitos do projeto. Para acessar a descrição completa das demandas, veja o quadro _Kanban_ disponibilizado para o seu grupo na [aba Projects](https://github.com/tryber/sd-05-block14-project-frontend-online-store-1/projects) do repositório.

⚠ **PULL REQUESTS COM ISSUES NO CODE CLIMATE NÃO SERÃO AVALIADAS, ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠

### Execução de testes unitários

Vamos utilizar [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) para execução dos testes unitários.

Esse _framework_ de testes utiliza algumas marcações no código para verificar a solução proposta, uma dessas marcações é o atributo `data-testid` e faremos uso dele aqui.

Na descrição dos requisitos (logo abaixo) será pedido que seja feita a adição de atributos `data-testid` nos elementos _HTML_. Vamos a um exemplo para deixar claro essa configuração:

Se o requisito pedir "crie um botão e adicione o id de teste (ou `data-testid`) com o valor `my-action`, você pode criar:

```html
<button data-testid="my-action" ></button>
```

ou

```html
<a data-testid="my-action"><a/>
```

ou seja, o atributo `data-testid="my-action"` servirá para o React Testing Library(RTL) identificar o elemento e dessa forma, conseguiremos realizar testes unitários focados no comportamento da aplicação.

Afim de verificar a solução proposta, você pode executar todos os testes unitários localmente, basta executar:

```bash
npm test
```

### 1. Implementar módulo de acesso à API do Mercado Livre

Você deve (**OBRIGATORIAMENTE**) utilizar o arquivo `src/services/api.js` para acessar a API do Mercado Livre em sua aplicação.

Utilize (**OBRIGATORIAMENTE**) o módulo **[Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)** para realizar as requisições.

Já deixamos 2 funções a serem implementadas para isso:

```javascript
export async function getCategories() {
  // implement here
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // implement here
}
```

Essas funções devem realizar uma chamada para a API do Mercado Livre e retornar uma [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) com os dados de resultado.
Com essa implementação, o uso dessas funções deve ser algo parecido com o exemplo abaixo:

```javascript
import * as api from './services/api'

api.getCategories().then(categories => { console.log(categories) })
```

a variável `categories` deve contém o objeto JSON com as categorias obtidas através da chamada da API do Mercado Livre:

```json
[
  {
      "id": "MLB5672",
      "name": "Acessórios para Veículos"
  },
  {
      "id": "MLB271599",
      "name": "Agro"
  },
  {
      "id": "MLB1403",
      "name": "Alimentos e Bebidas"
  }
]
```

### 2. Criar página de listagem de produtos vazia

  A tela básica da plataforma é a tela de **listagem de produtos**, onde quem usa buscará o que quer para adicionar ao carrinho e filtrará suas buscas.

  * Esta página deve ficar no path `/`.
  * Mostre a mensagem `"Digite algum termo de pesquisa ou escolha uma categoria."`.
  * Adicione o atributo `data-testid` com o valor `home-initial-message` no elemento da mensagem.

### 3. Criar página do carrinho de compras

  Quem usa o site irá adicionar produtos em seu carrinho de compras e finalizar a compra. A listagem de produtos deve ter um ícone de carrinho que, ao ser clicado, leva à página do carrinho. Inicialmente, o carrinho deverá estar vazio.

  * O elemento com o ícone de carrinho de compras deve ficar visível na página inicial (listagem de produtos) e também na página de detalhes de um produto (descrita posteriormente)
  * Adicione o atributo `data-testid` com o valor `shopping-cart-button` no elemento com o ícone de carrinho de compras.
  * Mostre a mensagem `"Seu carrinho está vazio"` na página de carrinho de compras quando não existirem produtos no carrinho de compras.
  * Adicione o atributo `data-testid` com o valor `shopping-cart-empty-message` no elemento da mensagem.

### 4. Listar as categorias de produtos disponíveis via API na página principal

  Um endpoint da API do Mercado Livre retorna as categorias de produto disponíveis para busca. Em momento posterior tais categorias serão usadas para filtrar a listagem de produtos. Por hora, elas devem ser listadas na tela da listagem, conforme protótipo.

  * Adicione o atributo `data-testid` com o valor `category` nos elementos que possuem os nomes das categorias

### 5. Buscar por termos e receber uma listagem de produtos, com dados resumidos, associados a esses termos

  A alma do site é a sua lógica de busca e listagem de produtos. Após digitar seus termos na caixa de busca uma requisição deverá ser feita à API do Mercado Livre utilizando a ação de um botão, tendo como parâmetros a frase digitada, e tais produtos deverão aparecer na tela numa exibição resumida, conforme protótipo anexo.

  * Adicione o atributo `data-testid` com o valor `query-input` no elemento `input` que servirá para a pessoa que usa sua aplicação digitar o termo de busca.
  * Adicione o atributo `data-testid` com o valor `query-button` no elemento que dispara a chamada para a API com o termo de busca pesquisado.
  * Adicione o atributo `data-testid` com o valor `product` nos elementos que possuem os dados dos produtos.

### 6. Selecionar uma categoria e ver somente produtos daquela categoria

  A página, agora, deve poder usar as categorias recuperadas da API para filtrar os produtos buscados. Os termos e as categorias inseridas por quem usa devem ser usados em conjunto para filtragens mais específicas.

### 7. Clicar na exibição resumida de um produto e ir para uma tela com sua exibição detalhada

  A exibição detalhada de um produto será a página para exibir tudo o que se tem acerca de um produto específico.

  * Adicione o atributo `data-testid` com o valor `product-detail-link` no elemento que ao ser clicado, enviará a pessoa que usa a aplicação para a página de detalhes do produto. Você deve adicionar esse atributo para todos os produtos.
  * Adicione o atributo `data-testid` com o valor `product-detail-name` no elemento que possui o nome do produto na tela de detalhes.

### 8. Adicionar produtos a partir da tela de listagem de produtos

  Configure uma forma de adicionar produtos ao carrinho de compras a partir da tela de listagem de produtos.

  * Adicione o atributo `data-testid` com o valor `product-add-to-cart` nos elementos que executam a ação de adicionar os produtos ao carrinho de compras.
  * Desenvolva algo da forma simples: um elemento adiciona um produto.
  * Adicione o atributo `data-testid` com o valor `shopping-cart-product-name` no elemento que possui o nome do produto na tela do carrinho de compras. Você deve adicionar esse atributo para todos os produtos.
  * Adicione o atributo `data-testid` com o valor `shopping-cart-product-quantity` no elemento que possui a quantidade do produto na tela do carrinho de compras. Você deve adicionar esse atributo para todos os produtos.

### 9. Adicionar um produto ao carrinho a partir de sua tela de exibição detalhada

  Poder adicionar produtos ao carrinho a partir de sua tela de exibição detalhada será um canal importante de conversões de venda.

  * Adicione o atributo `data-testid` com o valor `product-detail-add-to-cart` no elemento que possui a ação de adicionar o produto ao carrinho de compras.

### 10. Visualizar a lista de produtos adicionados ao carrinho em sua página e manipular sua quantidade

  São operações básicas de carrinho a alteração da quantidade de um determinado produto nele e a visualização de tudo o que foi adicionado, com a soma dos valores.

  * Adicione elementos na página do carrinho de compras para aumentar ou diminuir a quantidade de cada produto presente no carrinho.
  * Adicione o atributo `data-testid` com o valor `product-increase-quantity` no elemento que aumenta a quantidade de um produto. Adicione esse atributo para todos os produtos.
  * Adicione o atributo `data-testid` com o valor `product-decreate-quantity` no elemento que diminui a quantidade de um produto. Adicione esse atributo para todos os produtos.

### 11. Avaliar e comentar acerca de um produto em sua tela de exibição detalhada

  Avaliações positivas de um produto contribuem para boas vendas e nos dão insumos para, no tempo, destacarmos os produtos melhores e fazermos anúncios direcionados. Produtos ruins, de forma análoga, podem eventualmente ser penalizados por avaliações ruins.

  * Adicione um campo de texto para que a pessoa que utiliza a aplicação possa escrever algo sobre o produto.
  * Adicione o atributo `data-testid` com o valor `product-detail-evaluation` no campo de texto.
  * (**Não avaliativo**) Você pode criar um botão que simule a submissão dessa avaliação, na verdade, esse botão não precisa realizar nenhuma função específica, pode por exemplo, limpar o campo com o texto da avaliação.

### 12. Finalizar compra, vendo um resumo dela, preenchendo os meus dados e escolhendo a forma de pagamento

  O último grande passo do fluxo do e-commerce é a finalização da compra por parte de quem usa.

  * Adicione um botão para finalizar a compra. Este botão ao ser clicado, deve enviar os dados referente à lista para uma página de "_checkout_".
  * Adicione o atributo `data-testid` com o valor `checkout-products` no botão que leva a pessoa à página de "_checkout_".
  * A página de "_checkout_" deve apresentar a listagem dos produtos e o valor total da compra.
  * A página de "_checkout_" também deve possuir elementos para que a pessoa insira os dados e finalize a compra.
  * Elemento "Nome completo" deve possuir o atributo `data-testid` com o valor `checkout-fullname`.
  * Elemento "Email" deve possuir o atributo `data-testid` com o valor `checkout-email`.
  * Elemento "CPF" deve possuir o atributo `data-testid` com o valor `checkout-cpf`.
  * Elemento "Telefone" deve possuir o atributo `data-testid` com o valor `checkout-phone`.
  * Elemento "CEP" deve possuir o atributo `data-testid` com o valor `checkout-cep`.
  * Elemento "Endereço" deve possuir o atributo `data-testid` com o valor `checkout-address`.
  * (**Não avaliativo**) Você pode criar um botão que simule a compra desses produtos, na verdade, esse botão não precisa realizar nenhuma função específica.

### BÔNUS:

### 13. Ver junto ao ícone do carrinho a quantidade de produtos dentro dele, em todas as telas em que ele aparece

  A partir de uma pesquisa com usuários e concorrentes, identificamos que existe a necessidade de uma visualização da quantidade de produtos do carrinho de uma forma dinâmica e acessível.

  * Adicione o atributo `data-testid` com o valor `shopping-cart-size` no elemento que contém a quantidade de produtos presente na lista.
  * A quantidade a ser exibida é o número total de itens, ou seja, se a pessoa adiciona o produto1 5 vezes e o produto2 2 vezes, o valor a ser exibido é 7.
  * Esse elemnento deve ser visível da página de listagem de produtos e da página de detalhes de produto.

### 14. A quantidade de produtos adicionados ao carrinho deve ser limitada pela quantidade disponível em estoque

  Produtos tem disponibilidades limitadas. É uma péssima experiência de uso adicionar ao carrinho produtos que, no fim do processo, não se pode comprar.

### 15. Ver quais produtos tem frete grátis

  As pessoas que vendem no Mercado Livre disponibilizam frete grátis a alguns produtos. Devemos incorporar isso ao e-commerce.

  * Adicione um elemento que mostre essa informação para cada produto que possua frete grátis na tela de listagem.
  * Adicione o atributo `data-testid` com o valor `free-shipping` em elementos que apresentem essa informação para todos os produtos que possuam frete grátis.

---

## Instruções para entregar seu projeto:

### ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório
  * `git clone git@github.com:tryber/sd-05-block14-project-frontend-online-store-1.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-05-block14-project-frontend-online-store-1`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm start` (uma nova página deve abrir no seu navegador com um texto simples)

3. Faça alterações separadas por novas branchs criadas a partir da branch `master`, criando uma nova branch para cada demanda
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora, crie uma branch para a demanda que você vai desenvolver do seu projeto
    * Você deve criar uma branch com uma breve descrição da demanda a ser desenvolvida
    * Exemplo: `git checkout -b criar-campo-de-busca`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (devem aparecer listadas as novas alterações em vermelho)
  * Adicione o arquivo alterado ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (devem aparecer listadas as novas alterações em verde)
  * Faça seus `commit`
      * Exemplo:
        * `git commit -m 'criando componente de busca`
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin criar-campo-de-busca`

6. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-05-block14-project-frontend-online-store-1/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a branch do grupo e a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-05-block14-project-frontend-online-store-1/pulls) e confira que o seu _Pull Request_ está criado

7. Após finalizar as alterações do seu _Pull Request_:
  * Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque as pessoas do seu grupo
  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**
  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**
  * No menu à direita, clique no _link_ **"Reviewers"** e selecione dois membros do seu grupo

8. Assim que aprovado por pelo menos duas pessoas do seu grupo e o _Code Climate_ estiver adereçado, acesse **SEU** _Pull Request_ e clique no botão _"Merge pull request"_

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

### DEPOIS DE TERMINAR O DESENVOLVIMENTO

Para **"entregar"** seu projeto, siga os passos a seguir:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas
  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**
  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**
  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-05`

Se ainda houver alguma dúvida sobre como entregar seu projeto, [aqui tem um video explicativo](https://vimeo.com/362189205).

⚠ Lembre-se que garantir que todas as _issues_ comentadas pelo CodeClimate estão resolvidas! ⚠

---

### REVISANDO UM PULL REQUEST

⚠⚠⚠

À medida que você e as outras pessoas que estudam na Trybe forem entregando os projetos, vocês receberão um alerta via Slack para também fazer a revisão dos Pull Requests dos seus colegas. Fiquem atentos às mensagens do "Pull Reminders" no Slack!

Use o material que você já viu sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os projetos que chegaram para você.
