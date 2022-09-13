// const sql = require("msnodesqlv8")

// const connectionString = "Server=localhost\SQLEXPRESS;Database=BudgetTool;Trusted_Connection=True;"
// const queryLoad = "SELECT * dbo.budgetItems"

// sql.query(connectionString, queryLoad, (err,rows) => {
//     console.log(rows);
// })

// ===================================================
// let mySql = require('mysql')

// let connection = mySql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'BudgetTool'
// })

// connection.connect(function(err) {
//     if (err) {
//       return console.error('error: ' + err.message);
//     }
  
//     console.log('Connected to the MySQL server.');
//   });

//   ==================================================
//   let itemId = 4

//   module.exports = {
//     queryLoad: (req,res) => {
//         const {itemId, item, amount} = req.body
//         let newItem = {
//             id: itemId,
//             item,
//             amount
//         }
//         if (!itemId || !item || !amount){
//             res.status(400).send('Missing all requirements for new budget item!')
//         } else {
//             postList.push(newItem)
//             itemId++
//             return res.status(200).send(postList)
//         }
//     }
//   }

var Connection = require('tedious').Connection;  
    var config = {  
        server: 'DESKTOP-EUF4M6U\SQLEXPRESS',
        authentication: {
            type: 'default',
            options: {
                userName: 'DESKTOP-EUF4M6U\Spence',
                password: ''
            }
        }
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        console.log("Connected");  
    });
    
    connection.connect();
