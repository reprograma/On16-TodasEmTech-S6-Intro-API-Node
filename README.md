# On16-TodasEmTech-s6-Intro-API-Node
Turma Online 16 | Back-end | 2022 | Introdução à API:
HTTP e NodeJS

## Para casa
Abra o PullRequest Respondendo as seguintes questões:

1) Qual a relação entre os métodos HTTP e o CRUD?

 - Os métodos HTTP estão diretamente ligados ao que significa o acrônimo CRUD:
Create = no http, temos o método POST
Read = corresponde ao método GET
Update = os métodos PUT e PATCH
Delete = o método de mesmo nome, DELETE
 - Em suma, o CRUD descreve as principais ações que são pertinentes para a criação e manutenção de bancos de dados, tendo sua correspondência dentro do protocolo HTTP, que possibilita essas ações na prática.


2) Comente, com exemplos, a diferença entre o PUT e o PATCH.

 - Ambos os métodos se referem à pratica de atualização (Update no CRUD), mas enquanto o PUT deixa explícito que está alterando a entidade completa em questão, o PATCH, como o próprio nome sugere, funciona como uma espécie de "remendo", alterando apenas um pedaço da entidade. Por exemplo, se a intenção é alterar vários dados de um usuário (ou até criá-lo, caso ele não exista), o método PUT pode fazer isso com mais agilidade; enquanto o método PATCH alteraria apenas uma parte dos dados do usuário, sem o poder de criá-lo caso ele não exista.

3) Apresente os dados dos JS no console
    - Exercício Ghibli: o título de cada filme e a descrição de cada filme
    - Exercício Pokemón: o nome, descrição e tipo (separadamente) de cada pokemón

    Opcional: caso queira exercitar mais :). na pasta "extras", temos alguns jsons, você pode:
    - No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"
    - No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console
    - No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.

4) Defina o conceito de idempotência e como uma API pode ser idempotente

 - Idempotência é a característica da aplicação de um método HTTP em que uma requisição idêntica daquele método pode ser feita inúmeras vezes com o mesmo efeito e deixando o servidor no mesmo estado. Se boas práticas forem aplicadas, os métodos GET, HEAD, PUT e DELETE são métodos idempotentes, enquanto o método POST não é. Uma API é idempotente quando seus métodos seguros são aplicados de forma bem implementada, ou seja, sem efeitos colaterais nos dados armazenados.

5) Cite alguns diferentes padrões de projetos de software

- Padrões criacionais: oferecem alternativas de criação de objetos. Ex: Factory Method, Abstract Factory, Builder;
- Padrões estruturais: mostram como montar objetos em estruturas maiores. Ex: Adapter, Bridge, Composite
- Padrões comportamentais: trabalham com algorítmos e delegação de responsabilidades entre objetos. Ex: Chain of Responsibility, Command, Interpreter;

