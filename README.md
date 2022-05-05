# On16-TodasEmTech-s6-Intro-API-Node 🚀 
## 🧠 Turma Online 16 | Back-end | 2022 | Introdução à API:
### HTTP e NodeJS



**1) Qual a relação entre os métodos HTTP e o CRUD?**

#### **Respondendo a essa questão:**

Os verbos HTTP parecem estar diretamente ligado com o CRUD:

Create -> POST
Read -> GET
Update -> PUT / PATCH
Delete -> DELETE

Por causa de uma confusão na classificação de Resource, acabam relacionando REST diretamente a um CRUD. Por causa desse erro de classificação, quem busca criar api's verdadeiramente RESTFul terá dificuldades em seguir as "bases" do conceito.

**2) Comente, com exemplos, a diferença entre o PUT e o PATCH.**

**Respondendo a essa questão:**

O método de requisição HTTP PATCH aplica modificações parciais a um recurso. O método HTTP PUT permite apenas substituições completas de um documento. Em contraste ao PUT , o método PATCH não é idempotente, ou seja, requisições sucessivas idênticas podem obter efeitos distintos.

Em poucas palavras, os métodos HTTP PUT e PATCH são usados para indicar um requisição de alteração de dados.

Geralmente, ao usar-se o PUT, fica legível que a alteração do dado será com referência a entidade completa.

Exemplo: (/usuario/1234) :

Resultado: {'id': 1234, 'name': 'Joao', 'idade': 25, 'documento': '123.321.12-X'}

O PATCH é usado para atualização parcial, quando você não quer mandar o payload completo.

Exemplo: (/usuario/1234) :

Resultado: {'name': 'João'}

**3) *Apresente os dados dos JSONs no console.Esses exercicios estão resolvidos nos arquivos abaixo:***
    *- Exercício Ghibli: o título de cada filme e a descrição de cada filme*
   *- Exercício Pokemón: o nome, descrição e tipo (separadamente) de cada pokemón*

    *Opcional: caso queira exercitar mais :). na pasta "extras", temos alguns jsons, você pode:*
    *- No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"*
    *- No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console*
    *- No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.*

**4) Defina o conceito de idempotência e como uma API pode ser idempotente**

**Respondendo a essa questão:**

Tem-se idempotência quando se chama a mesma funcionalidade com o mesmo valor e o resultado é exatamente o mesmo (essa é a definição matemática).

Um método HTTP é idempotente se uma requisição idêntica pode ser feita uma ou mais vezes em sequência com o mesmo efeito enquanto deixa o servidor no mesmo estado. Em outras palavras, um método idempotente não deveria possuir nenhum efeito colateral (exceto para manter estatísticas)
Implementados corretamente, o GET, HEAD, PUT, e DELETE são métodos idempotentes, mas não o método POST. Todos os métodos  seguros também são idempotentes.

Para ser idempotente, somente o estado atual do back-end de um servidor deve ser considerado, o código de status retornado por cada requisição pode variar: a primeira chamada de um DELETE vai provavelmente retornar um 200, enquanto as chamadas sucessivas vão provavelmente retornar 404. Outra implicação do DELETE ser idempotente é de que os desenvolvedores não deveriam implementar APIs RESTful com a funcionalidade de deleção de última entrada usando o método DELETE.

DELETE /idX/delete HTTP/1.1 é idempotente, mesmo que o código de status mude entre requisições:

DELETE /idX/delete HTTP/1.1   -> Retorna 200 se idX existe
DELETE /idX/delete HTTP/1.1   -> Retorna 404 como ele acabou de ser deletado
DELETE /idX/delete HTTP/1.1   -> Retorna 404


**5) Cite alguns diferentes padrões de projetos de software**

**Respondendo a essa questão:**

Padrões para arquitetura de software são soluções de eficiência já comprovadas e amplamente utilizadas para a resolução de problemas comuns em projeto de software. Estas soluções são desenvolvidas e conhecidas por especialistas e tornam-se padrões por serem reutilizadas várias vezes em vários projetos e por terem eficácia comprovada.

### **Principais propriedades dos padrões de projetos**

Dentre as principais propriedades dos padrões de projetos podemos citar:

**1-** capturam o conhecimento e a experiência de especialistas em projeto de software.

