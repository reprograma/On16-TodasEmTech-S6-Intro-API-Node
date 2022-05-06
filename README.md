# 🚀 On16-TodasEmTech-s6-Intro-API-Node

Turma Online 16 | Back-end | 2022 | Introdução à API:
HTTP e NodeJS

![Alt Text](https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif)

## 1. Qual a relação entre os métodos HTTP e o CRUD?

O protocolo HTTP define um conjunto de **métodos de requisição** responsáveis por indicar a ação a ser executada para um dado recurso. Eles são comumente referenciados como ***HTTP Verbs (Verbos HTTP)***. São oito **métodos**: GET, HEAD, POST, PUT, DELETE, TRACE, OPTIONS e CONNECT.

Já o **CRUD**, é a composição da primeira letra de 4 funções básicas de um sistema que trabalha com banco de dados:

- **C**reate -> POST
- **R**ead -> GET
- **U**pdate -> PUT / PATCH
- **D**elete -> DELETE

Os verbos HTTP parecem estar diretamente ligado com o CRUD, mas RESTFul não é um nome bonito para *CRUD*, são coisas distintas.

Fonte: MDN Web Docs

## 2. Qual a diferença entre o PUT e o PATCH?

Se preciso atualizar de forma completa um recurso, utilizo o **PUT**. Se essa atualização for parcial, de um subconjunto dos dados do recurso, utilizo o **PATCH**.

Fonte: MDN Web Docs

## 3. Defina o conceito de idempotência e como uma API pode ser idempotente

Em matemática e ciência da computação, a **idempotência** é a propriedade que algumas operações têm de poderem ser aplicadas várias vezes sem que o valor do resultado se altere após a aplicação inicial.

Um método é considerado idempotente se o resultado de uma requisição realizada com sucesso é independente do número de vezes que ela é executada.

Fonte: Wikipedia / Medium: Gabriel Rufino

## 4. Cite alguns diferentes padrões de projetos de software

Os três principais padrões de projeto definidos pelo livro **“Design Patterns: Elements of Reusable Object-Oriented Software”** de 1994, escrito por GOF (Gang of Four: Rich Gamma, Richard Helm, Ralph Johnson e John Vlissides) são os **padrões criacionais, estruturais e comportamentais**. Esses padrões foram divididos e agrupados de acordo com a natureza do problema que eles solucionam.

1) Padrões criacionais: estes padrões oferecem diversas alternativas de criação de objetos, o que aumenta a flexibilidade e a reutilização de código. Alguns dos principais padrões desse tipo são:
- Factory Method
- Abstract Factory
- Builder
2) Padrões estruturais: Nos mostram como montar objetos e classes em estruturas maiores, sem perder a eficiência e flexibilidade. Alguns dos principais padrões desse tipo são:
- Adapter
- Bridge
- Composite
3) Padrões comportamentais: Nos ajudam a trabalhar melhor com os algoritmos e com a delegação de responsabilidades entre os objetos. Os padrões que se destacam nesse tipo são:
- Chain of Responsibility
- Command
- Interpreter
