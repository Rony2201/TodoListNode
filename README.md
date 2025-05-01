📁 Estrutura do projeto

/src

  /controllers
  
  	tarefasController.js
   
  /database
  
  	db.js
   
  /models
  
  	tarefas.js
   
  /routers
  
    rotasTarefas.js
    
  /Server
  
  	server.js
   
  index.js
  
package.json

______________________________________________________________________________

🚀 Como rodar o projeto

git clone https://github.com/Rony2201/TodoListNode.git

Acesse a pasta do projeto:

cd TodoListNode

Instale as dependências:
 /instalar npm
 
    npm install
    
 /instalar express e pg
 
    npm install express pg
    
 /instalar nodemon
 
    npm install --save-dev nodemon

 /modificar packege.json

    "type": "module",
    "scripts": {
      "dev": "nodemon Server/server.js",
      "start": "node server.js",
      "test": "echo \"Error: no test specified\" && exit 1"
    },

Inicie o servidor:

/iniciar servidor
    
    npm run dev

Acesse a API em:

http://localhost:3000

______________________________________________________________________________

📖 Endpoints disponíveis
Método	Rota	Descrição

GET	/tarefas
    
    [Listar todas as tarefas](http://localhost:3000/tarefas)

GET /tarefas/:id 
    
    [Buscar tarefa pelo ID](http://localhost:3000/tarefas/id)

POST	/tarefas

    [Criar uma nova tarefa](http://localhost:3000/tarefas)

PUT	/tarefas/:id 
    
    [Atualizar tarefa pelo ID](http://localhost:3000/tarefas/id)

DELETE	/tarefas/:id

    [Excluir tarefa pelo ID](http://localhost:3000/tarefas/id)

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







  


