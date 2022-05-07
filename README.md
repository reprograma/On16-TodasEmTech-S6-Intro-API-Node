# On16-TodasEmTech-s6-Intro-API-Node
Turma Online 16 | Back-end | 2022 | Introdução à API:
HTTP e NodeJS

## Para casa
Abra o PullRequest Respondendo as seguintes questões:

1) Qual a relação entre os métodos HTTP e o CRUD?

O CRUD é formado por métodos sintetizados para requesição, assim como o HTTP e se tornam correlacionados neste sentido. Em CRUD temos os métodos CREATEM READ, UPDATE e DELETE, e para HTTP POST, GET, PUT, DELETE, relacionados nesta ordem.

2) Comente, com exemplos, a diferença entre o PUT e o PATCH.

Basicamente, PUT é usado para alterar ou atualizar um documento completamente e PATCH para fazê-lo parcialmente. As solicitações PUT sobrescrevem os dados, ou criam, caso eles não existam. Já o PATCH precisa da existência do dado para modificá-lo.

Ex.: Tenho cadastrada uma pessoa no banco de dados com nome e CPF  e em dado momento recebo outros dados, como telefone e endereço, assim como uma alteração no nome. Usando o PUT ele sobrescreverá o nome, atualizando-o e incluirá os dados seguintes, adicionando-os. 

PUT https://api.cadastrodocurso.com/alunos com o body:

{
"nome": "Maria Silva de Oliveira",
"telefone": 000000000,
"endereço": "Rua José Peixoto, 00"
}

Em caso de precisar atualizar o telefone desta pessoa, poderia ser usado o PATCH e somente este campo seria atualizado.

PATCH https://api.cadastrodocurso.com/alunos/39 com o body:

{
"telefone": 111111111,
}

*39 foi o identificador gerado no cadastro dela.


3) Apresente os dados dos JS no console
    - Exercício Ghibli: o título de cada filme e a descrição de cada filme
    - Exercício Pokemón: o nome, descrição e tipo (separadamente) de cada pokemón

    Opcional: caso queira exercitar mais :). na pasta "extras", temos alguns jsons, você pode:
    - No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"
    - No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console
    - No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.
    

4) Defina o conceito de idempotência e como uma API pode ser idempotente

O conceito de idempotência refere-se a uma operação que ao ser aplicada mais de uma vez, não há alteração no resultado. 
Se tratando de API, quando são realizada várias solicitações para a mesma, tem o mesmo efeito de fazer uma única solicitação. Conforme artigo da Stone: "Esse recurso é útil quando uma chamada de API é interrompida em trânsito antes do recebimento do response."

Implementados corretamente, o GET, HEAD, PUT, e DELETE são métodos idempotentes e o método POST não.


5) Cite alguns diferentes padrões de projetos de software

Seguindo os conceitos descritos no “Design Patterns: Elements of Reusable Object-Oriented Software” de 1994, escrito por GOF (Gang of Four: Rich Gamma, Richard Helm, Ralph Johnson e John Vlissides), citos os tipos: 

Padrões criacionais: 
- Factory Method
- Abstract Factory
- Builder

Padrões estrurais: 
- Adapter
- Bridge
- Composite

Padrões comportamentais: 
- Chain of Responsibility
- Command
- Interpreter


