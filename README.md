# On16-TodasEmTech-s6-Intro-API-Node
Turma Online 16 | Back-end | 2022 | Introdução à API:
HTTP e NodeJS

## Para casa
Abra o PullRequest Respondendo as seguintes questões:

1) Qual a relação entre os métodos HTTP e o CRUD?

CRUD são as quatro funções básicas de um sistema para manipular um banco de dados. O HTTP é um protocolo que faz a comunicação entre cliente-servidor e possui um conjunto de métodos de requisição que irão indicar a ação a ser executada para determinado recurso.

A relação entre eles tem a ver com os 4 verbos de operação comum a ambos: create, read, update e delete, porém o CRUD é mais básico e primitivo, enquanto o HTTP possui métodos mais bem estabelecidos e complexos.

1) Comente, com exemplos, a diferença entre o PUT e o PATCH.

Ambos são usados para a requisição de alteração de dados.

- PUT: altera/substitui todos os dados do recurso de destino pelos dados passados na requisição.
- PATCH: atualiza parcialmente um recurso, sendo possível modificar apenas uma parte dos dados.

Exemplo PUT:

PUT/users/1

{
    "username": "barbara",
    "email": "bcostabaron@gmail.com"
}


Exemplo PATCH:

PATCH/users/1

{
    "email": "bcostabaron@gmail.com"
}


3) Apresente os dados dos JS no console
    - Exercício Ghibli: o título de cada filme e a descrição de cada filme
    - Exercício Pokemón: o nome, descrição e tipo (separadamente) de cada pokemón

    Opcional: caso queira exercitar mais :). na pasta "extras", temos alguns jsons, você pode:
    - No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"
    - No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidades, sem arrays aparentes no console
    - No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.

4) Defina o conceito de idempotência e como uma API pode ser idempotente:

Idempotência é a propriedade que uma operação têm de poder ser acionada várias vezes sem sofrer alteração no seu resultado.

Uma API é idempotente quando uma requisição pode ser feita uma ou mais vezes sem que ela sofra alteração no servidor.

5) Cite alguns diferentes padrões de projetos de software:
   
- Padrões de criação: Abstract Factory, Factory Method, Singleton.
- Padrões estruturais: Adapter.
- Padrões de comportamento: Template Method.