const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/welcome", (req, res) => {
  res.send({
    token: "test123",
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
app.post("/update_driver_points1", (req, res) => {
  const pointChange = req.body.pointChange;
  const driverID = req.body.driverID;
  const organizationID = req.body.organizationID;
  const date = req.body.date;
  const reason = req.body.reason;

  db.query(
    `UPDATE Driver 
      SET Driver_Points1 = Driver_Points1 + ?
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
app.post("/get_drivers", (req, res) => {
  const ID1 = req.body.organizationID1;
  const ID2 = req.body.organizationID2;
  const ID3 = req.body.organizationID3;

  db.query(
    `SELECT * FROM Driver
      WHERE Organization_ID1 = ?
      OR Organization_ID2 = ?
      OR Organization_ID3 = ?`,
    [ID1, ID2, ID3],
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
      if (err) {
        res.send({ err: err });
      } else if (rows) {
        //logging login attempt
        if (rows.length != 0) {
          //login attempt successful
          db.query(
            `INSERT INTO Login_Attempt (Login_Attempt_Email, Login_Attempt_Status, Login_Attempt_Date)
                  VALUES (?, "successful", NOW())`,
            [Email],
            (err, res) => {
              console.log(err);
            }
          );
        }
        res.send(rows);
      } else {
        //res.send({ message: "Incorrect email / password combination." });
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
      if (err) {
        res.send({ err: err });
      } else if (rows) {
        //logging login attempt
        if (rows.length == 0) {
          //login attempt unsuccessful
          db.query(
            `INSERT INTO Login_Attempt (Login_Attempt_Email, Login_Attempt_Status, Login_Attempt_Date)
                  VALUES (?, "unsuccessful", NOW())`,
            [Email],
            (err, res) => {
              console.log(err);
            }
          );
        } else {
          //login attempt successful
          db.query(
            `INSERT INTO Login_Attempt (Login_Attempt_Email, Login_Attempt_Status, Login_Attempt_Date)
                  VALUES (?, "successful", NOW())`,
            [Email],
            (err, res) => {
              console.log(err);
            }
          );
        }

        res.send(rows);
      } else {
        //res.send({ message: "Incorrect email / password combination." });
      }
    }
  );
});

app.post("/get_login_attempts", (req, res) => {
  const Email = req.body.email;

  db.query(
    `SELECT * FROM Login_Attempt
      WHERE Login_Attempt_Email = ?`,
    [Email],
    (err, rows, fields) => {
      console.log(err);
      res.json(rows);
    }
  );
});

app.post("/update_driver", (req, res) => {
  const Email = req.body.email;
  const FirstName = req.body.first;
  const LastName = req.body.last;
  const ID = req.body.id;

  db.query(
    `UPDATE Driver
      SET Driver_Email = ?,
      Driver_First_Name = ?,
      Driver_Last_Name = ?,
      Driver_City = ?,
      Driver_Address = ?,
      Driver_State = ?,
      Driver_Zip = ?,
      WHERE Driver_ID = ?`,
    [Email, FirstName, LastName, ID],
    (err, rows, fields) => {
      if (err) {
        res.send({ err: err });
      } else if (rows) {
        res.send(rows);
      } else {
        res.send({ message: "meh." });
      }
    }
  );
});

app.post("/create_application", (req, res) => {
  const D_ID = req.body.driver_id;
  const Organization_Name = req.body.org_name;
  const date = req.body.date;
  const status = req.body.status;
  const reason = req.body.reason;

  db.query(
    `INSERT INTO Application (Driver_ID, Organization_Name, Application_Date, 
      Application_Status, Application_Reason)
      VALUES (?, ?, ?, ?, ?)`,
    [D_ID, Organization_Name, date, status, reason],
    (err, res) => {
      console.log(err);
    }
  );
});

app.get("/application/driver_id", (req, res) => {
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

app.get("/list_of_orgs", (req, res) => {
  db.query(`SELECT * FROM Organization`, (err, rows, fields) => {
    console.log(err);
    res.json(rows);
  });
});

app.get("/point_history", (req, res) => {
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
});

/*
  Returns a list of all Catalog_Item with given Organization_ID
  Requires: organizationID
*/
app.post("/get_catalog", (req, res) => {
  const organizationID = req.body.organizationID;

  db.query(
    `SELECT * FROM Catalog_Item
    WHERE Organization_ID = ?`,
    [organizationID],
    (err, rows, fields) => {
      console.log(err);
      res.json(rows);
    }
  );
});

/*
  Removes an Catalog_Item from a catalog
  Requires: catalogItemID
*/
app.post("/remove_catalog_item", (req, res) => {
  const catalogItemID = req.body.catalogItemID;
  db.query(
    `DELETE FROM Catalog_Item
      WHERE Catalog_Item_ID = ?`,
    [catalogItemID],
    (err, res) => {
      console.log(err);
    }
  );
});

app.post("/add_catalog_item", (req, res) => {
  const catalogItemName = req.body.catalogItemName;
  const catalogItemPrice = req.body.catalogItemPrice;
  const catalogItemInventory = req.body.catalogItemInventory;
  const organizationID = req.body.organizationID;

  db.query(
    `INSERT INTO Catalog_Item (Organization_ID, Catalog_Item_Name, Catalog_Item_Price, Catalog_Item_Inventory),
      VALUES (?, ?, ?, ?)`,
    [organizationID, catalogItemName, catalogItemPrice, catalogItemInventory],
    (err, rows, fields) => {
      console.log(err);
      res.json(rows);
    }
  );
});

app.post("/change_item_price", (req, res) => {
  const catalogItemPrice = req.body.catalogItemPrice;
  const catalogItemID = req.body.catalogItemID;

  db.query(
    `UPDATE Catalog_Item
    SET Catalog_Item_Price = ?,
    WHERE Catalog_Item_ID = ?`,
    [catalogItemPrice, catalogItemID],
    (err, res) => {
      console.log(err);
    }
  );
});

app.post("/get_org1", (req, res) => {
  const org_ID = req.body.org1;

  db.query(
    `SELECT * FROM Organization
    WHERE Organization_ID = ?`,
    [org_ID],
    (err, rows, fields) => {
      console.log(err);
      res.json(rows);
    }
  );
});

app.post("/get_org2", (req, res) => {
  const org_ID = req.body.org2;

  db.query(
    `SELECT * FROM Organization
    WHERE Organization_ID = ?`,
    [org_ID],
    (err, rows, fields) => {
      console.log(err);
      res.json(rows);
    }
  );
});

app.post("/get_org3", (req, res) => {
  const org_ID = req.body.org3;

  db.query(
    `SELECT * FROM Organization
    WHERE Organization_ID = ?`,
    [org_ID],
    (err, rows, fields) => {
      console.log(err);
      res.json(rows);
    }
  );
});

app.listen(3001, () => {
  console.log("Listening for requests...");
});
