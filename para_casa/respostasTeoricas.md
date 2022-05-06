# Minhas Respostas Teóricas 🖥️
## 1 Qual a relação entre os métodos HTTP e o CRUD?

### RESPOSTA:
Os métodos HTTP são Get(ler, obter), Post (criar), Patch (modificar) e Delete (deletar).No CRUD temos - Creat,Read,Update,Delete que significa(Criar, ler, atualizar e excluir).
O verbo Get geralmente é mapeado para o CRUD(Read) leitura, apesar do Get fornecer algumas funcionalidades a mais do que de um  mapeamento SELECT padrão. O verbo DELETE normalmente é mapeado para o CRUD Delete (Excluir). O verbo PUT em geral é mapeado para CRUD Update (atualizar), porém com algumas ressalvas: 
O PUT precisa de  um recurso substituto completo, enquanto no Update o recurso pode ser parcial. O Put pode ser utilizado para criação de um recurso (quando a URL é definida pelo cliente).
O verbo POST é geralmente  mapeado para o CRUD Create (Criar) mas ele só dá suporte à criação de um recurso filho. O POST também pode ser usado para realizar atualização parcial de um recurso.
Diante disso podemos dizer que os métodos HTTP são ref

## 2 Comente, com exemplos, a diferença entre o PUT e o PATCH.

### RESPOSTA:

Definição de Put - substituir, alteração total. Exemplo1: mexer em todos os atributos de um usuário.
Normalmente ao utilizar-se  o PUT, fica nítido que a alteração do dado será relacionado  a entidade completa.

Exemplo prático: (/usuario/4567): Resultado {'4567, 'name:' 'Anna', 'idade': 30, 'documento': '612.847.39-X'}

Definição de Patch - modificar, alterar parcialmente. Exemplo1: quando quero alterar apenas um atributo de um usuário.

Exemplo prático: (/usuario/4567) : Resultado: {'name': 'Anna'}

## 3 OBS: respostas de ghibli e do pokemon estão no arquivo app.js referente em cada pasta 

## 4 Defina o conceito de idempotência e como uma API pode ser idempotente

### RESPOSTA:

Um método de solicitação é visto como  "idempotente" se o efeito pretendido sobre o servidor de várias solicitações idênticas com esse método é  o mesmo que o efeito para uma única solicitação desse tipo. Dos métodos de solicitação definidos por esta especificação, PUT, DELETE e métodos de solicitação segura são idempotentes.

Um método HTTP é idempotente se uma requisição idêntica pode ser feita uma ou mais vezes em sequência com o mesmo efeito enquanto deixa o servidor no mesmo estado. Em outras palavras, um método idempotente não deveria possuir nenhum efeito colateral (exceto para manter estatísticas).

A idempotência certifica que uma solicitação de API seja concluída apenas uma vez. Com uma solicitação idempotente, se a solicitação original for concluída com êxito, as novas tentativas subsequentes retornam o resultado da solicitação original bem-sucedida e não terão efeito adicional.


## 5 Cite alguns diferentes padrões de projetos de software

### RESPOSTA:

Os padrões de projetos tornam mais fácil o reuso de  soluções e arquiteturas bem sucedidas para construir softwares orientados a objetos de forma flexível e fácil de manter. O  uso de padrões de projeto pode reduzir a complexidade do processo de projetar software. Os padrões de projeto são classificados em três categorias: Projeto de Criação, Projeto Estrutural e Projeto Comportamental. Inserido em Projeto de Criação temos: Abstract Factory, Factory Method,Singleton, entre outros.
No Projeto Estrutural temos: Adapter, Decorator, Composite, entre outros.
E no Projeto Comportamental contém: Template Method, Interpreter, State, Observer, iterator, entre outros.

 

