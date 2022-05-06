# On16-TodasEmTech-s6-Intro-API-Node
Turma Online 16 | Back-end | 2022 | Introdução à API:
HTTP e NodeJS

## Para casa
Abra o PullRequest Respondendo as seguintes questões:

**1) Qual a relação entre os métodos HTTP e o CRUD?**   

Segundo o portal **Canal Tech**, HTTP (Hypertext Transfer Protocol ou Hypertext Transfer Protocol em português) é um protocolo que especifica como os navegadores e servidores web se comunicam e é um dos principais protocolos da World Wide Web (WWW). O protocolo funciona através de um modelo computacional denominado cliente-servidor, onde um navegador (cliente) estabelece uma comunicação com um servidor e passa a trocar informações entre si. Conforme mencionado acima, o protocolo utiliza uma estrutura cliente-servidor onde a comunicação é realizada com uma única mensagem. Uma mensagem enviada por um cliente é chamada de solicitação, enquanto uma mensagem enviada por um servidor é chamada de resposta. Além disso, cada uma dessas mensagens possui uma estrutura característica que não pode ser manipulada pelo usuário final. Eles são processados ​​e interpretados por navegadores ou programas e seus servidores.  

Por sua vez, de acordo com o site **Coodesh**, CRUD é um conjunto de comandos da linguagem SQL usados ​​para recuperar, adicionar, excluir e modificar informações em um banco de dados. Na verdade, todos esses conceitos se aplicam ao usar a linguagem de programação SQL (Structured Query Language). Basicamente, é uma linguagem de programação criada para manipular bancos de dados relacionais, ou seja, baseados em tabelas. Ao trabalhar com bancos de dados, é importante aplicar CRUD para acelerar o desenvolvimento. Então, aprenda o que cada estágio representa. Eles são definidos a partir de: 
**Create:** Trata-se do conceito de criação, registro ou cadastro de informações e dados em um determinado lugar.  
**Read:** É o ato de consultar os dados em um website.  
**Update:** O conceito de update é aplicado quando você, que é dono dos dados ou tem permissão para editá-los, atualiza as informações que julgar necessárias.  
**Delete:** Trata-se de uma ação de remoção de dados a partir do operador do sistema. 


**2) Comente, com exemplos, a diferença entre o PUT e o PATCH.**

Baseado em infromações presentes no *Stak Over Flow*, os métodos HTTP PUT e PATCH são usados para indicar um requisição de alteração de dados. Geralmente, ao usar-se o PUT, fica legível que a alteração do dado será com referência a entidade completa.

Exemplo - *(/usuario/1234)* :

Resultado: {'id': 1234, 'name': 'Joao', 'idade': 25, 'documento': '123.321.12-X'}

O PATCH é usado para atualização parcial, quando você não quer mandar o payload completo.

Exemplo - *(/usuario/1234)* :
Resultado: {'name': 'João'}

**3) Apresente os dados dos JS no console**  

Os trabalhos se encontram nas pastas dentro deste repositorio. A seguir uma exemplicação de como acessar os exercicios listados a baixo.  

 *Exercício Ghibli:* o título de cada filme e a descrição de cada filme  
 *Exercício Pokemón:* o nome, descrição e tipo (separadamente) de cada pokemón  

```
 📁 para_casa
   |- 📁 01-ex-ghibli
   |     |- 📄 app.js
   |     |- 📄 script.js
   |- 📁 01-ex-pokemon
   |     |- 📄 app.js
   |     |- 📄 script.js
```

Na pasta "extras":

*No colors-rgb.js:* apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"  

*No estados-cidade.js:* apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console  

*No filmes.js:* apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.
```
 📁 extras\Data
   |- 📄 colors-rgb.js
   |- 📄 estados-cidades.js
   |- 📄 filmes.js
```

**4) Defina o conceito de idempotência e como uma API pode ser idempotente**  
Segundo o glossario do site **Developer Mozilla** Um método HTTP é idempotente se uma requisição idêntica pode ser feita uma ou mais vezes em sequência com o mesmo efeito enquanto deixa o servidor no mesmo estado. Em outras palavras, um método idempotente não deveria possuir nenhum efeito colateral (exceto para manter estatísticas). Implementados corretamente, o GET, HEAD, PUT, e DELETE são métodos idempotentes, mas não o método POST. Todos os métodos  seguros também são idempotentes.

Para ser idempotente, somente o estado atual do back-end de um servidor deve ser considerado, o código de status retornado por cada requisição pode variar: a primeira chamada de um DELETE vai provavelmente retornar um 200, enquanto as chamadas sucessivas vão provavelmente retornar 404. Outra implicação do DELETE ser idempotente é de que os desenvolvedores não deveriam implementar APIs RESTful com a funcionalidade de deleção de última entrada usando o método DELETE. A idempotência de um método não é garantida pelo servidor, algumas aplicações também podem quebrar a constante de idempotência.


