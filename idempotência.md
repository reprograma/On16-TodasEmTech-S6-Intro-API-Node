# Defina o conceito de idempotência e como uma API pode ser idempotente

A idempotência garante que uma solicitação de API seja concluida apenas uma vez. Com uma solicitação idempotente, se a solicitação original for concluída com êxito, as novas tentativas subsequentes retornam o resultado da solicitação original bem-sucedida e não terão efeito adicional


### EXEMPLO

Especifique o parâmetro de solicitação ClientToken.

POST /snapshots HTTP/1.1
Host: ebs.us-east-2.amazonaws.com
Accept-Encoding: identity
User-Agent: <User agent parameter>
X-Amz-Date: 20200618T040724Z
Authorization: <Authentication parameter>

{
    "VolumeSize": 8,
    "ParentSnapshot": snap-123EXAMPLE1234567,
    "ClientToken": "550e8400-e29b-41d4-a716-446655440000",
    "Timeout": 60
}

FONTE:https://docs.aws.amazon.com/pt_br/AWSEC2/latest/WindowsGuide/ebs-direct-api-idempotency.html