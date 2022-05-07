# Introdução à API {S6}

** {reprograma} - Back-end | 2022 | Introdução à API: HTTP e NodeJS**

Resolução do exercício para casa
- Abra o pull request e responda as seguintes questões

| Questões |                                        |
:---------:|:------------                           |
|1         |Qual a relação entre os métodos HTTP e o CRUD?                                               |
|2         |Comente, com exemplos, a diferença entre o PUT e o PATCH.                                      |
|3         |Apresente os dados dos JS no console: - exercício Ghibli: o título de cada filme e a descrição de cada filme e exercício Pokemón: o nome, descrição e tipo (separadamente) de cada pokemón.
|4         |Defina o conceito de idempotência e como uma API pode ser idempotente|
|5         |Cite alguns diferentes padrões de projetos de software|
        
### Respostas :sparkles:

1 . O protocolo web HTTP (Hypertext Transfer Protocol) é a forma mais popular de receber e enviar arquivos e informações. Nesse protocolo há métodos que possibilitam essa troca de dados. Dentre os principais métodos  temos: ``GET``  ``POST``  ``PUT``   ``DELETE``

**``GET``**: tem a função de solicitar ou requisitar algum recurso ao servidor. Ele é normalmente usado para o retorno de in formações sobre uma entidade especificamente ou uma lista delas. 

**``POST``**: Método usado para enviar informações ao servidor, é utilizado de forma mais popular em cadastros de dados retirados de um formulário, e também quando enviamos um arquivo para o servidor: seja isso uma foto de perfil ou post nas redes.

**``POST``**:Já o PUT é responsável por editar arquivos e informações já existentes. sse método usa-se juntamente com um parâmetro na URL da requisição, que ajudará a identificar através de uma chave única (id) qual elemento ele está referenciando.

**``DELETE``**:Esse método é bem autoexplicativo, deleta arquivos ou informações presentes no banco de dados. Igual o PUT, é recomendável que utilize-o usando um parâmetro na URL da requisição, para que evite problemas de deletar dois arquivos/informações ao mesmo tempo. 

Sobre o CRUD: **(Create, Read, Update, Delete)**
> é um acrônimo para as maneiras de se operar em informação armazenada. Se constitui de quatro operações básicas de armazenamento persistente. CRUD tipicamente refere-se a operações performadas em um banco de dados ou base de dados, mas também pode aplicar-se para funções de alto nível de uma aplicação, como exclusões reversíveis, onde a informação não é realmente deletada, mas é marcada como deletada via status. 

### Diferença entre PUT E PATCH

Ambos métodos HTTP são utilizados para indicar uma requisição de alteração de dados. No geral quando o PUT é usado, fica legível que a alteração do dado será com referência à entidade completa. 

Exemplo: ``(/usuario/leticia_rodrigues):``

Resultado ``{‘cod’: 507, ‘name’: ‘Leticia’, ‘idade’: 24, ‘documento’: ‘QGXT8425’}``

O PATCH é utilizado para **atualização parcial**, quando não se quer mandar o payload completo. 

Exemplo: ``(/usuario/leticia_rodrigues): ``

Resultado ``{‘name’: Leticia} ``

### Definição do conceito de idempotência

Na matemática e ciência da computação existe a propriedade da idempotência, que é uma propriedade que algumas operações possuem de poderem ser aplicadas várias vezes sem que o valor do resultado se altere após a aplicação inicial. Dessa forma, um método HTTP é idempotente se uma requisição idêntica pode ser feita uma ou mais vezes em sequência com o mesmo efeito enquanto deixa o servidor no mesmo estado. Em outras palavras, um método idempotente não deveria possuir nenhum efeito colateral (exceto para manter estatísticas). 

Implementados corretamente, o ``GET, HEAD, PUT, e DELETE`` são métodos idempotentes, mas não o método POST. Todos os métodos  seguros também são idempotentes. 

