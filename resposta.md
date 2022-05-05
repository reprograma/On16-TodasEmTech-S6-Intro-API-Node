# Essas serão as respostas das questões contidas no README.

<img height="180em" src="https://rockntech.com.br/wp-content/uploads/2017/07/caes-acham-que-estao-nadando_7.gif">

# 1) Qual a relação entre os métodos HTTP e o CRUD?

O HTTP (Protocolo de Transferencia de Hipertexto) é um protocolo de comunicação entre computadores utilizado na internet. Foi desenvolvido para comunicação entre navegadores web e servidores web, porém pode ser utilizado para outros propósitos também. Segue um modelo cliente-servidor de request e response, onde um cliente, executa uma requisição e espera até receber uma resposta.
CRUD é uma acrônimo para as palavras Create, Read, Update, Delete que são as 4 operações básicas para manipular as informações armazenadas. Refere-se a operações perfomadas em um banco de dados ou base de dados, mas também pode aplicar-se para funções de alto nível de uma aplicação, como exclusões reversíveis, onde a informação não é realmente deletada, mas é marcada como deletada via status.
Sendo assim o HTTP, junto as aplicações Rest e Restfull, dá a posibilidade para realizar um CRUD utilizando os verbos/métodos HTTP.

# 2) Comente, com exemplos, a diferença entre o PUT e o PATCH.

O utilizando o exemplo de um cadastro de usuário o metodo put é utilizado para alterar os dados e trabalha com objetos inteiros fazendo uma alteração do cadastro inteiro, já o patch faz apenas a alteração somente em um campo do cadastro.

# 4) Defina o conceito de idempotência e como uma API pode ser idempotente

Um método HTTP é idempotente se uma requisição idêntica pode ser feita uma ou mais vezes em sequência com o mesmo efeito enquanto deixa o servidor no mesmo estado. Em outras palavras, um método idempotente não deveria possuir nenhum efeito colateral (exceto para manter estatísticas). Implementados corretamente, o GET, HEAD, PUT, e DELETE são métodos idempotentes, mas não o método POST. Todos os métodos  seguros também são idempotentes.

Para ser idempotente, somente o estado atual do back-end de um servidor deve ser considerado, o código de status retornado por cada requisição pode variar: a primeira chamada de um DELETE vai provavelmente retornar um 200, enquanto as chamadas sucessivas vão provavelmente retornar 404. Outra implicação do DELETE ser idempotente é de que os desenvolvedores não deveriam implementar APIs RESTful com a funcionalidade de deleção de última entrada usando o método DELETE.

Note que a idempotência de um método não é garantida pelo servidor, algumas aplicações também podem quebrar a constante de idempotência.

# 5) Cite alguns diferentes padrões de projetos de software

