const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.use('/welcome', (req, res) => {
  res.send({
    token: 'test123'
  });
});

const db = mysql.createConnection({
  user: "admin",
  host: "database-4910.c6lyppadonj0.us-east-1.rds.amazonaws.com",
  password: "cpsc4910project",
  database: "sys",
});

/*
  Creates a new driver or sponsor
  Requires: email, password, isDriver, firstName, lastName, address, state, city, zip, phone
*/
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
      "INSERT INTO Driver (Driver_First_Name, Driver_Last_Name, Driver_Email, Driver_Address, Driver_State, Driver_City, Driver_Zip, Driver_Phone_Number, Driver_Password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [firstName, lastName, email, address, state, city, zip, phone, password],
      (err, res) => {
        console.log(err);
      }
    );
  } else {
    db.query(
      "INSERT INTO Sponsor (Sponsor_First_Name, Sponsor_Last_Name, Sponsor_Email, Sponsor_Phone_Number, Sponsor_Password) VALUES (?, ?, ?, ?, ?)",
      [firstName, lastName, email, phone, password],
      (err, res) => {
        console.log(err);
      }
    );
  }
});

/*
  Updates a driver address
  Requires: newAddress, driverID
*/
app.post("/update_driver_address", (req, res) => {
  const newAddress = req.body.newAddress;
  const driverID = req.body.driverID;

  db.query(
    `UPDATE Driver 
      SET Driver_Address = ?
      WHERE Driver_ID = ?`,
    [newAddress, driverID],
    (err, res) => {
      console.log(err);
    }
  );
});

/*
  Updates a driver's point balance
  Requires: pointChange, driverID, organizationID, date, reason
*/
app.post("/update_driver_point_balance", (req, res) => {
  const pointChange = req.body.pointChange;
  const driverID = req.body.driverID;
  const organizationID = req.body.organizationID;
  const date = req.body.date;
  const reason = req.body.reason;

  db.query(
    `UPDATE Driver 
      SET Driver_Point_Balance = Driver_Point_Balance + ?
      WHERE Driver_ID = ?`,
    [pointChange, driverID],
    (err, res) => {
      console.log(err);
    }
  );
    /* We will eventually need to add an Oranization value, or have a sponsor alue in Org so we can connect the two */
  db.query(
    `INSERT INTO Point_Change_History (Driver_ID, Organization_ID, Point_Change_Date, Point_Change_Value, Point_Change_Reason)
      VALUES (?, ?, ?, ?, ?)`[
      (driverID, organizationID, date, pointChange, reason)
    ],
    (err, res) => {
      console.log(err);
    }
  );
});

/*
  Updates a driver/sponsor's email
  Requires: newEmail, isDriver, ID
*/
app.post("/update_profile_email", (req, res) => {
  const newEmail = req.body.newEmail;
  const isDriver = req.body.isDriver;
  const ID = req.body.ID;

  if (isDriver) {
    db.query(
      `UPDATE Driver
      SET Driver_Email = ?
      WHERE Driver_ID = ?`,
      [newEmail, ID],
      (err, res) => {
        console.log(err);
      }
    );
  } else {
    db.query(
      `UPDATE Sponsor
      SET Sponsor_Email = ?
      WHERE Sponsor_ID = ?`,
      [newEmail, ID],
      (err, res) => {
        console.log(err);
      }
    );
  }
});

/*
  Updates a driver/sponsor's first name
  Requires: newFirstName, isDriver, ID
*/
app.post("/update_profile_first_name", (req, res) => {
  const newFirstName = req.body.newFirstName;
  const isDriver = req.body.isDriver;
  const ID = req.body.ID;

  if (isDriver) {
    db.query(
      `UPDATE Driver
      SET Driver_First_Name = ?
      WHERE Driver_ID = ?`,
      [newFirstName, ID],
      (err, res) => {
        console.log(err);
      }
    );
  } else {
    db.query(
      `UPDATE Sponsor
      SET Sponsor_First_Name = ?
      WHERE Sponsor_ID = ?`,
      [newFirstName, ID],
      (err, res) => {
        console.log(err);
      }
    );
  }
});

/*
  Updates a driver/sponsor's last name
  Requires: newLastName, isDriver, ID
*/
app.post("/update_profile_last_name", (req, res) => {
  const newLastName = req.body.newLastName;
  const isDriver = req.body.isDriver;
  const ID = req.body.ID;

  if (isDriver) {
    db.query(
      `UPDATE Driver
      SET Driver_Last_Name = ?
      WHERE Driver_ID = ?`,
      [newLastName, ID],
      (err, res) => {
        console.log(err);
      }
    );
  } else {
    db.query(
      `UPDATE Sponsor
      SET Sponsor_Last_Name = ?
      WHERE Sponsor_ID = ?`,
      [newLastName, ID],
      (err, res) => {
        console.log(err);
      }
    );
  }
});

/*
  Removes a driver/sponsor from the db
  Requires: isDriver, ID
*/
app.post("/remove_profile", (req, res) => {
  const isDriver = req.body.isDriver;
  const ID = req.body.ID;

  if (isDriver) {
    db.query(
      `DELETE FROM Driver
      WHERE Driver_ID = ?`,
      [ID],
      (err, res) => {
        console.log(err);
      }
    );
  } else {
    db.query(
      `DELETE FROM Sponsor
      WHERE Sponsor_ID = ?`,
      [newLastName, ID],
      (err, res) => {
        console.log(err);
      }
    );
  }
});

/*
  Returns all drivers with given organizationID
  Requires: organizationID
  How to receive data: fetch("/get_time").then(r => r.json()).then(data => { ... });
*/
app.get("/get_drivers", (req, res) => {
  const ID = req.body.organizationID;

  db.query(
    `SELECT * FROM Driver
      WHERE Organization_ID = ?`,
    [organizationID],
    (err, rows, fields) => {
      console.log(err);
      res.json(rows);
    }
  );
});

