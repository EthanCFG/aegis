const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const axios = require("axios");

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
  multipleStatements: true,
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/etsy", async (req, res) => {
  const organizationID = req.body.organizationID;
  const listingID = req.body.listingID;

  const url = "https://openapi.etsy.com/v3/application/listings/" + listingID;
  const response = await axios.get(url, {
    headers: {
      "x-api-key": "4rskcd32mgmwvkcmibb5aqfy",
    },
  });

  const shopID = response.data.shop_id;
  var url2 =
    "https://openapi.etsy.com/v3/application/shops/" +
    shopID +
    "/listings/" +
    listingID +
    "/images";

  const imageResponse = await axios.get(url2, {
    headers: {
      "x-api-key": "4rskcd32mgmwvkcmibb5aqfy",
    },
  });

  const catalogItemName = response.data.title;
  const catalogItemListingURL = response.data.url;
  const catalogItemImageURL = imageResponse.data.results[0].url_fullxfull;
  const catalogItemPrice = response.data.price.amount;
  const catalogItemInventory = response.data.quantity;

  console.log("Title: " + catalogItemName);
  console.log("Url: " + catalogItemListingURL);
  console.log("Image_Url: " + catalogItemImageURL);
  console.log("Price: " + catalogItemPrice);
  console.log("Inventory: " + catalogItemInventory);

  db.query(
    `INSERT INTO Catalog_Item (Organization_ID, Catalog_Item_Name, Catalog_Item_Price, Catalog_Item_Inventory, Catalog_Item_Listing_URL, Catalog_Item_Image_URL)
      VALUES (?, ?, ?, ?, ?, ?)`,
    [
      organizationID,
      catalogItemName,
      catalogItemPrice,
      catalogItemInventory,
      catalogItemListingURL,
      catalogItemImageURL,
    ],
    (err, rows, fields) => {
      console.log(err);
      res.json(rows);
    }
  );
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
app.post("/add_driver_points1", (req, res) => {
  const pointChange = req.body.pointChange;
  const driverID = req.body.driverID;
  const organizationID = req.body.organizationID;
  const reason = req.body.reason;
  const date = req.body.date;

  console.log(
    "Adding " + pointChange + " to Driver: " + driverID + "'s Driver_Points1"
  );

  db.query(
    `UPDATE Driver 
      SET Driver_Points1 = Driver_Points1 + ?
      WHERE Driver_ID = ?`,
    [pointChange, driverID],
    (err, res) => {
      console.log(err);
    }
  );
  db.query(
    `INSERT INTO Point_Change_History (Driver_ID, Organization_ID, Point_Change_Date, Point_Change_Value, Point_Change_Reason)
      VALUES (?, ?, NOW(), ?, ?)`,
    [driverID, organizationID, pointChange, reason],
    (err, res) => {
      console.log(err);
    }
  );

  const messageText =
    pointChange +
    " has been added/removed from your point balance for the following reason: " +
    reason;
  const messageType = "Point Change";
  db.query(
    `INSERT INTO Message (Driver_ID, Message_Text, Message_Type, Message_Time)
      VALUES (?, ?, ?, NOW())`,
    [driverID, messageText, messageType],
    (err, rows, fields) => {
      console.log(err);
    }
  );
});

app.post("/add_driver_points2", (req, res) => {
  const pointChange = req.body.pointChange;
  const driverID = req.body.driverID;
  const organizationID = req.body.organizationID;
  const reason = req.body.reason;
  const date = req.body.date;

  console.log(
    "Adding " + pointChange + " to Driver: " + driverID + "'s Driver_Points1"
  );

  db.query(
    `UPDATE Driver 
      SET Driver_Points2 = Driver_Points2 + ?
      WHERE Driver_ID = ?`,
    [pointChange, driverID],
    (err, res) => {
      console.log(err);
    }
  );
  db.query(
    `INSERT INTO Point_Change_History (Driver_ID, Organization_ID, Point_Change_Date, Point_Change_Value, Point_Change_Reason)
      VALUES (?, ?, NOW(), ?, ?)`,
    [driverID, organizationID, pointChange, reason],
    (err, res) => {
      console.log(err);
    }
  );

  const messageText =
    pointChange +
    " has been added/removed from your point balance for the following reason: " +
    reason;
  const messageType = "Point Change";
  db.query(
    `INSERT INTO Message (Driver_ID, Message_Text, Message_Type, Message_Time)
      VALUES (?, ?, ?, NOW())`,
    [driverID, messageText, messageType],
    (err, rows, fields) => {
      console.log(err);
    }
  );
});

