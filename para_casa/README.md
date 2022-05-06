# Repositório com as resoluções dos exercícios propostos pela professora Paula

</br>
</br>

### **1) Qual a relação entre os métodos HTTP e o CRUD?**
</br>
HTTP é um protocolo de camada de aplicação para transmissão de documentos hipermídia, como o HTML. Foi desenvolvido para comunicação entre navegadores web e servidores web, porém pode ser utilizado para outros propósitos também. Segue um modelo cliente-servidor clássico, onde um cliente abre uma conexão, executa uma requisição e espera até receber uma resposta. É também um protocolo sem estado ou stateless protocol, que significa que o servidor não mantem nenhum dado entre duas requisições (state). Apesar de ser frequentemente baseado em uma camada TCP/IP, pode ser utilizado em qualquer camada de transporte confiável, ou seja, um protocolo que não perde mensagens silenciosamente como o UDP.

CRUD são as operações básicas a serem feitas em um repositório de dados. Você manipula diretamente registros ou objetos de dados. Além dessas operações, os registros são entidades passivas. Normalmente, são apenas tabelas e registros de banco de dados.CRUD é um termo simples que foi abreviado porque é um recurso comum em muitos aplicativos e é mais fácil dizer CRUD . Ele descreve as 4 operações básicas que você pode executar em dados (ou em um recurso). 

CRUD (Create, Read, Update, Delete) é um acrônimo para as maneiras de se operar em informação armazenada. É uma memória para as quatro operações básicas de armazenamento persistente. CRUD tipicamente refere-se a operações perfomadas em um banco de dados ou base de dados, mas também pode aplicar-se para funções de alto nível de uma aplicação, como exclusões reversíveis, onde a informação não é realmente deletada, mas é marcada como deletada via status.

</br>
</br>

### **2) Comente, com exemplos, a diferença entre o PUT e o PATCH.**
</br>
PUT: acontece quando fazemos uma requisição a um recurso para modificá-lo. Nesse método você irá mudar todo os dados do recurso. O PUT, é usado para alteração de um dado completo. O método HTTP PUT permite apenas substituições completas de um documento. Ex: Quando fazemos uma nova postagem no Facebook.

PATCH: utilizamos quando iremos modificar alguns dados de um recurso. Ele não pode criar um novo recurso como é feito no put. O PATCH é usado para atualização parcial. Ex: quando vimos que acabamos de fazer uma postagem e ela possui um erro na escrita ou falta uma palavra, nós editamos apenas o que já esta escrito.

</br>
</br>

### **3) Todas as respostas da questão 3 estão dentro da pasta: `📁para_casa`**
</br>

```
 📁 On16-TodasEmTech-S6-Intro-API-Node
   |- 📁 para_casa
   |     |- 📁 01-ex-ghibli
   |     |- 📄 app.js
   |     |- 📄 script.js
   |     |- 📁 02-ex-pokemon
   |     |- 📄 app.js
   |     |- 📄 script.js
   |     |- 📁 extras
   |           |- 📁 Data
   |           |- 📄 colors-rgb.js
   |           |- 📄 estados-cidades.js
   |           |- 📄 filmes.js
```

</br>
</br>

### **4) Defina o conceito de idempotência e como uma API pode ser idempotente**
</br>
Em matemática e ciência da computação, a idempotência é a propriedade que algumas operações têm de poderem ser aplicadas várias vezes sem que o valor do resultado se altere após a aplicação inicial. — Wikipedia

Um método HTTP idempotente pode ser chamado muitas vezes sem resultados diferentes. Não importa se o método é chamado apenas uma vez ou dez vezes. O resultado deve ser o mesmo. Essencialmente, significa que o resultado de uma solicitação executada com sucesso é independente do número de vezes que ela é executada.

- GET, PUT, DELETE, HEAD e OPTIONS são idempotentes.
- POST não é idempotente.

A API oferece suporte à idempotência para repetir requisições de maneira segura sem executar acidentalmente a mesma operação mais de uma vez. Esse recurso é útil quando uma chamada de API é interrompida em trânsito antes do recebimento do response. Um exemplo disso são as máquinas de cartões de crédito.

</br>
</br>

### **5) Cite alguns diferentes padrões de projetos de software**
</br>

| Padrão | Descrição      |
| --------- | ----------- |
| `Padrões de criação` | Os padrões de criação são aqueles que abstraem e/ou adiam o processo criação dos objetos. Eles ajudam a tornar um sistema independentemente de como seus objetos são criados, compostos e representados. Um padrão de criação de classe usa a herança para variar a classe que é instanciada, enquanto um padrão de criação de objeto delegará a instanciação para outro objeto. Alguns tipos de padrões criacionais: Abstract Factory, Builder, Factory Method, Prototype e Singleton. |
| `Padrões estruturais` | Os padrões estruturais se preocupam com a forma como classes e objetos são compostos para formar estruturas maiores. Os de classes utilizam a herança para compor interfaces ou implementações, e os de objeto ao invés de compor interfaces ou implementações, eles descrevem maneiras de compor objetos para obter novas funcionalidades. A flexibilidade obtida pela composição de objetos provém da capacidade de mudar a composição em tempo de execução o que não é possível com a composição estática (herança de classes). Alguns tipos de padrões estruturais: Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy. |
| `Padrões de comportamento` | Os padrões de comportamento se concentram nos algoritmos e atribuições de responsabilidades entre os objetos. Eles não descrevem apenas padrões de objetos ou de classes, mas também os padrões de comunicação entre os objetos. Os padrões comportamentais de classes utilizam a herança para distribuir o comportamento entre classes, e os padrões de comportamento de objeto utilizam a composição de objetos em contrapartida a herança. Alguns descrevem como grupos de objetos cooperam para a execução de uma tarefa que não poderia ser executada por um objeto sozinho. Alguns tipos de padrões comportamentais: Chain of Responsability, Command, Interpreter, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor. |

</br>

## Referências bibliográficas:

* https://www.macoratti.net/vb_pd1.htm

* https://xuenqui.medium.com/idempot%C3%AAncia-uma-boa-pr%C3%A1tica-a-se-utilizar-em-servi%C3%A7os-rest-633c38f4d7c0

* https://www.freecodecamp.org/portuguese/news/os-3-tipos-de-padroes-de-projetos-que-todo-desenvolvedor-deveria-conhecer-com-exemplos-de-codigo-de-cada-um/

</br>

<div align="center">
<img src="https://media.giphy.com/media/10bxTLrpJNS0PC/giphy.gif" width="400px" />
</div>
