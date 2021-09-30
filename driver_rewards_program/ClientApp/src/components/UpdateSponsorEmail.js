let mysql =require('mysql');
let database = require('./database.js');

let connection = mysql.createConnection(database);

let sql = `UPDATE Sponsor
           SET Sponsor_Email = ?
           WHERE Sponsor_ID = ?`;

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