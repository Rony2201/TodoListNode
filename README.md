📁 Estrutura do projeto

/src
  /controllers
    tarefasController.js
  /routes
    tarefasRoutes.js
  app.js
package.json

______________________________________________________________________________

🚀 Como rodar o projeto

git clone https://github.com/Rony2201/TodoListNode.git

Acesse a pasta do projeto:

cd TodoListNode

Instale as dependências:

npm install

Inicie o servidor:

npm start

Acesse a API em:

http://localhost:3000

______________________________________________________________________________

📖 Endpoints disponíveis
Método	Rota	Descrição

GET	/tarefas	Listar todas as tarefas

GET	/tarefas/:id	Buscar tarefa pelo ID

POST	/tarefas	Criar uma nova tarefa

PUT	/tarefas/:id	Atualizar tarefa pelo ID

DELETE	/tarefas/:id	Excluir tarefa pelo ID

______________________________________________________________________________

📝 Exemplo de corpo para criação (POST /tarefas)

{

  "titulo": "Estudar Node.js",
  
  "descricao": "Focar nos controllers e rotas",
  
  "concluida": false
  
}

______________________________________________________________________________


📊 Diagrama de endpoints

 GET ------> /tarefas    |--> Lista todas as tarefas


 POST -----> /tarefas    |--> Cria uma nova tarefa

 GET ------> /tarefas/:id      |--> Busca tarefa pelo ID
 PUT ------> /tarefas/:id      |--> Atualiza tarefa pelo ID
 DELETE ----> /tarefas/:id     |--> Exclui tarefa pelo ID







  


