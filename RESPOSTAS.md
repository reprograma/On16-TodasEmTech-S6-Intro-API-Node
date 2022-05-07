# 1) Qual a relação entre os métodos HTTP e o CRUD?

HTTP _(Hypertext Transfer Protocol)_ é um protocolo de comunicação entre um navegador e um servidor web, que funciona através de um modelo computacional conhecido como cliente/servidor, onde ambos trocam informação entre si. A mensagem enviada pelo cliente é chamada de solicitação _(request)_, e a mensagem enviada pelo servidor é chamada de resposta _(response)_.
O HTTP define um conjunto de método de requisição. Os mais utilizados são:
- GET - ler 
- POST - Criar 
- PUT - Substituir 
- PATCH - Modificar 
- DELETE - Excluir

CRUD _(Create, Read, Update, Delete)_ é um é acrônimo das 4 operações básicas de um banco de dados, sendo um conjunto de operações que pertence ao agrupamento chamado de _Data Manipulation Language (DML)_.
As 4 operações básicas e suas funções são:
- C: Create – Criar
- R: Read – Ler 
- U: Update – Atualizar 
- D: Delete – Excluir 

CRUD parece estar ligado diretamente os verbos HTTP, e apesar de serem parecidos semanticamente, REST ão é CRUD

# 2) Comente, com exemplos, a diferença entre o PUT e o PATCH.

PUT e PATCH são verbos HTTP e ambos estão relacionados com a atualização de dados de um recursos.
Suas diferenças se encontram na finalidade dessas atualizações.

> PUT
É um método de requisição em que os dados enviados pelo _client_ atualizam todo o recurso, o substituindo completamente.
Por exemplo, se houver um cadastro com senha, nome, idade e endereço, e seja solicidada uma alteração e substituição de todos esses dados, utilizaremos o PUT
```
Exemplo: (/usuario/1234) :

Resultado: {'id': 1234, 'name': 'Maria', 'idade': 25, 'documento': '123.321.12-X'}
```

> PATCH
É um método de requisição utilizado para modificações parciais de um recurso, substituindo as informações de maneira isolada.
Por exemplo, se em um cadastro houver senha, endereço, nome e CPF , e seja soliciada uma alteração apenas na senha, utilizaremos o PATCH.
```
Exemplo: (/usuario/1234) :

Resultado: {'name': 'Maria'}
```

3) Apresente os dados dos JS no console



# 4) Defina o conceito de idempotência e como uma API pode ser idempotente
A idempotência é a propriedade que algumas operações têm de poderem ser aplicadas várias vezes sem que o valor do resultado se altere após a aplicação inicial. Por exemplo, uma solicitação POST devemos mudar o resultado, o que a torna NÃO indempotente.


HTTP Method | Safe | Idempotent
-- | -- | --
GET | Yes | Yes
HEAD | Yes | Yes
OPTIONS | Yes | Yes
TRACE | Yes | Yes
PUT | No | Yes
DELETE | No | Yes
POST | No | No
PATCH | No | No




# 5) Cite alguns diferentes padrões de projetos de software

Os Padrões de Projetos (Design Patterns) são vistos como soluções com eficiência 
comprovada e muito utilizadas para a resolução de problemas comuns encontrados durante
o desenvolvimento ou manutenção de um software.

Os principais e mais usados Padrões de Projetos são divididos em 3 categorias:

> _Padrões de Criação **(Creational)**_
- Abstract Factory
- Builder
- Factory Method
- Prototype
- Singleton

> _Padrões de Estrutura **(Structural)**_
- Adapter
- Bridge
- Composite
- Decorator
- Facade
- Flyweight
- Proxy

> _Padrões de Comportamento **(Behavioral)**_
- Chain of Responsability
- Command
- Interpreter
- Iterator
- Mediator
- Memento
- Observer
- State
- Strategy
- Template Method
- Visitor