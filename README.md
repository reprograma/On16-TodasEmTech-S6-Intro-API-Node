# On16-TodasEmTech-s6-Intro-API-Node
Turma Online 16 | Back-end | 2022 | Introdução à API:
HTTP e NodeJS

## Para casa
Abra o PullRequest Respondendo as seguintes questões:

## 1) Qual a relação entre os métodos HTTP e o CRUD?

O termo crud vem das operações que podem ser executadas no banco de dados, ele é um acrônimo onde:

C quer dizer “criar”

R quer dizer “ler”

U quer dizer “atualizar”

D quer dizer “excluir”


Nas operações modernas esse conceito foi traduzido para operações do protocolo HTTP, onde temos:

C – Creat “post”

R – Read “get”

U – Update “put”

D – Delete “delete”

Quando a gente cria uma API REST, além de usar os métodos corretos em cada uma das operações, também precisamos usar os códigos HTTP certos em cada uma delas:

| OPERAÇÃO | MÉTODO | STATUS | HTTP | 
| --- | --- | --- | --- | 
| Creat | POST | 201 | Created |
| Read | GET | 200 | Ok |
| Update | PUT | 200 | Ok |
| Deletel | Delete | 204 | No content




## 2) Comente, com exemplos, a diferença entre o PUT e o PATCH.

O método PUT é usado para alteração de um dado completo, exemplo: 
(/usuário/1234):

Resultado: {‘id’: 1234, ‘name’: ‘João’, ‘idade’: 25, ‘documento’: ‘123.321.12-X’}

Já o PATCH é usado para atualização parcial, quando você não quer mandar o payload completo.

Exemplo: (/usuário/1234):
Resultado: {‘name’: ‘João’}




## 3) Apresente os dados dos JSONs no console
    - Exercício Ghibli: o título de cada filme e a descrição de cada filme
    - Exercício Pokemón: o nome, descrição e tipo (separadamente) de cada pokemón

    Opcional: caso queira exercitar mais :). na pasta "extras", temos alguns jsons, você pode:
    - No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"
    - No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console
    - No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.
*TODAS AS RESPOSTAS DA QUESTÃO 3 ESTÃO DENTRO PASTA PARA CASA*

## 4) Defina o conceito de idempotência e como uma API pode ser idempotente

Um método HTTP é idempotente se uma requisição idêntica pode ser feita uma ou mais vezes em sequência com o mesmo efeito enquanto deixa o servidor no mesmo estado. Em outras palavras, um método idempotente não deveria possuir nenhum efeito colateral (exceto para manter estatísticas).
A idempotência garante que uma solicitação de API seja concluída apenas uma vez. Com uma solicitação idempotente, se a solicitação original for concluída com êxito, as novas tentativas subsequentes retornam o resultado da solicitação original bem-sucedida e não terão efeito adicional.


## 5) Cite alguns diferentes padrões de projetos de software


Os padrões são divididos por 3 categorias, são elas:

- Criação (creational)
- Estruturais (structural)
- Comportamentais (behavioural) 

Dentro de criação temos: Abstract factory, factory method, builder, prototype, singleton;

Na estrutural são: adapter, bridge, composite, decorador, façade, flyweight, proxy;

E no comportamental: interpreter, template method, chain of responsibility, iterator, command, mediator, memento, observer, state, strategy e visitor. 
