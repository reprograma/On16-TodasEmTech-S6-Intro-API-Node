Turma Online 16 | Back-end | 2022 | Introdução à API:
HTTP e NodeJS

**1) Qual a relação entre os métodos HTTP e o CRUD?** <br>
Quando verificamos a definição desses dois, é possível perceber uma grande semelhança. <br>
O CRUD é a abreviação das palavras Create - Read - Update - Delete. E essas palavras são
usadas na comunicação com Banco de Dados e significam que o uso delas permite o Criar - Ler - Atualizar - Deletar registros e informaçõe no banco de dados. <br>
No protocolo de comunicação HTTP com o Server, também usam-se palavras na requisição de ações
a serem desempenhadas pelo server. Elas são Get - Post - Put - Patch - Delete entre outros. E 
significam respectivamente Ler - Criar - Substituir - Modificar - Excluir. <br>
Percebeu? Se liga na tabela abaixo de comparativo.

CRUT      | Verbos HTTP   | Significado
--------- | ------------- | ------------
Create    | Post          | Criar
Read      | Get           | Ler
Update    | Put e Patch   | Atualizar / Modificar  
Delete    | Delete        | Excluir

Tem ou não tem relação?!

-----

**2) Comente, com exemplos, a diferença entre o PUT e o PATCH.**

O Put e o Patch modificam alguma informação. <br> A diferença entre eles é que com o Put, é como se 
eu tivesse trocando toda a minha roupa para poder sair para um rolê. Ou seja, substituindo todo
um conjunto de informações. E no caso, se eu tivesse sem roupa, inserir a roupa. Na linguagem
códigos, se a info não existe, cria ela. 
O Patch é como se eu gostasse da calça pro meu rolê, então só vou trocar a blusa. Moficar apenas
parte de meu figurino para abalar na balada. Alguma info já existe, e eu vou apenas modificar 
uma parte dela.

-----

**4) Defina o conceito de idempotência e como uma API pode ser idempotente**

Idempotente é a característica de um método HTTP que não altera nada no servidor quando soliticitado
diversas vezes seguidas. Uma API pode ser idempotente quando usa os verbos Get, Put, Delete, Options,
Head, Trace Connect.

----

**5) Cite alguns diferentes padrões de projetos de software**

- Factory Method
- Abstract Factory
- Composite
- Proxy
- Template Method