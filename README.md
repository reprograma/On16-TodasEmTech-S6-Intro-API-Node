# On16-TodasEmTech-s6-Intro-API-Node
Turma Online 16 | Back-end | 2022 | Introdução à API:
HTTP e NodeJS

## Para casa
Abra o PullRequest Respondendo as seguintes questões:

1) Qual a relação entre os métodos HTTP e o CRUD?
Os verbos HTTP estam diretamente ligado com o CRUD, como: read(get), create(post)... 


2) Comente, com exemplos, a diferença entre o PUT e o PATCH.
O PUT atualiza o usuário 
Exemplo: (user 01) :
{'id': 01, 'name': 'Lucas', 'age': 17}

e o PATCH atualiza o usuário em PARTES, quando não tem intenção de mandar o mandar o payload completo.
Exemplo (user 01) :
{'name' : 'Lucas'}

3) Apresente os dados dos JS no console
    - Exercício Ghibli: o título de cada filme e a descrição de cada filme
    - Exercício Pokemón: o nome, descrição e tipo (separadamente) de cada pokemón

    Opcional: caso queira exercitar mais :). na pasta "extras", temos alguns jsons, você pode:
    - No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"
    - No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console
    - No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.

4) Defina o conceito de idempotência e como uma API pode ser idempotente
Indempotência: Propriedade de uma operação de poder ser aplicada mais do que uma vez sem que o resultado se altere.

A API oferece suporte à idempotência para repetir solicitações com segurança sem executar acidentalmente a mesma operação várias vezes

5) Cite alguns diferentes padrões de projetos de software: Factory