app.post("/login_driver", (req, res) => {
  const Email = req.body.email;
  const Password = req.body.password;

  db.query(
    `SELECT * FROM Driver
      WHERE Driver_Email = ?
      AND Driver_Password = ?`,
    [Email, Password],
    (err, rows, fields) => {
      if (err) { res.send({err: err}) }
      else if (rows) {
        res.send(rows)
      } else {
        res.send({message: "Incorrect email / password combination."})
      }
    }
  );
});

app.post("/login_sponsor", (req, res) => {
  const Email = req.body.email;
  const Password = req.body.password;

  db.query(
    `SELECT * FROM Sponsor
      WHERE Sponsor_Email = ?
      AND Sponsor_Password = ?`,
    [Email, Password],
    (err, rows, fields) => {
      if (err) { res.send({err: err}) }
      else if (rows) {
        res.send(rows)
      } else {
        res.send({message: "Incorrect email / password combination."})
      }
    }
  );
});

app.post("/update_driver", (req, res) => {
  const Email = req.body.email;
  const FirstName = req.body.first;
  const LastName = req.body.last;
  const City = req.body.city;
  const Address = req.body.address;
  const State = req.body.state;
  const Zip = req.body.zip;
  const ID = req.body.id;

  db.query(
    `UPDATE Driver
      SET Driver_Email = ?,
      Driver_First_Name = ?,
      Driver_Last_Name = ?,
      Driver_City = ?,
      Driver_Address = ?,
      Driver_State = ?,
      Driver_Zip = ?
      WHERE Driver_ID = ?`,
    [Email, FirstName, LastName, City, Address, State, Zip, ID],
    (err, rows, fields) => {
      if (err) { res.send({err: err}) }
      else if (rows) {
        res.send(rows)
      } else {
        res.send({message: "meh."})
      }
    }
  );
});

app.post("/update_sponsor", (req, res) => {
  const Email = req.body.email;
  const FirstName = req.body.first;
  const LastName = req.body.last;
  const ID = req.body.id;

  db.query(
    `UPDATE Sponsor
      SET Sponsor_Email = ?,
      Sponsor_First_Name = ?,
      Sponsor_Last_Name = ?
      WHERE Sponsor_ID = ?`,
    [Email, FirstName, LastName, ID],
    (err, rows, fields) => {
      if (err) { res.send({err: err}) }
      else if (rows) {
        res.send(rows)
      } else {
        res.send({message: "meh."})
      }
    }
  );
});

app.post("/create_application", (req, res) => {
  const D_ID = req.body.driver_id;
  const O_ID = req.body.org_id;
  const date = req.body.date;
  const status = req.body.status;
  const reason = req.body.reason;

  db.query(
    `INSERT INTO Application (Driver_ID, Organization_ID, Application_Date, 
      Application_Status, Application_Reason),
      VALUES (?, ?, ?, ?, ?)`,
      [D_ID,O_ID,date,status,reason],
      (err, res) => {
        console.log(err);
      }
  );
});

app.get("/application/driver_id", (req,res) => {
  const ID = req.body.id;

  db.query(
    `SELECT * FROM Application
    WHERE Driver_ID = ?`, 
    [ID],
    (err, rows, fields) => {
      console.log(err);
      res.json(rows);
    }
  );
});

app.get("/point_history", (req,res) => {
  const ID = req.body.id;
  
  db.query(
    `SELECT * FROM Point_Change_History
    WHERE Driver_ID = ?`, 
    [ID],
    (err, rows, fields) => {
      console.log(err);
      res.json(rows);
    }
  );
})

app.post("/application_decision", (req, res) => {
  const ID = req.body.id;
  const status = req.body.status;

  db.query(
    `UPDATE Application
    SET Application_Status = ?,
    WHERE Driver_ID = ?`,
    [status, reason, ID],
    (err, rows, fields) => {
      console.log(err);
      res.json(rows);
    } 

  )
})

app.post("/delete_sponsor", (req,res) => {
  const id = req.body.id;

  db.query(
    `DELETE Sponsor
    WHERE idSponsor = ?`,
    [id],
    (err, rows, fields) => {
      console.log(err);
      res.json(rows);
    } 
  )
})

app.post("/delete_driver", (req,res) => {
  const id = req.body.id;

  db.query(
    `DELETE Driver
    WHERE idDriver = ?`,
    [id],
    (err, rows, fields) => {
      console.log(err);
      res.json(rows);
    } 
  )
})

app.post("/dummy_driver_add", (req,res) => {
  const email = "Dummy Driver";
  const password = "Dummy Driver";
  const firstName = "Dummy Driver";
  const lastName = "Dummy Driver";
  const address = "Dummy Driver";
  const state = "Dummy Driver";
  const city = "Dummy Driver";
  const zip = "Dummy Driver";
  const phone = "Dummy Driver";

  db.query(
    "INSERT INTO Driver (Driver_First_Name, Driver_Last_Name, Driver_Email, Driver_Address, Driver_State, Driver_City, Driver_Zip, Driver_Phone_Number, Driver_Password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [firstName, lastName, email, address, state, city, zip, phone, password],
      (err, res) => {
        console.log(err);
      }
    );
})

app.post("/delete_dummy", (req,res) => {
  const email = "Dummy Driver";

  db.query(
    `DELETE Driver
    WHERE Driver_Email = ?`,
    [email],
    (err, rows, fields) => {
      console.log(err);
      res.json(rows);
    } 
  )
})

app.listen(3001, () => {
  console.log("Listening for requests...");
});