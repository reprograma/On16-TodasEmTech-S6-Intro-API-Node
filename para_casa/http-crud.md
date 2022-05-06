# Qual a relação entre os métodos HTTP e o CRUD?

HTTP (HyperText Transfer Protocol) é um protocolo de comunicação utilizado para conectar diferentes servidores ao redor do mundo. A sua função primária é estabelecer uma conexão com o servidor e mandar os pacotes de HTML para o browser do usuário. Também é utilizado para fazer download de dados para o browser ou para qualquer aplicação que utilize HTTP.

Existem métodos de HTTP, que são o POST, GET, PUT, PATCH e DELETE. Esses métodos são utilizado para criar, ler, atualizar e deletar (CRUD, do inglês - create, read, update and delete). Existem outros verbos, mas são utilizados com menos frequência (p. ex, OPTIONS e HEAD).

Abaixo, uma lista resumindo todos os valores de retorno dos métodos primários.

| HTTP Verb |         CRUD         |
|:---------:|:--------------------:|
| POST      | Criar                |
| GET       | Ler                  |
| PUT       | Atualizar/Substituir |
| PATCH     | Atualizar/Modificar  |
| DELETE    | Deletar              |

- Post: o método post é muito utilizado para criar novos recursos. É utilizado para criar recursos subordinados, ou seja, recursos que estarão subordinados a um outro recurso principal. Quando a criação do novo recurso é bem sucedida, retona o status 201, de bem sucedido. 

- Get: é utilizado para ler ou recuperar uma representação de um recurso. Retorna uma representação em XML ou JSON a uma resposta de 200 (OK) ou 400 (REQUISIÇÃO MAL FEITA).

- Put: é o método mais utilizado para atualização, adicionando a um recurso já conhecido a URI com a requisição do body, que contém a versão atualizada do recurso original. 

- Patch: é utilizado para modificação. A requisição de PATCH precisa apenas conter as mudanças do recurso e não o recurso completo. É um método que lembra o Put, mas o body contem uma série de instruções descrevendo como o recurso deve ser modificado para produzir uma nova versão. Ou seja, a principal diferença entre o put e o patch é que este faz uma atualização parcial, sem a modificação de todos os outros campos.

- Delete: serve para deletar um recurso identificado pela URI. Em deleções bem sucedidas retorna o status 200 (OK) junto com a resposta do corpo. Ou retorna o status 204 (NO CONTENT) sem nenhuma resposta no corpo. 

## Idempotência
Para uma operação ser idempotente os clientes podem fazer a mesma chamada enquanto produzindo os mesmos resultados. Isso significa que fazer requisições idênticas tem o mesmo efeito que fazer uma única requisição. Enquanto as operações idempotentes produzem os mesmo resultados no servidor, a resposta pode não ser a mesma (o estado do recurso pode mudar entre as requisições).
 
Exemplo de método idempotentes são o put e o delete. O delete tem um caso especial, pois se for bem sucedido normalmente retorna 200 (bem sucedido) ou 204 (sem conteúdo) mas rotineiramente pode retornar 404 (não encontrado) nas chamadas subsequentes, a não ser que o serviço esteja configurado para marcar os recursos para deleções sem necessariamente deletá-los. Mas quando o servidor deleta o recurso, a proxima chamada não irá encontrar o recurso para deletar e vai retornar 404. Dessa maneira, o estado do servidor é o mesmo após a chamada do método delete, mas a resposta é diferente. 

## Padrão de Projeto de Software

Trata de uma solução geral, conhecida pela comunidade, para um problema que ocorre rotineiramente dentro de um projeto de software. É apenas uma descrição de como se resolve um problema, que pode ser aplicado em diferentes contextos. São as melhores práticas pelos desenvolvedores, que foram compiladas e disponibilizadas para a comunidade. 

Existem alguns elementos que devem conter para ser um padrão de solução de projeto:

- Nome
- Problema
- Solução
- Consequências

**Exemplos**


## Referências

https://www.restapitutorial.com/lessons/httpmethods.html
https://www.restapitutorial.com/lessons/idempotency.html