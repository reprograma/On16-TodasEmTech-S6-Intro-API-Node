Abra o PullRequest Respondendo as seguintes questões:

1) Qual a relação entre os métodos HTTP e o CRUD?

O protocolo HTTP define um conjunto de métodos de requisição responsáveis por indicar a ação a ser executada para um dado recurso. Embora esses métodos possam ser descritos como substantivos, eles também são comumente referenciados como HTTP Verbs (Verbos HTTP). Cada um deles implementa uma semântica diferente, mas alguns recursos são compartilhados por um grupo deles.

CRUD (Create, Read, Update, Delete) é um acrônimo para as maneiras de se operar em informação armazenada. É um mnemônico para as quatro operações básicas de armazenamento persistente. CRUD tipicamente refere-se a operações perfomadas em um banco de dados ou base de dados, mas também pode aplicar-se para funções de alto nível de uma aplicação, como exclusões reversíveis, onde a informação não é realmente deletada, mas é marcada como deletada via status.

Hoje, a implementação mais comum do estilo arquitetural REST é baseado no protocolo HTTP e, consequentemente, nos verbos do HTTP: POST, GET, PUT e DELETE. É comum desenvolvedores implementarem esses verbos mapeando-os em termos CRUD - Create, Read, Update e Delete (Criar, Ler, Atualizar e Excluir). Um mapeamento típico é de 1 para 1:

    o verbo GET normalmente é mapeado para o CRUD Read (Leitura), embora o GET forneça algumas funcionalidades a mais do que um mapeamento SELECT padrão.
    o verbo DELETE normalmente é mapeado para o CRUD Delete (Excluir).
    o verbo PUT normalmente é mapeado para CRUD Update (Atualizar), mas com algumas ressalvas:
        O PUT requer um recurso substituto completo, enquanto no Update o recurso pode ser parcial.
        O PUT pode ser usado para criar um recurso (quando a URI é definida pelo cliente)
    o verbo POST é normalmente mapeado para o CRUD Create (Criar) mas ele só dá suporte à criação de um recurso filho. O POST também pode ser usado para realizar atualização parcial de um recurso.


2) Comente, com exemplos, a diferença entre o PUT e o PATCH.

O put e o patch são usados para indicar uma requisição de alteração de 
dados. O PUT é utilizado quando se dá uma 
alteração total do dado.

Exemplo: A criação de um novo usuário.

Já o patch é utilizado quando se faz uma alteração parcial em um recurso.

Exemplo: A alteração do nome de um usuário.

4) Defina o conceito de idempotência e como uma API pode ser idempotente

A idempotência garante que uma solicitação de API seja concluída apenas uma vez. Com uma solicitação idempotente, se a solicitação original for concluída com êxito, as novas tentativas subsequentes retornam o resultado da solicitação original bem-sucedida e não terão efeito adicional.

Um método HTTP é idempotente se uma requisição idêntica pode ser feita uma ou mais vezes em sequência com o mesmo efeito enquanto deixa o servidor no mesmo estado. Em outras palavras, um método idempotente não deveria possuir nenhum efeito colateral (exceto para manter estatísticas). Implementados corretamente, o GET, HEAD, PUT, e DELETE são métodos idempotentes, mas não o método POST. Todos os métodos  seguros também são idempotentes.


5) Cite alguns diferentes padrões de projetos de software

Os padrões de projeto (design patterns) são como plantas pré-projetadas de uma construção, que você pode alterar para se adequar melhor na resolução de um problema recorrente em seu código. Existem três principais padrões de projetos, que são:

a) Padrões criacionais: estes padrões oferecem diversas alternativas de criação de objetos, o que aumenta a flexibilidade e a reutilização de código. Alguns dos principais padrões desse tipo são:

    Factory Method
    Abstract Factory
    Builder

b) Padrões estruturais: Nos mostram como montar objetos e classes em estruturas maiores, sem perder a eficiência e flexibilidade. Alguns dos principais padrões desse tipo são:

    Adapter
    Bridge
    Composite

c) Padrões comportamentais: Nos ajudam a trabalhar melhor com os algoritmos e com a delegação de responsabilidades entre os objetos. Os padrões que se destacam nesse tipo são:

    Chain of Responsibility
    Command
    Interpreter


Fontes:

https://www.rfc-editor.org/rfc/rfc5789

https://www.rfc-editor.org/rfc/rfc2616#page-55

https://developer.mozilla.org/pt-BR/docs/Glossary/Idempotent

https://www.alura.com.br/artigos/design-patterns-introducao-padroes-projeto

https://www.infoq.com/br/news/2009/08/CRUDREST/

https://developer.mozilla.org/pt-BR/docs/Glossary/CRUD