# On16-TodasEmTech-s6-Intro-API-Node
Turma Online 16 | Back-end | 2022 | Introdução à API:
HTTP e NodeJS

## Para casa
Abra o PullRequest Respondendo as seguintes questões:

<h1> 1) Qual a relação entre os métodos HTTP e o CRUD? <h1>
   R: O HTTP é um protocolo usado dentro de um modelo client/server que se baseia em pedidos e respostas por exemplo o client faz uma requisição e o server devolve com as informações que o client pediu.
   Client, são o navegadores padão como google, explore firefox
   Server, é o servidor acessa as informações que o client solicita através de um banco de dados

   O HTTP define um conjunto de método de requisição, para indicar as ações que devem ser executadas os mais utilizados são:

   GET - ler
   POST - Criar
   PUT - Substituir
   PATCH - Modificar 
   DELETE - Excluir 

   Já o CRUD, é a composição da primeira letra de 4 funções básicas de um sistema que trabalha com banco de dados:

  Create -> POST
  Read -> GET
  Update -> PUT / PATCH
  Delete -> DELETE
  Os verbos HTTP parecem estar diretamente ligado com o CRUD, mas RESTFul não é um nome bonito para CRUD, são coisas distintas.

    Fonte: MDN Web Docs


<h1> 2) Comente, com exemplos, a diferença entre o PUT e o PATCH. <h1>

Geralmente, ao usar-se o PUT, fica legível que a alteração do dado será com referência a entidade completa.

Exemplo: (/usuario/1234) :

Resultado: {'id': 1234, 'name': 'Joao', 'idade': 25, 'documento': '123.321.12-X'}

O PATCH é usado para atualização parcial, quando você não quer mandar o payload completo.

Exemplo: (/usuario/1234) :

Resultado: {'name': 'João'}

<h1> 3) Apresente os dados dos JS no console <h1>
    - Exercício Ghibli: o título de cada filme e a descrição de cada filme
    - Exercício Pokemón: o nome, descrição e tipo (separadamente) de cada pokemón

    Opcional: caso queira exercitar mais :). na pasta "extras", temos alguns jsons, você pode:
    - No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"
    - No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console
    - No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.

<h1> 4) Defina o conceito de idempotência e como uma API pode ser idempotente <h1>
 Idempotência , em programação e matemática, é uma propriedade de algumas operações de tal forma que não importa quantas vezes você as execute, você obtém o mesmo resultado. Como tal, uma solicitação POST devemos mude o resultado e isso meios não é idempotente.

 FONTE: COMOZED

<h1> 5) Cite alguns diferentes padrões de projetos de software <h1>

“Cada padrão é uma regra de três partes, que expressa uma relação entre um certo contexto, um problema e uma solução”. Sendo assim para entender a necessidade, existência, de um padrão é necessário estudar suas partes: o problema, a solução e o contexto sobre o qual ele é aplicável.

Padrões criacionais: estes padrões oferecem diversas alternativas de criação de objetos, o que aumenta a flexibilidade e a reutilização de código. Alguns dos principais padrões desse tipo são:
 * **Factory Method**
 * **Abstract Factory**
 * **Builder**

Padrões estruturais: Nos mostram como montar objetos e classes em estruturas maiores, sem perder a eficiência e flexibilidade. Alguns dos principais padrões desse tipo são:
* **Adapter**
* **Bridge**
* **Composite**

Padrões comportamentais: Nos ajudam a trabalhar melhor com os algoritmos e com a delegação de responsabilidades entre os objetos. Os padrões que se destacam nesse tipo são:
* **Chain of Responsibility**
* **Command**
* **Interpreter**


Fonte: DEVMEDIA E ALURA