app.post("/add_driver_points3", (req, res) => {
  const pointChange = req.body.pointChange;
  const driverID = req.body.driverID;
  const organizationID = req.body.organizationID;
  const reason = req.body.reason;
  const date = req.body.date;

  console.log(
    "Adding " + pointChange + " to Driver: " + driverID + "'s Driver_Points1"
  );

  db.query(
    `UPDATE Driver 
      SET Driver_Points3 = Driver_Points3 + ?
      WHERE Driver_ID = ?`,
    [pointChange, driverID],
    (err, res) => {
      console.log(err);
    }
  );
  db.query(
    `INSERT INTO Point_Change_History (Driver_ID, Organization_ID, Point_Change_Date, Point_Change_Value, Point_Change_Reason)
      VALUES (?, ?, NOW(), ?, ?)`,
    [driverID, organizationID, pointChange, reason],
    (err, res) => {
      console.log(err);
    }
  );

  const messageText =
    pointChange +
    " has been added/removed from your point balance for the following reason: " +
    reason;
  const messageType = "Point Change";
  db.query(
    `INSERT INTO Message (Driver_ID, Message_Text, Message_Type, Message_Time)
      VALUES (?, ?, ?, NOW())`,
    [driverID, messageText, messageType],
    (err, rows, fields) => {
      console.log(err);
    }
  );
});

