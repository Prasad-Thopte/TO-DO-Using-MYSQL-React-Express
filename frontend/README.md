

Create React Todo List App With MYSQL Database.


### How to Run 

### Frontend

    open project folder
    cd frontend
    npm install
    npm start

    in some cases need to update node-module
    use npm update --force

    starting at developement server http://localhost:3000/

    if this error occuers Error: error:0308010C:digital envelope routines::unsupported
    replace this line  in package.json
    
    "start": "react-scripts start"
        to

    "start": "react-scripts --openssl-legacy-provider start"

### Backend

    open xamp 
    craete DATABASE "todolist"
    Fire Query in sql

    CREATE TABLE `todos` (
    `id` int(11) NOT NULL,
    `tasks` varchar(255) NOT NULL
     ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

    cd backend 
    npm install
    npm start
    
      in some cases need to update node-module
      use npm update --force
    

### Project

    ### Frontend

    App.js file route to componenet/TaskList.js
    TaskList.js file having axios API call to interact with backend

    ### Backend

    Configue db.js file 
    with HOST
        USERNAME
        PASSWORD
        DATABASENAME

        Server.js (main file of node.js)
        performs express routing operations

    starting at developement server http://localhost:4000/

 
        
