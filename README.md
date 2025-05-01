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

GET	[Listar todas as tarefas]
    
    http://localhost:3000/tarefas

GET [Buscar tarefa pelo ID] 
    
    http://localhost:3000/tarefas/id

POST	[Criar uma nova tarefa]

    http://localhost:3000/tarefas

PUT	[Atualizar tarefa pelo ID]
    
    http://localhost:3000/tarefas/id
    
DELETE	[Excluir tarefa pelo ID]

    http://localhost:3000/tarefas/id

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


![ChatGPT Image 1 de mai  de 2025, 12_16_23](https://github.com/user-attachments/assets/5e17a911-0e86-4300-ade3-3f568bc39e89)





  


