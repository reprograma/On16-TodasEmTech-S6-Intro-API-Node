## 🛰️ RESPOSTA DA ATIVIDADE 🛰️ 
 
 ## 🛸 1. Qual a relação entre os métodos HTTP e o CRUD?


Hypertext Transfer Protocol (HTTP) é um protocolo de camada de aplicação para transmissão de documentos hipermídia, como o HTML. Foi desenvolvido para comunicação entre navegadores web e servidores web, porém pode ser utilizado para outros propósitos também. Segue um modelo cliente-servidor clássico, onde um cliente abre uma conexão, executa uma requisição e espera até receber uma resposta. É também um protocolo sem estado ou stateless protocol, que significa que o servidor não mantem nenhum dado entre duas requisições (state). Apesar de ser frequentemente baseado em uma camada TCP/IP, pode ser utilizado em qualquer camada de transporte confiável, ou seja, um protocolo que não perde mensagens silenciosamente como o UDP. CRUD significa as operações básicas a serem feitas em um repositório de dados. Você manipula diretamente registros ou objetos de dados; Além dessas operações, os registros são entidades passivas. Normalmente, são apenas tabelas e registros de banco de dados.CRUD é um termo simples que foi abreviado porque é um recurso comum em muitos aplicativos e é mais fácil dizer CRUD . Ele descreve as 4 operações básicas que você pode executar em dados (ou em um recurso). Criar, ler, atualizar, excluir. CRUD (Create, Read, Update, Delete) é um acrônimo para as maneiras de se operar em informação armazenada. É um mnemônico para as quatro operações básicas de armazenamento persistente. CRUD tipicamente refere-se a operações perfomadas em um banco de dados ou base de dados, mas também pode aplicar-se para funções de alto nível de uma aplicação, como exclusões reversíveis, onde a informação não é realmente deletada, mas é marcada como deletada via status.

## 🛸 2. Comente, com exemplos, a diferença entre o PUT e o PATCH.

PUT: é quando a gente faz uma requisição a um recurso para modificá-lo. Nesse método você irá mudar todo os dados do recurso. O PUT, é usado para alteração de um dado completo. O método HTTP PUT permite apenas substituições completas de um documento.

    Exemplo: /usuario/andreza

    Body: {'id': 13, 'name': 'Louise', 'idade': 20, 'documento': '123.321.12-X'}

PATCH: você usa quando vai alterar alguns dados de um recurso. Ele não pode criar um novo recurso como é feito no put.
O PATCH é usado para atualização parcial.

    Exemplo: /usuario/joao

    Body: {'name': 'Gaia'}

## 🛸 4. Defina o conceito de idempotência e como uma API pode ser idempotente

Um método de solicitação é vista como  "idempotente" se o efeito pretendido sobre o servidor de várias solicitações idênticas com esse método é o mesmo que o efeito para uma única solicitação desse tipo.

Um método HTTP é idempotente se uma requisição idêntica pode ser feita uma ou mais vezes em sequência com o mesmo efeito enquanto deixa o servidor no mesmo estado. Com uma solicitação idempotente, se a solicitação original for concluída com êxito, as novas tentativas subsequentes retornam o resultado da solicitação original bem-sucedida e não terão efeito adicional.


## 🛸5. Cite alguns diferentes padrões de projetos de software


🪐 Factory Method

Definir uma interface para criar objetos, mas deixar que as subclasses decidem que classe instanciar.O Factory Method, também conhecido como construtor virtual, possibilita adiar a criação do objeto a subclasses . Esse padrão é comumente utilizado pelos projetistas de software quando existe a necessidade de encapsular a criação de uma classe se isolando do conhecimento da classe concreta da aplicação cliente através de uma interface. Essa necessidade é comumente desejada por aqueles que trabalham no desenvolvimento de frameworks, que utilizam classes abstratas para definir e manter relacionamentos entre os objetos. Dessa forma os clientes implementam as funcionalidades esperadas pelo framework adicionando a lógica de negócio específica da aplicação, sem que o framework tenha o conhecimento de como e qual a lógica implementada pela aplicação para complementá-lo. Um exemplo de utilização do padrão pode ser na construção de aplicações que tenha que dar suporte a diferentes implementações de persistência com o mínimo de retrabalho.


🪐 Padrões de criação

Os padrões de criação são aqueles que abstraem e ou adiam o processo criação dos objetos. Um padrão de criação de classe usa a herança para variar a classe que é instanciada, enquanto um padrão de criação de objeto delegará a instanciação para outro objeto. Os padrões de criação tornam-se importantes à medida que os sistemas evoluem no sentido de dependerem mais da composição de objetos do que a herança de classes. O desenvolvimento baseado na composição de objetos possibilita que os objetos sejam compostos sem a necessidade de expor o seu interior como acontece na herança de classe, o que possibilita a definição do comportamento dinamicamente e a ênfase desloca-se da codificação de maneira rígida de um conjunto fixo de comportamentos, para a definição de um conjunto menor de comportamentos que podem ser compostos em qualquer número para definir comportamentos mais complexos.


🪐 Adapter

Converter a interface de uma classe por outra esperada pelos clientes . Algumas vezes, uma classe de um toolkit, projetada para ser reutilizada não condiz com a interface específica de um domínio requerida por uma aplicação.

O uso do padrão está condicionado a:

* Usar uma classe existente, mas sua interface não corresponde à interface requerida;
* Criar classes reutilizáveis que cooperam com classes não-relacionadas ou não previstas, ou seja, classes com * interface inicialmente incompatível.
Os participantes são:

* Target (Alvo)–define a interface específica do domínio do cliente;
* Client (cliente) –colabora com objetos compatíveis com mTarget;
* Adaptee (Adaptação) –interface existente de necessita de adaptação;
* Adapter (Adaptador) –adapta a interface Adapte e à interface Target.


Para adaptações de classes:

* Um adaptador de classe não funcionará quando quisermos adaptar uma classe e todas as suas subclasses;
* Permite a Adapter substituir algum comportamento de Adaptee, já que adapterá uma subclasse.

Para adaptações de objetos:

* Permite a um único Adapteradaptar um Adaptee e suas subclasses;
* Torna mais difícil redefinir o comportamento de um Adaptee. * Conseguido através de uma subclasse de Adaptee que é referenciada por Adapter.



<div align="center">
<img src="https://i.pinimg.com/originals/0f/d8/1b/0fd81b090c7ec042011af6b798dbd91f.gif" width="400px" />
</div>