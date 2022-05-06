# On16-TodasEmTech-s6-Intro-API-Node
Turma Online 16 | Back-end | 2022 | Introdução à API:
HTTP e NodeJS

## Para casa
Abra o PullRequest Respondendo as seguintes questões:

#### 1) Qual a relação entre os métodos HTTP e o CRUD?

* A comunicação é um conceito muito importante no que tange a internet. Para que essa comunicação tenha sucesso, é necessário que alguns fatores sejam alinhados. 

* O protocolo de comunicação HTTP faz com que todos os elementos da comunicação estejam de acordo e permitindo, assim, que as aplicações web se comuniquem, realizando a conexão entre o *cliente* e o *servidor*. 

* É um protocolo baseado em pedidos (*requests) e respostas (response) e, para realizar a comunicação define um conjunto de métodos que são responsáveis pela indicação da ação que deve ser executada. Alguns exemplos de métodos: GET, POST, PUT, PATCH, DELETE.

* Já o CRUD (*Create, Read, Update, Delete*) é um acrônimo para as maneiras de se operar primitivamente, principalmente em bancos de dados e armazenamentos de dados estáticos. Ocorrendo uma manipulação direta de registros ou objetos de dados

* O protocolo HTTP e seus métodos baseia o estilo arquitetural REST e é comum que alguns desenvolvedores implementem esses verbos mapeando-os em termos CRUD:


```s
o verbo GET normalmente é mapeado para o CRUD Read (Leitura);

o verbo DELETE normalmente é mapeado para o CRUD Delete (Excluir);

o verbo PUT normalmente é mapeado para CRUD Update (Atualizar);

o verbo POST é normalmente mapeado para o CRUD Create (Criar).
```

#### 2) Comente, com exemplos, a diferença entre o PUT e o PATCH.


* Em linhas gerais, os métodos HTTP PUT e PATCH são utilizados para indicar uma requisição de alteração de dados. Contudo, o verbo PATCH modifica parcialmente dados de um determinado recurso (como a alteração do nome de um usuário), enquanto o verbo PUT realiza, somente, a substituição total de um documento (como a alteração de todos os dados de um usuário).

* Se o recurso que pretende ser alterado pelo PUT não existir, um novo recurso será criado. Já com o PATCH, isso não ocorre.


~~~
{'id': 1234, 'name': 'Joao', 'idade': 25, 'documento': '123.321.12-X'}
~~~

- PATCH
example payload:

~~~
{'name': 'Maria Joana'}
~~~

Nesse caso, o PATCH irá alterar apenas o atributo 'name' do objeto colocado como exemplo.

- PUT
example payload: 

~~~
{'id': 1234, 'name': 'Maria Joana', 'idade': 30, 'documento': '321.123.32-X'}
~~~

Já no PUT a modificação ocorre em todo o objeto.


3) Apresente os dados dos JS no console
    - Exercício Ghibli: o título de cada filme e a descrição de cada filme
    - Exercício Pokemón: o nome, descrição e tipo (separadamente) de cada pokemón

    Opcional: caso queira exercitar mais :). na pasta "extras", temos alguns jsons, você pode:
    - No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"
    - No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console
    - No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.

#### 4) Defina o conceito de idempotência e como uma API pode ser idempotente

>"Um método é considerado idempotente se o resultado de uma requisição realizada com sucesso é independente do número de vezes que é executada."

Implementados corretamente, os métodos GET, HEAD, PUT, DELETE, OPTIONS são idempotentes. 

O POST não é considerado um método idempotente, pois, como sua função é criar um recurso, a cada nova requisição feita, um novo recurso será criado e, consequentemente, irá alterar o estado da aplicação.

O que não acontece com o PUT, por exemplo, que mesmo alterando o estado de uma aplicação, altera apenas uma vez, enviando sempre a mesma resposta da primeira chamada.



#### 5) Cite alguns diferentes padrões de projetos de software


>"Padrões de projeto são soluções reutilizáveis ​​para problemas comuns em projetos de software."[^1]

[^1]: "Learning JavaScript Design Patterns" - Addy Osmani

* Os padrões de projeto são divididos em três categorias separadas por um critério finalístico, que reflete o que um padrão faz. Os padrões podem ter finalidades de **criação**, **comportamental** e **estrutural**.

1) Padrões de criação: abstraem e/ou adiam o processo de criação de objetos, oferecendo diversas alternativas para isso, o que, consequentemente, dá mais flexibilidade ao projeto. Como exemplos, têm-se o *Prototype* e o *Factory Method*.

2) Padrões estruturais: estão relacionados à forma como classes e objetos são formados para a construção de estruturas maiores, sem ocorrer a perca de flexibilidade e eficiência. Exemplos desses padrões são o *Adapter* e o *Composite*.

3) Padrões de comportamento: preocupam-se com os algoritmos e atribuições de responsabilidades entre os objetos, descrevendo padrões de comunicação entre eles. O *Interpreter* e o *Iterator* são exemplos de padrões comportamentais

* Para utilizar um ou vários padrões de projeto, no entanto, antes é nessário que se faça uma avaliação do projeto e da equipe que integra o projeto, visto que esses padrões podem gerar alguns problemas quando usados de forma equivocada, como a elevação do nível de dificuldade do projeto.
