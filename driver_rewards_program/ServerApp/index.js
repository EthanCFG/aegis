const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "admin",
  host: "database-4910.c6lyppadonj0.us-east-1.rds.amazonaws.com",
  password: "cpsc4910project",
  database: "sys",
});

app.post("/signup", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const isDriver = req.body.isDriver;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const address = req.body.address;
  const state = req.body.state;
  const city = req.body.city;
  const zip = req.body.zip;
  const phone = req.body.phone;

  if (isDriver) {
    db.query(
      "INSERT INTO Driver (Driver_First_Name, Driver_Last_Name, Driver_Email, Driver_Address, Driver_State, Driver_City, Driver_Zip, Driver_Phone_Number, Driver_Password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [firstName, lastName, email, address, state, city, zip, phone, password],
      (err, res) => {
        console.log(err);
      }
    );
  } else {
    db.query(
      "INSERT INTO Sponsor (Sponsor_First_Name, Sponsor_Last_Name, Sponsor_Email, Sponsor_Phone_Number, Sponsor_Password) VALUES (?, ?, ?, ?, ?)",
      [firstName, lastName, email, address, phone, password],
      (err, res) => {
        console.log(err);
      }
    );
  }
});

app.listen(3001, () => {
  console.log("running server");
});
