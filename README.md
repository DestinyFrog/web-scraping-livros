# Pesquisados de dados de Livros

<div>
	<a style="text-decoration: none;" href="https://www.typescriptlang.org/"><img width="40" src="https://raw.githubusercontent.com/tandpfun/skill-icons/de91fca307a83d75fc5b1f6ce24540454acead41/icons/TypeScript.svg" alt="typescript logo"/> </a>
	<a style="text-decoration: none;" href="https://pptr.dev/"> <img width="40" src="https://www.svgrepo.com/show/354228/puppeteer.svg" alt="puppeteer logo"/> </-a>
	<a style="text-decoration: none;" href="https://nodejs.org/en"> <img width="40" src="https://raw.githubusercontent.com/tandpfun/skill-icons/de91fca307a83d75fc5b1f6ce24540454acead41/icons/NodeJS-Dark.svg" alt="node logo"/> </a>
	<a style="text-decoration: none;" href="https://yarnpkg.com/"> <img width="80" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/yarnpkg_logo_icon_167944.png" alt="yarn logo"/> </a>
</div>

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