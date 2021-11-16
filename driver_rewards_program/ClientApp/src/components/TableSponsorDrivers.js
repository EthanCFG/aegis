import React, { Component, useState } from "react";
import "bulma/css/bulma.min.css";
import { Link } from "react-router-dom";
import TableData from "./TableData";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

const fetch_drivers = async () => {
  const drivers_list_response = await axios.post(
    "http://localhost:3001/get_drivers",
    {
      organizationID1: localStorage.getItem("sponsorid"),
      organizationID2: localStorage.getItem("sponsorid"),
      organizationID3: localStorage.getItem("sponsorid"),
    }
  );

  console.log(drivers_list_response);
  return drivers_list_response;
};

function TableSponsorDrivers(props) {
  const [showAddModal, setShowAddModal] = useState(false);

  const [showAddRecurringModal, setShowAddRecurringModal] = useState(false);

  const [showSubModal, setShowSubModal] = useState(false);

  const [activeDriverID, setActiveDriverID] = useState();

  const [pointsToAdd, setPointsToAdd] = useState();

  const [pointsToAddRecurring, setPointsToAddRecurring] = useState();

  const [reasonRecurring, setReasonRecurring] = useState();

  const [scheduleRecurring, setScheduleRecurring] = useState();

  const [Organization, setOrganization] = useState();

  const handleCloseAdd = () => setShowAddModal(false);
  const handleCloseAddRecurring = () => setShowAddRecurringModal(false);

  const addPoints = () => {
    console.log(Organization);
    if (Organization == 1) {
      localStorage.setItem(
        "activepoints",
        localStorage.getItem("activepoints") + pointsToAdd
      );

      axios.post("http://localhost:3001/add_driver_points1", {
        pointChange: pointsToAdd,
        driverID: activeDriverID,
        organizationID: localStorage.getItem("sponsorid"),
        date: "tuesday",
        reason: "some reason",
      });
    } else if (Organization == 2) {
      localStorage.setItem(
        "activepoints",
        localStorage.getItem("activepoints") + pointsToAdd
      );

      axios.post("http://localhost:3001/add_driver_points2", {
        pointChange: pointsToAdd,
        driverID: activeDriverID,
        organizationID: localStorage.getItem("sponsorid"),
        date: "tuesday",
        reason: "some reason",
      });
    } else if (Organization == 3) {
      localStorage.setItem(
        "activepoints",
        localStorage.getItem("activepoints") + pointsToAdd
      );

      axios.post("http://localhost:3001/add_driver_points3", {
        pointChange: pointsToAdd,
        driverID: activeDriverID,
        organizationID: localStorage.getItem("sponsorid"),
        date: "tuesday",
        reason: "some reason",
      });
    }
  };

  //doesn't update activepoints
  const addPointsRecurring = async () => {
    console.log("Active Org: " + localStorage.getItem("orgactive_ID"));
    const catalog_response = await axios.post(
      "http://localhost:3001/add_driver_points_recurring",
      {
        pointChange: pointsToAddRecurring,
        driverID: activeDriverID,
        organizationID: Organization,
        //not correct but it works
        org123: Organization,
        schedule: scheduleRecurring,
        reason: reasonRecurring,
      }
    );
  };

  return (
    <div class="scroll-table">
      <table class="table">
        <div>
          <Modal show={showAddModal} onHide={handleCloseAdd}>
            <Modal.Header closeButton>
              <Modal.Title>Add Points to Driver #{activeDriverID}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Enter how many points to add..."
                  onChange={(e) => setPointsToAdd(e.target.value)}
                ></input>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseAdd}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  addPoints();
                  handleCloseAdd();
                }}
              >
                Add Points
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={showAddRecurringModal} onHide={handleCloseAddRecurring}>
            <Modal.Header closeButton>
              <Modal.Title>
                Add Recurring Points to Driver #{activeDriverID}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div class="control">
                <input
                  class="input"
                  type="numeric"
                  placeholder="Enter how many points to add..."
                  onChange={(e) => setPointsToAddRecurring(e.target.value)}
                ></input>
                <input
                  class="input"
                  type="text"
                  placeholder="Enter a reason..."
                  onChange={(e) => setReasonRecurring(e.target.value)}
                ></input>
                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-item">
                    {scheduleRecurring
                      ? "Every " + scheduleRecurring
                      : "Schedule"}
                  </a>
                  <div class="navbar-dropdown">
                    <a
                      class="navbar-item"
                      onClick={() => {
                        setScheduleRecurring("Day");
                      }}
                    >
                      Day
                    </a>
                    <a
                      class="navbar-item"
                      onClick={() => {
                        setScheduleRecurring("Week");
                      }}
                    >
                      Week
                    </a>
                    <a
                      class="navbar-item"
                      onClick={() => {
                        setScheduleRecurring("Month");
                      }}
                    >
                      Month
                    </a>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseAddRecurring}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  addPointsRecurring();
                  handleCloseAddRecurring();
                }}
              >
                Add Points
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <thead>
          <tr>
            <th>Driver No.</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Points</th>
            <th>Add/Remove Points</th>
            <th>Add Recurring Points</th>
          </tr>
        </thead>
        <TableData
          setAddModal={setShowAddModal}
          setSubModal={setShowSubModal}
          setAddRecurringModal={setShowAddRecurringModal}
          setDriver={setActiveDriverID}
          setOrg={setOrganization}
        ></TableData>
      </table>
    </div>
  );
}

export default TableSponsorDrivers;
