<h1 align="center">  Introdução API Node :rocket: </h1> <br>
<h3 align="center">  Turma Online 16 | Back-end | 2022 | Introdução à API:
HTTP e NodeJS  </h3> <br>

## *Atividade da 6ª semana da Reprograma.* :hearts: :rainbow_flag:
</br>


##  1 ) Qual a relação entre os métodos HTTP e o CRUD?

### :small_orange_diamond: *`HTTP Verbs`*
</br>

>  O protocolo HTTP define um conjunto de métodos de requisição responsáveis por indicar a ação a ser executada para um dado recurso. Esses métodos são referenciados como *`HTTP Verbs`* (Verbos HTTP), cada um desses métodos elabora uma semântica diferente.


| Método |  Descrição|
| --------- | ----------- |
| `GET` | Solicita a representação de um recurso específico. Requisições utilizando o GET devem retornar apenas dados. |
| `HEAD` | Solicita uma resposta de forma idêntica ao método GET, porém sem conter o corpo da resposta. |
| `POST` | É utilizado para submeter uma entidade a um recurso específico, frequentemente causando uma mudança no estado do recurso ou efeitos colaterais no servidor. |
| `PUT` | Substitui todas as atuais representações do recurso de destino pela carga de dados da requisição. |
| `DELETE` | Remove um recurso específico. |
| `CONNECT` | Estabelece um túnel para o servidor identificado pelo recurso de destino. |
| `OPTIONS` |É usado para descrever as opções de comunicação com o recurso de destino. |
| `TRACE` | Executa um teste de chamada loop-back junto com o caminho para o recurso de destino. |
| `PATCH` | Substitui todas as atuais representações do recurso de destino pela carga de dados da requisição. |

### :zap: *`CRUD`*
</br>

>  CRUD significa as operações básicas a serem feitas em um repositório de dados. É um termo simples que foi abreviado porque é um recurso comum em muitos aplicativos e é mais fácil dizer CRUD . Ele descreve as 4 operações básicas que você pode executar em dados (ou em um recurso).


| Sigla | Método | Descrição |
| --- | --- | --- |
| `C` | `Create` | Criar um novo registro. |
| `R` | `Read` | Ler um registro, ou um conjunto de registros.|
| `U` | `Update` | Atualizar um registro.|
| `D` | `Delete` | Excluir um registro.|
</br>

##  2 ) Comente, com exemplos, a diferença entre o PUT e o PATCH. 
</br>

>  <p> PUT e PATCH são usados para indicar um requisição de alteração de dados. </p>  
>  <p> Geralmente, ao usar-se o PUT, fica legível que a alteração do dado será com referência a entidade completa. </p>

```
- Exemplo: (/usuario/1234) :
- Resultado: {'id': 1234, 'name': 'Camila', 'idade': 34, 'documento': '123.321.12-X'}
```

>  <p> O PATCH é usado para atualização parcial, quando você não quer mandar o payload completo. </p>

```
- Exemplo: (/usuario/1234) :
- Resultado: {'name': 'Camila'}
```

##  3 ) Apresente os dados dos JS no console. 
</br>

- [ ]  **`Exercício Ghibli:`** o título de cada filme e a descrição de cada filme. 
- [ ]  **`Exercício Pokemón:`** o nome, descrição e tipo (separadamente) de cada pokemón.
 
</br>

```
 📁 para_casa
   |- 📁 01-ex-ghibli
   |     |- 📄 script.js
   |- 📁 02-ex-pokemon
   |     |- 📄 script.js
```
</br>

### :bomb: Opcional: caso queira exercitar mais :). na pasta "extras":

- [ ]  **`colors-rgb.js:`** apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)". 
- [ ]  **`estados-cidade.js:`** apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console.
- [ ]  **`filmes.js:`** apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.
 
</br>

```
 📁 extras\Data
   |- 📄 colors-rgb.js
   |- 📄 estados-cidade.js
   |- 📄 filmes.js
```

##  4 ) Defina o conceito de idempotência e como uma API pode ser idempotente. 
</br>

>  <p> Em matemática e ciência da computação, a idempotência é a propriedade que algumas operações têm de poderem ser aplicadas várias vezes sem que o valor do resultado se altere após a aplicação inicial. — Wikipedia </p>
>  <p> Um método HTTP idempotente pode ser chamado muitas vezes sem resultados diferentes. Não importa se o método é chamado apenas uma vez ou dez vezes. O resultado deve ser o mesmo. Essencialmente, significa que o resultado de uma solicitação executada com sucesso é independente do número de vezes que ela é executada. </p>
>  <p> A API oferece suporte à idempotência para repetir requisições de maneira segura sem executar acidentalmente a mesma operação mais de uma vez. Esse recurso é útil quando uma chamada de API é interrompida em trânsito antes do recebimento do response. </p>

