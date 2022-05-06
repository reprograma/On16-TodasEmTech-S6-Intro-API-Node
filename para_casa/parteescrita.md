## 1. Qual a relação entre os métodos HTTP e o CRUD?
##
HTTP é utilizado em bancos de dados. Quando se excluí, atualiza e cria novos elementos, HTTP pode se parecer muito com o CRUD, apesar de serem distintos. 
O processo de CRUD consiste nas operações básicas a serem feitas em um repositório de dados. Manipulação direta de registros ou objetos de dados. Geralmente estes são tabelas e registros de banco de dados.

O REST, opera em representando recursos, identificando-os por meio de URL. Na maior parte dos casos, essas representações são abstrações complexas de objetos.

Concluí-se que o CRUD é um conjunto de operações feito para ser utilizado em bancos de dados e armazenamentos de dados estáticos), enquanto o REST é um estilo de API de alto nível (principalmente para serviços da Web e outros sistemas "ativos").
CRUD manipula dados básicos, enquanto REST interage com um sistema complexo. CRUD (Create, Read, Update, Delete) é um acrônimo para as maneiras de se operar em informação armazenada. É um mnemônico para as quatro operações básicas de armazenamento persistente. CRUD tipicamente refere-se a operações perfomadas em um banco de dados ou base de dados, mas também pode aplicar-se para funções de alto nível de uma aplicação, como exclusões reversíveis, onde a informação não é realmente deletada, mas é marcada como deletada via status.

##

## Os tipos de verbos que podem ser utilizados em HTTP são:

#GET
Essa é a requisição mais comum de todas. Através dessa requisição nós pedimos a representação de um recurso: que pode ser um arquivo html, xml, json, etc.
Um exemlo de requisição GET seria:


#POST
O método POST é utilizado quando queremos criar um recurso. Quando usamos POST, os dados vão no corpo da requisição e não na URI.

#PUT
Requisita que um recurso seja "guardado" na URI fornecida. Se o recurso já existir, ele deve ser atualizado. Se não existir, pode ser criado.

DELETE
Exclui o recurso especificado.

#TRACE
Devolve a mesma requisição que for enviada veja se houve mudança e/ou adições feitas por servidores intermediários.

#OPTIONS
Retorna os métodos HTTP suportados pelo servidor para a URL especificada.

#PATCH
Serve para atualizar partes de um recurso.

#CONNECT
Converte a requisição de conexão para um túnel TCP/IP transparente, geralmente para facilitar a comunicação criptografada com SSL (HTTPS) através de um proxy HTTP não criptografado.

#HEAD
Retorna somente os cabeçalhos de uma resposta.

#Idempotência
Alguns métodos, como o GET, podem ser chamados diversas vezes seguidas e a resposta será a mesma. Isso porque quando fazermos uma requisição do tipo GET não estamos alterando nada no servidor, somente consultando informações.
Já quando estamos fazendo um POST estamos criando um novo recurso. Se executarmos a mesma requisição POST duas vezes, corremos o risco de criar dois recursos iguais.
Os métodos que não alteram nada no servidor e que podemos chamar mais de uma vez são o que chamamos de métodos idempotentes.
GET, OPTIONS, HEAD, PUT, TRACE, CONNECT e DELETE são idempotentes.


O protocolo HTTP define um conjunto de métodos de requisição responsáveis por indicar a ação a ser executada para um dado recurso. Embora esses métodos possam ser descritos como substantivos, eles também são comumente referenciados como HTTP Verbs (Verbos HTTP). Cada um deles implementa uma semântica diferente, mas alguns recursos são compartilhados por um grupo deles, como por exemplo, qualquer método de requisição pode ser do tipo safe, idempotent ou cacheable.



##

## 2. Comente, com exemplos, a diferença entre o PUT e o PATCH.
##

O método de requisição HTTP PATCH modifica parcialmente um recurso. O método HTTP PUT faz substituições completas em um documento. 
Em contraste ao PUT, o método PATCH não é idempotente, ou seja, muitas requisições para resultados distintos. Todavia, é possível realizar requisições PATCH de modo a serem idempotentes.

PATCH (assim como PUT) podem afetar em outros recursos.


Em poucas palavras, os métodos HTTP PUT e PATCH são usados para indicar um requisição de alteração de dados.

Geralmente, ao usar-se o PUT, fica legível que a alteração do dado será com referência a entidade completa.

'''
Exemplo: (/usuario/1234) :

Resultado: {'id': 1234, 'name': 'Joao', 'idade': 25, 'documento': '123.321.12-X'}
'''

O PATCH é usado para atualização parcial, quando você não quer mandar o payload completo.

'''
Exemplo: (/usuario/1234) :

Resultado: {'name': 'João'}

let PatchRequest = () => {
    // sending PUT request with fetch API in javascript
    fetch("https://reqres.in/api/users/2", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "PATCH",     
    
      // Fields that to be updated are passed
      body: JSON.stringify({
        email: "hello@geeky.com",
        first_name: "Geeky"
      })
    })
      .then(function (response) {
    
        // console.log(response);
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  };
    
  PatchRequest();
  Saída:
  
  '''
Em suma, PATCH é utilizado para modificações parciais e PUT pra modificações totais.
  
##

## 4. Defina o conceito de idempotência e como uma API pode ser idempotente.

#Idempotência
Alguns métodos, como o GET, podem ser chamados diversas vezes seguidas e a resposta será a mesma. Isso porque quando fazermos uma requisição do tipo GET não estamos alterando nada no servidor, somente consultando informações.
Já quando estamos fazendo um POST estamos criando um novo recurso. Se executarmos a mesma requisição POST duas vezes, corremos o risco de criar dois recursos iguais.
Os métodos que não alteram nada no servidor e que podemos chamar mais de uma vez são o que chamamos de métodos idempotentes.
GET, OPTIONS, HEAD, PUT, TRACE, CONNECT e DELETE são idempotentes.

Basicamente, idempotência é quando podemos chamar métodos inúmeras vezes e nçao haverá alteração no servidor. Uma API pode ser considerada idempotente quando gera uma repetição idêntica de uma sequência. 


##

## 5. Cite alguns diferentes padrões de projetos de software.

''' 
Devem possuir um nome, que descreva o problema, as soluções e consequências. Um nome permiti definir o vocabulário a ser utilizado pelos projetistas e desenvolvedores em um nível mais alto de abstração.
Todo padrão deve relatar de maneira clara a qual (is)problema(s) ele deve ser aplicado, ou seja, quais são os problemas que quando inserido em um determinado contexto o padrão conseguirá resolvê-lo. Alguns podendo exigir pré-condições.
Solução descreve os elementos que compõem o projeto, seus relacionamentos, responsabilidades e colaborações. Um padrão deve ser uma solução concreta, ele deve ser exprimido em forma de gabarito (algoritmo) que, no entanto, pode ser aplicado de maneiras diferentes.
Todo padrão deve relatar quais são as suas consequências para que possa ser analisada a solução alternativa de projetos e para a compreensão dos benefícios da aplicação do projeto.
'''

