### Pesquisados de dados de Livros

### O que é
Um programa que automatiza a pesquisa dados na web, o chamado __"Web-Scraping"__. Através da Biblioteca [Puppeteer](https://pptr.dev/) pesquisa dados no __Google__ e "procura/seleciona" os dados interessante na página HTML.

Nesse caso ele recebe uma lista de livros no arquivo __"data/livros.txt"__, e pesquisa pelo __Autor__ e __Ano de Publicação__ de cada um, e retorna se for encontrado (caso contrário retorna **null** ou **NaN**). Depois reune todos os dados em um arquivo JSON em __"data/livros.json"__.

### Como usar?
Para o funcionamento da aplicação é necessário o **Node.js** instalado e opcionalmente o Gerenciador de Pacotes **yarn**, porém também funciona com **npm**.

Primeiramente baixar as dependências com:
> - npm
> ```cmd
> npm install
> ```
>
> - yarn
> ```cmd
> yarn install
> ```

e depois iniciar aplicação com:
> - npm
> ```cmd
> npm run start
> ```
>
> - yarn
> ```cmd
> yarn start
> ```