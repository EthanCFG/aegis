import React, { Component, useEffect, useState } from "react";
import "bulma/css/bulma.min.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

export default class TableDriverData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      driverData: this.fetchDriverData(),
      loading: true,
    };
    this.fetchDriverData = this.fetchDriverData.bind(this);
  }

  async fetchDriverData() {
    const driver_response = await axios.post(
      "http://localhost:3001/get_drivers_one_ID",
      {
        organizationID: localStorage.getItem("orgid"),
      }
    );
    console.log(driver_response);
    console.log(localStorage.getItem("orgid"));
    this.setState({
      driverData: driver_response.data.reverse(),
      loading: false,
    });
  }

  render() {
    if (this.state.loading) {
      return <tbody></tbody>;
    } else {
      return (
        <tbody>
          {this.state.driverData.map((item) => {
            const id = item.Driver_ID;
            const first = item.Driver_First_Name;
            const last = item.Driver_Last_Name;
            const email = item.Driver_Email;
            const point1 = item.Driver_Points1;
            const point2 = item.Driver_Points2;
            const point3 = item.Driver_Points3;
            var points = 0;
            const organizationID1 = item.Organization_ID1;
            const organizationID2 = item.Organization_ID2;
            const orgID = localStorage.getItem("orgid");
            if (organizationID1 == orgID) {
              points = point1;
            } else if (organizationID2 == orgID) {
              points = point2;
            } else {
              points = point3;
            }
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{first}</td>
                <td>{last}</td>
                <td>{email}</td>
                <td>{points}</td>
                <td>
                  <Link to="/sponsor_reports_detailed">
                    <button
                      class="btn-primary"
                      onClick={() =>
                        localStorage.setItem("report_driverID", id)
                      }
                    >
                      History
                    </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      );
    }
  }
}