**2-** especificam abstrações que estão acima do nível de classes ou objetos isolados ou de componentes [Gamma et al 1995].

**3-** definem um vocabulário comum para a discussão de problemas e soluções de projeto [Gamma et al 1995].

**4-** facilitam a documentação e manutenção da arquitetura do software [Buschmann et al 1996].

**4-** auxiliam o projeto de uma arquitetura com determinadas propriedades [Buschmann et al 1996].

**5-** auxiliam o projeto de arquiteturas mais complexas.

### **Dentre os principais benefícios para que a utilização dos padrões de projeto seja justificada estão :**

- Fornecem soluções que já foram testadas e aprovadas.
- Tornam o sistema mais fácil de entender e manter
- Facilitam o desenvolvimento de módulos coesos.
- A comunicação entre os participantes do projeto fica mais eficiente

### **Os componentes de um padrão de projeto são :**

1- Nome - descreve a essência do padrão

2- Objetivo - descreve como o padrão atua.

3- Problema - descreve o problema

4- Solução - descreve a solução

5- Conseqüências - descreve os benefícios da utilização do padrão

### **Os principais tipos de padrões de projetos são :**


**1- Padrões de Criação (Creational)**
 Abstract Factory - Um método Factory é um método que fabrica objetos de um tipo particular; Um objeto Factory é um objeto que encapsula  métodos Factory.
     Builder - Separa a construção de um objeto complexo da sua representação, de forma que o mesmo processo de construção possa criar diferentes representações.
     Factory Method - É uma interface para instanciação de objetos que mantém isoladas as classes concretas usadas da requisição da criação destes objetos.
     Prototype - O padrão Prototype fornece uma outra maneira de se construir objetos de tipos arbitrários.
     Singleton. - Garante que para uma classe específica só possa existir uma única instância, a qual é acessível de forma global e uniforme.

**2- Padrões de Estrutura (Structural)**
 Adapter - Permite que dois objetos se comuniquem mesmo que tenham interfaces incompatíveis.
     Bridge - Desacopla a interface da implementação ; Ocultação de detalhes de implementação dos clientes.
     Composite - lida com uma estrutura de elementos agrupada hierarquicamente (não como meras coleções).
     Decorator - Atribui responsabilidade adicionais a um objeto dinamicamente. O Decorator fornece uma alternativa flexível a subclasses para a extensão da funcionalidade.
     Facade - Interface unificada para um subsistema ; Torna o subsistema mais fácil de usar.
     Flyweight - Usa compartilhamento para dar suporte a vários objetos de forma eficiente.
     Proxy - Fornece um objeto representante ou procurador de outro objeto para controlar o acesso ao mesmo.

**3- Padrões de Comportamento (Behavioral)**
 Chain of Responsability - Evita dependência do remetente(cliente) de uma requisição ao seu destinatário , dando a oportunidade de mais de objeto tratar a requisição.
    Command - Associa uma ação a diferentes objetos através de uma interface conhecida.
    Interpreter - Usado para ajudar uma aplicação a entender uma declaração de linguagem natural e executar a funcionalidade da declaração.
    Iterator - Provê uma forma de percorrermos os elementos de uma coleção sem violar o seu encapsulamento.
    Mediator - Cria um objeto que age como um  mediador controlando a interação entre um conjunto de objetos.
    Memento - Torna possível salvar o estado de um objeto de modo que o mesmo possa ser restaurado.
    Observer - Define uma relação de dependência 1:N de forma que quando um certo objeto (assunto) tem seu estado modificado os demais (observadores) são notificados; Possibilita baixo acoplamento entre os objetos observadores e o assunto.
    State - Permite objeto alterar seu comportamento quando estado interno muda.
    Strategy - Permite que uma família de algoritmos seja utilizada de modo independente e seletivo.
    Template Method -Define o esqueleto de um algoritmo em uma operação adiando a definição de alguns passos para a subclasse.
    Visitor - Define operações independentes a serem realizadas sobre elementos de uma estrutura.


    ** Segue minhas redes sociais.**
- [linkedin](https://www.linkedin.com/in/b%C3%A1rbara-gon%C3%A7alves-211b5691/)
- [github](https://github.com/idbabis) 
- e-mail: idbabis@gmail.com