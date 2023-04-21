const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const connection = require('./db')



app.use(cors());
app.use(bodyParser.json())


app.get('/tasks', (req, res) => {
    const TASK_QUERY = `SELECT * FROM todolist.todos`;
    connection.query(TASK_QUERY, (err,response)=>{
        if(err)console.log(err)
    else res.send(response)
})
})
app.post('/addTask', (req, res) => {

    const ADD_QUERY = `insert into todolist.todos (tasks) values ('${req.body.task}')`
    connection.query(ADD_QUERY, (err) => {
        if (err) console.log(err)
        else res.send('task has been added')
    })
})
    app.delete('/deleteTask/:id', (req, res) => {
        console.log(req.params.id)
        const DELETE_QUERY = `DELETE FROM todolist.todos where (id=${req.params.id})`;
        connection.query(DELETE_QUERY, (err,res) => {
            if (err) console.log(err)
            
        }) 
    })


    app.listen(4000, () => {
        console.log('running on port 4000')
    })