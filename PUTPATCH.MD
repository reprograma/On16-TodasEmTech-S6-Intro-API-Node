# Comente, com exemplos, a diferença entre o PUT e o PATCH.

## PUT

Este método de solicitação HTTP PUT é
 responsável em criar um novo recurso ou substituí uma representação do recurso de destino pela carga útil da solicitação. Esse método é idempotente (se chamar uma ou várias vezes tem o mesmo efeito) ou seja não ocorre nenhum tipo de alterações.

### EXEMPLO DE APLICAÇÃO DO PUT

- SOLICITAÇÃO
PUT /new.html HTTP/1.1
Host: example.com
Content-type: text/html
Content-length: 16

<p>New File</p>

- RESPOSTA
Se o recurso de destino não tiver uma representação atual e a PUTsolicitação criar uma com sucesso, o servidor de origem deverá informar o agente do usuário enviando uma resposta 201( ).Created

HTTP/1.1 201 Created
Content-Location: /new.html
Se o recurso de destino tiver uma representação atual e essa representação for modificada com êxito de acordo com o estado da representação incluída, o servidor de origem deverá enviar uma resposta 200( OK) ou 204( No Content) para indicar a conclusão bem-sucedida da solicitação.

HTTP/1.1 204 No Content
Content-Location: /existing.html

 ## PATCH
 O método de solicitação HTTPPATCH aplica modificações parciais a um recurso.

PATCHé um pouco análogo ao conceito de "atualização" encontrado em CRUD (em geral, HTTP é diferente de CRUD e os dois não devem ser confundidos).

Uma PATCHsolicitação é considerada um conjunto de instruções sobre como modificar um recurso. Compare isso com PUT; que é uma representação completa de um recurso.

Ao contrário do PUT  o PATCH não é necessáriamente idempotente, lembrando que pode ser, pode ter sim efeitos colaterais em outros recursos.

### EXEMPLO DE APLICAÇÃO DO PATCH

- SOLICITAÇÃO
PATCH /file.txt HTTP/1.1
Host: www.example.com
Content-Type: application/example
If-Match: "e0023aa4e"
Content-Length: 100

[description of changes]

- RESPOSTA

Uma resposta bem-sucedida é indicada por qualquer código de status 2xx .

No exemplo abaixo, um 204 código de resposta é usado, porque a resposta não carrega um corpo de carga útil. Uma 200 resposta poderia conter um corpo de carga útil.

HTTP/1.1 204 No Content
Content-Location: /file.txt
ETag: "e0023aa4f"


####fonte de pesquisa: PATCH /file.txt HTTP/1.1
Host: www.example.com
Content-Type: application/example
If-Match: "e0023aa4e"
Content-Length: 100

[description of changes]
Resposta
Uma resposta bem-sucedida é indicada por qualquer código de status 2xx .

No exemplo abaixo, um 204 código de resposta é usado, porque a resposta não carrega um corpo de carga útil. Uma 200 resposta poderia conter um corpo de carga útil.

HTTP/1.1 204 No Content
Content-Location: /file.txt
ETag: "e0023aa4f".