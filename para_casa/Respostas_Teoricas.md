### 1-Qual a relação entre os métodos HTTP e o CRUD?

O **CRUD** nada mais é do as iniciais dos quatro principais métodos HTTP:

>Creat = POST
>Read = GET
>Update = PUT/PATCH
>Delete = DELETE

1. GET recupera a representação do recurso em um URI especificado. GET não deve ter efeitos colaterais no servidor.
2. PUT atualiza um recurso em um URI especificado. PUT também pode ser usado para criar um novo recurso em um URI especificado, se o servidor permitir que os clientes especifiquem novos URIs. Para este tutorial, a API não dará suporte à criação por meio de PUT.
3. POST cria um novo recurso. O servidor atribui o URI para o novo objeto e retorna esse URI como parte da mensagem de resposta.
4. DELETE exclui um recurso em um URI especificado.

### 2- Comente, com exemplos, a diferença entre o PUT e o PATCH.

Os métodos **HTTP PUT** e **PATCH** são usados para indicar um requisição de alteração de dados. Geralmente, ao usar-se o **PUT** , fica legível que a alteração do dado será com referência a entidade completa. **O PATCH** é usado para atualização parcial, quando você não quer mandar o payload completo.

Ou seja escolha o **PUT** se o que você pretende é fazer uma atualização completa do seu recurso ou o **PATCH** se você quiser atualizar apenas um subconjunto dos dados do seu recurso.

### 4- Defina o conceito de idempotência e como uma API pode ser idempotente.

Um método **HTTP** é idempotente se uma requisição idêntica pode ser feita uma ou mais vezes em sequência com o mesmo efeito enquanto deixa o servidor no mesmo estado. Em outras palavras, um método idempotente não deveria possuir nenhum efeito colateral (exceto para manter estatísticas). Implementados corretamente, o **GET**, **HEAD**, **PUT**, e **DELETE** são métodos idempotentes, mas não o método **POST**. Todos os métodos  seguros também são idempotentes.
Note que a idempotência de um método não é garantida pelo servidor, algumas aplicações também podem quebrar a constante de idempotência.

Logo, o método **GET** pode ser idempotênte, pois chamado diversar vezes, ele irá retornar o mesmo resultado, já o método POST não, pois adicionará novas entradas.


### 5- Cite alguns diferentes padrões de projetos de software.

Os padrões de porjetos podem dividir-se em 3 categorias, segundo o livro *“Padrões de Projeto – Soluções reutilizáveis de software orientado a objetos. Bookman”*: 

> 1. Padrões de criação.
> 2. Padrões estruturais.
> 3- Padrões de comportamento.

#### Padrões de Criação:

 - **Abstract Factory:**
 A intenção deste é fornecer uma interface para criação de famílias de objetos relacionados ou dependentes sem especificar suas classes concretas.

 - **Factory Method:**
 Definir uma interface para criar objetos, mas deixar que as subclasses decidem que classe instanciar. O Factory Method, também conhecido como construtor virtual, possibilita adiar a criação do objeto a subclasses .

 - **Singleton:**
 Garantir que um objeto terá apenas uma única instância, isto é, que uma classe irá gerar apenas um objeto e que este estará disponível de forma única para todo o escopo de uma aplicação.

 #### Padrões estruturais:

 - **Adapter:**
 Converter a interface de uma classe por outra esperada pelos clientes . O que possibilita que classes com interfaces incompatíveis trabalhem em conjunto – ou que, de outra forma, seria impossível. Também conhecido como Wrapper (adaptador).

 #### Padrões de comportamento:

 - **Template Method:**
 Definir o esqueleto de um algoritmo em uma operação, postergando(deferring) alguns passos para subclasses. Template Method (gabarito de método) permite que subclasses redefinam certos passos de um algoritmo sem mudar a estrutura dele.

 <a href="https://ibb.co/WPpqVZQ"><img src="https://i.ibb.co/WPpqVZQ/OctoCat3.jpg" alt="OctoCat3" border="0"></a>



