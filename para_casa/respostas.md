#### 1) Qual a relação entre os métodos HTTP e o CRUD?
Os verbos HTTP parecem estar diretamente ligado com o CRUD:

Create -> POST
Read -> GET
Update -> PUT / PATCH
Delete -> DELETE

#### 2)Comente, com exemplos, a diferença entre o PUT e o PATCH.
Geralmente, ao usar-se o PUT, fica legível que a alteração do dado será com referência a entidade completa.
Exemplo: (/usuario/1234) :
Resultado: {'id': 1234, 'name': 'Joao', 'idade': 25, 'documento': '123.321.12-X'}

O PATCH é usado para atualização parcial, quando você não quer mandar o payload completo.
Exemplo: (/usuario/1234) :
Resultado: {'name': 'João'}

Referências:
RFC5789
RFC2616