# ✨ " Reprograma - Respostas "   ✨

# 1.	Qual a relação entre os métodos HTTP e o CRUD?
O protocolo HTTP define um conjunto de métodos de requisição responsáveis por indicar a ação a ser executada para um dado recurso.
A implementação mais comum do estilo arquitetural REST é baseado no protocolo HTTP e, consequentemente, nos verbos do HTTP: POST, GET, PUT e DELETE. É comum desenvolvedores implementarem esses verbos mapeando-os em termos CRUD - Create, Read, Update e Delete (Criar, Ler, Atualizar e Excluir).

# 2.	Comente, com exemplos, a diferença entre o PUT e o PATCH.
O método de requisição HTTP PATCH aplica modificações parciais a um recurso. O método HTTP PUT permite apenas substituições completas de um documento. Os métodos HTTP PUT e PATCH são usados para indicar um requisição de alteração de dados.
Geralmente, ao usar-se o PUT, fica legível que a alteração do dado será com referência a entidade completa.
Exemplo: (/usuario/1234) :
Resultado: {'id': 1234, 'name': 'Joao', 'idade': 25, 'documento': '123.321.12-X'}
O PATCH é usado para atualização parcial, quando você não quer mandar o payload completo.
Exemplo: (/usuario/1234) :
Resultado: {'name': 'João'}

# 3.	Encontra-se nos arquivo para_casa no diretório

# 4.	Defina o conceito de idempotência e como uma API pode ser idempotente
A idempotência é a propriedade que algumas operações têm de poderem ser aplicadas várias vezes sem que o valor do resultado se altere após a aplicação inicial. 
“ Um método é considerado idempotente se o resultado de uma requisição realizada com sucesso é independente do número de vezes que é executada.” (Gregor Roth)
Quando falamos em idempotência em API’s REST, podemos concluir que os seguintes os verbos:
•	GET, PUT, DELETE, HEAD e OPTIONS são idempotentes.
•	POST não é idempotente.

# 5.	Cite alguns diferentes padrões de projetos de software
- Padrões de criação
- Abstract Factory
- Factory Method
- Singleton
- Padrões estruturais

## 📌 Referências

https://www.infoq.com/br/news/2009/08/CRUDREST/

https://www.brunobrito.net.br/rest-nao-e-crud/

https://pt.stackoverflow.com/questions/217894/qual-%C3%A9-a-diferen%C3%A7a-entre-o-m%C3%A9todo-put-e-o-patch#:~:text=Em%20poucas%20palavras%2C%20os%20m%C3%A9todos,com%20refer%C3%AAncia%20a%20entidade%20completa.&text=O%20PATCH%20%C3%A9%20usado%20para,quer%20mandar%20o%20payload%20completo

https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods/PATCH

https://xuenqui.medium.com/idempot%C3%AAncia-uma-boa-pr%C3%A1tica-a-se-utilizar-em-servi%C3%A7os-rest-633c38f4d7c0

https://www.devmedia.com.br/conheca-os-padroes-de-projeto/957


## 📌 Aluna

| [<img src="https://avatars.githubusercontent.com/u/88860081?s=400&u=62b41e4fc319244c5807bd7da1decd28e1be8d6f&v=4" width=115><br><sub>@CamilaSantos29</sub>](https://github.com/CamilaSantos29) |
| :---: |

