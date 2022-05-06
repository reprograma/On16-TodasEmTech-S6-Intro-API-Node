# On16-TodasEmTech-s6-Intro-API-Node 🚀
Turma Online 16 | Back-end | 2022 | Introdução à API:
HTTP e NodeJS

## Para casa
Abra o PullRequest Respondendo as seguintes questões:


<br>


### 1) Qual a relação entre os métodos HTTP e o CRUD?
-----------------------------
Os verbos/métodos *HTTP* parecem estar diretamente ligado com o *CRUD*, por exemplo:

**C**reate -> POST <br>
**R**ead -> GET <br>
**U**pdate -> PUT / PATCH <br>
**D**elete -> DELETE <br>

Por causa de uma confusão na classificação de Resource, acabam relacionando REST diretamente a um CRUD. Por causa desse erro de classificação, quem busca criar api's verdadeiramente RESTFul terá dificuldades em seguir as "bases" do conceito, já que existem muitos outros métodos existentes além do CRUD, como esses listados no site [Mozila Developer](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods).


<br>

### 2) Comente, com exemplos, a diferença entre o PUT e o PATCH.
--------
O método PUT substitui todas as atuais representações do recurso de destino pela carga de dados da requisição. Já o método PATCH é utilizado para aplicar modificações parciais, quando você não quer mandar o payload completo.

Exemplo de **PUT**: 
(/usuario/1234): Resultado: {'id': 1234, 'name': 'Joao', 'idade': 25, 'documento': '123.321.12-X'}

Exemplo de **PATCH**: (/usuario/1234): Resultado: {'name': 'João'}

<br>



### 3) Apresente os dados dos JS no console
---- 
*Feita nas respectivas pastas*

    - Exercício Ghibli: o título de cada filme e a descrição de cada filme
    - Exercício Pokemón: o nome, descrição e tipo (separadamente) de cada pokemón

    Opcional: caso queira exercitar mais :). na pasta "extras", temos alguns jsons, você pode:
    - No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"
    - No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console
    - No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.
<br>


### 4) Defina o conceito de idempotência e como uma API pode ser idempotente
---
<br>

Um método HTTP idempotente é um método HTTP que pode ser chamado muitas vezes sem resultados diferentes. Não importa se o método é chamado apenas uma vez ou dez vezes. O resultado deve ser o mesmo. Essencialmente, significa que o resultado de uma solicitação executada com sucesso é independente do número de vezes que ela é executada. Por exemplo, na aritmética, adicionar zero a um número é uma operação idempotente. — [W3C](https://developer.mozilla.org/pt-BR/docs/Glossary/Idempotent).

Quando falamos em idempotência em API’s REST, podemos concluir que os verbos **GET, PUT, DELETE, HEAD** *e* **OPTIONS** são idempotentes. **POST** não é idempotente.
Sobre métodos seguros e não seguros, seguros são aqueles que não alteram o estado da aplicação e não seguros que podem alterar. Exemplos:

| método  | idempotente | seguro |
|---------|-------------|--------|
| GET     | SIM         | SIM    |
| POST    | NÃO         | NÃO    |
| PUT     | SIM         | NÃO    |
| DELETE  | SIM         | NÃO    |
| HEAD    | SIM         | SIM    |
| OPTIONS | SIM         | SIM    |

<br>

### 5) Cite alguns diferentes padrões de projetos de software

<br>

Temos alguns padrões de projetos de software disponíveis no site [Refactoring .Guru.](https://refactoring.guru/pt-br/design-patterns/catalog). Ele explica os tipos de projeto divididos pelos padrões criacionais, estruturais e comportamentais. Além de tudo, cada projeto tem sua descrição e os seus prós e contras.  Alguns exemplos são: [Factory Methody](https://refactoring.guru/pt-br/design-patterns/factory-method), [Abstract Factory](https://refactoring.guru/pt-br/design-patterns/abstract-factory), [Builder](https://refactoring.guru/pt-br/design-patterns/builder), [Prototype](https://refactoring.guru/pt-br/design-patterns/prototype), etc. 