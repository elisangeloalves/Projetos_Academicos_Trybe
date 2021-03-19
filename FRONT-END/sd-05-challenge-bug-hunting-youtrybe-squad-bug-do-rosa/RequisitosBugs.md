## Requisitos testados do projeto com Bugs

A seguir estão listados todos os requisitos do projeto. Lembre-se que, alguns testes estão quebrando devido aos bugs, assim que os bugs forem resolvidos os testes devem retornar sucesso. É possível que um bug dependa da resoluçao de outro bug.

- [Funcionamento](https://recordit.co/ahZsg4HUkW#) esperado

### 1. Testes do componente App

  -  O componente deve ser renderizado com sucesso;

### 2. Testes do componente Header

  - O componente deve apresentar apenas um link ao ser renderizado;
  - Ao realizar uma consulta deve redirecionar para tela de "busca";

### 3. Testes do componente SearchResult

  - O componente deve apresentar apenas uma lista de videos, não canais, ao ser renderizado;
  - Ao clicar em um video deve redirecionar para tela de video;

### 4. Testes do arquivo service.js

  - Deve realizar requisições para API do youtube, e retornar os dados tratados;

### 5. Testes do componente VideoPage

  - O componente deve carregar todos os dados do vídeo (comentários, descrição e vídeos relacionados), ao ser renderizado, na tela;
  - Ao selecionar um vídeo no `SideBar` deve trocar o vídeo do _player_ e todos os seus dados, junto da URL.

## Corrigiu todos os bugs?

O que mais posso fazer para garantir que não sejam criados mais **bugs**?

  - Deve ter uma cobertura de testes de, pelo menos, 90%. Caso seja uma pessoa _hardcore_, **safe programmer**, tenha uma cobertura de teste de _100%_;

    - Para ver a cobertura de testes, execute no terminal o comando `npm run test-coverage`.

Após garantir a cobertura de testes, sinta-se livre para adicionar novas **features**, já que, sem bugs, podemos nos preoucupar mais em desenvolver novas funcionalidades!

## Exemplos de features no backlog para futuro desenvolvimento!

- Videos marcados como gostei;
- Criar playlist de videos;
- Armazenar historico de videos assistidos;
- Videos marcados para assistir mais tarde;