Logo, quando estamos falando de indempotência em API’s REST, podemos concluir que os verbos GET, PUT, DELETE são idempotentes. Obs:. ``POST`` não é idempotente. 

Por que o método POST não é indempotente? 

Visto que a principal funcionalidade uma chamada POST é a criação, então a cada requisição feita, um recurso será criado e o estado da aplicação alterado. 

### Padrões de projetos de software

> #### Padrões de criação 

***Abstract Factory***

A intenção desde padrão é o fornecimento de uma interface para criação de famílias de objetos relacionados ou dependentes sem especificar suas classes concretas. Também conhecido como Kit. 

Ele deve ser aplicado, quando se deseja isolar a aplicação da implementação da classe concreta, que poderia ser um componente e ou framework específico no qual a aplicação conheceria apenas uma interface e a implementação concreta seria conhecida apenas em um tempo de execução ou compilação. 

***Factory Method***

Definir uma interface para criar objetos, mas deixar que as subclasses decidem que classe instanciar. O Factory Method, também conhecido como construtor virtual, possibilita adiar a criação do objeto a subclasses . 

Esse padrão é comumente utilizado pelos projetistas de software quando existe a necessidade de encapsular a criação de uma classe se isolando do conhecimento da classe concreta da aplicação cliente através de uma interface. Essa necessidade é comumente desejada por aqueles que trabalham no desenvolvimento de frameworks, que utilizam classes abstratas para definir e manter relacionamentos entre os objetos. Dessa forma os clientes implementam as funcionalidades esperadas pelo framework adicionando a lógica de negócio específica da aplicação, sem que o framework tenha o conhecimento de como e qual a lógica implementada pela aplicação para complementá-lo. 

***Singleton***

Garantir que um objeto terá apenas uma única instância, isto é, que uma classe irá gerar apenas um objeto e que este estará disponível de forma única para todo o escopo de uma aplicação. 

Algumas aplicações têm a necessidade de controlar o número de instâncias criadas de algumas classes, seja pela necessidade da própria lógica ou por motivos de performance e economia de recursos 

> #### Padrões estruturais 

***Adapter*** 

Converter a interface de uma classe por outra esperada pelos clientes . O que possibilita que classes com interfaces incompatíveis trabalhem em conjunto – ou que, de outra forma, seria impossível. Também conhecido como Wrapper (adaptador). 

> #### Padrões de comportamento 

Os padrões de comportamento se concentram nos algoritmos e atribuições de responsabilidades entre os objetos. Eles não descrevem apenas padrões de objetos ou de classes, mas também os padrões de comunicação entre os objetos. 

Os padrões comportamentais de classes utilizam a herança para distribuir o comportamento entre classes, e os padrões de comportamento de objeto utilizam a composição de objetos em contrapartida a herança. Alguns descrevem como grupos de objetos cooperam para a execução de uma tarefa que não poderia ser executada por um objeto sozinho. 

***Templat***

Definir o esqueleto de um algoritmo em uma operação, postergando(deferring) alguns passos para subclasses. Template Method (gabarito de método) permite que subclasses redefinam certos passos de um algoritmo sem mudar a estrutura dele. 

fontes

[1](https://pt.stackoverflow.com/questions/217894/qual-%C3%A9-a-diferen%C3%A7a-entre-o-m%C3%A9todo-put-e-o-patch#:~:text=Em%20poucas%20palavras%2C%20os%20m%C3%A9todos,com%20refer%C3%AAncia%20a%20entidade%20completa.&text=O%20PATCH%20%C3%A9%20usado%20para,quer%20mandar%20o%20payload%20completo) [2](https://developer.mozilla.org/pt-BR/docs/Glossary/Idempotent ) [3](https://xuenqui.medium.com/idempot%C3%AAncia-uma-boa-pr%C3%A1tica-a-se-utilizar-em-servi%C3%A7os-rest-633c38f4d7c0 ) [4](https://www.devmedia.com.br/conheca-os-padroes-de-projeto/957 )