# 1) Qual a relação entre os métodos HTTP e o CRUD?
Hypertext Transfer Protocol (HTTP) é um protocolo de camada de aplicação para transmissão de documentos hipermídia, como o HTML. Foi desenvolvido para comunicação entre navegadores web e servidores web, porém pode ser utilizado para outros propósitos também. Segue um modelo cliente-servidor clássico, onde um cliente abre uma conexão, executa uma requisição e espera até receber uma resposta. É também um protocolo sem estado ou stateless protocol, que significa que o servidor não mantem nenhum dado entre duas requisições (state). Apesar de ser frequentemente baseado em uma camada TCP/IP, pode ser utilizado em qualquer camada de transporte confiável, ou seja, um protocolo que não perde mensagens silenciosamente como o UDP.
CRUD (Create, Read, Update, Delete) é um acrônimo para as maneiras de se operar em informação armazenada. É um mnemônico para as quatro operações básicas de armazenamento persistente. CRUD tipicamente refere-se a operações perfomadas em um banco de dados ou base de dados, mas também pode aplicar-se para funções de alto nível de uma aplicação, como exclusões reversíveis, onde a informação não é realmente deletada, mas é marcada como deletada via status.

# 2) Comente, com exemplos, a diferença entre o PUT e o PATCH.
O método HTTP PUT permite apenas substituições completas de um documento. Em contraste ao PUT, o método PATCH não é idempotente, ou seja, requisições sucessivas idênticas podem obter efeitos distintos. Todavia, é possível realizar requisições PATCH de modo a serem idempotentes.
O método de requisição HTTP PUT cria um novo recurso ou subsititui uma representação do recurso de destino com os novos dados.
A diferença entre PUT e POST é que PUT é idempotente: chamá-lo uma ou várias vezes sucessivamente terá o mesmo efeito (não é um efeito colateral), enquanto usar POST repetidamente pode ter efeitos adicionais, como passar uma ordem várias vezes.

# 4) Defina o conceito de idempotência e como uma API pode ser idempotente


# 5) Cite alguns diferentes padrões de projetos de software