**5) Cite alguns diferentes padrões de projetos de software**
| `Padrões de projetos` | <h4 align="center"> **Descrição** </h4><br/> |
| --- | --- |
| `Padrões de criação` | Os padrões de criação são aqueles que abstraem e ou adiam o processo criação dos objetos. Eles ajudam a tornar um sistema independentemente de como seus objetos são criados, compostos e representados. Um padrão de criação de classe usa a herança para variar a classe que é instanciada, enquanto um padrão de criação de objeto delegará a instanciação para outro objeto. |
| `Abstract Factory` | A intenção deste é fornecer uma interface para criação de famílias de objetos relacionados ou dependentes sem especificar suas classes concretas. Também é conhecido como Kit. Este padrão deve ser aplicado quando se deseja isolar a aplicação da implementação da classe concreta, que poderia ser um componente e ou framework específico no qual a aplicação conheceria apenas uma interface e a implementação concreta seria conhecida apenas em tempo de execução ou compilação.|
| `Factory Method` | Definir uma interface para criar objetos, mas deixar que as subclasses decidem que classe instanciar. O Factory Method, também conhecido como construtor virtual, possibilita adiar a criação do objeto a subclasses . Esse padrão é comumente utilizado pelos projetistas de software quando existe a necessidade de encapsular a criação de uma classe se isolando do conhecimento da classe concreta da aplicação cliente através de uma interface. Essa necessidade é comumente desejada por aqueles que trabalham no desenvolvimento de frameworks, que utilizam classes abstratas para definir e manter relacionamentos entre os objetos. Dessa forma os clientes implementam as funcionalidades esperadas pelo framework adicionando a lógica de negócio específica da aplicação, sem que o framework tenha o conhecimento de como e qual a lógica implementada pela aplicação para complementá-lo. |
| `Singleton`| Garantir que um objeto terá apenas uma única instância, isto é, que uma classe irá gerar apenas um objeto e que este estará disponível de forma única para todo o escopo de uma aplicação. Algumas aplicações têm a necessidade de controlar o número de instâncias criadas de algumas classes, seja pela necessidade da própria lógica ou por motivos de performance e economia de recursos. |
| `Padrões estruturais` | Os padrões estruturais se preocupam com a forma como classes e objetos são compostos para formar estruturas maiores. Os de classes utilizam a herança para compor interfaces ou implementações, e os de objeto ao invés de compor interfaces ou implementações, eles descrevem maneiras de compor objetos para obter novas funcionalidades. A flexibilidade obtida pela composição de objetos provém da capacidade de mudar a composição em tempo de execução o que não é possível com a composição estática (herança de classes). |
| `Adapter` | Converter a interface de uma classe por outra esperada pelos clientes . O que possibilita que classes com interfaces incompatíveis trabalhem em conjunto – ou que, de outra forma, seria impossível. Também conhecido como Wrapper (adaptador).Padrões de comportamento Os padrões de comportamento se concentram nos algoritmos e atribuições de responsabilidades entre os objetos. Eles não descrevem apenas padrões de objetos ou de classes, mas também os padrões de comunicação entre os objetos. Os padrões comportamentais de classes utilizam a herança para distribuir o comportamento entre classes, e os padrões de comportamento de objeto utilizam a composição de objetos em contrapartida a herança. Alguns descrevem como grupos de objetos cooperam para a execução de uma tarefa que não poderia ser executada por um objeto sozinho. |
|`Template Method`| Definir o esqueleto de um algoritmo em uma operação, postergando(deferring) alguns passos para subclasses. Template Method (gabarito de método) permite que subclasses redefinam certos passos de um algoritmo sem mudar a estrutura dele|
| |
### Bibliografia
  

**Canal Tech:**  [O que é HTTP](https://canaltech.com.br/internet/o-que-e-http/)    

**Coodesh:** [O que é CRUD?](https://coodesh.com/blog/dicionario/o-que-e-crud/)

**Developer Mozila:** [Idempotente](https://developer.mozilla.org/pt-BR/docs/Glossary/Idempotent)  

**Developer Mozila:** [Qual é a diferença entre o método PUT e o PATCH?](https://pt.stackoverflow.com/questions/217894/qual-%C3%A9-a-diferen%C3%A7a-entre-o-m%C3%A9todo-put-e-o-patch#:~:text=Em%20poucas%20palavras%2C%20os%20m%C3%A9todos,com%20refer%C3%AAncia%20a%20entidade%20completa.&text=O%20PATCH%20%C3%A9%20usado%20para,quer%20mandar%20o%20payload%20completo.)  


<h4 align="center"> Sentimento da semana  

<img src="https://capricho.abril.com.br/wp-content/uploads/2016/05/britney.gif" width="250" height="150" /> </h4> <br>
