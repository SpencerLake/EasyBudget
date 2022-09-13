const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
const ctrl = require('./controller.js')

const Connection = require('tedious').Connection;

// const sql = require("msnodesqlv8")



app.use(express.json())
app.use(cors())

app.use(express.static('client'))

app.get('/', (req,res) => {
    res.send('../client/index.html')
})

const port = process.env.PORT || 4500

app.listen(port, console.log(`You're up and running on ${port}`))

// SQL Section

// const connectionString = "Server=localhost\SQLEXPRESS;Database=BudgetTool;Trusted_Connection=True;"
// const connectionString = "Server=.;Database=master;Trusted_Connection=True;"
// const queryLoad = "SELECT * dbo.budgetItems"

// sql.query(connectionString, queryLoad, (err,rows) => {
//     console.log(rows);
// })

const config = {  
    server: 'DESKTOP-EUF4M6U\SQLEXPRESS',
    authentication: {
        type: 'default',
        options: {
            userName: 'DESKTOP-EUF4M6U\Spence',
            password: ''
        }
    }
}; 

const connection = new Connection(config);  
connection.on('connect', function(err) {  
    console.log("Connected");  
});
    
connection.connect();