```
- GET, PUT, DELETE, HEAD e OPTIONS são idempotentes.
- POST não é idempotente.
```

##  5 ) Cite alguns diferentes padrões de projetos de software. 
</br>

> <p> Os padrões são divididos por 3 categorias </p>

### :small_orange_diamond: `Criação (Creational)`
> <p> Esses padrões foram criados para a instanciação de classes. Eles podem tanto ser padrões de criação de classes como de criação de objetos. </p>

| Padrão |  Descrição|
| --------- | ----------- |
| `Abstract Factory` | É um método que fabrica objetos de um tipo particular. Um objeto Factory é um objeto que encapsula  métodos Factory. |
| `Builder` | Separa a construção de um objeto complexo da sua representação, de forma que o mesmo processo de construção possa criar diferentes representações. |
| `Factory Method` | É uma interface para instanciação de objetos que mantém isoladas as classes concretas usadas da requisição da criação destes objetos. |
| `Prototype` | Fornece uma outra maneira de se construir objetos de tipos arbitrários. |
| `Singleton` | Garante que para uma classe específica só possa existir uma única instância, a qual é acessível de forma global e uniforme. |

### :small_orange_diamond: `Estrutura (Structural)`
> <p> Esses padrões foram criados levando em conta a estrutura de uma classe e sua composição. O objetivo principal da maioria desses padrões é aumentar a funcionalidade das classes envolvidas, sem alterar muito de sua composição. </p>

| Padrão |  Descrição|
| --------- | ----------- |
| `Adapter` | Permite que dois objetos se comuniquem mesmo que tenham interfaces incompatíveis. |
| `Bridge` | Desacopla a interface da implementação. Ocultação de detalhes de implementação dos clientes. |
| `Composite` | Lida com uma estrutura de elementos agrupada hierarquicamente (não como meras coleções). |
| `Decorator` | Atribui responsabilidade adicionais a um objeto dinamicamente. O Decorator fornece uma alternativa flexível a subclasses para a extensão da funcionalidade. |
| `Facade` | Interface unificada para um subsistema. Torna o subsistema mais fácil de usar. |
| `Flyweight` | Usa compartilhamento para dar suporte a vários objetos de forma eficiente. |
| `Proxy` | Fornece um objeto representante ou procurador de outro objeto para controlar o acesso ao mesmo. |

### :small_orange_diamond: `Comportamento (Behavioral)`
> <p> Esses padrões foram criados levando em conta a forma como uma classe se comunica com as outras. </p>

| Padrão |  Descrição|
| --------- | ----------- |
| `Chain of Responsability` | Evita dependência do remetente(cliente) de uma requisição ao seu destinatário , dando a oportunidade de mais de objeto tratar a requisição. |
| `Command` | Associa uma ação a diferentes objetos através de uma interface conhecida. |
| `Interpreter` | Usado para ajudar uma aplicação a entender uma declaração de linguagem natural e executar a funcionalidade da declaração. |
| `Iterator` | Provê uma forma de percorrermos os elementos de uma coleção sem violar o seu encapsulamento. |
| `Mediator` | Cria um objeto que age como um  mediador controlando a interação entre um conjunto de objetos. |
| `Memento` | Torna possível salvar o estado de um objeto de modo que o mesmo possa ser restaurado. |
| `Observer` | Define uma relação de dependência de forma que quando um certo objeto (assunto) tem seu estado modificado os demais (observadores) são notificados. Possibilita baixo acoplamento entre os objetos observadores e o assunto. |
| `State` | Permite objeto alterar seu comportamento quando estado interno muda. |
| `Strategy` | Permite que uma família de algoritmos seja utilizada de modo independente e seletivo. |
| `Template Method` | Define o esqueleto de um algoritmo em uma operação adiando a definição de alguns passos para a subclasse. |
| `Visitor` | Define operações independentes a serem realizadas sobre elementos de uma estrutura. |
</br>

<p align="center">
  <img src="https://media3.giphy.com/media/1LMgdUmJJWGTC/giphy.gif?cid=790b761191c9d3bd6d8225eb60ead51d316eb4f2053411d1&rid=giphy.gif&ct=g" width= "700px"/>
</p>

----

  ### <br> Referências: :pushpin: <br>
>
> * :closed_book: <https://www.macoratti.net/vb_pd1.htm>
> * :closed_book: <https://xuenqui.medium.com/idempot%C3%AAncia-uma-boa-pr%C3%A1tica-a-se-utilizar-em-servi%C3%A7os-rest-633c38f4d7c0>
> * :closed_book: <https://www.dio.me/articles/aprenda-os-metodos-http>