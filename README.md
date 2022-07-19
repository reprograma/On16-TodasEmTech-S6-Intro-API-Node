# On16-TodasEmTech-s6-Intro-API-Node
Turma Online 16 | Back-end | 2022 | Introdução à API:
HTTP e NodeJS

## Para casa
Abra o PullRequest Respondendo as seguintes questões:

1) Qual a relação entre os métodos HTTP e o CRUD?

//O que é um método HTTP?
HTTP Métodos

O protocolo HTTP define um conjunto de métodos de requisição responsáveis por indicar a ação a ser executada para um dado recurso. Embora esses métodos possam ser descritos como substantivos, eles também são comumente referenciados como HTTP Verbs (Verbos HTTP)
O protocolo HTTP define oito métodos (GET, HEAD, POST, PUT, DELETE, TRACE, OPTIONS e CONNECT) que indicam a ação a ser realizada no recurso especificado.


// o que é CRUD?

CRUD (Create, Read, Update, Delete) é um acrônimo para as maneiras de se operar em informação armazenada. É um mnemônico para as quatro operações básicas de armazenamento persistente

O metado HTTP define um conjunto de métodos de requisição responsáveis por indicar a ação a ser executada para um dado recurso.
É comum desenvolvedores implementarem esses verbos mapeando-os em termos CRUD - Create, Read, Update e Delete (Criar, Ler, Atualizar e Excluir.


C é de create que significa criação.
R é read que significa lê.
U é update que sidnifca atualizar.
D é delete que significa deletar.

2) Comente, com exemplos, a diferença entre o PUT e o PATCH.

O método de requisição HTTP PATCH aplica modificações parciais a um recurso. O método HTTP PUT permite apenas substituições completas de um documento. Em contraste ao PUT , o método PATCH não é idempotente, ou seja, requisições sucessivas idênticas podem obter efeitos distintos.Todavia, é possível realizar requisições PATCH de modo a serem idempotentes.

3) Apresente os dados dos JS no console

    - Exercício Ghibli: o título de cada filme e a descrição de cada filme
    - Exercício Pokemón: o nome, descrição e tipo (separadamente) de cada pokemón

    Opcional: caso queira exercitar mais :). na pasta "extras", temos alguns jsons, você pode:
    - No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"
    - No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console
    - No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.

4) Defina o conceito de idempotência e como uma API pode ser idempotente

//Um método HTTP é idempotente se uma requisição idêntica pode ser feita uma ou mais vezes em sequência com o mesmo efeito enquanto deixa o servidor no mesmo estado. Em outras palavras, um método idempotente não deveria possuir nenhum efeito colateral (exceto para manter estatísticas). Implementados corretamente, o GET, HEAD, PUT, e DELETE são métodos idempotentes, mas não o método POST. Todos os métodos  seguros também são idempotentes.

Para ser idempotente, somente o estado atual do back-end de um servidor deve ser considerado, o código de status retornado por cada requisição pode variar: a primeira chamada de um DELETE vai provavelmente retornar um 200, enquanto as chamadas sucessivas vão provavelmente retornar 404. Outra implicação do DELETE ser idempotente é de que os desenvolvedores não deveriam implementar APIs RESTful com a funcionalidade de deleção de última entrada usando o método DELETE.

Note que a idempotência de um método não é garantida pelo servidor, algumas aplicações também podem quebrar a constante de idempotência.

5) Cite alguns diferentes padrões de projetos de software

//Em Engenharia de Software, um padrão de desenho (português europeu) ou padrão de projeto (português brasileiro) (do inglês design pattern) é uma solução geral para um problema que ocorre com frequência dentro de um determinado contexto no projeto de software. Um padrão de projeto não é um projeto finalizado que pode ser diretamente transformado em código fonte ou de máquina, ele é uma descrição ou modelo (template) de como resolver um problema que pode ser usado em muitas situações diferentes. Padrões são melhores práticas formalizadas que o programador pode usar para resolver problemas comuns quando projetar uma aplicação ou sistema. Padrões de projeto orientados a objeto normalmente mostram relacionamentos e interações entre classes ou objetos, sem especificar as classes ou objetos da aplicação final que estão envolvidas. Padrões que implicam orientação a objetos ou estado mutável mais geral, não são tão aplicáveis em linguagens de programação funcional.

Padrões de projeto residem no domínio de módulos e interconexões. Em um nível mais alto há padrões arquiteturais que são maiores em escopo, usualmente descrevendo um padrão global seguido por um sistema inteiro
Exemplo:Padrões Básicos:
Information Expert (ver Especialista na Informação);
Creator (ver Factory Method);
High Cohesion (ver Coesão);
Low Coupling(ver Acoplamento);
Controller(ver Model-view-controller).
Padrões Avançados:
Polymorphism (ver Polimorfismo);
Pure Fabrication;
Indirection (ver Indireção);
Protected Variations (ver Variações Protegidas).
