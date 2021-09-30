let mysql =require('mysql');
let database = require('./database.js');

let connection = mysql.createConnection(database);

let sql = `UPDATE Driver
           SET Driver_Address = ?
           WHERE idDriver = ?`;

let data = [false, 1];

connection.query(sql, data, (error, results, fields) => 
{
    if (error)
    {
        return console.error(error.message);
    }
    console.log('Rows affected: ', results.affectedRows);
})

connection.end()