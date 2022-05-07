### On16 semana 6 Introdução à API-Node
===
Turma Online 16 | Back-end | 2022 | Introdução à API:
HTTP e NodeJS

## Para casa
Abra o PullRequest Respondendo as seguintes questões:

1) Qual a relação entre os métodos HTTP e o CRUD?

2) Comente, com exemplos, a diferença entre o PUT e o PATCH.

3) Apresente os dados dos JS no console
    - Exercício Ghibli: o título de cada filme e a descrição de cada filme
    - Exercício Pokemón: o nome, descrição e tipo (separadamente) de cada pokemón

    Opcional: caso queira exercitar mais :). na pasta "extras", temos alguns jsons, você pode:
    - No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"
    - No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console
    - No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.

4) Defina o conceito de idempotência e como uma API pode ser idempotente

5) Cite alguns diferentes padrões de projetos de software

# respostas

1) Qual a relação entre os métodos HTTP e o CRUD?

Ambos são protocolos de verificação, metologias, ou combinados da comunidade de pessoas que programam que ordenam a maneira como as ferramentas serão operadas, enquanto http são os "verbos" de comunicação dos navegadores e servidores, o CRUD dá paramêtros para as API's

enquanto o CRUD é um acrônimo para as maneiras de se operar em informação armazenada: 

- Create
- Read
- Update
- Delete

 É um mnemônico para as quatro operações básicas de armazenamento persistente. CRUD tipicamente refere-se a operações perfomadas em um banco de dados ou base de dados, mas também pode aplicar-se para funções de alto nível de uma aplicação, como exclusões reversíveis, onde a informação não é realmente deletada, mas é marcada como deletada via status.

já o http é  para comunicação entre navegadores web e servidores web, porém pode ser utilizado para outros propósitos também. Segue um modelo cliente-servidor clássico, onde um cliente abre uma conexão, executa uma requisição e espera até receber uma resposta. É também um protocolo sem estado ou stateless protocol, que significa que o servidor não mantem nenhum dado entre duas requisições.

2) Comente, com exemplos, a diferença entre o PUT e o PATCH.


Put adiciona uma modicação, mas nao apaga o recurso anterior, então, caso rode novamente o sistema vai ler novamente como estava.               / idempotent


```js

// PUT is not a safe operation, in that it modifies (or creates) state on the server, but it is idempotent. In other words, if you create or update a resource using PUT and then make that same call again, the resource is still there and still has the same state as it did with the first call.

``` 

*Patch*
PATCH  é utilizado para fazer uma modificação, mas ele instrui de uma maneira que faz criar uma nova versão sem a necessidade de refazer tudo.

3) nos arquivos js

4) Defina o conceito de idempotência e como uma API pode ser idempotente

 é idempotente se uma requisição idêntica pode ser feita uma ou mais vezes em sequência com o mesmo efeito enquanto deixa o servidor no mesmo estado.

 Podemos dizer que uma API é idempotente quando replica ou reapresenta dados sem modificá-los, qndo simplesmente permite o acesso, como atravessador.(?)

 5) Cite alguns diferentes padrões de projetos de software

 cadastros, verifcicação de senhas, mapeamentos interativos, cadastro de usuarios de um serviço.