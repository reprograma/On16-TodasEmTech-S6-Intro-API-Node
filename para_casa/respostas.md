On16-TodasEmTech-s6-Intro-API-Node

Turma Online 16 | Back-end | 2022 | Introdução à API:
HTTP e NodeJS

## Para casa

Abra o PullRequest Respondendo as seguintes questões:

1. #### Qual a relação entre os métodos HTTP e o CRUD?
  

    O protocolo HTTP é composto por um conjunto de métodos de requisição, no modelo cliente/servidor, comumente chamados de verbos HTTP, como: get, post, put, patch e delete, e cada um deles corresponde a uma ação. Cada solicitação de HTTP contém uma URL e carrega informações que o servidor usa para saber qual resposta HTTP será enviada ao cliente que emitiu a solicitação, podendo conter também um método que descreve o que fazer com esse recurso.

    Já o CRUD, da sigla: create (criar), read (ler), update (atualizar) e delete (deletar) são as quatro funções básicas executadas por sistemas que manipulam bancos de dados estáticos.

**fonte: MDN web docs e EngenhariaDeSoftware*

2. #### Comente, com exemplos, a diferença entre o PUT e o PATCH.
  
  O método de requisição HTTP PUT permite apenas substituições completas no arquivo, como, por exemplo, quando substituímos em uma lista de compras arroz por macarrão. Já o método de requisição HTTP PATCH permite modificações parciais, como modificar na mesma lista o arroz branco para integral.
  
  *fonte: MDN web docs*
  
3. #### Apresente os dados dos JSONs no console
  
  - Exercício Ghibli: o título de cada filme e a descrição de cada filme
    
  - Exercício Pokemón: o nome, descrição e tipo (separadamente) de cada pokemón
    
    Opcional: caso queira exercitar mais :). na pasta "extras", temos alguns jsons, você pode:
    
  - No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"
    
  - No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console
    
  - No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.
    
4. #### Defina o conceito de idempotência e como uma API pode ser idempotente
  
  Idempotência, tanto na matemática quanto na programação, é a propriedade que algumas operações possuem de poderem ser aplicadas uma ou mais vezes a sem que seja modificado o resultado da aplicação inicial. Ou seja, Um método HTTP é idempotente se uma requisição idêntica puder ser feita em sequência com o mesmo efeito e deixando o servidor no mesmo estado. Para que uma API seja idempotente, deve-se utilizar de maneira correta os métodos de requisição HTTP, que são considerados idempotentes, a saber: GET, HEAD, PUT e DELETE. Também deve-se ter cuidado para que não se utilize chamadas duplicadas,no caso de métodos não idempotentes, que podem afetar o resultado esperado.
  
  *fonte: wikipedia e Medium:Lucas Schwenke*
  
5. #### Cite alguns diferentes padrões de projetos de software
  
  De acordo com o livro **Design Patterns: Elements of Reusable Object-Oriented Software**, de 1994 existem três principais padrões de projetos de software:
  
  a) Padrões criacionais: oferecem alternativas para a criação de objetos e facilitam a reutilização do código. Exemplos de padres criacionais:
  

            Factory Method

            Abstract Factory

            Builder

        b)Padrões estruturais: possibilitam montar objetos e classes em estruturas         maiores, sem perder a eficiência e flexibilidade. Exemplos de padrões         estruturais:

            Adapter

            Bridge

            Composite

        c) Padrões comportamentais: ajudam a trabalhar melhor com os algoritmos e         com a delegação de responsabilidades entre os objetos. Exemplos de padrões         comportamentais:

            Chain of Responsibility

            Command

            Interpreter

            *fonte: Alura*