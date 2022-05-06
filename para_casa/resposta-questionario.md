# *Respostas referentes ao questionario passado pela professora no readme.* 

#### 1. **Qual a relação entre os métodos HTTP e o CRUD?****

**CRUD** é a composição da primeira letra de 4 funções básicas de um sistema que trabalha com banco de dados:
**C:** Create *(criar)* - criar um novo registro
**R:** Read *(ler)* - ler (exibir) as informações de um registro
**U:** Update *(atualizar)* - atualizar os dados do registro
**D:** Delete *(apagar)* - apagar um registro

**HTTP** é um protocolo (protocol) que permite a obtenção de recursos, como documentos HTML. É a base de qualquer troca de dados na Web e um protocolo cliente-servidor, o que significa que as requisições são iniciadas pelo destinatário, geralmente um navegador da Web.

#### 2. **Comente, com exemplos, a diferença entre o PUT e o PATCH.**

PUT, que cria ou substitui o recurso no URI especificado. O corpo da mensagem de solicitação especifica o recurso a ser criado ou atualizado.

    Exemplo: /usuario/1234
    Body: {'id': 07, 'name': 'Milena', 'idade': 30, 'cpf': '123.456.789-00'}

PATCH, que realiza uma atualização parcial de um recurso. O corpo da solicitação especifica o conjunto de alterações a ser aplicado ao recurso.

    Exemplo: /usuario/1234
    Body: {'name': 'Maysa'}

#### 3. **Exercícios Práticos**
*[Foram respondidos diretamente no arquivo do exercício]*

#### 4. **Defina o conceito de idempotência e como uma API pode ser idempotente**

Em matemática e ciência da computação, a idempotência é a propriedade que algumas operações têm de poderem ser aplicadas várias vezes sem que o valor do resultado se altere após a aplicação inicial.  
  
Um método HTTP idempotente é um método HTTP que pode ser chamado muitas vezes sem resultados diferentes. Não importa se o método é chamado apenas uma vez ou dez vezes. O resultado deve ser o mesmo. Essencialmente, significa que o resultado de uma solicitação executada com sucesso é independente do número de vezes que ela é executada.  
  
Quando falamos em idempotência em API’s REST, podemos concluir que os seguintes os verbos:

 - GET, PUT, DELETE, HEAD e OPTIONS são idempotentes.
 - POST e PATCH não são idempotentes.

#### 5. **Cite alguns diferentes padrões de projetos de software**

Padrões de projeto podem ser vistos como uma solução que já foi testada para um problema. Desta forma, um padrão de projeto geralmente descreve uma solução ou uma instância da solução que foi utilizada para resolver um problema específico. Padrões de projetos são soluções para problemas que alguém um dia teve e resolveu aplicando um modelo que foi documentado e que você pode adaptar integralmente ou de acordo com necessidade de sua solução.

Os padrões foram divididos e categorizados de acordo com a natureza do problema que eles resolvem:

**Padrões de Criação:** Estes padrões fornecem vários mecanismos de criação de objetos, que aumentam a flexibilidade e a reutilização do código existente.  Usando o exemplo de uma situação real, uma empresa automobilística quando precisa de amortecedores, os terceiriza e então os instala em seus carros, sem se preocupar com o todo envolvido na criação desse componente.

- **Abstract Factory:** Resolve o problema de criar famílias inteiras de produtos sem ter de especificar suas classes concretas.
- **Builder:** Permite a construção de objetos complexos, passo a passo. Não exige que os produtos tenham uma interface em comum.
- **Factory Method:** Resolve o problema de criar objetos de produto sem especificar suas classes concretas.
- **Prototype:** Permite a clonagem de objetos, mesmo complexos, sem acoplamento à suas classes específicas.
- **Singleton:** Garante que apenas um objeto desse tipo exista e fornece um único ponto de acesso a ele para qualquer outro código.

**Padrões Estruturais:** Estes padrões explicam como montar objetos e classes em estruturas maiores, mas ainda mantendo essas estruturas flexíveis e eficientes.

- **Adapter:** Permite que dois objetos se comuniquem mesmo que tenham interfaces incompatíveis.
- **Bridge:** Permite que você divida uma classe grande ou um conjunto de classes intimamente ligadas em duas hierarquias separadas—abstração e implementação—que podem ser desenvolvidas independentemente umas das outras.
- **Composite:** Lida com uma estrutura de elementos agrupada hierarquicamente que permite trabalhar as estruturas como se fossem objetos individuais.
- **Decorator:** Atribui responsabilidade adicionais a um objeto, os colocando dentro de um wrapper de objetos que contém os comportamentos.
- **Facade:** Fornece uma interface simplificada para uma biblioteca, um framework ou qualquer outro conjunto complexo de classes.
- **Flyweight:** Usa compartilhamento para dar suporte a vários objetos de forma eficiente.
- **Proxy:** Permite que seja fornecido um substituto ou um espaço reservado para outro objeto. Um proxy controla o acesso ao objeto original, permitindo que você faça algo antes ou depois do pedido chegar ao objeto original.

**Padrões de Comportamento (Behavioral):**  são voltados aos algoritmos e atribuição de responsabilidades entre objetos.

- **Chain of Responsability:** Permite passar solicitações ao longo de uma cadeia de manipuladores. Ao receber uma solicitação, cada manipulador decide processar a solicitação ou passá-la para o próximo manipulador na cadeia.
- **Command:** Transforma o pedido em um objeto independente que contém toda a informação sobre o pedido. Essa transformação permite que você parametrize métodos com diferentes pedidos, atrase ou coloque a execução do pedido em uma fila, e suporte operações que não podem ser feitas.
- **Iterator:** Permite que percorra elementos de uma coleção sem expor as representações estruturais deles (lista, pilha, árvore etc.)
- **Mediator:** Reduz as dependências caóticas entre os objetos. O padrão restringe comunicações diretas entre objetos e os força a colaborar apenas através do objeto mediador.
- **Memento:** Permite salvar e restaurar o estado anterior de um objeto sem revelar os detalhes de sua implementação.
- **Observer:** Permite definir um mecanismo de assinatura para notificar vários objetos sobre quaisquer eventos que ocorram no objeto que estão observando.
- **State:** Permite que um objeto altere seu comportamento quando seu estado interno muda. Como se o objeto mudasse de classe.
- **Strategy:** Permite que uma família de algoritmos seja utilizada de modo independente e seletivo.
- **Template Method:** Define o esqueleto de um algoritmo em uma operação adiando a definição de alguns passos para a subclasse.
- **Visitor:** Define operações independentes a serem realizadas sobre elementos de uma estrutura.