app.post("/add_driver_points_recurring", (req, res) => {
  const pointChange = Number(req.body.pointChange);
  const driverID = req.body.driverID;
  const organizationID = req.body.organizationID;
  const org123 = req.body.org123;
  const schedule = req.body.schedule;
  const reason = req.body.reason;

  db.query(
    `DELIMITER $$ 
    CREATE EVENT recurring_? 
    ON SCHEDULE EVERY 1 ? 
    STARTS NOW() 
    DO 
    BEGIN 
      UPDATE Driver SET Driver_Points? = Driver_Points? + ? WHERE Driver_ID = ?; 
    END$$ 
    DELIMITER ;`,
    [driverID, schedule, org123, org123, pointChange, driverID],
    (err, res) => {
      console.log(err);
    }
  );
  // db.query(
  //   `DELIMITER $$
  //   CREATE EVENT recurring__?
  //   ON SCHEDULE EVERY '1' ?
  //   STARTS NOW()
  //   DO
  //   BEGIN
  //   INSERT INTO Point_Change_History (Driver_ID, Organization_ID, Point_Change_Date, Point_Change_Value, Point_Change_Reason) VALUES (?, ?, NOW(), ?, ?)
  //   END$$
  //   DELIMITER ;`,
  //   [driverID, schedule, driverID, organizationID, pointChange, reason],
  //   (err, res) => {
  //     console.log(err);
  //   }
  // );
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
app.post("/delete_driver", (req, res) => {
  const ID = req.body.id;

  db.query(
    `DELETE FROM Driver
      WHERE Driver_ID = ?`,
    [ID],
    (err, res) => {
      console.log(err);
    }
  );
});

app.post("/delete_sponsor_user", (req, res) => {
  const ID = req.body.id;

  db.query(
    `DELETE FROM Sponsor
      WHERE Sponsor_ID = ?`,
    [ID],
    (err, res) => {
      console.log(err);
    }
  );
});

/*
  Returns all drivers with given organizationID
  Requires: organizationID
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

/*
  Returns all drivers with given organizationID
  Requires: organizationID
*/
app.post("/get_drivers_one_ID", (req, res) => {
  const ID = req.body.organizationID;

  db.query(
    `SELECT * FROM Driver
      WHERE Organization_ID1 = ?
      OR Organization_ID2 = ?
      OR Organization_ID3 = ?`,
    [ID, ID, ID],
    (err, rows, fields) => {
      console.log(err);
      res.json(rows);
    }
  );
});

app.post("/get_all_drivers", (req, res) => {
  db.query(`SELECT * FROM Driver`, (err, rows, fields) => {
    console.log(err);
    res.json(rows);
  });
});

app.post("/get_all_sponsors", (req, res) => {
  db.query(`SELECT * FROM Sponsor`, (err, rows, fields) => {
    console.log(err);
    res.json(rows);
  });
});

app.post("/get_driver_data", (req, res) => {
  const ID = req.body.driver_id;

  db.query(
    `SELECT * FROM Driver
    WHERE Driver_ID = ?`,
    [ID],
    (err, rows, fields) => {
      console.log(err);
      res.json(rows);
    }
  );
});

app.post("/get_sponsor_data", (req, res) => {
  const ID = req.body.sponsor_id;

  db.query(
    `SELECT * FROM Sponsor
    WHERE Sponsor_ID = ?`,
    [ID],
    (err, rows, fields) => {
      console.log(err);
      res.json(rows);
    }
  );
});

app.post("/accept_driver_application", (req, res) => {
  const ORG1 = req.body.org_id1;
  const ORG2 = req.body.org_id2;
  const ORGANIZATION = req.body.current_organization;
  const ID = req.body.driver_id;

  if (ORG1 == null) {
    db.query(
      `UPDATE Driver
      SET Organization_ID1 = ?,
      Driver_Points1 = 0
      WHERE Driver_ID = ?`,
      [ORGANIZATION, ID],
      (err, rows) => {
        if (err) {
          res.send({ err: err });
        } else if (rows) {
          res.send(rows);
        } else {
          res.send({ message: "meh." });
        }
      }
    );
  } else if (ORG2 == null) {
    db.query(
      `UPDATE Driver
      SET Organization_ID2 = ?,
      Driver_Points2 = 0
      WHERE Driver_ID = ?`,
      [ORGANIZATION, ID],
      (err, rows) => {
        if (err) {
          res.send({ err: err });
        } else if (rows) {
          res.send(rows);
        } else {
          res.send({ message: "meh." });
        }
      }
    );
  } else {
    db.query(
      `UPDATE Driver
      SET Organization_ID3 = ?,
      Driver_Points3 = 0
      WHERE Driver_ID = ?`,
      [ORGANIZATION, ID],
      (err, rows) => {
        if (err) {
          res.send({ err: err });
        } else if (rows) {
          res.send(rows);
        } else {
          res.send({ message: "meh." });
        }
      }
    );
  }
});

app.post("/remove_driver_application", (req, res) => {
  const ID = req.body.driver_id;
  const ORG = req.body.org_name;

  db.query(
    `DELETE FROM Application
      WHERE Driver_ID = ?
      AND Organization_Name = ?`,
    [ID, ORG],
    (err, rows) => {
      if (err) {
        res.send({ err: err });
      } else if (rows) {
        res.send(rows);
      }
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
        res.send(rows);
      } else {
        //res.send({ message: "Incorrect email / password combination." });
      }
    }
  );
});

app.post("/login_admin", (req, res) => {
  const Email = req.body.email;
  const Password = req.body.password;

  db.query(
    `SELECT * FROM Admin
      WHERE Admin_Email = ?
      AND Admin_Password = ?`,
    [Email, Password],
    (err, rows, fields) => {
      if (err) {
        res.send({ err: err });
      } else if (rows) {
        res.send(rows);
      } else {
        //res.send({ message: "Incorrect email / password combination." });
      }
    }
  );
});

app.post("/log_unsuccessful_login", (req, res) => {
  const Email = req.body.email;

  db.query(
    `INSERT INTO Login_Attempt (Login_Attempt_Email, Login_Attempt_Status, Login_Attempt_Date)
          VALUES (?, "unsuccessful", NOW())`,
    [Email],
    (err, res) => {
      console.log(err);
    }
  );
});

app.post("/log_successful_login", (req, res) => {
  const Email = req.body.email;

  db.query(
    `INSERT INTO Login_Attempt (Login_Attempt_Email, Login_Attempt_Status, Login_Attempt_Date)
      VALUES (?, "successful", NOW())`,
    [Email],
    (err, res) => {
      console.log(err);
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

app.post("/get_all_logins", (req, res) => {
  db.query(`SELECT * FROM Login_Attempt`, (err, rows, fields) => {
    console.log(err);
    res.json(rows);
  });
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

app.post("/sponsor_application_list", (req, res) => {
  const Name = req.body.org_name;

  db.query(
    `SELECT * FROM Application
    WHERE Organization_Name = ?`,
    [Name],
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

app.post("/point_history", (req, res) => {
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
  db.query("SET FOREIGN_KEY_CHECKS = 0");
  db.query(
    `DELETE FROM Catalog_Item WHERE Catalog_Item_ID = ?`,
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
  const catalogItemListingURL = req.body.catalogItemListingURL;

  db.query(
    `INSERT INTO Catalog_Item (Organization_ID, Catalog_Item_Name, Catalog_Item_Price, Catalog_Item_Inventory, Catalog_Item_Listing_URL)
      VALUES (?, ?, ?, ?)`,
    [
      organizationID,
      catalogItemName,
      catalogItemPrice,
      catalogItemInventory,
      catalogItemListingURL,
    ],
    (err, rows, fields) => {
      console.log(err);
      res.json(rows);
    }
  );
});

app.post("/change_item_price", (req, res) => {
  const catalogItemPrice = req.body.catalogItemPrice;
  const catalogItemID = req.body.catalogItemID;

  console.log(catalogItemPrice);
  console.log(catalogItemID);

  db.query(
    `UPDATE Catalog_Item
    SET Catalog_Item_Price = ?
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

app.post("/get_cart", (req, res) => {
  const driver_ID = req.body.driverID;

  db.query(
    `SELECT * FROM Purchase
    WHERE Driver_ID = ?`,
    [driver_ID],
    (err, rows, fields) => {
      console.log(err);
      res.json(rows);
    }
  );
});

app.post("/remove_sponsor1_from_driver", (req, res) => {
  const ID = req.body.driver_id;

  db.query(
    `UPDATE Driver 
    SET Organization_ID1 = null,
    Driver_Points1 = null
    WHERE Driver_ID = ?`,
    [ID],
    (err, rows, fields) => {
      console.log(err);
      res.json(rows);
    }
  );
});

app.post("/add_to_cart", (req, res) => {
  const catalogItemID = req.body.catalogItemID;
  const driverID = req.body.driverID;
  const itemInventory = req.body.itemInventory;
  const purchasePrice = req.body.purchasePrice;
  const purchaseName = req.body.purchaseName;
  const purchaseStatus = "In cart";

  db.query(
    `INSERT INTO Purchase (Driver_ID, Catalog_Item_ID, Purchase_Status, Purchase_Time, Purchase_Price, Purchase_Name)
      VALUES (?, ?, ?, NOW(), ?, ?)`,
    [driverID, catalogItemID, purchaseStatus, purchasePrice, purchaseName],
    (err, rows, fields) => {
      console.log(err);
    }
  );

  db.query(
    `UPDATE Catalog_Item
    SET Catalog_Item_Inventory = ?
    WHERE Catalog_Item_ID = ?`,
    [itemInventory - 1, catalogItemID],
    (err, res) => {
      console.log(err);
    }
  );
});

app.post("/cancel_purchase", (req, res) => {
  const purchaseID = req.body.purchaseID;
  const driverID = req.body.driverID;
  const purchasePrice = req.body.purchasePrice;

  db.query(
    `UPDATE Purchase SET Purchase_Status = "Cancelled" WHERE Purchase_ID = ?`,
    [purchaseID],
    (err, rows, fields) => {
      console.log(err);
    }
  );
});

app.post("/remove_sponsor2_from_driver", (req, res) => {
  const ID = req.body.driver_id;

  db.query(
    `UPDATE Driver 
    SET Organization_ID2 = null,
    Driver_Points2 = null
    WHERE Driver_ID = ?`,
    [ID],
    (err, rows, fields) => {
      console.log(err);
      res.json(rows);
    }
  );
});

app.post("/remove_sponsor3_from_driver", (req, res) => {
  const ID = req.body.driver_id;

  db.query(
    `UPDATE Driver 
    SET Organization_ID3 = null,
    Driver_Points3 = null
    WHERE Driver_ID = ?`,
    [ID],
    (err, rows, fields) => {
      console.log(err);
      res.json(rows);
    }
  );
});

app.post("/get_messages", (req, res) => {
  const driver_ID = req.body.driverID;

  db.query(
    `SELECT * FROM Message
    WHERE Driver_ID = ?`,
    [driver_ID],
    (err, rows, fields) => {
      console.log(err);
      res.json(rows);
    }
  );
});

app.post("/send_message", (req, res) => {
  const driver_ID = req.body.driverID;
  const messageText = req.body.messageText;
  const messageType = req.body.messageType;

  db.query(
    `INSERT INTO Message (Driver_ID, Message_Text, Message_Type, Message_Time)
      VALUES (?, ?, ?, NOW())`,
    [driver_ID, messageText, messageType],
    (err, rows, fields) => {
      console.log(err);
    }
  );
});

app.post("/get_sponsorID", (req, res) => {
  const email = req.body.email;
  db.query(
    `SELECT * FROM Sponsor
    WHERE Sponsor_Email = ?`,
    [email],
    (err, rows, fields) => {
      console.log(err);
      res.json(rows);
    }
  );
});

app.post("/get_driverID", (req, res) => {
  const email = req.body.email;
  db.query(
    `SELECT * FROM Driver
    WHERE Driver_Email = ?`,
    [email],
    (err, rows, fields) => {
      console.log(err);
      res.json(rows);
    }
  );
});

app.post("/reset_password_driver", (req, res) => {
  const driver_ID = req.body.driverID;
  const email = req.body.email;
  const type = req.body.type;
  const newPassword = req.body.newPassword;

  db.query(
    `INSERT INTO Password_Change (Driver_ID, Password_Change_Date, Password_Change_Email, Password_Change_Type, Password_New)
      VALUES (?, NOW(), ?, ?, ?)`,
    [driver_ID, email, type, newPassword],
    (err, rows, fields) => {
      console.log(err);
    }
  );

  db.query(
    `UPDATE Driver 
    SET Driver_Password = ?
    WHERE Driver_ID = ?`,
    [newPassword, driver_ID],
    (err, rows, fields) => {
      console.log(err);
      res.json(rows);
    }
  );
});

app.post("/reset_password_sponsor", (req, res) => {
  const sponsor_ID = req.body.sponsorID;
  const email = req.body.email;
  const type = req.body.type;
  const newPassword = req.body.newPassword;

  db.query(
    `INSERT INTO Password_Change (Sponsor_ID, Password_Change_Date, Password_Change_Email, Password_Change_Type, Password_New)
      VALUES (?, NOW(), ?, ?, ?)`,
    [sponsor_ID, email, type, newPassword],
    (err, rows, fields) => {
      console.log(err);
    }
  );

  db.query(
    `UPDATE Sponsor 
    SET Sponsor_Password = ?
    WHERE Sponsor_ID = ?`,
    [newPassword, sponsor_ID],
    (err, rows, fields) => {
      console.log(err);
      res.json(rows);
    }
  );
});

app.listen(3001, () => {
  console.log("Listening for requests...");
});
