import React, { Component, useEffect, useState } from "react";
import "bulma/css/bulma.min.css";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class TablePointTrackingData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pointData: this.fetchPointData(),
      loading: true,
    };
    this.fetchPointData = this.fetchPointData.bind(this);
  }

  async fetchPointData() {
    const point_response = await axios.post(
      "http://localhost:3001/point_history",
      {
        id: localStorage.getItem("report_driverID"),
      }
    );
    console.log(point_response);
    this.setState({
      pointData: point_response.data.reverse(),
      loading: false,
    });
  }

  render() {
    if (this.state.loading) {
      return <tbody></tbody>;
    } else {
      return (
        <tbody>
          {this.state.pointData.map((item) => {
            const date = item.Point_Change_Date;
            const value = item.Point_Change_Value;
            const reason = item.Point_Change_Reason;
            return (
              <tr key={date}>
                <td>{date}</td>
                <td>{value}</td>
                <td>{reason}</td>
              </tr>
            );
          })}
        </tbody>
      );
    }
  }
}
