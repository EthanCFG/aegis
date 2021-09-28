const { createPool } = require("mysql");

const pool = createPool({
  host: "database-4910.c6lyppadonj0.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "cpsc4910project",
  connectionLimit: 10,
});

// pool.query('select * from sys.Admin', (err, res)=>{
//     return console.log(res)
// })
// pool.query('select * from sys.Sponsor', (err, res)=>{
//     return console.log(res)
// })
pool.query("select * from sys.Driver", (err, res) => {
  return console.log(res);
});
