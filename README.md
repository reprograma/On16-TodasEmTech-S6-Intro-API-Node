# On16-TodasEmTech-s6-Intro-API-Node
Turma Online 16 | Back-end | 2022 | Introdução à API:
HTTP e NodeJS

## Para casa
Abra o PullRequest Respondendo as seguintes questões:

1) Qual a relação entre os métodos HTTP e o CRUD?

O HTTP é um protocolo que relaciona a comunicação entre um navegador e um servidor web. Dentro dessa comunicação, a estrutura de "cliente-servidor" é utilizada para que as solicitações feitas no site tenham respostas. Esse processo de "request" (solicitação) e "response" (resposta) é parte do funcionamento de um método HTTP. 

Esse movimento de solicitar algo e gerar uma resposta a partir dele podemos relacionar com o conceito de CRUD. A reunião das 4 letras que significam Create (criar), Read (ler), Update (atualizar) e Delete (excluir) também geram funções que serão feitas de acordo com uma solicitação para manipular os dados e executar o que está sendo pedido 

2) Comente, com exemplos, a diferença entre o PUT e o PATCH.

O PUT e o PATCH são utilizados para solicitações de cadastramento ou mudança de dados. O PUT pode ser utilizado quando o usuário irá responder um questionário. Esse put com o bloco de informações relacionados ao usuário será acionado para identificação daquela pessoa. Já o PATCH pode ser utilizado quando um usuário pede para gerar uma nova senha de acesso em um site. Nesse caso, ele não irá mudar o seu login, será um recadastramento de um pedaço do seu bloco de dados, gerando um PATCH 

3) Apresente os dados dos JS no console
    - Exercício Ghibli: o título de cada filme e a descrição de cada filme
    - Exercício Pokemón: o nome, descrição e tipo (separadamente) de cada pokemón

    Opcional: caso queira exercitar mais :). na pasta "extras", temos alguns jsons, você pode:
    - No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"
    - No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console
    - No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.

4) Defina o conceito de idempotência e como uma API pode ser idempotente

A idempotência está relacionada a geração de mais de uma requisição, num período curto, onde a resposta final não tenha alteração. Uma API pode ser idempotente quando, por exemplo, numa solicitação de compra que caso seja gerada duplicada, a API irá evitar que esse pagamento seja realizado duas vezes também, pois foi feita mais de uma requisição num período curto de tempo, quando a resposta final é a mesma 

5) Cite alguns diferentes padrões de projetos de software

Criacionais: padrões que propõem soluções flexíveis para criação de objetos. São eles: Abstract Factory (6.2), Factory Method, Singleton (6.3), Builder (6.12) e Prototype. 
Estruturais: padrões que propõem soluções flexíveis para composição de classes e objetos. São eles: Proxy (6.4), Adapter (6.5), Facade (6.6), Decorator (6.7), Bridge, Composite e Flyweight. 
Comportamentais: padrões que propõem soluções flexíveis para interação e divisão de responsabilidades entre classes e objetos. São eles: Strategy (6.8), Observer (6.9), Template Method (6.10), Visitor (6.11), Chain of Responsibility, Command, Interpreter, Iterator (6.12), Mediator, Memento e State.

Fonte: https://engsoftmoderna.info/cap6.html  
