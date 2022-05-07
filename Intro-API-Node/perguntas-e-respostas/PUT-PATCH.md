# Comente, com exemplos, a diferença entre o PUT e o PATCH.

Tanto *PUT* quanto *PATCH* são usados para requerer a alteração de dados.

**PUT**: permite apenas substituições completas de um documento. É idempotente.

- Exemplo: 

PUT/users/1
{"username": "barbara", "email":, "draclarasavelli@gmail.com"}

**PATCH**: aplica modificações parciais a um recurso. Não é indempotente, mas é possível realizar requisições PATCH de modo a serem idempotentes.

PATCH/users/1

{ "email": "draclarasavelli@gmail.com" }

